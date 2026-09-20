import { WHATSAPP_NUMBER, BRAND_NAME } from '../config/constants';

/**
 * CANAL INSTITUCIONAL DE SUPORTE E ATENDIMENTO
 * 
 * Nota: O fluxo principal de reservas do site utiliza o motor de reservas externo
 * configurado em `src/config/booking.ts`.
 * 
 * O WhatsApp aqui presente serve exclusivamente como canal secundário institucional
 * para suporte pontual de dúvidas gerais ou informações de acesso.
 */

export function createInstitutionalSupportLink(contextSubject?: string): string {
  const subject = contextSubject ? ` sobre *${contextSubject}*` : '';
  const message = `Olá! Gostaria de tirar algumas dúvidas institucionais${subject} sobre a propriedade *${BRAND_NAME}*. Poderiam me auxiliar?`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function trackInstitutionalContactClick(source: string): void {
  if (typeof window !== 'undefined') {
    try {
      const win = window as unknown as { gtag?: (...args: unknown[]) => void; dataLayer?: unknown[] };
      if (win.gtag) {
        win.gtag('event', 'contact', {
          event_category: 'Institutional_Support',
          event_label: source,
        });
      }
      if (win.dataLayer) {
        win.dataLayer.push({
          event: 'institutional_contact_click',
          source,
        });
      }
    } catch {
      // Safe execution
    }
  }
}
