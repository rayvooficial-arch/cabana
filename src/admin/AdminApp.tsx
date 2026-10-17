import React, { FormEvent, useEffect, useState } from 'react';
import {
  ArrowDown, ArrowLeft, ArrowUp, BedDouble, CheckCircle2, CircleDollarSign,
  Eye, ImagePlus, LayoutDashboard, Loader2, LogOut, PackageOpen, Save, Trash2,
} from 'lucide-react';
import { DEFAULT_SITE_CONTENT, SiteContent } from '../context/SiteContentContext';
import {
  AdminSession, loadPublishedContent, loginAdmin, logoutAdmin, publishContent,
  restoreAdminSession, uploadSiteMedia,
} from '../lib/siteBackend';

type Tab = 'inicio' | 'acomodacoes' | 'tarifas' | 'extras' | 'galerias';

const cloneDefaults = (): SiteContent => structuredClone(DEFAULT_SITE_CONTENT);
const asLines = (items?: string[]) => (items || []).join('\n');
const fromLines = (value: string) => value.split('\n').map((item) => item.trim()).filter(Boolean);

const Field: React.FC<React.InputHTMLAttributes<HTMLInputElement> & { label: string }> = ({ label, ...props }) => (
  <label className="block">
    <span className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-[#526048]">{label}</span>
    <input {...props} className="w-full rounded-xl border border-[#D9CDBE] bg-white px-3.5 py-3 text-sm text-[#14241A] outline-none transition focus:border-[#9C7A36] focus:ring-2 focus:ring-[#C29B48]/20 disabled:bg-[#F3ECE2]" />
  </label>
);

const TextArea: React.FC<React.TextareaHTMLAttributes<HTMLTextAreaElement> & { label: string }> = ({ label, ...props }) => (
  <label className="block">
    <span className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-[#526048]">{label}</span>
    <textarea {...props} className="min-h-28 w-full resize-y rounded-xl border border-[#D9CDBE] bg-white px-3.5 py-3 text-sm leading-relaxed text-[#14241A] outline-none transition focus:border-[#9C7A36] focus:ring-2 focus:ring-[#C29B48]/20" />
  </label>
);

const Login: React.FC<{ onLogin: (session: AdminSession) => void }> = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');

  const submit = async (event: FormEvent) => {
    event.preventDefault();
    setBusy(true);
    setError('');
    try { onLogin(await loginAdmin(email.trim(), password)); }
    catch (cause) { setError(cause instanceof Error ? cause.message : 'Não foi possível entrar.'); }
    finally { setBusy(false); }
  };

  return (
    <main className="min-h-screen bg-[#10251A] px-4 py-10 text-[#14241A] grid place-items-center">
      <div className="w-full max-w-md rounded-3xl bg-[#FAF7F2] p-7 shadow-2xl sm:p-9">
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#9C7A36]">Cabana das Mansões</span>
        <h1 className="mt-2 font-serif text-3xl font-bold">Painel administrativo</h1>
        <p className="mt-3 text-sm leading-relaxed text-[#526048]">Use o mesmo e-mail e senha cadastrados na agenda. Somente pessoas autorizadas podem publicar alterações.</p>
        <form onSubmit={submit} className="mt-7 space-y-4">
          <Field label="E-mail" type="email" autoComplete="username" required value={email} onChange={(e) => setEmail(e.target.value)} />
          <Field label="Senha" type="password" autoComplete="current-password" required value={password} onChange={(e) => setPassword(e.target.value)} />
          {error && <p className="rounded-xl bg-red-50 px-3 py-2 text-sm text-red-700">{error}</p>}
          <button disabled={busy} className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#C29B48] px-5 py-3.5 text-sm font-extrabold text-[#14241A] transition hover:bg-[#D4B45F] disabled:opacity-60">
            {busy && <Loader2 className="h-4 w-4 animate-spin" />} Entrar no painel
          </button>
        </form>
        <a href="/" className="mt-5 flex items-center justify-center gap-2 text-sm font-semibold text-[#526048] hover:text-[#14241A]"><ArrowLeft className="h-4 w-4" /> Voltar ao site</a>
      </div>
    </main>
  );
};

export const AdminApp: React.FC = () => {
  const [session, setSession] = useState<AdminSession | null>(null);
  const [checking, setChecking] = useState(true);
  const [tab, setTab] = useState<Tab>('inicio');
  const [draft, setDraft] = useState<SiteContent>(cloneDefaults);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState('');
  const [uploading, setUploading] = useState('');

  useEffect(() => {
    void restoreAdminSession().then((stored) => { setSession(stored); setChecking(false); });
  }, []);

  useEffect(() => {
    if (!session) return;
    void loadPublishedContent<Partial<SiteContent>>().then((published) => {
      setDraft({ ...cloneDefaults(), ...published });
    }).catch(() => setMessage('Não foi possível carregar as alterações. Os dados atuais do site foram preservados.'));
  }, [session]);

  const save = async () => {
    if (!session) return;
    setSaving(true); setMessage('');
    try {
      await publishContent(draft as unknown as Record<string, unknown>, session);
      setMessage('Alterações publicadas com sucesso. Elas já estão disponíveis no site.');
    } catch (cause) {
      setMessage(cause instanceof Error ? cause.message : 'Não foi possível publicar.');
    } finally { setSaving(false); }
  };

  const uploadAccommodation = async (file: File, accommodationIndex: number) => {
    if (!session) return;
    const accommodation = draft.accommodations[accommodationIndex];
    setUploading(`acc-${accommodation.id}`); setMessage('');
    try {
      const url = await uploadSiteMedia(file, `acomodacoes/${accommodation.id}`, session);
      const next = structuredClone(draft);
      next.accommodations[accommodationIndex].detailedPhotos = [
        ...(next.accommodations[accommodationIndex].detailedPhotos || []),
        { url, title: file.name.replace(/\.[^.]+$/, ''), category: 'interna', description: accommodation.name },
      ];
      next.accommodations[accommodationIndex].galleryImages.push(url);
      setDraft(next);
      setMessage('Imagem enviada. Clique em “Publicar alterações” para exibi-la no site.');
    } catch (cause) { setMessage(cause instanceof Error ? cause.message : 'Falha no envio da imagem.'); }
    finally { setUploading(''); }
  };

  const uploadExperience = async (file: File, galleryIndex: number) => {
    if (!session) return;
    const gallery = draft.experienceGalleries[galleryIndex];
    setUploading(`gallery-${gallery.id}`); setMessage('');
    try {
      const url = await uploadSiteMedia(file, `experiencias/${gallery.id}`, session);
      const next = structuredClone(draft);
      next.experienceGalleries[galleryIndex].photos.push({ title: file.name.replace(/\.[^.]+$/, ''), caption: gallery.title, src: url });
      setDraft(next);
      setMessage('Imagem enviada. Clique em “Publicar alterações” para exibi-la no site.');
    } catch (cause) { setMessage(cause instanceof Error ? cause.message : 'Falha no envio da imagem.'); }
    finally { setUploading(''); }
  };

  if (checking) return <div className="min-h-screen bg-[#10251A] grid place-items-center text-white"><Loader2 className="h-8 w-8 animate-spin" /></div>;
  if (!session) return <Login onLogin={setSession} />;

  const tabs: Array<{ id: Tab; label: string; icon: React.ComponentType<{ className?: string }> }> = [
    { id: 'inicio', label: 'Visão geral', icon: LayoutDashboard },
    { id: 'acomodacoes', label: 'Acomodações', icon: BedDouble },
    { id: 'tarifas', label: 'Tarifas', icon: CircleDollarSign },
    { id: 'extras', label: 'Cestas e experiências', icon: PackageOpen },
    { id: 'galerias', label: 'Galerias de lazer', icon: ImagePlus },
  ];

  const movePhoto = (galleryIndex: number, photoIndex: number, direction: -1 | 1) => {
    const nextIndex = photoIndex + direction;
    if (nextIndex < 0 || nextIndex >= draft.experienceGalleries[galleryIndex].photos.length) return;
    const next = structuredClone(draft);
    const photos = next.experienceGalleries[galleryIndex].photos;
    [photos[photoIndex], photos[nextIndex]] = [photos[nextIndex], photos[photoIndex]];
    setDraft(next);
  };

  return (
    <div className="min-h-screen bg-[#F3ECE2] text-[#14241A] lg:flex">
      <aside className="bg-[#10251A] p-4 text-white lg:fixed lg:inset-y-0 lg:w-72 lg:p-6">
        <div className="flex items-center justify-between lg:block">
          <div><span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#E8D4A2]">Cabana das Mansões</span><h1 className="font-serif text-2xl font-bold">Painel do site</h1></div>
          <button onClick={() => void logoutAdmin(session).then(() => setSession(null))} className="flex items-center gap-2 rounded-lg border border-white/15 px-3 py-2 text-xs font-semibold hover:bg-white/10 lg:mt-6 lg:w-full"><LogOut className="h-4 w-4" /> Sair</button>
        </div>
        <nav className="mt-4 flex gap-2 overflow-x-auto pb-1 lg:mt-8 lg:block lg:space-y-2">
          {tabs.map(({ id, label, icon: Icon }) => <button key={id} onClick={() => setTab(id)} className={`flex shrink-0 items-center gap-2 rounded-xl px-3 py-2.5 text-sm font-semibold transition lg:w-full ${tab === id ? 'bg-[#C29B48] text-[#14241A]' : 'text-white/75 hover:bg-white/10 hover:text-white'}`}><Icon className="h-4 w-4" /> {label}</button>)}
        </nav>
      </aside>

      <main className="w-full px-4 py-6 sm:px-7 lg:ml-72 lg:px-10 lg:py-9">
        <div className="mx-auto max-w-6xl">
          <header className="mb-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div><p className="text-sm text-[#6B7568]">Conectado como {session.user.email}</p><h2 className="font-serif text-3xl font-bold">{tabs.find((item) => item.id === tab)?.label}</h2></div>
            <div className="flex gap-2"><a href="/" target="_blank" rel="noreferrer" className="flex items-center gap-2 rounded-xl border border-[#CFC1AF] bg-white px-4 py-3 text-sm font-bold"><Eye className="h-4 w-4" /> Ver site</a><button onClick={save} disabled={saving} className="flex items-center gap-2 rounded-xl bg-[#C29B48] px-4 py-3 text-sm font-extrabold disabled:opacity-60">{saving ? <Loader2 className="h-4 w-4 animate-spin" /> : <Save className="h-4 w-4" />} Publicar alterações</button></div>
          </header>
          {message && <div className="mb-6 flex items-start gap-2 rounded-2xl border border-[#C29B48]/30 bg-[#FFF8E7] px-4 py-3 text-sm"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#8A6B2E]" /> {message}</div>}

          {tab === 'inicio' && <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ['Acomodações', draft.accommodations.length, 'acomodacoes' as Tab],
              ['Fotos das acomodações', draft.accommodations.reduce((sum, item) => sum + (item.detailedPhotos?.length || 0), 0), 'acomodacoes' as Tab],
              ['Cestas e experiências', draft.experiencesAndBaskets.length, 'extras' as Tab],
              ['Galerias de lazer', draft.experienceGalleries.length, 'galerias' as Tab],
            ].map(([label, value, target]) => <button key={label} onClick={() => setTab(target as Tab)} className="rounded-2xl border border-[#DED2C4] bg-white p-5 text-left shadow-sm hover:shadow-md"><strong className="block font-serif text-3xl">{value}</strong><span className="mt-1 block text-sm text-[#526048]">{label}</span></button>)}
            <div className="sm:col-span-2 lg:col-span-4 rounded-3xl bg-[#14241A] p-6 text-white"><h3 className="font-serif text-2xl font-bold">Como funciona</h3><p className="mt-2 max-w-3xl text-sm leading-relaxed text-white/70">Edite os campos, envie ou organize as fotos e depois clique em “Publicar alterações”. O site público recebe o conteúdo sem precisar de uma nova implantação.</p></div>
          </section>}

          {tab === 'acomodacoes' && <div className="space-y-6">{draft.accommodations.map((acc, index) => <section key={acc.id} className="rounded-3xl border border-[#DED2C4] bg-white p-5 shadow-sm sm:p-7">
            <div className="mb-5 flex items-center justify-between"><div><span className="text-xs font-bold uppercase tracking-wider text-[#9C7A36]">Acomodação</span><h3 className="font-serif text-2xl font-bold">{acc.name}</h3></div><label className="flex items-center gap-2 text-sm font-semibold"><input type="checkbox" checked={Boolean(acc.isPetFriendly)} onChange={(e) => { const next=structuredClone(draft); next.accommodations[index].isPetFriendly=e.target.checked; setDraft(next); }} /> Aceita pet</label></div>
            <div className="grid gap-4 md:grid-cols-2"><Field label="Nome" value={acc.name} onChange={(e) => { const next=structuredClone(draft); next.accommodations[index].name=e.target.value; setDraft(next); }} /><Field label="Capacidade" value={acc.capacity} onChange={(e) => { const next=structuredClone(draft); next.accommodations[index].capacity=e.target.value; setDraft(next); }} /><div className="md:col-span-2"><Field label="Frase de destaque" value={acc.tagline} onChange={(e) => { const next=structuredClone(draft); next.accommodations[index].tagline=e.target.value; setDraft(next); }} /></div><div className="md:col-span-2"><TextArea label="Descrição" value={acc.description} onChange={(e) => { const next=structuredClone(draft); next.accommodations[index].description=e.target.value; setDraft(next); }} /></div><div className="md:col-span-2"><TextArea label="Destaques — um por linha" value={asLines(acc.highlightBadges)} onChange={(e) => { const next=structuredClone(draft); next.accommodations[index].highlightBadges=fromLines(e.target.value); setDraft(next); }} /></div></div>
            <div className="mt-6 border-t border-[#E8DED1] pt-5"><div className="mb-3 flex items-center justify-between"><strong>Galeria ({acc.detailedPhotos?.length || 0})</strong><label className="cursor-pointer rounded-xl bg-[#14241A] px-4 py-2.5 text-xs font-bold text-white"><input type="file" accept="image/jpeg,image/png,image/webp,image/avif" className="hidden" disabled={Boolean(uploading)} onChange={(e) => { const file=e.target.files?.[0]; if(file) void uploadAccommodation(file,index); e.currentTarget.value=''; }} />{uploading === `acc-${acc.id}` ? 'Enviando...' : 'Adicionar foto'}</label></div><div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-6">{(acc.detailedPhotos || []).map((photo, photoIndex) => <div key={`${photo.url}-${photoIndex}`} className="group relative overflow-hidden rounded-xl bg-[#10251A]"><img src={photo.url} alt={photo.title} className="aspect-square w-full object-contain" /><button aria-label="Remover foto" onClick={() => { const next=structuredClone(draft); next.accommodations[index].detailedPhotos?.splice(photoIndex,1); next.accommodations[index].galleryImages=next.accommodations[index].detailedPhotos?.map((p)=>p.url)||[]; setDraft(next); }} className="absolute right-1.5 top-1.5 rounded-full bg-red-700 p-1.5 text-white"><Trash2 className="h-3.5 w-3.5" /></button><input value={photo.title} onChange={(e)=>{const next=structuredClone(draft); if(next.accommodations[index].detailedPhotos) next.accommodations[index].detailedPhotos![photoIndex].title=e.target.value; setDraft(next);}} className="w-full bg-black/70 px-2 py-1.5 text-[10px] text-white outline-none" /></div>)}</div></div>
          </section>)}</div>}

          {tab === 'tarifas' && <div className="space-y-6">
            {(['express', 'conforto'] as const).map((mode) => (
              <section key={mode} className="rounded-3xl border border-[#DED2C4] bg-white p-5 sm:p-7">
                <h3 className="font-serif text-2xl font-bold">{draft.stayModes[mode].name}</h3>
                <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  {(['cabanas', 'casa'] as const).flatMap((property) =>
                    (['weekday', 'weekend'] as const).map((period) => (
                      <Field
                        key={`${property}-${period}`}
                        label={`${property === 'cabanas' ? 'Éden e Manancial' : 'Pedacinho do Céu'} · ${period === 'weekday' ? 'seg. a qua.' : 'qui. a dom.'}`}
                        type="number"
                        min="0"
                        value={draft.stayModes[mode].pricing[property][period] ?? ''}
                        onChange={(event) => {
                          const next = structuredClone(draft);
                          next.stayModes[mode].pricing[property][period] = event.target.value === '' ? null : Number(event.target.value);
                          setDraft(next);
                        }}
                      />
                    )),
                  )}
                </div>
              </section>
            ))}
            <section className="rounded-3xl border border-[#DED2C4] bg-white p-5 sm:p-7"><h3 className="font-serif text-2xl font-bold">Alta temporada</h3><div className="mt-5 grid gap-4 md:grid-cols-2"><Field label="Período" value={draft.seasonalRates.period} onChange={(e)=>setDraft({...draft,seasonalRates:{...draft.seasonalRates,period:e.target.value}})} /><Field label="Regra" value={draft.seasonalRates.schedule} onChange={(e)=>setDraft({...draft,seasonalRates:{...draft.seasonalRates,schedule:e.target.value}})} /></div><div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{(['express','conforto'] as const).flatMap((mode)=>(['cabanas','casa'] as const).map((property)=><Field key={`${mode}-${property}`} label={`${mode} · ${property}`} type="number" value={draft.seasonalRates.rates[mode][property]} onChange={(e)=>{const next=structuredClone(draft); next.seasonalRates.rates[mode][property]=Number(e.target.value); setDraft(next);}} />))}</div></section>
            {draft.specialPackages.map((pkg,index)=><section key={pkg.id} className="rounded-3xl border border-[#DED2C4] bg-white p-5 sm:p-7"><div className="grid gap-4 sm:grid-cols-2"><Field label="Nome do pacote" value={pkg.name} onChange={(e)=>{const next=structuredClone(draft); next.specialPackages[index].name=e.target.value; setDraft(next);}} /><Field label="Mínimo de diárias" type="number" min="1" value={pkg.minimumNights} onChange={(e)=>{const next=structuredClone(draft); next.specialPackages[index].minimumNights=Number(e.target.value); setDraft(next);}} /></div><div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{(['cabanas','casa'] as const).flatMap((property)=>(['express','conforto'] as const).map((mode)=><Field key={`${property}-${mode}`} label={`${property} · ${mode}`} type="number" value={pkg.rates[property][mode]} onChange={(e)=>{const next=structuredClone(draft); next.specialPackages[index].rates[property][mode]=Number(e.target.value); setDraft(next);}} />))}</div></section>)}
          </div>}

          {tab === 'extras' && <div className="space-y-5">{draft.experiencesAndBaskets.map((item,index)=><section key={item.id} className="rounded-3xl border border-[#DED2C4] bg-white p-5 sm:p-7"><div className="grid gap-4 md:grid-cols-2"><Field label="Nome" value={item.name} onChange={(e)=>{const next=structuredClone(draft); next.experiencesAndBaskets[index].name=e.target.value; setDraft(next);}} /><Field label="Valor exibido" value={item.priceFormatted || (item.price ? String(item.price) : '')} placeholder="Ex.: R$ 180 ou Consulte valores" onChange={(e)=>{const next=structuredClone(draft); next.experiencesAndBaskets[index].price=null; next.experiencesAndBaskets[index].priceFormatted=e.target.value; setDraft(next);}} /><div className="md:col-span-2"><TextArea label="Texto de apresentação" value={item.emotionalCopy} onChange={(e)=>{const next=structuredClone(draft); next.experiencesAndBaskets[index].emotionalCopy=e.target.value; setDraft(next);}} /></div><div className="md:col-span-2"><TextArea label="Itens — um por linha" value={asLines(item.items)} onChange={(e)=>{const next=structuredClone(draft); next.experiencesAndBaskets[index].items=fromLines(e.target.value); setDraft(next);}} /></div></div></section>)}</div>}

          {tab === 'galerias' && <div className="space-y-6">{draft.experienceGalleries.map((gallery,galleryIndex)=><section key={gallery.id} className="rounded-3xl border border-[#DED2C4] bg-white p-5 sm:p-7"><div className="mb-5 flex flex-wrap items-center justify-between gap-3"><div><span className="text-xs font-bold uppercase tracking-wider text-[#9C7A36]">Galeria de lazer</span><h3 className="font-serif text-2xl font-bold">{gallery.title}</h3></div><label className="cursor-pointer rounded-xl bg-[#14241A] px-4 py-2.5 text-xs font-bold text-white"><input type="file" accept="image/jpeg,image/png,image/webp,image/avif" className="hidden" disabled={Boolean(uploading)} onChange={(e)=>{const file=e.target.files?.[0]; if(file) void uploadExperience(file,galleryIndex); e.currentTarget.value='';}} />{uploading === `gallery-${gallery.id}` ? 'Enviando...' : 'Adicionar foto'}</label></div><div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">{gallery.photos.map((photo,photoIndex)=><div key={`${photo.src}-${photoIndex}`} className="overflow-hidden rounded-xl border border-[#DED2C4] bg-[#10251A]"><img src={photo.src} alt={photo.title} className="aspect-square w-full object-contain" /><div className="flex items-center justify-between bg-white p-1.5"><button aria-label="Mover para trás" disabled={photoIndex===0} onClick={()=>movePhoto(galleryIndex,photoIndex,-1)} className="rounded p-1 disabled:opacity-25"><ArrowUp className="h-4 w-4 -rotate-90" /></button><button aria-label="Remover" onClick={()=>{const next=structuredClone(draft); next.experienceGalleries[galleryIndex].photos.splice(photoIndex,1); setDraft(next);}} className="rounded p-1 text-red-700"><Trash2 className="h-4 w-4" /></button><button aria-label="Mover para frente" disabled={photoIndex===gallery.photos.length-1} onClick={()=>movePhoto(galleryIndex,photoIndex,1)} className="rounded p-1 disabled:opacity-25"><ArrowDown className="h-4 w-4 -rotate-90" /></button></div><input value={photo.title} onChange={(e)=>{const next=structuredClone(draft); next.experienceGalleries[galleryIndex].photos[photoIndex].title=e.target.value; setDraft(next);}} className="w-full border-t border-[#DED2C4] bg-white px-2 py-2 text-[11px] outline-none" /></div>)}</div></section>)}</div>}
        </div>
      </main>
    </div>
  );
};

