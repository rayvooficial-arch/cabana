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

/**
 * Evento central de intenção de reserva.
 * Mantemos os dados de contexto para mensuração, sem assumir que o motor
 * externo aceita parâmetros que ainda não foram documentados oficialmente.
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
          experience_id: params?.experienceId,
          source: params?.source || 'direct_cta',
          timestamp: new Date().toISOString(),
        });
      }
    }
  } catch {
    // Analytics não deve bloquear a navegação do hóspede.
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
    // Analytics não deve bloquear a navegação do hóspede.
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
 * Abre o motor oficial de reservas em uma nova aba.
 *
 * Enquanto não houver documentação oficial de deep links da Bitz no projeto,
 * o site envia sempre para a URL fornecida pela propriedade, sem acrescentar
 * parâmetros de acomodação, datas, hóspedes ou tarifas por conta própria.
 */
export function openBookingEngine(params?: BookingEngineParams): void {
  trackBookingClick(params);

  if (typeof window === 'undefined' || !BOOKING_CONFIG.enabled) {
    return;
  }

  const bookingUrl = BOOKING_CONFIG.url.trim();
  if (!bookingUrl) {
    return;
  }

  window.open(bookingUrl, '_blank', 'noopener,noreferrer');
}
