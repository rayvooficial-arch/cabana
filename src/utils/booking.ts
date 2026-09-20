import { BOOKING_CONFIG } from '../config/booking';

export interface BookingEngineParams {
  accommodationId?: string;
  accommodationName?: string;
  checkIn?: string;
  checkOut?: string;
  guests?: number;
  rateCode?: string;
  promoCode?: string;
  experienceId?: string;
  source?: string;
}

export type PendingBookingListener = (params: BookingEngineParams) => void;

// Gerenciador de ouvintes para quando o botão for acionado sem URL cadastrada
const pendingBookingListeners = new Set<PendingBookingListener>();

export function registerPendingBookingListener(listener: PendingBookingListener): () => void {
  pendingBookingListeners.add(listener);
  return () => {
    pendingBookingListeners.delete(listener);
  };
}

/**
 * Funções reutilizáveis de rastreamento e analytics (preparadas para Google Analytics / Meta Pixel / GTM)
 */
export function trackBookingClick(params?: BookingEngineParams): void {
  try {
    if (typeof window !== 'undefined') {
      const dataLayer = (window as unknown as { dataLayer?: unknown[] }).dataLayer;
      if (Array.isArray(dataLayer)) {
        dataLayer.push({
          event: 'booking_engine_click',
          accommodation_id: params?.accommodationId,
          accommodation_name: params?.accommodationName,
          rate_code: params?.rateCode,
          source: params?.source || 'direct_cta',
          timestamp: new Date().toISOString(),
        });
      }
    }
  } catch {
    // Fail silently in development/sandbox
  }
}

export function trackAvailabilityClick(params?: BookingEngineParams): void {
  try {
    if (typeof window !== 'undefined') {
      const dataLayer = (window as unknown as { dataLayer?: unknown[] }).dataLayer;
      if (Array.isArray(dataLayer)) {
        dataLayer.push({
          event: 'availability_check_click',
          accommodation_id: params?.accommodationId,
          accommodation_name: params?.accommodationName,
          source: params?.source || 'availability_cta',
          timestamp: new Date().toISOString(),
        });
      }
    }
  } catch {
    // Fail silently in development/sandbox
  }
}

export function trackAccommodationBookingClick(accommodationId: string, accommodationName: string): void {
  trackBookingClick({ accommodationId, accommodationName, source: 'accommodation_card' });
}

export function trackPackageClick(packageName: string): void {
  trackBookingClick({ rateCode: packageName, source: 'pricing_tier' });
}

export function trackExperienceClick(experienceName: string): void {
  trackBookingClick({ experienceId: experienceName, source: 'experience_highlight' });
}

/**
 * Função central de acionamento do motor de reservas externo.
 * - Se `BOOKING_CONFIG.url` estiver preenchida: abre o motor de reservas no navegador de forma limpa e segura.
 * - Se `BOOKING_CONFIG.url` estiver vazia: não executa redirecionamento externo e notifica com elegância.
 */
export function openBookingEngine(params?: BookingEngineParams): void {
  // Dispara analytics
  trackBookingClick(params);

  const rawUrl = BOOKING_CONFIG.url ? BOOKING_CONFIG.url.trim() : '';

  if (rawUrl !== '') {
    try {
      const targetUrl = new URL(rawUrl);

      // Parâmetros estruturados para integração futura conforme documentação do motor
      if (params?.accommodationId) {
        targetUrl.searchParams.set('accommodation', params.accommodationId);
      }
      if (params?.checkIn) {
        targetUrl.searchParams.set('checkin', params.checkIn);
      }
      if (params?.checkOut) {
        targetUrl.searchParams.set('checkout', params.checkOut);
      }
      if (params?.guests) {
        targetUrl.searchParams.set('guests', String(params.guests));
      }
      if (params?.promoCode) {
        targetUrl.searchParams.set('promo', params.promoCode);
      }
      if (params?.rateCode) {
        targetUrl.searchParams.set('rate', params.rateCode);
      }

      window.open(targetUrl.toString(), '_blank', 'noopener,noreferrer');
    } catch {
      // Caso a URL inserida seja relativa ou sem protocolo
      window.open(rawUrl, '_blank', 'noopener,noreferrer');
    }
  } else {
    // Comportamento seguro: não redireciona para página inexistente e não exibe erros técnicos
    pendingBookingListeners.forEach((listener) => {
      try {
        listener(params || {});
      } catch {
        // Safe execution
      }
    });
  }
}
