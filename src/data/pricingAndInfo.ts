import { PRICING_CONFIG, CHECK_IN_TIME, CHECK_OUT_TIME } from '../config/constants';
import { STAY_MODES } from './commercial';

export interface PricingTier {
  id: string;
  name: string;
  category: 'cabanas' | 'casa';
  regularPrice: number;
  promoPrice: number;
  appliesTo: string;
  description: string;
  capacityText: string;
  perks: string[];
}

export const pricingTiers: PricingTier[] = [
  {
    id: 'cabanas',
    name: 'Cabanas (Éden ou Manancial)',
    category: 'cabanas',
    regularPrice: STAY_MODES.express.pricing.cabanas.weekend ?? 1090,
    promoPrice: STAY_MODES.express.pricing.cabanas.weekday ?? 890,
    appliesTo: 'Cabana Éden & Cabana Manancial',
    description: 'Experiência exclusiva para casais ou famílias em busca de aconchego, spa e conexão.',
    capacityText: `Até ${PRICING_CONFIG.cabanas.maxGuests} pessoas`,
    perks: [
      'Hidromassagem privativa aquecida',
      'Cozinha completa equipada',
      'Itens essenciais para início de estadia inclusos',
      'Acesso livre à fazendinha e recantos da propriedade',
      'Cinema das Mansões com projetor Samsung The Freestyle 100"',
      'Opção de Temporada Express ou Conforto',
    ],
  },
  {
    id: 'casa-pedacinho-do-ceu',
    name: 'Casa Pedacinho do Céu',
    category: 'casa',
    regularPrice: STAY_MODES.express.pricing.casa.weekend ?? 1690,
    promoPrice: STAY_MODES.express.pricing.casa.weekday ?? 1350,
    appliesTo: 'Casa Pedacinho do Céu',
    description: 'Imersão espaçosa com 3 quartos, 2 fogões a lenha, churrasqueira e 100% pet friendly.',
    capacityText: `Até ${PRICING_CONFIG.casa.maxGuests} pessoas`,
    perks: [
      'Espaço Pet Friendly amplo e cercado de verde',
      '3 quartos completos e confortáveis',
      'Hidromassagem privativa aquecida',
      '2 fogões a lenha tradicionais e churrasqueira',
      'Cozinha completa e equipada',
      'Acesso livre a toda a infraestrutura da propriedade',
    ],
  },
];

export const bookingRules = [
  {
    label: 'Check-in',
    value: CHECK_IN_TIME,
    description: 'Recepção acolhedora e entrega das chaves',
  },
  {
    label: 'Check-out',
    value: CHECK_OUT_TIME,
    description: 'Despedida com calma para aproveitar a manhã',
  },
  {
    label: 'Berço',
    value: 'Sob solicitação',
    description: 'Disponibilizado gratuitamente com aviso prévio para bebês',
  },
  {
    label: 'Cama Extra',
    value: `R$ ${PRICING_CONFIG.extras.extraBedPrice},00`,
    description: 'Adicional por hóspede com roupa de cama completa',
  },
  {
    label: 'Pagamento Facilitado',
    value: 'Cartão parcelado',
    description: 'Parcelamos no cartão conforme taxas da maquininha',
  },
  {
    label: 'Modalidades de Estadia',
    value: 'Express ou Conforto',
    description: 'Escolha entre economia prática trazendo seu enxoval ou conveniência total pronta para uso',
  },
  {
    label: 'Itens de Chegada',
    value: 'Disponíveis',
    description: 'Itens essenciais de apoio e acolhimento na cozinha para sua comodidade imediata',
  },
];

export const propertyAddress = {
  street: 'Rua Bom Retiro, Q. 26, L. 13',
  neighborhood: 'Chácara das Mansões',
  fullName: 'Rua Bom Retiro, Quadra 26, Lote 13 - Chácara das Mansões',
  cityRegion: 'Chácara das Mansões',
};
