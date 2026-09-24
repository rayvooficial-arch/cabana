import { Accommodation, AccommodationPhotoItem } from '../types';
import { PRICING_CONFIG } from '../config/constants';

// Fotos oficiais da Éden, na sequência: fachada, deck, sala, cozinha e quarto.
const edenImgFachada = '/accommodations/eden/foto-6.webp';
const edenImgDeckJacuzzi = '/accommodations/eden/foto-11.webp';
const edenImgSalaEstar = '/accommodations/eden/foto-5.webp';
const edenImgPoltronaMassagem = '/accommodations/eden/foto-4.webp';
const edenImgMesaJantar = '/accommodations/eden/foto-9.webp';
const edenImgCozinha = '/accommodations/eden/foto-8.webp';
const edenImgCantinhoPipoca = '/accommodations/eden/foto-7.webp';
const edenImgTvVideogame = '/accommodations/eden/foto-10.webp';
const edenImgQuartoSuperior = '/accommodations/eden/foto-12.webp';

// Foto Cabana Manancial
import manancialCoverImage from '../assets/images/imagem1.jpg';

export const MANANCIAL_PHOTOS: AccommodationPhotoItem[] = [
  { url: manancialCoverImage, title: 'Cabana Manancial — Vista Externa', category: 'externa', description: 'A fachada da cabana em meio à natureza.' },
  { url: '/accommodations/manancial/foto-15.webp', title: 'Deck e Hidromassagem Externa', category: 'externa', description: 'O deck privativo e a hidromassagem ao ar livre.' },
  { url: '/accommodations/manancial/foto-21.webp', title: 'Vista Geral do Interior', category: 'interna', description: 'Ambientes integrados e mezanino em madeira.' },
  { url: '/accommodations/manancial/foto-19.webp', title: 'Sala de Estar', category: 'interna', description: 'Sofá e detalhes aconchegantes da sala.' },
  { url: '/accommodations/manancial/foto-22.webp', title: 'Smart TV e Videogame', category: 'interna', description: 'Espaço de entretenimento com televisão e controles.' },
  { url: '/accommodations/manancial/foto-16.webp', title: 'Mesa de Jantar', category: 'interna', description: 'Mesa posta para refeições na cabana.' },
  { url: '/accommodations/manancial/foto-20.webp', title: 'Cozinha Integrada', category: 'interna', description: 'Cozinha integrada à área de refeições.' },
  { url: '/accommodations/manancial/foto-17.webp', title: 'Cozinha Equipada', category: 'interna', description: 'Bancada, cooktop e utensílios à disposição.' },
  { url: '/accommodations/manancial/foto-14.webp', title: 'Hidromassagem Interna', category: 'interna', description: 'Banheira de hidromassagem no interior da cabana.' },
  { url: '/accommodations/manancial/foto-18.webp', title: 'Quarto no Mezanino', category: 'interna', description: 'Cama no mezanino sob o telhado da cabana.' },
];

export const PEDACINHO_PHOTOS: AccommodationPhotoItem[] = [
  { url: '/accommodations/pedacinho-do-ceu/fachada.webp', title: 'Fachada da Casa', category: 'externa', description: 'A entrada da Casa Pedacinho do Céu cercada pelo jardim.' },
  { url: '/accommodations/pedacinho-do-ceu/varanda.webp', title: 'Varanda e Jardim', category: 'externa', description: 'Varanda coberta com vista para o jardim à noite.' },
  { url: '/accommodations/pedacinho-do-ceu/estar-externo.webp', title: 'Espaço de Descanso', category: 'externa', description: 'Poltronas e sofá na área coberta da casa.' },
  { url: '/accommodations/pedacinho-do-ceu/refeicoes.webp', title: 'Área de Refeições', category: 'externa', description: 'Mesa para reunir família e amigos na área coberta.' },
  { url: '/accommodations/pedacinho-do-ceu/sala.webp', title: 'Sala de Estar', category: 'interna', description: 'Sala com sofás para momentos de descanso em grupo.' },
  { url: '/accommodations/pedacinho-do-ceu/cozinha.webp', title: 'Cozinha', category: 'interna', description: 'Cozinha com bancada e área de preparo de refeições.' },
  { url: '/accommodations/pedacinho-do-ceu/quarto-1.webp', title: 'Quarto de Casal', category: 'interna', description: 'Quarto com cama de casal e iluminação acolhedora.' },
  { url: '/accommodations/pedacinho-do-ceu/quarto-2.webp', title: 'Segundo Quarto de Casal', category: 'interna', description: 'Outro quarto de casal da casa.' },
  { url: '/accommodations/pedacinho-do-ceu/banheiro.webp', title: 'Banheiro', category: 'interna', description: 'Banheiro com box de vidro e bancada.' },
];

