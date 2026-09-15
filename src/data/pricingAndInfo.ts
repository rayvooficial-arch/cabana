import { PRICING_CONFIG, CHECK_IN_TIME, CHECK_OUT_TIME } from '../config/constants';

export interface PricingTier {
  id: string;
  name: string;
  category: 'cabanas' | 'casa';
  regularPrice: number;
  promoPrice: number;
  discountPercentage: number;
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
    regularPrice: PRICING_CONFIG.cabanas.weekendPrice,
    promoPrice: PRICING_CONFIG.cabanas.weekdayPrice,
    discountPercentage: PRICING_CONFIG.cabanas.discountPercentage,
    appliesTo: 'Cabana Éden & Cabana Manancial',
    description: 'Experiência exclusiva para casais ou pequenos grupos em busca de privacidade e spa.',
    capacityText: `Até ${PRICING_CONFIG.cabanas.maxGuests} pessoas`,
    perks: [
      'Hidromassagem privativa',
      'Cozinha completa e equipada',
      'Alimentos não perecíveis inclusos',
      'Roupas de cama 600 fios e banho inclusas',
      'Acesso à fazendinha e todas as áreas da propriedade',
      'Cinema ao ar livre com telão de 100"',
    ],
  },
  {
    id: 'casa-pedacinho-do-ceu',
    name: 'Casa Pedacinho do Céu',
    category: 'casa',
    regularPrice: PRICING_CONFIG.casa.weekendPrice,
    promoPrice: PRICING_CONFIG.casa.weekdayPrice,
    discountPercentage: PRICING_CONFIG.casa.discountPercentage,
    appliesTo: 'Casa Pedacinho do Céu',
    description: 'Imersão espaçosa com 3 quartos, 2 fogões a lenha, churrasqueira e pet friendly.',
    capacityText: `Até ${PRICING_CONFIG.casa.maxGuests} pessoas`,
    perks: [
      'Espaço Pet Friendly amplo e cercado de verde',
      '3 quartos completos com cama King/casal 600 fios',
      'Hidromassagem privativa',
      '2 fogões a lenha e churrasqueira gourmet',
      'Alimentos não perecíveis e ovos da fazenda inclusos',
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
    label: 'Enxoval Completo',
    value: 'Incluso',
    description: 'Roupas de cama 600 fios e toalhas de banho inclusas',
  },
  {
    label: 'Alimentos da Despensa',
    value: 'Inclusos',
    description: 'Itens não perecíveis e ovos caipiras à sua disposição',
  },
];

export const propertyAddress = {
  street: 'Rua Bom Retiro, Q. 26, L. 13',
  neighborhood: 'Chácara das Mansões',
  fullName: 'Rua Bom Retiro, Quadra 26, Lote 13 - Chácara das Mansões',
  cityRegion: 'Chácara das Mansões',
};
