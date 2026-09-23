import React, { useEffect, useState } from 'react';
import {
  Baby,
  Bath,
  ChevronLeft,
  ChevronRight,
  Film,
  Flame,
  Heart,
  Images,
  Trees,
  Utensils,
  Waves,
  X,
} from 'lucide-react';
import { EXPERIENCE_SPRITE } from '../data/experienceMedia';
import { HYDRO_SPRITE } from '../data/hydroMedia';
import { CINEMA_SPRITE } from '../data/cinemaMedia';
import { FISHING_SPRITE } from '../data/fishingMedia';
import { HYDRO_COVER } from '../data/hydroCoverHQ';
import { FOGUEIRA_REDARIO } from '../data/fogueiraRedario';
import { FOGUEIRA_NOITE } from '../data/fogueiraNoite';

interface GalleryPhoto {
  title: string;
  caption: string;
  row?: number;
  col?: number;
  src?: string;
  position?: string;
  size?: string;
}

interface GalleryGroup {
  title: string;
  shortDescription: string;
  icon: React.ComponentType<{ className?: string }>;
  photos: GalleryPhoto[];
  coverSrc?: string;
  coverPosition?: string;
  coverSize?: string;
}

const galleries: GalleryGroup[] = [
  {
    title: 'Hidromassagens',
    shortDescription: 'Privativas nas acomodações',
    icon: Bath,
    coverSrc: HYDRO_COVER,
    coverPosition: 'center 55%',
    photos: [
      {
        title: 'Hidromassagem interna',
        caption: 'Cabana Manancial',
        src: HYDRO_SPRITE,
        position: 'left center',
        size: '300% auto',
      },
      {
        title: 'Hidromassagem ao ar livre',
        caption: 'Deck da Cabana Manancial',
        src: HYDRO_SPRITE,
        position: 'center center',
        size: '300% auto',
      },
      {
        title: 'Hidromassagem no deck',
        caption: 'Cabana Éden à noite',
        src: HYDRO_SPRITE,
        position: 'right center',
        size: '300% auto',
      },
    ],
  },
  {
    title: 'Cinema ao ar livre',
    shortDescription: 'Telão em meio à natureza',
    icon: Film,
    coverSrc: CINEMA_SPRITE,
    coverPosition: 'left center',
    coverSize: '300% auto',
    photos: [
      {
        title: 'Cinema ao ar livre',
        caption: 'Estrutura do cinema durante o dia',
        src: CINEMA_SPRITE,
        position: 'left center',
        size: '300% auto',
      },
      {
        title: 'Sessão de cinema',
        caption: 'Tela preparada para a sessão',
        src: CINEMA_SPRITE,
        position: 'center center',
        size: '300% auto',
      },
      {
        title: 'Cinema à noite',
        caption: 'Estrutura iluminada em meio à natureza',
        src: CINEMA_SPRITE,
        position: 'right center',
        size: '300% auto',
      },
    ],
  },
  {
    title: 'Pesque e solte',
    shortDescription: 'Pesca recreativa no lago',
    icon: Waves,
    coverSrc: FISHING_SPRITE,
    coverPosition: 'right center',
    coverSize: '300% auto',
    photos: [
      {
        title: 'Pesque e solte',
        caption: 'Experiência de pesca e solte junto ao lago',
        src: FISHING_SPRITE,
        position: 'right center',
        size: '300% auto',
      },
      {
        title: 'Pesca no lago',
        caption: 'Momentos de pesca na propriedade',
        src: FISHING_SPRITE,
        position: 'center center',
        size: '300% auto',
      },
      {
        title: 'Espécies do lago',
        caption: 'Peixes disponíveis para pesca e solte',
        src: FISHING_SPRITE,
        position: 'left center',
        size: '300% auto',
      },
    ],
  },
  {
    title: 'Fogueira e descanso',
    shortDescription: 'Fogo, redários e área verde',
    icon: Flame,
    coverSrc: EXPERIENCE_SPRITE,
    coverPosition: '100% 100%',
    coverSize: '300% 400%',
    photos: [
      {
        title: 'Mesas de piquenique',
        caption: 'Área verde e espaço para descansar',
        row: 3,
        col: 2,
      },
      {
        title: 'Redário',
        caption: 'Um canto para ler, relaxar e aproveitar a noite',
        src: FOGUEIRA_REDARIO,
        position: 'center',
      },
      {
        title: 'Noite junto à fogueira',
        caption: 'Área de fogo ao ar livre em frente às cabanas',
        src: FOGUEIRA_NOITE,
        position: 'center',
      },
    ],
  },
  {
    title: 'Fazendinha',
    shortDescription: 'Mini animais e contato com a natureza',
    icon: Heart,
    coverSrc: '/fazendinha-coelhos.webp',
    coverPosition: 'center 60%',
    photos: [
      {
        title: 'Coelhinhos da fazendinha',
        caption: 'Contato com os mini animais da propriedade',
        src: '/fazendinha-coelhos.webp',
        position: 'center 60%',
      },
      {
        title: 'Patinhos no lago',
        caption: 'Animais da fazendinha em meio à natureza',
        src: '/fazendinha-patinhos.webp',
        position: 'center 58%',
      },
      {
        title: 'Cabritinhos',
        caption: 'Mini animais da fazendinha',
        src: '/fazendinha-cabras.webp',
        position: 'center 48%',
      },
    ],
  },
];

