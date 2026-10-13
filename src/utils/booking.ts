import { BRAND_NAME, WHATSAPP_NUMBER } from '../config/constants';
import { trackBookingStart } from './metaPixel';

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
 * Evento central de intenção de reserva pelo WhatsApp.
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

type BookingListener = (params: BookingEngineParams | null) => void;
const listeners = new Set<BookingListener>();

export function registerPendingBookingListener(listener: BookingListener): () => void {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

export function triggerPendingBooking(params?: BookingEngineParams): void {
  listeners.forEach((listener) => {
    try {
      listener(params ?? null);
    } catch {
      // Ignore listener error
    }
  });
}

/**
 * Monta uma mensagem de reserva com o contexto do botão escolhido.
 */
export function createBookingWhatsAppLink(params?: BookingEngineParams): string {
  const details: string[] = [];

  if (params?.accommodationName) {
    details.push(`Tenho interesse em *${params.accommodationName}*.`);
  }
  if (params?.rateCode) {
    details.push(`Modalidade ou pacote: *${params.rateCode}*.`);
  }
  if (params?.experienceId) {
    details.push(`Também gostaria de consultar: *${params.experienceId}*.`);
  }
  if (params?.checkIn || params?.checkOut) {
    details.push(`Período desejado: ${params.checkIn || 'a definir'} até ${params.checkOut || 'a definir'}.`);
  }
  if (params?.guests) {
    details.push(`Quantidade de hóspedes: ${params.guests}.`);
  }

  const message = [
    `Olá! Gostaria de realizar uma reserva na *${BRAND_NAME}*.` ,
    ...details,
    'Podem me informar as datas disponíveis, os valores e as condições da hospedagem?',
  ].join('\n');

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

/** Abre o atendimento de reservas pelo WhatsApp em uma nova aba. */
export function openBookingEngine(params?: BookingEngineParams): void {
  trackBookingClick(params);
  trackBookingStart(params);

  if (typeof window === 'undefined') {
    return;
  }

  window.open(createBookingWhatsAppLink(params), '_blank', 'noopener,noreferrer');
}
