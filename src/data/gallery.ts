import { GalleryPhoto } from '../types';
import { EDEN_PHOTOS, MANANCIAL_PHOTOS, PEDACINHO_PHOTOS } from './accommodations';

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
  ...PEDACINHO_PHOTOS.map((photo, index) => ({
    id: `pedacinho-${index + 1}`,
    title: photo.title,
    category: 'pedacinho-do-ceu' as const,
    categoryLabel: 'Casa Pedacinho do Céu',
    url: photo.url,
    description: photo.description,
  })),
];
