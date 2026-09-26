export type MetaStandardEvent =
  | 'ViewContent'
  | 'InitiateCheckout'
  | 'Purchase';

export interface MetaEventParameters {
  content_ids?: string[];
  content_name?: string;
  content_category?: string;
  content_type?: 'product' | 'product_group';
  currency?: string;
  value?: number;
  num_items?: number;
  [key: string]: string | number | string[] | undefined;
}

type MetaPixelFunction = (
  command: 'track',
  eventName: MetaStandardEvent,
  parameters?: MetaEventParameters,
  options?: { eventID: string },
) => void;

declare global {
  interface Window {
    fbq?: MetaPixelFunction;
  }
}

function createEventId(prefix: string): string {
  const randomPart =
    typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function'
      ? crypto.randomUUID()
      : Math.random().toString(36).slice(2);

  return `${prefix}_${Date.now()}_${randomPart}`;
}

export function trackMetaEvent(
  eventName: MetaStandardEvent,
  parameters: MetaEventParameters = {},
  eventId = createEventId(eventName.toLowerCase()),
): string {
  try {
    if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
      window.fbq('track', eventName, parameters, { eventID: eventId });
    }
  } catch {
    // A medição nunca deve impedir a navegação do hóspede.
  }

  return eventId;
}

export function trackAccommodationCatalogView(): string {
  return trackMetaEvent('ViewContent', {
    content_ids: ['eden', 'manancial', 'pedacinho-do-ceu'],
    content_name: 'Acomodações Cabana das Mansões',
    content_category: 'Hospedagem',
    content_type: 'product_group',
    currency: 'BRL',
  });
}

export function trackBookingStart(parameters?: {
  accommodationId?: string;
  accommodationName?: string;
  rateCode?: string;
  experienceId?: string;
}): string {
  const contentId =
    parameters?.accommodationId ||
    parameters?.rateCode ||
    parameters?.experienceId ||
    'motor-reservas';

  return trackMetaEvent('InitiateCheckout', {
    content_ids: [contentId],
    content_name:
      parameters?.accommodationName ||
      parameters?.rateCode ||
      parameters?.experienceId ||
      'Motor de reservas Bitz',
    content_category: 'Hospedagem',
    content_type: 'product',
    currency: 'BRL',
    num_items: 1,
  });
}
