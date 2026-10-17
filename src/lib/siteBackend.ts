const SUPABASE_URL = 'https://gkylxuplxvauxejxeorn.supabase.co';
const SUPABASE_PUBLISHABLE_KEY = 'sb_publishable_9UFP10ZbqeK1t9tgjoDnpA_mCGcJ2OM';
const SESSION_KEY = 'cabana-admin-session-v1';

export interface AdminSession {
  access_token: string;
  refresh_token: string;
  expires_at?: number;
  user: { id: string; email?: string };
}

type JsonValue = Record<string, unknown> | unknown[];

async function request<T>(path: string, init: RequestInit = {}, token?: string): Promise<T> {
  const response = await fetch(`${SUPABASE_URL}${path}`, {
    ...init,
    headers: {
      apikey: SUPABASE_PUBLISHABLE_KEY,
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...init.headers,
    },
  });

  if (!response.ok) {
    const payload = await response.json().catch(() => null) as { message?: string; error_description?: string } | null;
    throw new Error(payload?.error_description || payload?.message || 'Não foi possível concluir a operação.');
  }

  if (response.status === 204) return undefined as T;
  return response.json() as Promise<T>;
}

export async function loginAdmin(email: string, password: string): Promise<AdminSession> {
  const session = await request<AdminSession>('/auth/v1/token?grant_type=password', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });
  localStorage.setItem(SESSION_KEY, JSON.stringify(session));
  return session;
}

export async function restoreAdminSession(): Promise<AdminSession | null> {
  const raw = localStorage.getItem(SESSION_KEY);
  if (!raw) return null;

  try {
    const session = JSON.parse(raw) as AdminSession;
    if (!session.refresh_token) return null;
    if (!session.expires_at || session.expires_at * 1000 > Date.now() + 60_000) return session;

    const refreshed = await request<AdminSession>('/auth/v1/token?grant_type=refresh_token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ refresh_token: session.refresh_token }),
    });
    localStorage.setItem(SESSION_KEY, JSON.stringify(refreshed));
    return refreshed;
  } catch {
    localStorage.removeItem(SESSION_KEY);
    return null;
  }
}

export async function logoutAdmin(session?: AdminSession | null): Promise<void> {
  if (session?.access_token) {
    await request('/auth/v1/logout', { method: 'POST' }, session.access_token).catch(() => undefined);
  }
  localStorage.removeItem(SESSION_KEY);
}

export async function loadPublishedContent<T>(): Promise<T | null> {
  const rows = await request<Array<{ content: T }>>('/rest/v1/site_sections?key=eq.main&select=content&limit=1');
  return rows[0]?.content ?? null;
}

export async function publishContent(content: JsonValue, session: AdminSession): Promise<void> {
  await request('/rest/v1/site_sections?on_conflict=key', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Prefer: 'resolution=merge-duplicates,return=minimal',
    },
    body: JSON.stringify({
      key: 'main',
      content,
      updated_at: new Date().toISOString(),
      updated_by: session.user.id,
    }),
  }, session.access_token);
}

function safeFileName(fileName: string): string {
  const extension = fileName.split('.').pop()?.toLowerCase() || 'jpg';
  const base = fileName
    .replace(/\.[^.]+$/, '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-zA-Z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
    .toLowerCase() || 'imagem';
  return `${base}-${Date.now()}.${extension}`;
}

export async function uploadSiteMedia(file: File, folder: string, session: AdminSession): Promise<string> {
  const path = `${folder}/${safeFileName(file.name)}`;
  await request(`/storage/v1/object/site-media/${encodeURI(path)}`, {
    method: 'POST',
    headers: {
      'Content-Type': file.type || 'application/octet-stream',
      'x-upsert': 'false',
    },
    body: file,
  }, session.access_token);
  return `${SUPABASE_URL}/storage/v1/object/public/site-media/${encodeURI(path)}`;
}

