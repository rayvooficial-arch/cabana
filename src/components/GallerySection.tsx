import React, { useState } from 'react';
import { galleryPhotos } from '../data/gallery';
import { GalleryPhoto } from '../types';
import {
  Sparkles,
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  Camera,
} from 'lucide-react';

type FilterCategory = 'todas' | 'experiencia' | 'eden' | 'manancial' | 'pedacinho-do-ceu';

export const GallerySection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<FilterCategory>('todas');
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);

  const filteredPhotos =
    activeCategory === 'todas'
      ? galleryPhotos
      : galleryPhotos.filter((photo) => photo.category === activeCategory);

  const openLightbox = (index: number) => {
    setSelectedPhotoIndex(index);
  };

  const closeLightbox = () => {
    setSelectedPhotoIndex(null);
  };

  const nextPhoto = () => {
    if (selectedPhotoIndex === null) return;
    setSelectedPhotoIndex((prev) =>
      prev! === filteredPhotos.length - 1 ? 0 : prev! + 1
    );
  };

  const prevPhoto = () => {
    if (selectedPhotoIndex === null) return;
    setSelectedPhotoIndex((prev) =>
      prev! === 0 ? filteredPhotos.length - 1 : prev! - 1
    );
  };

  const tabs: { id: FilterCategory; label: string }[] = [
    { id: 'todas', label: 'Todas as Fotos' },
    { id: 'experiencia', label: 'Experiência & Campo' },
    { id: 'eden', label: 'Cabana Éden' },
    { id: 'manancial', label: 'Cabana Manancial' },
    { id: 'pedacinho-do-ceu', label: 'Casa Pedacinho do Céu' },
  ];

  return (
    <section id="galeria" className="py-24 bg-[#FAF7F2] text-[#2C332D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1c3224]/10 text-[#1c3224] text-xs font-semibold uppercase tracking-widest mb-4">
            <Camera className="w-3.5 h-3.5 text-[#C29B48]" />
            <span>Imersão Visual</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#14241A] tracking-tight mb-4">
            Galeria Fotográfica
          </h2>

          <p className="font-sans text-base sm:text-lg text-[#526048] leading-relaxed">
            Conheça a essência da Cabana das Mansões através de imagens reais dos nossos espaços, animais e ambientes de descanso.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveCategory(tab.id)}
              id={`gallery-filter-${tab.id}`}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                activeCategory === tab.id
                  ? 'bg-[#1c3224] text-[#FAF7F2] shadow-md scale-105'
                  : 'bg-white text-[#526048] border border-[#E3D9CC] hover:border-[#C29B48] hover:text-[#14241A]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Photos Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPhotos.map((photo, idx) => (
            <div
              key={photo.id}
              id={`gallery-item-${photo.id}`}
              onClick={() => openLightbox(idx)}
              className="group relative h-72 rounded-2xl overflow-hidden bg-stone-200 cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300 border border-[#E3D9CC]"
            >
              <img
                src={photo.url}
                alt={photo.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-5" />

              {/* Tag / Category Badge */}
              <div className="absolute top-3 left-3">
                <span className="bg-[#14241A]/80 backdrop-blur-sm text-[#E8D4A2] text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full border border-white/10">
                  {photo.categoryLabel}
                </span>
              </div>

              {/* Bottom Caption on Hover */}
              <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="font-serif text-base sm:text-lg font-bold text-white mb-1 drop-shadow">
                  {photo.title}
                </h3>
                <p className="text-xs text-white/80 line-clamp-2 drop-shadow">
                  {photo.description}
                </p>
                <span className="inline-flex items-center gap-1 text-[11px] text-[#C29B48] font-semibold mt-2 uppercase tracking-wider">
                  <Maximize2 className="w-3 h-3" />
                  Ampliar foto
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedPhotoIndex !== null && filteredPhotos[selectedPhotoIndex] && (
        <div
          id="gallery-lightbox"
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200"
          onClick={(e) => {
            if (e.target === e.currentTarget) closeLightbox();
          }}
        >
          {/* Close Lightbox */}
          <button
            onClick={closeLightbox}
            id="close-lightbox-btn"
            aria-label="Fechar galeria"
            className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors cursor-pointer z-20"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Left Arrow */}
          <button
            onClick={prevPhoto}
            aria-label="Foto anterior"
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-all cursor-pointer z-20"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          {/* Right Arrow */}
          <button
            onClick={nextPhoto}
            aria-label="Próxima foto"
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-all cursor-pointer z-20"
          >
            <ChevronRight className="w-8 h-8" />
          </button>

          {/* Lightbox Content Container */}
          <div className="max-w-5xl w-full flex flex-col items-center">
            <div className="relative max-h-[75vh] w-full flex items-center justify-center mb-4">
              <img
                src={filteredPhotos[selectedPhotoIndex].url}
                alt={filteredPhotos[selectedPhotoIndex].title}
                className="max-h-[75vh] max-w-full object-contain rounded-xl shadow-2xl"
              />
            </div>

            {/* Photo Info */}
            <div className="text-center max-w-2xl text-white space-y-1 px-4">
              <span className="text-xs uppercase tracking-widest text-[#C29B48] font-semibold">
                {filteredPhotos[selectedPhotoIndex].categoryLabel} (
                {selectedPhotoIndex + 1} de {filteredPhotos.length})
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-bold">
                {filteredPhotos[selectedPhotoIndex].title}
              </h3>
              <p className="text-xs sm:text-sm text-white/80">
                {filteredPhotos[selectedPhotoIndex].description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