export const EDEN_PHOTOS: AccommodationPhotoItem[] = [
  {
    url: edenImgFachada,
    title: 'Fachada Iluminada à Noite',
    category: 'externa',
    description: 'A charmosa cabana estilo A-frame iluminada ao anoitecer, com varanda privativa em madeira, cadeiras de descanso e placa oficial Cabana Éden.',
  },
  {
    url: edenImgDeckJacuzzi,
    title: 'Deck & Hidromassagem Externa Aquecida',
    category: 'externa',
    description: 'Banho de imersão relaxante ao ar livre sob o luar das Mansões, integrado ao deck de madeira privativo.',
  },
  {
    url: edenImgSalaEstar,
    title: 'Sala de Estar & Sofá Aconchegante',
    category: 'interna',
    description: 'Recepção aconchegante com sofá em linho verde, almofadas botânicas e quadros decorativos na parede em madeira nobre.',
  },
  {
    url: edenImgPoltronaMassagem,
    title: 'Cadeira de Massagem & Espaço Relax',
    category: 'interna',
    description: 'Poltrona reclinável de massagem ergonômica com manta macia e apoio para pés, ideal para descanso profundo.',
  },
  {
    url: edenImgMesaJantar,
    title: 'Mesa de Jantar',
    category: 'interna',
    description: 'Mesa de refeições com cadeiras de madeira e detalhes decorativos.',
  },
  {
    url: edenImgCozinha,
    title: 'Cozinha Completa Equipada',
    category: 'interna',
    description: 'Cozinha com bancada, cooktop por indução e pia.',
  },
  {
    url: edenImgCantinhoPipoca,
    title: 'Cantinho Gourmet, Pipoca & Taças',
    category: 'interna',
    description: 'Cantinho de pipoca, taças e cafeteira.',
  },
  {
    url: edenImgTvVideogame,
    title: 'Smart TV 43" & Videogame',
    category: 'interna',
    description: 'Smart TV e videogame no espaço de entretenimento.',
  },
  {
    url: edenImgQuartoSuperior,
    title: 'Quarto no Andar Superior',
    category: 'interna',
    description: 'Suíte exclusiva no mezanino triangular com Cama Queen Size, lençóis 600 fios, cobertas king e luminárias acolhedoras de cabeceira.',
  },
];

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
    coverImage: edenImgFachada,
    galleryImages: [
      edenImgFachada,
      edenImgDeckJacuzzi,
      edenImgSalaEstar,
      edenImgPoltronaMassagem,
      edenImgMesaJantar,
      edenImgCozinha,
      edenImgCantinhoPipoca,
      edenImgTvVideogame,
      edenImgQuartoSuperior,
    ],
    detailedPhotos: EDEN_PHOTOS,
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
      ...MANANCIAL_PHOTOS.map((photo) => photo.url),
    ],
    detailedPhotos: MANANCIAL_PHOTOS,
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
    coverImage: PEDACINHO_PHOTOS[0].url,
    galleryImages: PEDACINHO_PHOTOS.map((photo) => photo.url),
    detailedPhotos: PEDACINHO_PHOTOS,
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
