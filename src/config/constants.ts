/**
 * CONFIGURAÇÃO CENTRAL DA CABANA DAS MANSÕES
 * 
 * Centralização única de número de WhatsApp, regras de negócio e preços.
 * Altere aqui para refletir em todo o projeto.
 */

// Número de WhatsApp oficial para onde todos os leads qualificados são direcionados
// Formato internacional sem caracteres especiais (ex: 5567999999999)
export const WHATSAPP_NUMBER = '67992788230';
export const WHATSAPP_NUMBER_FORMATTED = '(67) 99278-8230';

// Nome e slogan da marca
export const BRAND_NAME = 'Cabana das Mansões';
export const BRAND_TAGLINE = 'Mais do que uma hospedagem, uma experiência única e imersiva no campo.';
export const BRAND_LOCATION = 'Chácara das Mansões, Campo Grande - MS';

// Horários oficiais da estadia
export const CHECK_IN_TIME = '15h00';
export const CHECK_OUT_TIME = '12h00';

// Importa fonte única da verdade para dados comerciais
import { STAY_MODES } from '../data/commercial';

// Tarifas Oficiais (Fonte Única da Verdade)
export const PRICING_CONFIG = {
  // Modalidade Temporada Express (Oficial)
  express: {
    cabanas: {
      weekdayPrice: STAY_MODES.express.pricing.cabanas.weekday ?? 890,
      weekendPrice: STAY_MODES.express.pricing.cabanas.weekend ?? 1090,
    },
    casa: {
      weekdayPrice: STAY_MODES.express.pricing.casa.weekday ?? 1350,
      weekendPrice: STAY_MODES.express.pricing.casa.weekend ?? 1690,
    },
  },
  // Modalidade Temporada Conforto (Oficial)
  conforto: {
    cabanas: {
      weekdayPrice: STAY_MODES.conforto.pricing.cabanas.weekday,
      weekendPrice: STAY_MODES.conforto.pricing.cabanas.weekend,
      statusText: STAY_MODES.conforto.pricing.cabanas.statusText,
    },
    casa: {
      weekdayPrice: STAY_MODES.conforto.pricing.casa.weekday ?? 1530,
      weekendPrice: STAY_MODES.conforto.pricing.casa.weekend ?? 1870,
    },
  },
  // Padrão de capacidade máxima
  cabanas: {
    weekendPrice: STAY_MODES.express.pricing.cabanas.weekend ?? 1090,
    weekdayPrice: STAY_MODES.express.pricing.cabanas.weekday ?? 890,
    maxGuests: 4,
  },
  casa: {
    weekendPrice: STAY_MODES.express.pricing.casa.weekend ?? 1690,
    weekdayPrice: STAY_MODES.express.pricing.casa.weekday ?? 1350,
    maxGuests: 8,
  },
  // Serviços e adicionais
  extras: {
    extraBedPrice: 50, // Cama extra por diária
    cribAvailable: true, // Berço sob solicitação gratuito
  },
};
