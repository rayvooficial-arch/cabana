import React, { useState, useEffect, useCallback, useRef } from 'react';
import { EDEN_PHOTOS, accommodations } from '../data/accommodations';
import { AccommodationPhotoItem } from '../types';
import { BookingButton } from './BookingButton';
import {
  X,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  MapPin,
  Calendar,
  Maximize2,
} from 'lucide-react';

interface EdenGalleryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialIndex?: number;
  accommodationId?: 'eden' | 'manancial' | 'pedacinho-do-ceu';
}

export const EdenGalleryModal: React.FC<EdenGalleryModalProps> = ({
  isOpen,
  onClose,
  initialIndex = 0,
  accommodationId = 'eden',
}) => {
  const [currentIndex, setCurrentIndex] = useState<number>(initialIndex);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const thumbnailsRef = useRef<HTMLDivElement>(null);

  const accommodation = accommodations.find((item) => item.id === accommodationId)!;
  const photos: AccommodationPhotoItem[] = accommodation.detailedPhotos || EDEN_PHOTOS;
  const currentPhoto = photos[currentIndex] || photos[0];

  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(initialIndex);
      // Lock background scrolling
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, initialIndex]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev === photos.length - 1 ? 0 : prev + 1));
  }, [photos.length]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? photos.length - 1 : prev - 1));
  }, [photos.length]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, handleNext, handlePrev, onClose]);

  // Auto scroll active thumbnail into view
  useEffect(() => {
    if (!thumbnailsRef.current) return;
    const activeThumb = thumbnailsRef.current.children[currentIndex] as HTMLElement;
    if (activeThumb) {
      activeThumb.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center',
      });
    }
  }, [currentIndex]);

  // Touch swipe handling
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;
    if (diff > 50) {
      handleNext();
    } else if (diff < -50) {
      handlePrev();
    }
    setTouchStart(null);
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-2 sm:p-4 md:p-6 select-none animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-label={`Galeria da ${accommodation.name}`}
    >
      <div className="relative w-full max-w-6xl max-h-[96vh] flex flex-col bg-[#14241A] text-white rounded-2xl sm:rounded-3xl border border-white/10 shadow-2xl overflow-hidden">
        {/* Top Header */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 sm:py-4 border-b border-white/10 bg-[#0f1d14]/90 backdrop-blur-sm z-20">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C29B48]/20 border border-[#C29B48]/30 text-[#E8D4A2] text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-[#C29B48]" />
              {accommodation.name}
            </span>
            <span className="text-xs sm:text-sm text-white/70">
              {currentIndex + 1} de {photos.length} fotos
            </span>
            <span className="hidden md:inline-flex items-center text-xs px-2.5 py-0.5 rounded-full bg-white/10 text-white/80">
              {currentPhoto.category === 'externa' ? 'Área Externa' : 'Ambiente Interno'}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="hidden sm:inline-block text-[11px] text-white/40 mr-2">
              Use as setas ◀ ▶ do teclado
            </span>
            <button
              onClick={onClose}
              type="button"
              id="close-eden-gallery-btn"
              aria-label="Fechar galeria"
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/10 hover:bg-white/20 active:scale-95 flex items-center justify-center transition-all cursor-pointer text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Main View Area with Carousel */}
        <div
          className="relative flex-1 min-h-[300px] sm:min-h-[420px] md:min-h-[500px] lg:min-h-[540px] max-h-[64vh] flex items-center justify-center bg-black/60 overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Main Photo */}
          <div className="relative w-full h-full flex items-center justify-center p-2 sm:p-4">
            <img
              key={currentPhoto.url}
              src={currentPhoto.url}
              alt={currentPhoto.title}
              className="max-h-[58vh] sm:max-h-[60vh] max-w-full object-contain rounded-xl shadow-lg transition-opacity duration-300"
              loading="eager"
            />
          </div>

          {/* Navigation Controls */}
          <button
            onClick={handlePrev}
            type="button"
            id="eden-gallery-prev-btn"
            aria-label="Foto anterior"
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/60 hover:bg-black/85 text-white/90 hover:text-white border border-white/20 backdrop-blur-sm flex items-center justify-center transition-all duration-200 active:scale-95 cursor-pointer shadow-lg z-10"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={handleNext}
            type="button"
            id="eden-gallery-next-btn"
            aria-label="Próxima foto"
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/60 hover:bg-black/85 text-white/90 hover:text-white border border-white/20 backdrop-blur-sm flex items-center justify-center transition-all duration-200 active:scale-95 cursor-pointer shadow-lg z-10"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Photo Info Banner */}
        <div className="px-4 sm:px-6 py-3 sm:py-4 bg-[#14241A] border-t border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-3">
          <div className="flex-1 pr-0 md:pr-4">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#E8D4A2]">
                Tour {accommodation.name} • {currentPhoto.category === 'externa' ? 'Área Externa' : 'Ambiente Interno'}
              </span>
            </div>
            <h3 className="font-serif text-lg sm:text-xl font-bold text-white leading-snug">
              {currentPhoto.title}
            </h3>
            <p className="text-xs sm:text-sm text-white/75 mt-1 leading-relaxed">
              {currentPhoto.description}
            </p>
          </div>

          <div className="shrink-0 flex items-center gap-3 pt-2 md:pt-0 border-t md:border-t-0 border-white/10">
            <BookingButton
              id="eden-gallery-reserve-cta"
              accommodationId={accommodationId}
              accommodationName={accommodation.name}
              label="RESERVAR ESTA CABANA"
              variant="gold"
              size="sm"
              className="w-full md:w-auto px-5"
              onClick={onClose}
            />
          </div>
        </div>

        {/* Thumbnails Carousel Bar */}
        <div
          ref={thumbnailsRef}
          className="flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-3 bg-[#0c1710] border-t border-white/10 overflow-x-auto scrollbar-thin scrollbar-thumb-white/20"
          style={{ scrollbarWidth: 'thin' }}
        >
          {photos.map((photo, index) => {
            const isActive = index === currentIndex;
            return (
              <button
                key={photo.url}
                onClick={() => setCurrentIndex(index)}
                type="button"
                id={`eden-thumb-${index}`}
                aria-label={`Ver foto ${index + 1}: ${photo.title}`}
                className={`relative shrink-0 w-16 h-12 sm:w-20 sm:h-14 rounded-lg overflow-hidden border-2 transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'border-[#C29B48] ring-2 ring-[#C29B48]/60 scale-105 shadow-md'
                    : 'border-white/15 opacity-60 hover:opacity-100 hover:border-white/40'
                }`}
              >
                <img
                  src={photo.url}
                  alt={photo.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <span className="absolute bottom-0.5 right-1 text-[9px] font-bold text-white bg-black/70 px-1 rounded">
                  {index + 1}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
