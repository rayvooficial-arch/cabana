import { Accommodation, AccommodationPhotoItem } from '../types';
import { PRICING_CONFIG } from '../config/constants';

// Fotos oficiais da Éden, na sequência: fachada, deck, sala, cozinha e quarto.
const edenImgFachada = '/accommodations/eden/quadradas/01-fachada-nova.jpg';
const edenImgDeckJacuzzi = '/accommodations/eden/quadradas/02-deck-hidromassagem.webp';
const edenImgSalaEstar = '/accommodations/eden/quadradas/03-sala-estar.webp';
const edenImgVistaInterna = '/accommodations/eden/quadradas/04-vista-interna.webp';
const edenImgPoltronaMassagem = '/accommodations/eden/quadradas/05-poltrona-massagem.webp';
const edenImgMesaJantar = '/accommodations/eden/quadradas/06-mesa-jantar.webp';
const edenImgCozinha = '/accommodations/eden/quadradas/07-cozinha.webp';
const edenImgCantinhoPipoca = '/accommodations/eden/quadradas/08-cantinho-gourmet.webp';
const edenImgQuartoSuperior = '/accommodations/eden/quadradas/09-quarto-superior.webp';
const edenImgQuartoTv = '/accommodations/eden/quadradas/10-quarto-tv.webp';

// Fotos oficiais da Cabana Manancial em formato quadrado.
const manancialCoverImage = '/accommodations/manancial/quadradas/01-fachada-nova.jpg';

export const MANANCIAL_PHOTOS: AccommodationPhotoItem[] = [
  { url: manancialCoverImage, title: 'Fachada da Cabana Manancial', category: 'externa', description: 'A fachada da Cabana Manancial integrada à natureza.' },
  { url: '/accommodations/manancial/quadradas/02-deck-hidromassagem.webp', title: 'Deck e Hidromassagem Externa', category: 'externa', description: 'O deck privativo e a hidromassagem ao ar livre.' },
  { url: '/accommodations/manancial/quadradas/03-vista-interior.webp', title: 'Vista Geral do Interior', category: 'interna', description: 'Ambientes integrados e mezanino em madeira.' },
  { url: '/accommodations/manancial/quadradas/04-sala-estar.webp', title: 'Sala de Estar', category: 'interna', description: 'Sofá e detalhes aconchegantes da sala.' },
  { url: '/accommodations/manancial/quadradas/05-tv-videogame.webp', title: 'Smart TV e Videogame', category: 'interna', description: 'Espaço de entretenimento com televisão e controles.' },
  { url: '/accommodations/manancial/quadradas/06-mesa-jantar.webp', title: 'Mesa de Jantar', category: 'interna', description: 'Mesa posta para refeições na cabana.' },
  { url: '/accommodations/manancial/quadradas/07-cozinha-integrada.webp', title: 'Cozinha Integrada', category: 'interna', description: 'Cozinha integrada à área de refeições.' },
  { url: '/accommodations/manancial/quadradas/08-cozinha-equipada.webp', title: 'Cozinha Equipada', category: 'interna', description: 'Bancada, cooktop e utensílios à disposição.' },
  { url: '/accommodations/manancial/quadradas/09-hidromassagem-interna.webp', title: 'Hidromassagem Interna', category: 'interna', description: 'Banheira de hidromassagem no interior da cabana.' },
  { url: '/accommodations/manancial/quadradas/10-quarto-mezanino.webp', title: 'Quarto no Mezanino', category: 'interna', description: 'Cama no mezanino sob o telhado da cabana.' },
];

