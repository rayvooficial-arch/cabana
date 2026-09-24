import { GalleryPhoto } from '../types';
import { EDEN_PHOTOS, MANANCIAL_PHOTOS } from './accommodations';

export const galleryPhotos: GalleryPhoto[] = [
  // --- EXPERIÊNCIA ---
  {
    id: 'exp-1',
    title: 'Cinema ao Ar Livre com Telão de 100"',
    category: 'experiencia',
    categoryLabel: 'Experiência',
    url: 'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=1200&q=80',
    description: 'Sessões sob as estrelas com projetor de alta definição e som envolvente no campo.',
  },
  {
    id: 'exp-2',
    title: 'Fazendinha: Casal de Mini Cabras',
    category: 'experiencia',
    categoryLabel: 'Experiência',
    url: 'https://images.unsplash.com/photo-1535083783855-76ae62b2914e?auto=format&fit=crop&w=1200&q=80',
    description: 'Interação carinhosa e direta com nossos mini animais para adultos e crianças.',
  },
  {
    id: 'exp-3',
    title: 'Noites Aconchegantes ao Redor do Fogareiro',
    category: 'experiencia',
    categoryLabel: 'Experiência',
    url: 'https://images.unsplash.com/photo-1525253086316-d0c936c81468?auto=format&fit=crop&w=1200&q=80',
    description: 'O calor reconfortante do fogo de chão para celebrar momentos inesquecíveis.',
  },
  {
    id: 'exp-4',
    title: 'Redários sob a Sombra das Árvores',
    category: 'experiencia',
    categoryLabel: 'Experiência',
    url: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=80',
    description: 'O silêncio, a brisa fresca e o som suave dos pássaros para desacelerar a mente.',
  },
  {
    id: 'exp-5',
    title: 'Horta Orgânica & Pomar',
    category: 'experiencia',
    categoryLabel: 'Experiência',
    url: 'https://images.unsplash.com/photo-1592417817098-8f3d6eb22509?auto=format&fit=crop&w=1200&q=80',
    description: 'Aromas frescos do campo e conexão genuína com a terra e cultivo.',
  },
  {
    id: 'exp-6',
    title: 'Pesque e Solte Contemplativo',
    category: 'experiencia',
    categoryLabel: 'Experiência',
    url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
    description: 'Tranquilidade e lazer esportivo cercado pela mata nativa.',
  },
  {
    id: 'exp-7',
    title: 'Mini Horse & Animais do Campo',
    category: 'experiencia',
    categoryLabel: 'Experiência',
    url: 'https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?auto=format&fit=crop&w=1200&q=80',
    description: 'Nosso dócil mini horse que encanta a todos com sua calma e carisma.',
  },
  {
    id: 'exp-8',
    title: 'Galinheiro & Ovos Caipiras Frescos',
    category: 'experiencia',
    categoryLabel: 'Experiência',
    url: 'https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?auto=format&fit=crop&w=1200&q=80',
    description: 'Galinhas poedeiras criadas soltas, fornecendo ovos frescos diretamente para você.',
  },

  // --- CABANA ÉDEN ---
  ...EDEN_PHOTOS.map((photo, index) => ({
    id: `eden-${index + 1}`,
    title: photo.title,
    category: 'eden' as const,
    categoryLabel: 'Cabana Éden',
    url: photo.url,
    description: photo.description,
  })),

  // --- CABANA MANANCIAL ---
  ...MANANCIAL_PHOTOS.map((photo, index) => ({
    id: `manancial-${index + 1}`,
    title: photo.title,
    category: 'manancial' as const,
    categoryLabel: 'Cabana Manancial',
    url: photo.url,
    description: photo.description,
  })),

  // --- CASA PEDACINHO DO CÉU ---
  {
    id: 'pedacinho-1',
    title: 'Casa Pedacinho do Céu — Vista Principal',
    category: 'pedacinho-do-ceu',
    categoryLabel: 'Casa Pedacinho do Céu',
    url: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=1200&q=80',
    description: 'Ampla residência de campo para até 8 pessoas, rodeada por gramado generoso.',
  },
  {
    id: 'pedacinho-2',
    title: 'Totalmente Pet Friendly',
    category: 'pedacinho-do-ceu',
    categoryLabel: 'Casa Pedacinho do Céu',
    url: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=1200&q=80',
    description: 'Seu pet é muito bem-vindo para brincar livremente no gramado e junto à família.',
  },
  {
    id: 'pedacinho-3',
    title: 'Quarto Casal 01',
    category: 'pedacinho-do-ceu',
    categoryLabel: 'Casa Pedacinho do Céu',
    url: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=80',
    description: 'Cama de casal com lençóis 600 fios, kit de cobre-leito e coberta King.',
  },
  {
    id: 'pedacinho-4',
    title: 'Quarto Casal 02',
    category: 'pedacinho-do-ceu',
    categoryLabel: 'Casa Pedacinho do Céu',
    url: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=80',
    description: 'Segundo quarto de casal com total conforto térmico e acústico do campo.',
  },
  {
    id: 'pedacinho-5',
    title: 'Fogões a Lenha & Churrasqueira',
    category: 'pedacinho-do-ceu',
    categoryLabel: 'Casa Pedacinho do Céu',
    url: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80',
    description: '2 fogões a lenha autênticos e churrasqueira para celebrar a gastronomia tradicional.',
  },
  {
    id: 'pedacinho-6',
    title: 'Sala de Estar Integrada e Climatizada',
    category: 'pedacinho-do-ceu',
    categoryLabel: 'Casa Pedacinho do Céu',
    url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    description: 'Smart TV 43", videogame, Alexa, jogos de tabuleiro, umidificador e aromatizador.',
  },
];
