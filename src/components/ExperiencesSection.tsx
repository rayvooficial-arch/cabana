import React, { useEffect, useState } from 'react';
import {
  Baby,
  Bath,
  ChevronLeft,
  ChevronRight,
  Flame,
  Heart,
  Maximize2,
  Trees,
  Utensils,
  Waves,
  X,
} from 'lucide-react';

const SPRITE_URL = '/experiencias-cabana-mansoes.webp';

interface GalleryPhoto {
  title: string;
  caption: string;
  row: number;
  col: number;
}

interface GalleryGroup {
  title: string;
  description: string;
  photos: GalleryPhoto[];
}

const galleries: GalleryGroup[] = [
  {
    title: 'Hidromassagens privativas',
    description: 'Opções de hidromassagem integradas às acomodações, para aproveitar de dia ou à noite.',
    photos: [
      { title: 'Hidromassagem no deck', caption: 'Cabana Éden à noite', row: 0, col: 0 },
      { title: 'Hidromassagem ao ar livre', caption: 'Deck da Cabana Manancial', row: 0, col: 1 },
      { title: 'Hidromassagem interna', caption: 'Cabana Manancial', row: 0, col: 2 },
    ],
  },
  {
    title: 'Cinema ao ar livre',
    description: 'Um espaço em madeira, cercado pela natureza, preparado para sessões ao ar livre.',
    photos: [
      { title: 'Cinema das Mansões', caption: 'Estrutura iluminada à noite', row: 1, col: 0 },
      { title: 'Sessão de cinema', caption: 'Tela preparada para a sessão', row: 1, col: 1 },
      { title: 'Cinema durante o dia', caption: 'Vista completa da estrutura', row: 1, col: 2 },
    ],
  },
  {
    title: 'Pesque e solte',
    description: 'O lago faz parte da experiência da propriedade, com espaço preparado para pesca recreativa.',
    photos: [
      { title: 'Pesca no lago', caption: 'Momentos no deck do pesqueiro', row: 2, col: 0 },
      { title: 'Pesque e solte', caption: 'Experiência junto ao lago', row: 2, col: 1 },
      { title: 'Espécies do lago', caption: 'Informações disponíveis no pesqueiro', row: 2, col: 2 },
    ],
  },
  {
    title: 'Fogueira e áreas de descanso',
    description: 'Espaços para desacelerar: fogo, redários e mesas externas espalhadas pela área verde.',
    photos: [
      { title: 'Noite junto à fogueira', caption: 'Área de fogo ao ar livre', row: 3, col: 0 },
      { title: 'Redário', caption: 'Um canto para ler e descansar', row: 3, col: 1 },
      { title: 'Mesas de piquenique', caption: 'Área verde da propriedade', row: 3, col: 2 },
    ],
  },
];

const otherExperiences = [
  { title: 'Fazendinha', description: 'Contato com mini animais e a rotina da propriedade.', icon: Heart },
  { title: 'Playground e campinho', description: 'Espaços para crianças e momentos em família.', icon: Baby },
  { title: 'Churrasqueiras', description: 'Estrutura para preparar refeições durante a estadia.', icon: Utensils },
  { title: 'Natureza e redários', description: 'Áreas verdes para descansar e aproveitar o tempo sem pressa.', icon: Trees },
];

const allPhotos = galleries.flatMap((group) => group.photos);

const spriteStyle = (photo: GalleryPhoto): React.CSSProperties => ({
  backgroundImage: `url(${SPRITE_URL})`,
  backgroundSize: '300% 400%',
  backgroundPosition: `${photo.col * 50}% ${photo.row * (100 / 3)}%`,
  backgroundRepeat: 'no-repeat',
});

