import { Accommodation } from '../types';
import { PRICING_CONFIG } from '../config/constants';
import edenCoverImage from '../assets/images/imagem.exemplo.png';
import manancialCoverImage from '../assets/images/imagem1.jpg';
import manancialImg11 from '../assets/images/Design sem nome (11).jpg';
import manancialImg12 from '../assets/images/Design sem nome (12).jpg';
import manancialImg5 from '../assets/images/Design sem nome (5).jpg';
import manancialImg6 from '../assets/images/Design sem nome (6).jpg';
import manancialImg8 from '../assets/images/Design sem nome (8).jpg';

export const accommodations: Accommodation[] = [
  {
    id: 'eden',
    name: 'Cabana Éden',
    tagline: 'Refúgio exclusivo com andar superior e relaxamento total',
    capacity: 'Até 4 pessoas',
    maxGuests: PRICING_CONFIG.cabanas.maxGuests,
    highlightBadges: [
      'Hidromassagem',
      'Cadeira de massagem',
      'Videogame',
      'Smart TV 43"',
      'Cozinha completa',
      'Andar superior',
    ],
    coverImage: edenCoverImage,
    galleryImages: [
      edenCoverImage,
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
    ],
    description:
      'Um refúgio aconchegante para quem busca privacidade, conforto e uma experiência especial em meio à natureza.',
    structure: [
      {
        title: 'Quarto no Andar Superior',
        details: [
          'Cama Queen Size',
          'Lençóis 600 fios',
          'Kit de cobre-leito',
          'Coberta tamanho King',
          '4 travesseiros confortáveis',
        ],
      },
      {
        title: 'Sala & Sofá Flexível',
        details: [
          'Sofá flexível com 2 colchões de solteiro',
          'Roupas de cama completas',
          'Cobertas e travesseiros',
        ],
      },
    ],
    comfortHighlights: [
      'Cadeira de massagem vibratória para relaxamento profundo',
      'Hidromassagem privativa integrada ao ambiente de spa',
      'Cozinha completa equipada com todos os eletrodomésticos e utensílios',
      'Roupas de cama 600 fios e kit banho premium inclusos',
    ],
    entertainment: [
      'Smart TV 43"',
      'Videogame com jogos variados',
      'Jogos de tabuleiro selecionados',
      'Assistente virtual Alexa',
      'Netflix disponível',
      'YouTube disponível',
    ],
    weekdayPrice: PRICING_CONFIG.cabanas.weekdayPrice,
    weekendPrice: PRICING_CONFIG.cabanas.weekendPrice,
  },
  {
    id: 'manancial',
    name: 'Cabana Manancial',
    tagline: 'Charme rústico, mezanino e experiência dupla de hidromassagem',
    capacity: 'Até 4 pessoas',
    maxGuests: PRICING_CONFIG.cabanas.maxGuests,
    highlightBadges: [
      'Hidromassagem interna',
      'Hidromassagem externa',
      'Videogame',
      'Smart TV 43"',
      'Mezanino',
      'Cozinha completa',
    ],
    coverImage: manancialCoverImage,
    galleryImages: [
      manancialCoverImage,
      manancialImg11,
      manancialImg12,
      manancialImg5,
      manancialImg6,
      manancialImg8,
    ],
    description:
      'Uma cabana charmosa e acolhedora para viver momentos de descanso, conexão e tranquilidade.',
    structure: [
      {
        title: 'Quarto no Mezanino',
        details: [
          'Cama Queen Size',
          'Lençóis 600 fios',
          'Kit de cobre-leito',
          'Coberta tamanho King',
          '4 travesseiros confortáveis',
        ],
      },
      {
        title: 'Sofá Flexível',
        details: [
          '2 colchões de solteiro',
          'Roupas de cama',
          'Cobertas e travesseiros',
        ],
      },
    ],
    comfortHighlights: [
      'Hidromassagem interna aconchegante',
      'Hidromassagem externa ao ar livre com vista para o verde',
      'Mezanino charmoso em madeira nobre',
      'Cozinha completa e equipada para suas refeições especiais',
    ],
    spaDetails: [
      'Sais de banho relaxantes',
      'Espuma para banho aromática',
      'Toalhas felpudas',
      'Roupão aconchegante',
      'Velas aromatizadas',
    ],
    entertainment: [
      'Smart TV 43"',
      'Videogame com jogos variados',
      'Jogos de tabuleiro',
      'Alexa integrada',
      'Netflix disponível',
      'YouTube disponível',
    ],
    weekdayPrice: PRICING_CONFIG.cabanas.weekdayPrice,
    weekendPrice: PRICING_CONFIG.cabanas.weekendPrice,
  },
  {
    id: 'pedacinho-do-ceu',
    name: 'Casa Pedacinho do Céu',
    tagline: 'Espaço generoso para famílias, grupos e seu melhor amigo de quatro patas',
    capacity: 'Até 8 pessoas',
    maxGuests: PRICING_CONFIG.casa.maxGuests,
    isPetFriendly: true,
    highlightBadges: [
      'PET FRIENDLY',
      '3 Quartos',
      'Hidromassagem',
      '2 Fogões a lenha',
      'Churrasqueira',
      'Cozinha completa',
    ],
    coverImage:
      'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=1600&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80',
    ],
    description:
      'Uma casa espaçosa para famílias e grupos que desejam aproveitar juntos uma experiência confortável e especial em meio à natureza.',
    structure: [
      {
        title: 'Quarto Casal 01',
        details: [
          'Cama de casal',
          'Lençóis 600 fios',
          'Kit de cobre-leito',
          'Coberta King',
          '4 travesseiros',
        ],
      },
      {
        title: 'Quarto Casal 02',
        details: [
          'Cama de casal',
          'Lençóis 600 fios',
          'Kit de cobre-leito',
          'Coberta King',
          '4 travesseiros',
        ],
      },
      {
        title: 'Quarto Solteiro',
        details: [
          'Cama de solteiro',
          'Colchonete extra',
          'Kit de cama com 3 peças 600 fios',
          'Coberta tamanho casal',
        ],
      },
    ],
    comfortHighlights: [
      'Totalmente Pet Friendly: seu pet é recebido com carinho e muito espaço verde',
      'Hidromassagem privativa para relaxar após um dia ao ar livre',
      '2 Fogões a lenha tradicionais para saborear a autêntica culinária da fazenda',
      'Churrasqueira completa para momentos de confraternização em família',
      'Umidificador e aromatizador de ambientes',
      'Repelentes disponíveis',
    ],
    entertainment: [
      'Smart TV 43"',
      'Videogame',
      'Jogos de tabuleiro',
      'Alexa',
      'Netflix',
      'YouTube',
    ],
    weekdayPrice: PRICING_CONFIG.casa.weekdayPrice,
    weekendPrice: PRICING_CONFIG.casa.weekendPrice,
  },
];
