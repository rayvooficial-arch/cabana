export interface AccommodationPhotoItem {
  url: string;
  title: string;
  category: 'externa' | 'interna';
  description: string;
}

export interface Accommodation {
  id: 'eden' | 'manancial' | 'pedacinho-do-ceu';
  name: string;
  tagline: string;
  capacity: string;
  maxGuests: number;
  highlightBadges: string[];
  isPetFriendly?: boolean;
  coverImage: string;
  galleryImages: string[];
  detailedPhotos?: AccommodationPhotoItem[];
  description: string;
  structure: {
    title: string;
    details: string[];
  }[];
  comfortHighlights: string[];
  entertainment: string[];
  spaDetails?: string[];
  weekdayPrice: number;
  weekendPrice: number;
}

export interface IncludedExperience {
  id: string;
  title: string;
  subtitle: string;
  iconName: string;
  image: string;
  badge?: string;
}

export interface GalleryPhoto {
  id: string;
  title: string;
  category: 'experiencia' | 'eden' | 'manancial' | 'pedacinho-do-ceu';
  categoryLabel: string;
  url: string;
  description: string;
}

export interface KitchenCategory {
  categoryTitle: string;
  items: string[];
}

export interface FarmAnimal {
  name: string;
  tag: string;
  description: string;
  iconName: string;
}
