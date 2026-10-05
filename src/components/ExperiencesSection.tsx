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
  mediaAspect?: string;
  coverSrc?: string;
  coverPosition?: string;
  coverSize?: string;
}

const galleries: GalleryGroup[] = [
  {
    title: 'Hidromassagens',
    shortDescription: 'Privativas nas acomodações',
    icon: Bath,
    mediaAspect: 'aspect-square',
    coverSrc: '/hidromassagens/01-hidro-externa-dia.webp',
    photos: [
      {
        title: 'Hidromassagem externa durante o dia',
        caption: 'Relaxamento ao ar livre junto ao deck da cabana',
        src: '/hidromassagens/01-hidro-externa-dia.webp',
      },
      {
        title: 'Hidromassagem externa à noite',
        caption: 'Iluminação acolhedora para aproveitar a noite',
        src: '/hidromassagens/02-hidro-externa-noite.webp',
      },
      {
        title: 'Hidromassagem interna com velas',
        caption: 'Ambiente intimista preparado para relaxar',
        src: '/hidromassagens/03-hidro-interna-noite.webp',
      },
      {
        title: 'Hidromassagem interna',
        caption: 'Banheira integrada ao interior da cabana',
        src: '/hidromassagens/04-hidro-interna-dia.webp',
      },
    ],
  },
  {
    title: 'Cinema ao ar livre',
    shortDescription: 'Telão em meio à natureza',
    icon: Film,
    mediaAspect: 'aspect-square',
    coverSrc: '/experiences/cinema/01-cinema-externo.jpg',
    photos: [
      {
        title: 'Cinema ao ar livre em meio à natureza',
        caption: 'Estrutura preparada para sessões especiais ao ar livre',
        src: '/experiences/cinema/01-cinema-externo.jpg',
      },
      {
        title: 'Ambiente do cinema',
        caption: 'Espaço aconchegante para curtir filmes em boa companhia',
        src: '/experiences/cinema/02-cinema-ambiente.jpg',
      },
      {
        title: 'Cinema iluminado à noite',
        caption: 'Iluminação acolhedora para aproveitar a sessão noturna',
        src: '/experiences/cinema/03-cinema-noturno.jpg',
      },
      {
        title: 'Vista completa do cinema',
        caption: 'Telão e deck integrados à área verde da propriedade',
        src: '/experiences/cinema/04-cinema-deck.png',
      },
    ],
  },
  {
    title: 'Pesque e solte',
    shortDescription: 'Pesca recreativa no lago',
    icon: Waves,
    mediaAspect: 'aspect-square',
    coverSrc: '/experiences/pesca/01-deck-lago.png',
    photos: [
      {
        title: 'Deck de pesca junto ao lago',
        caption: 'Espaço coberto para relaxar e aproveitar o lago',
        src: '/experiences/pesca/01-deck-lago.png',
      },
      {
        title: 'Deck sobre o tanque',
        caption: 'Vista ampla da estrutura de pesca e da área verde',
        src: '/experiences/pesca/02-deck-tanque.jpg',
      },
      {
        title: 'Pesca no lago',
        caption: 'Pescaria em meio à natureza',
        src: '/experiences/pesca/03-pesca.jpg',
      },
      {
        title: 'Espécies do lago',
        caption: 'Placa com informações sobre os peixes do pesqueiro',
        src: '/experiences/pesca/04-placa-peixes.png',
      },
      {
        title: 'Área de churrasqueira junto ao lago',
        caption: 'Estrutura de apoio para aproveitar o dia na área externa',
        src: '/experiences/pesca/05-area-churrasqueira.jpg',
      },
    ],
  },
  {
    title: 'Fogueira e descanso',
    shortDescription: 'Fogo, balanços e área verde',
    icon: Flame,
    mediaAspect: 'aspect-square',
    coverSrc: '/experiences/fogueira/01-fogareiro-cinematic.jpg',
    photos: [
      {
        title: 'Fogareiro ao ar livre',
        caption: 'Um espaço acolhedor para aproveitar as noites na propriedade',
        src: '/experiences/fogueira/01-fogareiro-cinematic.jpg',
      },
      {
        title: 'Fogueira vista de cima',
        caption: 'Área de fogo cercada por assentos de madeira',
        src: '/experiences/fogueira/02-fogueira-vista-superior.png',
      },
      {
        title: 'Vinho junto à fogueira',
        caption: 'Clima especial para relaxar diante das cabanas iluminadas',
        src: '/experiences/fogueira/03-fogueira-vinho.png',
      },
    ],
  },
  {
    title: 'Playground, campinho e redário',
    shortDescription: 'Diversão e descanso ao ar livre',
    icon: Baby,
    mediaAspect: 'aspect-square',
    coverSrc: '/experiences/playground/01-playground-vista-geral.jpg',
    photos: [
      {
        title: 'Playground ao ar livre',
        caption: 'Espaço preparado para as crianças brincarem em meio à natureza',
        src: '/experiences/playground/01-playground-vista-geral.jpg',
      },
      {
        title: 'Brinquedos do playground',
        caption: 'Diversão com estrutura de madeira e área verde',
        src: '/experiences/playground/02-playground.jpg',
      },
      {
        title: 'Campinho',
        caption: 'Área aberta para jogos e brincadeiras',
        src: '/experiences/playground/03-campinho.jpg',
      },
      {
        title: 'Balanços',
        caption: 'Balanços cercados pela natureza da propriedade',
        src: '/experiences/playground/04-balancos.jpg',
      },
      {
        title: 'Redário',
        caption: 'Redes à sombra para descansar e desacelerar',
        src: '/experiences/playground/05-redario.png',
      },
      {
        title: 'Mesa de piquenique e descanso',
        caption: 'Área sombreada para reunir a família e relaxar',
        src: '/experiences/playground/06-mesa-piquenique.png',
      },
    ],
  },
  {
    title: 'Fazendinha',
    shortDescription: 'Mini animais e contato com a natureza',
    icon: Heart,
    mediaAspect: 'aspect-square',
    coverSrc: '/fazendinha-vacas.webp',
    photos: [
      {
        title: 'As vaquinhas da fazendinha',
        caption: 'Duas companheiras dóceis em meio ao verde',
        src: '/fazendinha-vacas.webp',
      },
      {
        title: 'Mini porquinhos',
        caption: 'A dupla curiosa aproveitando o espaço da fazendinha',
        src: '/fazendinha-mini-porcos.webp',
      },
      {
        title: 'Porquinho-da-índia',
        caption: 'Pequeno, curioso e cheio de personalidade',
        src: '/fazendinha-porquinho-india-preto-branco.webp',
      },
      {
        title: 'Mini cabras',
        caption: 'Companheiras brincalhonas no abrigo de madeira',
        src: '/fazendinha-mini-cabras.webp',
      },
      {
        title: 'Mini cavalo',
        caption: 'O charme da vida no campo bem de perto',
        src: '/fazendinha-mini-cavalo.webp',
      },
      {
        title: 'Patos da fazendinha',
        caption: 'O grupo descansando junto em seu espaço',
        src: '/fazendinha-patos.webp',
      },
      {
        title: 'Coelhinhos',
        caption: 'Uma dupla tranquila em meio ao verde',
        src: '/fazendinha-coelhos.webp',
      },
      {
        title: 'Galinhas-d’angola',
        caption: 'Beleza e tradição do campo no galinheiro',
        src: '/fazendinha-galinhas-angola.webp',
      },
      {
        title: 'Porquinho-da-índia de pelo longo',
        caption: 'Um morador muito charmoso da fazendinha',
        src: '/fazendinha-porquinho-india-pelo-longo.webp',
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
        className={`relative ${group.mediaAspect ?? 'aspect-[9/10]'} bg-[#0c1710] overflow-hidden touch-pan-y`}
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
        <div aria-hidden="true" style={photoStyle(photo)} className="absolute -inset-5 blur-xl opacity-50 scale-110" />
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
              <span role="img" aria-label={image.title} style={photoStyle(thumbPhoto, group.mediaAspect === 'aspect-square' ? 'contain' : 'cover')} className="block w-full h-full bg-[#0c1710]" />
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
