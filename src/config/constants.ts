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

// Tarifas Oficiais (Fonte Única da Verdade)
export const PRICING_CONFIG = {
  // Cabana Éden e Cabana Manancial
  cabanas: {
    weekendPrice: 1200, // Quinta a Domingo
    weekdayPrice: 960,  // Segunda a Quarta (20% OFF)
    discountPercentage: 20,
    maxGuests: 4,
  },
  // Casa Pedacinho do Céu
  casa: {
    weekendPrice: 1800, // Quinta a Domingo
    weekdayPrice: 1440, // Segunda a Quarta (20% OFF)
    discountPercentage: 20,
    maxGuests: 8,
  },
  // Serviços e adicionais
  extras: {
    extraBedPrice: 50, // Cama extra por diária
    cribAvailable: true, // Berço sob solicitação gratuito
  },
};
