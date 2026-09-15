import { WHATSAPP_NUMBER, BRAND_NAME } from '../config/constants';

export interface BookingWhatsAppParams {
  accommodationName?: string;
  checkInDate?: string;
  checkOutDate?: string;
  guestCount?: number;
  guestName?: string;
  nights?: number;
  estimatedTotal?: number;
  requestCrib?: boolean;
  requestExtraBed?: boolean;
  hasPet?: boolean;
  observations?: string;
}

/**
 * Gera um link oficial para o WhatsApp da Cabana das Mansões com mensagem formatada
 */
export function createWhatsAppLink(params?: BookingWhatsAppParams): string {
  let message = `Olá! Vim pelo site da *${BRAND_NAME}* e gostaria de consultar disponibilidade:\n\n`;

  if (params?.accommodationName) {
    message += `🏡 *Acomodação:* ${params.accommodationName}\n`;
  }
  if (params?.guestName) {
    message += `👤 *Nome:* ${params.guestName}\n`;
  }
  if (params?.checkInDate) {
    message += `📅 *Check-in (15h):* ${params.checkInDate}\n`;
  }
  if (params?.checkOutDate) {
    message += `📅 *Check-out (12h):* ${params.checkOutDate}\n`;
  }
  if (params?.nights && params.nights > 0) {
    message += `🌙 *Diárias:* ${params.nights} noite(s)\n`;
  }
  if (params?.guestCount && params.guestCount > 0) {
    message += `👥 *Hóspedes:* ${params.guestCount} pessoa(s)\n`;
  }
  if (params?.requestCrib) {
    message += `👶 *Berço:* Sim (solicitado)\n`;
  }
  if (params?.requestExtraBed) {
    message += `🛏️ *Cama extra:* Sim (+R$ 50/diária)\n`;
  }
  if (params?.hasPet) {
    message += `🐾 *Pet:* Sim\n`;
  }
  if (params?.estimatedTotal && params.estimatedTotal > 0) {
    message += `💰 *Valor Estimado:* R$ ${params.estimatedTotal.toLocaleString('pt-BR')}\n`;
  }
  if (params?.observations) {
    message += `📝 *Observações:* ${params.observations}\n`;
  }

  if (!params?.accommodationName && !params?.checkInDate) {
    message += `Gostaria de saber quais datas estão livres e tirar algumas dúvidas. Pode me ajudar?`;
  } else {
    message += `\nVocês têm disponibilidade para essas datas?`;
  }

  const encodedMsg = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMsg}`;
}

/**
 * Gera link direto para consulta rápida de uma acomodação específica
 */
export function createDirectAccommodationWhatsAppLink(accommodationName: string): string {
  const message = `Olá! Estava navegando no site da *${BRAND_NAME}* e me encantei pela *${accommodationName}*.\n\nGostaria de verificar a disponibilidade e valores para uma estadia. Como podemos prosseguir?`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

/**
 * Gera link para dúvidas gerais ou contato rápido
 */
export function createGeneralInquiryWhatsAppLink(contextSubject?: string): string {
  const subject = contextSubject ? ` sobre *${contextSubject}*` : '';
  const message = `Olá! Gostaria de tirar algumas dúvidas${subject} na *${BRAND_NAME}*. Poderiam me atender?`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

/**
 * Funções de Analytics / Rastreamento de Conversão (preparadas para Google Analytics / Meta Pixel)
 */
export function trackWhatsAppClick(source: string, details?: Record<string, unknown>): void {
  if (typeof window !== 'undefined') {
    // Integração com Google Tag Manager / Google Analytics 4 se presente
    const win = window as unknown as { gtag?: (...args: unknown[]) => void; dataLayer?: unknown[] };
    if (win.gtag) {
      win.gtag('event', 'generate_lead', {
        event_category: 'WhatsApp',
        event_label: source,
        ...details,
      });
    }
    if (win.dataLayer) {
      win.dataLayer.push({
        event: 'whatsapp_conversion',
        conversion_source: source,
        ...details,
      });
    }
  }
}

export function trackAccommodationView(accommodationId: string, accommodationName: string): void {
  if (typeof window !== 'undefined') {
    const win = window as unknown as { gtag?: (...args: unknown[]) => void };
    if (win.gtag) {
      win.gtag('event', 'view_item', {
        items: [{ id: accommodationId, name: accommodationName }],
      });
    }
  }
}