const otherExperiences = [
  { title: 'Playground e campinho', icon: Baby },
  { title: 'Churrasqueiras', icon: Utensils },
  { title: 'Áreas verdes', icon: Trees },
];

const photoStyle = (
  photo: GalleryPhoto,
  directImageFit: 'cover' | 'contain' = 'cover'
): React.CSSProperties => {
  if (photo.src) {
    return {
      backgroundImage: `url(${photo.src})`,
      backgroundSize: photo.size ?? directImageFit,
      backgroundPosition: photo.position ?? 'center',
      backgroundRepeat: 'no-repeat',
    };
  }

  return {
    backgroundImage: `url(${EXPERIENCE_SPRITE})`,
    backgroundSize: '300% 400%',
    backgroundPosition: `${(photo.col ?? 0) * 50}% ${(photo.row ?? 0) * (100 / 3)}%`,
    backgroundRepeat: 'no-repeat',
  };
};

export const ExperiencesSection: React.FC = () => {
  const [activeGroup, setActiveGroup] = useState<number | null>(null);
  const [activePhoto, setActivePhoto] = useState(0);

  const selectedGroup = activeGroup === null ? null : galleries[activeGroup];

  const openGallery = (groupIndex: number) => {
    setActiveGroup(groupIndex);
    setActivePhoto(0);
  };

  const closeGallery = () => {
    setActiveGroup(null);
    setActivePhoto(0);
  };

  const showPrevious = () => {
    if (!selectedGroup) return;
    setActivePhoto((current) =>
      (current - 1 + selectedGroup.photos.length) % selectedGroup.photos.length
    );
  };

  const showNext = () => {
    if (!selectedGroup) return;
    setActivePhoto((current) => (current + 1) % selectedGroup.photos.length);
  };

  useEffect(() => {
    if (activeGroup === null) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeGallery();
      if (event.key === 'ArrowLeft') showPrevious();
      if (event.key === 'ArrowRight') showNext();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [activeGroup, selectedGroup]);

  return (
    <section id="estrutura" className="py-16 sm:py-20 bg-[#F3ECE2] text-[#2C332D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-8 sm:mb-10">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8B6A2F]">
            Lazer na propriedade
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#14241A] mt-2 mb-3">
            Veja o que você encontra por aqui
          </h2>
          <p className="text-sm sm:text-base text-[#526048] leading-relaxed max-w-2xl">
            Clique em uma experiência para abrir as fotos reais daquele espaço.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-3 sm:gap-5">
          {galleries.map((group, groupIndex) => {
            const Icon = group.icon;
            const cover: GalleryPhoto = group.coverSrc
              ? {
                  title: group.photos[0].title,
                  caption: group.photos[0].caption,
                  src: group.coverSrc,
                  position: group.coverPosition ?? 'center',
                  size: group.coverSize,
                }
              : group.photos[0];

            return (
              <button
                key={group.title}
                type="button"
                onClick={() => openGallery(groupIndex)}
                className="group relative text-left overflow-hidden rounded-2xl sm:rounded-3xl border border-[#D9CDBE] bg-[#14241A] shadow-sm hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#8B6A2F] focus:ring-offset-2 focus:ring-offset-[#F3ECE2] transition-all cursor-pointer"
                aria-label={`Ver fotos de ${group.title}`}
              >
                <div
                  role="img"
                  aria-label={cover.title}
                  style={photoStyle(cover)}
                  className="aspect-[3/4] w-full transition-transform duration-500 group-hover:scale-[1.03]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/15 to-transparent" />

                <div className="absolute top-3 right-3 inline-flex items-center gap-1.5 rounded-full bg-black/45 backdrop-blur-md border border-white/20 px-2.5 py-1.5 text-[10px] sm:text-xs font-semibold text-white">
                  <Images className="w-3.5 h-3.5" />
                  {group.photos.length} fotos
                </div>

                <div className="absolute inset-x-0 bottom-0 p-3.5 sm:p-5 text-white">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/15 backdrop-blur-sm flex items-center justify-center mb-2.5">
                    <Icon className="w-4 h-4 text-[#E8D4A2]" />
                  </div>
                  <h3 className="font-serif text-base sm:text-xl font-bold leading-tight">
                    {group.title}
                  </h3>
                  <p className="hidden sm:block text-xs text-white/70 mt-1">
                    {group.shortDescription}
                  </p>
                  <span className="inline-block text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-[#E8D4A2] mt-2.5">
                    Ver fotos →
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        <div className="mt-6 sm:mt-8 flex flex-wrap gap-2">
          {otherExperiences.map(({ title, icon: Icon }) => (
            <span
              key={title}
              className="inline-flex items-center gap-2 rounded-full border border-[#D9CDBE] bg-white/70 px-3.5 py-2 text-xs sm:text-sm font-medium text-[#445247]"
            >
              <Icon className="w-4 h-4 text-[#8B6A2F]" />
              {title}
            </span>
          ))}
        </div>
      </div>

      {selectedGroup && (
        <div
          className="fixed inset-0 z-[90] bg-black/92 backdrop-blur-md flex items-center justify-center p-3 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-label={`Galeria de ${selectedGroup.title}`}
          onClick={(event) => {
            if (event.target === event.currentTarget) closeGallery();
          }}
        >
          <button
            type="button"
            onClick={closeGallery}
            aria-label="Fechar galeria"
            className="absolute top-4 right-4 sm:top-6 sm:right-6 z-20 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white flex items-center justify-center cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          <button
            type="button"
            onClick={showPrevious}
            aria-label="Foto anterior"
            className="absolute left-2 sm:left-6 z-20 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-black/45 hover:bg-black/70 border border-white/20 text-white flex items-center justify-center cursor-pointer"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <div className="w-full max-w-xl flex flex-col items-center">
            <div
              role="img"
              aria-label={`${selectedGroup.photos[activePhoto].title} — ${selectedGroup.photos[activePhoto].caption}`}
              style={photoStyle(selectedGroup.photos[activePhoto], 'contain')}
              className="w-[min(76vw,430px)] aspect-[3/4] rounded-2xl sm:rounded-3xl shadow-2xl bg-[#14241A]"
            />

            <div className="text-center text-white mt-4 px-12">
              <span className="text-[11px] uppercase tracking-[0.18em] text-[#D8B466] font-semibold">
                {activePhoto + 1} de {selectedGroup.photos.length}
              </span>
              <strong className="font-serif text-xl sm:text-2xl block mt-1">
                {selectedGroup.photos[activePhoto].title}
              </strong>
              <span className="text-sm text-white/65 mt-1 block">
                {selectedGroup.photos[activePhoto].caption}
              </span>
            </div>
          </div>

          <button
            type="button"
            onClick={showNext}
            aria-label="Próxima foto"
            className="absolute right-2 sm:right-6 z-20 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-black/45 hover:bg-black/70 border border-white/20 text-white flex items-center justify-center cursor-pointer"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      )}
    </section>
  );
};