export const ExperiencesSection: React.FC = () => {
  const [activePhoto, setActivePhoto] = useState<number | null>(null);

  const closeLightbox = () => setActivePhoto(null);

  const showPrevious = () => {
    setActivePhoto((current) =>
      current === null ? null : (current - 1 + allPhotos.length) % allPhotos.length
    );
  };

  const showNext = () => {
    setActivePhoto((current) =>
      current === null ? null : (current + 1) % allPhotos.length
    );
  };

  useEffect(() => {
    if (activePhoto === null) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeLightbox();
      if (event.key === 'ArrowLeft') showPrevious();
      if (event.key === 'ArrowRight') showNext();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [activePhoto]);

  let globalPhotoIndex = 0;

  return (
    <section id="estrutura" className="py-20 sm:py-24 bg-[#F3ECE2] text-[#2C332D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-10 sm:mb-14">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8B6A2F]">
            Incluso na estadia
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#14241A] mt-2 mb-4">
            Lazer e experiências na propriedade
          </h2>
          <p className="text-sm sm:text-base text-[#526048] leading-relaxed max-w-2xl">
            Veja fotos reais dos espaços e experiências disponíveis durante a estadia. Toque em qualquer foto para ampliar.
          </p>
        </div>

        <div className="space-y-7 sm:space-y-9">
          {galleries.map((group) => {
            const groupStartIndex = globalPhotoIndex;
            globalPhotoIndex += group.photos.length;

            return (
              <article
                key={group.title}
                className="bg-[#FCFAF7] border border-[#DED3C5] rounded-3xl p-5 sm:p-7 lg:p-8"
              >
                <div className="mb-5 sm:mb-6">
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#33251D] mb-2">
                    {group.title}
                  </h3>
                  <p className="text-sm text-[#6B625B] leading-relaxed max-w-2xl">
                    {group.description}
                  </p>
                </div>

                <div className="flex lg:grid lg:grid-cols-3 gap-3 sm:gap-4 overflow-x-auto lg:overflow-visible snap-x snap-mandatory pb-2 lg:pb-0 -mx-1 px-1">
                  {group.photos.map((photo, photoIndex) => (
                    <button
                      key={`${group.title}-${photo.title}`}
                      type="button"
                      onClick={() => setActivePhoto(groupStartIndex + photoIndex)}
                      aria-label={`Ampliar foto: ${photo.title}`}
                      className="group relative shrink-0 w-[78%] sm:w-[48%] lg:w-auto snap-start text-left rounded-2xl overflow-hidden bg-[#14241A] border border-[#DED3C5] shadow-sm hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#8B6A2F] focus:ring-offset-2 transition-all cursor-zoom-in"
                    >
                      <div
                        role="img"
                        aria-label={`${photo.title} — ${photo.caption}`}
                        style={spriteStyle(photo)}
                        className="aspect-[3/4] w-full transition-transform duration-500 group-hover:scale-[1.025]"
                      />

                      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/45 to-transparent pt-16 px-4 pb-4 text-white">
                        <div className="flex items-end justify-between gap-3">
                          <div>
                            <strong className="font-serif text-base sm:text-lg block leading-tight">
                              {photo.title}
                            </strong>
                            <span className="text-[11px] sm:text-xs text-white/75 mt-1 block">
                              {photo.caption}
                            </span>
                          </div>
                          <span className="w-9 h-9 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 flex items-center justify-center shrink-0 group-hover:bg-white/25 transition-colors">
                            <Maximize2 className="w-4 h-4" />
                          </span>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>

                <p className="lg:hidden mt-3 text-[11px] text-[#756B63]">
                  Deslize para o lado para ver mais fotos.
                </p>
              </article>
            );
          })}
        </div>

        <div className="mt-10 sm:mt-12">
          <h3 className="font-serif text-2xl font-bold text-[#14241A] mb-5">
            E tem mais por aqui
          </h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {otherExperiences.map(({ title, description, icon: Icon }) => (
              <article
                key={title}
                className="bg-white rounded-2xl border border-[#E3D9CC] p-4 sm:p-5"
              >
                <div className="w-9 h-9 rounded-xl bg-[#1c3224]/8 flex items-center justify-center mb-3">
                  <Icon className="w-4.5 h-4.5 text-[#8B6A2F]" />
                </div>
                <h4 className="font-serif text-base sm:text-lg font-bold text-[#14241A] mb-1.5">
                  {title}
                </h4>
                <p className="text-xs text-[#526048] leading-relaxed">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>

      {activePhoto !== null && (
        <div
          className="fixed inset-0 z-[70] bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-label="Visualização ampliada da foto"
          onClick={(event) => {
            if (event.target === event.currentTarget) closeLightbox();
          }}
        >
          <button
            type="button"
            onClick={closeLightbox}
            aria-label="Fechar foto"
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

          <div className="w-full max-w-[min(82vw,620px)] flex flex-col items-center">
            <div
              role="img"
              aria-label={`${allPhotos[activePhoto].title} — ${allPhotos[activePhoto].caption}`}
              style={spriteStyle(allPhotos[activePhoto])}
              className="h-[72vh] max-h-[760px] aspect-[3/4] max-w-full rounded-2xl shadow-2xl bg-[#14241A]"
            />
            <div className="text-center text-white mt-4 px-12">
              <strong className="font-serif text-xl block">{allPhotos[activePhoto].title}</strong>
              <span className="text-sm text-white/65 mt-1 block">{allPhotos[activePhoto].caption}</span>
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