export const PEDACINHO_PHOTOS: AccommodationPhotoItem[] = [
  { url: '/accommodations/pedacinho-do-ceu/01-fachada.webp', title: 'Fachada da Casa', category: 'externa', description: 'A Casa Pedacinho do Céu iluminada e cercada pelo jardim.' },
  { url: '/accommodations/pedacinho-do-ceu/02-hidromassagem-externa.webp', title: 'Hidromassagem no Deck', category: 'externa', description: 'Banheira externa borbulhante integrada ao deck de madeira.' },
  { url: '/accommodations/pedacinho-do-ceu/03-varanda-jardim.webp', title: 'Varanda e Jardim', category: 'externa', description: 'Varanda coberta com vista para a área verde da propriedade.' },
  { url: '/accommodations/pedacinho-do-ceu/04-varanda-refeicoes.webp', title: 'Varanda para Refeições', category: 'externa', description: 'Mesa ampla para reunir família e amigos na varanda.' },
  { url: '/accommodations/pedacinho-do-ceu/05-area-gourmet.webp', title: 'Área Gourmet', category: 'externa', description: 'Balcão e espaço gourmet integrados à varanda.' },
  { url: '/accommodations/pedacinho-do-ceu/06-varanda-estar.webp', title: 'Espaço de Descanso', category: 'externa', description: 'Poltronas confortáveis na área coberta da casa.' },
  { url: '/accommodations/pedacinho-do-ceu/07-sala-estar.webp', title: 'Sala de Estar', category: 'interna', description: 'Sala com sofá, televisão e ambiente acolhedor.' },
  { url: '/accommodations/pedacinho-do-ceu/08-sala-entrada.webp', title: 'Sala e Entrada', category: 'interna', description: 'Ambiente de estar junto à entrada principal da casa.' },
  { url: '/accommodations/pedacinho-do-ceu/09-area-refeicoes.webp', title: 'Área de Refeições', category: 'interna', description: 'Mesa preparada ao lado da cozinha e da área gourmet.' },
  { url: '/accommodations/pedacinho-do-ceu/10-cozinha-principal.webp', title: 'Cozinha Principal', category: 'interna', description: 'Cozinha completa com armários, fogão e geladeira.' },
  { url: '/accommodations/pedacinho-do-ceu/11-cozinha-completa.webp', title: 'Cozinha Completa', category: 'interna', description: 'Ampla bancada e estrutura para preparar as refeições.' },
  { url: '/accommodations/pedacinho-do-ceu/12-cozinha-equipada.webp', title: 'Cozinha Equipada', category: 'interna', description: 'Utensílios e eletrodomésticos disponíveis para a estadia.' },
  { url: '/accommodations/pedacinho-do-ceu/13-quarto-casal-1.webp', title: 'Primeiro Quarto de Casal', category: 'interna', description: 'Quarto de casal claro, confortável e climatizado.' },
  { url: '/accommodations/pedacinho-do-ceu/14-quarto-casal-2.webp', title: 'Segundo Quarto de Casal', category: 'interna', description: 'Quarto de casal aconchegante com armários planejados.' },
  { url: '/accommodations/pedacinho-do-ceu/15-quarto-3.webp', title: 'Terceiro Quarto', category: 'interna', description: 'Terceiro quarto confortável e climatizado.' },
];

export const EDEN_PHOTOS: AccommodationPhotoItem[] = [
  {
    url: edenImgFachada,
    title: 'Fachada da Cabana Éden',
    category: 'externa',
    description: 'A fachada da Cabana Éden em meio à natureza, com sua arquitetura acolhedora em madeira.',
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
    url: edenImgVistaInterna,
    title: 'Vista Integrada da Cabana',
    category: 'interna',
    description: 'Sala, espaço de refeições e cozinha reunidos em um ambiente acolhedor.',
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
    url: edenImgQuartoSuperior,
    title: 'Quarto no Andar Superior',
    category: 'interna',
    description: 'Suíte exclusiva no mezanino triangular com Cama Queen Size, lençóis 600 fios, cobertas king e luminárias acolhedoras de cabeceira.',
  },
  {
    url: edenImgQuartoTv,
    title: 'Quarto Superior com TV',
    category: 'interna',
    description: 'Quarto no mezanino com cama de casal, televisão e estrutura em madeira.',
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
      edenImgVistaInterna,
      edenImgPoltronaMassagem,
      edenImgMesaJantar,
      edenImgCozinha,
      edenImgCantinhoPipoca,
      edenImgQuartoSuperior,
      edenImgQuartoTv,
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
