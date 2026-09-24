import React, { useRef, useState } from 'react';
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
} from 'lucide-react';

interface GalleryPhoto {
  title: string;
  caption: string;
  src: string;
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
    coverSrc: '/hidro-manancial-externa.webp',
    photos: [
      {
        title: 'Hidromassagem externa',
        caption: 'Cabana Manancial durante o dia',
        src: '/hidro-manancial-externa.webp',
      },
      {
        title: 'Hidromassagem no deck',
        caption: 'Cabana Éden à noite',
        src: '/hidro-eden-externa.webp',
      },
      {
        title: 'Hidromassagem interna',
        caption: 'Banheira da Cabana Manancial',
        src: '/hidro-manancial-interna.webp',
      },
    ],
  },
  {
    title: 'Cinema ao ar livre',
    shortDescription: 'Telão em meio à natureza',
    icon: Film,
    coverSrc: '/lazer-cinema-01.webp',
    photos: [
      {
        title: 'Cinema ao ar livre',
        caption: 'Espaço do cinema preparado ao entardecer',
        src: '/lazer-cinema-01.webp',
      },
      {
        title: 'Sessão de cinema',
        caption: 'Tela acesa para aproveitar a noite',
        src: '/lazer-cinema-03.webp',
      },
    ],
  },
  {
    title: 'Pesque e solte',
    shortDescription: 'Pesca recreativa no lago',
    icon: Waves,
    coverSrc: '/lazer-pesqueiro-cover-novo.webp',
    photos: [
      {
        title: 'Pesque e solte',
        caption: 'Momento de pesca no deck junto ao lago',
        src: '/lazer-pesqueiro-cover-novo.webp',
      },
      {
        title: 'Deck da pescaria',
        caption: 'Área coberta para aproveitar o lago',
        src: '/lazer-deck-pescaria.webp',
      },
      {
        title: 'Pesca no lago',
        caption: 'Pescaria em meio à natureza',
        src: '/lazer-pesqueiro-novo.webp',
      },
      {
        title: 'Espécies do lago',
        caption: 'Placa com informações sobre os peixes do pesqueiro',
        src: '/lazer-pesqueiro-02-novo.webp',
      },
    ],
  },
  {
    title: 'Fogueira e descanso',
    shortDescription: 'Fogo, redários e área verde',
    icon: Flame,
    coverSrc: '/lazer-piquenique.webp',
    photos: [
      {
        title: 'Mesas de piquenique',
        caption: 'Área verde e espaço para descansar',
        src: '/lazer-piquenique.webp',
      },
      {
        title: 'Momento de descanso',
        caption: 'Um canto para ler e aproveitar a noite',
        src: '/lazer-redario.webp',
        position: 'center',
      },
      {
        title: 'Noite junto à fogueira',
        caption: 'Área de fogo ao ar livre em frente às cabanas',
        src: '/lazer-fogueira-02.webp',
        position: 'center',
      },
    ],
  },
  {
    title: 'Fazendinha',
    shortDescription: 'Mini animais e contato com a natureza',
    icon: Heart,
    coverSrc: '/fazendinha-cabritinhos-novo.webp',
    photos: [
      {
        title: 'Cabritinhos',
        caption: 'Mini animais da fazendinha',
        src: '/fazendinha-cabritinhos-novo.webp',
      },
      {
        title: 'Coelhinhos',
        caption: 'Coelhos da fazendinha em meio ao verde',
        src: '/fazendinha-coelhos-novo.webp',
      },
      {
        title: 'Patinhos no lago',
        caption: 'Patinhos acompanhando a mãe na água',
        src: '/fazendinha-patinhos-novo.webp',
      },
      {
        title: 'Mini porquinhos',
        caption: 'Animais da fazendinha descansando juntos',
        src: '/fazendinha-mini-porquinhos-novo.webp',
      },
      {
        title: 'Galinhas da fazendinha',
        caption: 'Galinhas no espaço dos animais',
        src: '/fazendinha-galinhas-novo.webp',
      },
    ],
  },
];

const otherExperiences = [
  { title: 'Churrasqueiras', icon: Utensils },
  { title: 'Áreas verdes', icon: Trees },
];

const photoStyle = (
  photo: GalleryPhoto,
  directImageFit: 'cover' | 'contain' = 'cover'
): React.CSSProperties => {
  return {
    backgroundImage: `url(${photo.src})`,
    backgroundSize: photo.size ?? directImageFit,
    backgroundPosition: photo.position ?? 'center',
    backgroundRepeat: 'no-repeat',
  };
};

