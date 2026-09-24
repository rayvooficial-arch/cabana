import React, { useEffect, useRef, useState } from 'react';
import { Camera, ChevronLeft, ChevronRight, Heart, Users } from 'lucide-react';
import { Accommodation } from '../types';

export const AccommodationCardCarousel: React.FC<{ accommodation: Accommodation }> = ({ accommodation }) => {
  const photos = accommodation.detailedPhotos ?? [];
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStart = useRef<{ x: number; y: number } | null>(null);
  const thumbnails = useRef<HTMLDivElement>(null);
  const photo = photos[currentIndex];

  useEffect(() => {
    const strip = thumbnails.current;
    const active = strip?.children[currentIndex] as HTMLElement | undefined;
    if (strip && active) {
      strip.scrollTo({
        left: active.offsetLeft - strip.offsetLeft - (strip.clientWidth - active.clientWidth) / 2,
        behavior: 'smooth',
      });
    }
  }, [currentIndex]);

  if (!photo) return null;

  const show = (direction: number) => {
    setCurrentIndex((index) => Math.max(0, Math.min(photos.length - 1, index + direction)));
  };

  return (
    <div className="bg-[#14241A] text-white">
      <div
        className="relative w-full aspect-[9/10] bg-[#0c1710] overflow-hidden touch-pan-y"
        onTouchStart={(event) => {
          touchStart.current = { x: event.touches[0].clientX, y: event.touches[0].clientY };
        }}
        onTouchEnd={(event) => {
          if (touchStart.current === null) return;
          const distance = touchStart.current.x - event.changedTouches[0].clientX;
          const verticalDistance = Math.abs(touchStart.current.y - event.changedTouches[0].clientY);
          if (Math.abs(distance) > 60 && Math.abs(distance) > verticalDistance * 1.5) {
            show(distance > 0 ? 1 : -1);
          }
          touchStart.current = null;
        }}
        onTouchCancel={() => { touchStart.current = null; }}
      >
        <img
          src={photo.url}
          alt={`${accommodation.name}: ${photo.title}`}
          className="w-full h-full object-contain"
          loading={currentIndex === 0 ? 'eager' : 'lazy'}
          decoding="async"
        />
        <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-black/60 to-transparent pointer-events-none" />
        <div className="absolute top-4 left-4 flex gap-2 flex-wrap pointer-events-none">
          <span className="inline-flex items-center gap-1.5 bg-[#14241A]/90 text-white text-xs font-semibold px-3 py-1.5 rounded-full backdrop-blur-sm shadow-sm">
            <Users className="w-3.5 h-3.5 text-[#C29B48]" />
            {accommodation.capacity}
          </span>
          {accommodation.isPetFriendly && (
            <span className="inline-flex items-center gap-1.5 bg-white/90 text-[#14241A] text-xs font-semibold px-3 py-1.5 rounded-full shadow-sm">
              <Heart className="w-3.5 h-3.5 text-[#8B6A2F]" /> Pet friendly
            </span>
          )}
        </div>
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-black/75 border border-white/20 rounded-full px-3 py-1.5 text-xs font-semibold flex items-center gap-1.5 whitespace-nowrap pointer-events-none">
          <Camera className="w-3.5 h-3.5 text-[#E8D4A2]" /> {currentIndex + 1} de {photos.length} fotos
        </div>
        {photos.length > 1 && (
          <>
            <button type="button" onClick={() => show(-1)} disabled={currentIndex === 0} aria-label={`Foto anterior de ${accommodation.name}`} className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/70 hover:bg-black/90 disabled:opacity-40 disabled:cursor-not-allowed border border-white/20 flex items-center justify-center cursor-pointer">
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button type="button" onClick={() => show(1)} disabled={currentIndex === photos.length - 1} aria-label={`Próxima foto de ${accommodation.name}`} className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/70 hover:bg-black/90 disabled:opacity-40 disabled:cursor-not-allowed border border-white/20 flex items-center justify-center cursor-pointer">
              <ChevronRight className="w-6 h-6" />
            </button>
          </>
        )}
      </div>
      <div className="px-5 py-4 border-t border-white/10 min-h-32">
        <span className="text-[11px] font-bold uppercase tracking-widest text-[#E8D4A2]">
          {photo.category === 'externa' ? 'Área externa' : 'Ambiente interno'}
        </span>
        <h4 className="font-serif text-lg font-bold leading-snug mt-1">{photo.title}</h4>
        <p className="text-sm text-white/75 leading-relaxed mt-1 line-clamp-2">{photo.description}</p>
      </div>
      {photos.length > 1 && (
        <div ref={thumbnails} className="flex gap-2 px-4 py-3 overflow-x-auto bg-[#0c1710] border-t border-white/10" style={{ scrollbarWidth: 'thin' }} aria-label={`Miniaturas de ${accommodation.name}`}>
          {photos.map((item, index) => (
            <button
              key={item.url}
              type="button"
              onClick={() => setCurrentIndex(index)}
              aria-label={`Ver foto ${index + 1}: ${item.title}`}
              aria-current={index === currentIndex ? 'true' : undefined}
              className={`shrink-0 w-16 h-12 rounded-lg overflow-hidden border-2 cursor-pointer transition-all ${index === currentIndex ? 'border-[#C29B48] ring-1 ring-[#C29B48] opacity-100' : 'border-white/20 opacity-65 hover:opacity-100'}`}
            >
              <img src={item.url} alt="" className="w-full h-full object-cover" loading="lazy" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
