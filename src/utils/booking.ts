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

export interface BookingInquiryDetails {
  accommodationName: string;
  guestName: string;
  checkIn: string;
  checkOut: string;
  nights: number;
  guests: number;
  estimatedValue: number;
  stayMode: 'express' | 'conforto';
  stayModeName: string;
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
function formatDate(date: string): string {
  const [year, month, day] = date.split('-');
  return `${day}/${month}/${year}`;
}

export function createBookingWhatsAppLink(
  inquiry: BookingInquiryDetails,
  params?: BookingEngineParams,
): string {
  const optionalDetails = [
    params?.rateCode ? `🎉 Pacote de interesse: ${params.rateCode}` : null,
    params?.experienceId ? `🎁 Adicional de interesse: ${params.experienceId}` : null,
  ].filter(Boolean);

  const message = [
    `Olá! Vim pelo site da ${BRAND_NAME} e gostaria de consultar disponibilidade:`,
    '',
    `🏡 Acomodação: ${inquiry.accommodationName}`,
    `✨ Modalidade: ${inquiry.stayModeName}`,
    `👤 Nome: ${inquiry.guestName}`,
    `📅 Check-in (15h): ${formatDate(inquiry.checkIn)}`,
    `📅 Check-out (12h): ${formatDate(inquiry.checkOut)}`,
    `🌙 Diárias: ${inquiry.nights} noite(s)`,
    `👥 Hóspedes: ${inquiry.guests} pessoa(s)`,
    `💰 Valor Estimado: R$ ${inquiry.estimatedValue.toLocaleString('pt-BR')}`,
    ...optionalDetails,
    '',
    'Vocês têm disponibilidade para essas datas?',
  ].join('\n');

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

/** Abre o formulário de consulta antes de encaminhar o cliente ao WhatsApp. */
export function openBookingEngine(params?: BookingEngineParams): void {
  trackBookingClick(params);
  trackBookingStart(params);

  if (typeof window === 'undefined') {
    return;
  }

  triggerPendingBooking(params);
}