const ExperienceCard: React.FC<{ group: GalleryGroup }> = ({ group }) => {
  const [index, setIndex] = useState(0);
  const start = useRef<{ x: number; y: number } | null>(null);
  const strip = useRef<HTMLDivElement>(null);
  const Icon = group.icon;
  const item = group.photos[index];
  const photo: GalleryPhoto = index === 0 && group.coverSrc
    ? { ...item, src: group.coverSrc, position: group.coverPosition, size: group.coverSize }
    : item;

  const move = (direction: number) => {
    setIndex((current) => Math.max(0, Math.min(group.photos.length - 1, current + direction)));
  };

  const select = (next: number) => {
    setIndex(next);
    const thumb = strip.current?.children[next] as HTMLElement | undefined;
    if (strip.current && thumb) {
      strip.current.scrollTo({
        left: thumb.offsetLeft - strip.current.offsetLeft - (strip.current.clientWidth - thumb.clientWidth) / 2,
        behavior: 'smooth',
      });
    }
  };

  return (
    <article className="rounded-2xl sm:rounded-3xl overflow-hidden bg-[#14241A] text-white border border-[#294132] shadow-sm flex flex-col">
      <div
        className="relative aspect-[9/10] bg-[#0c1710] overflow-hidden touch-pan-y"
        onTouchStart={(event) => { start.current = { x: event.touches[0].clientX, y: event.touches[0].clientY }; }}
        onTouchEnd={(event) => {
          if (!start.current) return;
          const dx = start.current.x - event.changedTouches[0].clientX;
          const dy = Math.abs(start.current.y - event.changedTouches[0].clientY);
          if (Math.abs(dx) > 60 && Math.abs(dx) > dy * 1.5) move(dx > 0 ? 1 : -1);
          start.current = null;
        }}
        onTouchCancel={() => { start.current = null; }}
      >
        <div role="img" aria-label={`${group.title}: ${item.title}`} style={photoStyle(photo, 'contain')} className="absolute inset-0" />
        <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-black/60 to-transparent pointer-events-none" />
        <span className="absolute top-3 right-3 inline-flex items-center gap-1.5 rounded-full bg-black/65 border border-white/20 px-2.5 py-1.5 text-xs font-semibold">
          <Images className="w-3.5 h-3.5" /> {index + 1} de {group.photos.length}
        </span>
        <button type="button" disabled={index === 0} onClick={() => move(-1)} aria-label={`Foto anterior de ${group.title}`} className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/70 border border-white/20 flex items-center justify-center cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed">
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button type="button" disabled={index === group.photos.length - 1} onClick={() => move(1)} aria-label={`Próxima foto de ${group.title}`} className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/70 border border-white/20 flex items-center justify-center cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed">
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      <div className="p-4 sm:p-5 flex-1 border-t border-white/10">
        <div className="flex items-center gap-2 text-[#E8D4A2] mb-2">
          <Icon className="w-5 h-5" />
          <span className="text-[11px] font-semibold uppercase tracking-widest">{group.title}</span>
        </div>
        <h3 className="font-serif text-lg sm:text-xl font-bold leading-snug">{item.title}</h3>
        <p className="text-sm text-white/75 mt-1 leading-relaxed">{item.caption}</p>
      </div>
      <div ref={strip} className="flex gap-2 px-4 py-3 overflow-x-auto bg-[#0c1710] border-t border-white/10" style={{ scrollbarWidth: 'thin' }} aria-label={`Miniaturas de ${group.title}`}>
        {group.photos.map((image, thumbIndex) => {
          const thumbPhoto = thumbIndex === 0 && group.coverSrc
            ? { ...image, src: group.coverSrc, position: group.coverPosition, size: group.coverSize }
            : image;
          return (
            <button key={`${image.title}-${thumbIndex}`} type="button" onClick={() => select(thumbIndex)} aria-label={`Ver foto ${thumbIndex + 1}: ${image.title}`} aria-current={thumbIndex === index ? 'true' : undefined} className={`shrink-0 w-16 h-12 rounded-lg overflow-hidden border-2 cursor-pointer transition-all ${thumbIndex === index ? 'border-[#C29B48] ring-1 ring-[#C29B48]' : 'border-white/20 opacity-65 hover:opacity-100'}`}>
              <span role="img" aria-label={image.title} style={photoStyle(thumbPhoto)} className="block w-full h-full" />
            </button>
          );
        })}
      </div>
    </article>
  );
};

export const ExperiencesSection: React.FC = () => (
  <section id="estrutura" className="py-16 sm:py-20 bg-[#F3ECE2] text-[#2C332D]">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mb-8 sm:mb-10">
        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8B6A2F]">Lazer na propriedade</span>
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#14241A] mt-2 mb-3">Veja o que você encontra por aqui</h2>
        <p className="text-sm sm:text-base text-[#526048] leading-relaxed max-w-2xl">Explore as fotos de cada experiência diretamente nos cartões.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-6">
        {galleries.map((group) => <ExperienceCard key={group.title} group={group} />)}
        <article className="rounded-2xl sm:rounded-3xl overflow-hidden bg-[#14241A] text-white border border-[#294132] shadow-sm flex flex-col">
          <div className="aspect-[9/10] bg-[#0c1710] flex flex-col items-center justify-center p-6 text-center">
            <Baby className="w-12 h-12 text-[#E8D4A2]" aria-hidden="true" />
            <span className="text-sm text-white/70 mt-4">Espaço para brincar ao ar livre</span>
          </div>
          <div className="p-4 sm:p-5 border-t border-white/10 flex-1">
            <span className="text-[11px] font-semibold uppercase tracking-widest text-[#E8D4A2]">Para as crianças</span>
            <h3 className="font-serif text-lg sm:text-xl font-bold mt-2">Playground e campinho</h3>
            <p className="text-sm text-white/75 mt-1">Brincadeiras e jogos em meio à natureza.</p>
          </div>
        </article>
      </div>
      <div className="mt-6 sm:mt-8 flex flex-wrap gap-2">
        {otherExperiences.map(({ title, icon: Icon }) => (
          <span key={title} className="inline-flex items-center gap-2 rounded-full border border-[#D9CDBE] bg-white/70 px-3.5 py-2 text-xs sm:text-sm font-medium text-[#445247]">
            <Icon className="w-4 h-4 text-[#8B6A2F]" /> {title}
          </span>
        ))}
      </div>
    </div>
  </section>
);
