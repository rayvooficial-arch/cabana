import React, { useState } from 'react';
import { Accommodation } from '../types';
import { createDirectAccommodationWhatsAppLink, trackWhatsAppClick } from '../utils/whatsapp';
import {
  X,
  Users,
  Sparkles,
  Bath,
  Tv,
  Utensils,
  Heart,
  Calendar,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  MessageSquare,
} from 'lucide-react';

interface AccommodationDetailModalProps {
  accommodation: Accommodation | null;
  onClose: () => void;
  onOpenBooking: (accommodationId?: string) => void;
}

export const AccommodationDetailModal: React.FC<AccommodationDetailModalProps> = ({
  accommodation,
  onClose,
  onOpenBooking,
}) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  if (!accommodation) return null;

  const nextImage = () => {
    setActiveImageIndex((prev) =>
      prev === accommodation.galleryImages.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setActiveImageIndex((prev) =>
      prev === 0 ? accommodation.galleryImages.length - 1 : prev - 1
    );
  };

  return (
    <div
      id="accommodation-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        id="accommodation-modal-content"
        className="bg-[#FAF7F2] text-[#2C332D] rounded-3xl max-w-4xl w-full overflow-hidden shadow-2xl border border-[#C29B48]/30 max-h-[92vh] flex flex-col my-auto relative animate-in zoom-in-95 duration-200"
      >
        {/* Modal Header with Close Button */}
        <div className="flex items-center justify-between p-6 sm:p-8 bg-[#14241A] text-white border-b border-[#2d4f3b]">
          <div>
            <div className="flex items-center gap-3 mb-1">
              <span className="text-xs uppercase tracking-widest text-[#C29B48] font-semibold">
                Detalhes da Acomodação
              </span>
              {accommodation.isPetFriendly && (
                <span className="bg-[#526048] text-[#FAF7F2] text-[10px] font-bold uppercase px-2 py-0.5 rounded-full flex items-center gap-1">
                  <Heart className="w-3 h-3 text-[#C29B48]" />
                  Pet Friendly
                </span>
              )}
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#FAF7F2]">
              {accommodation.name}
            </h2>
          </div>

          <button
            onClick={onClose}
            id="close-accommodation-modal-btn"
            aria-label="Fechar detalhes"
            className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-8 flex-1">
          {/* Photo Gallery Carousel */}
          <div className="relative rounded-2xl overflow-hidden bg-black h-72 sm:h-96 shadow-lg group">
            <img
              src={accommodation.galleryImages[activeImageIndex]}
              alt={`${accommodation.name} foto ${activeImageIndex + 1}`}
              className="w-full h-full object-cover transition-opacity duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

            {/* Navigation Arrows */}
            {accommodation.galleryImages.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  aria-label="Foto anterior"
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center transition-all cursor-pointer backdrop-blur-sm"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={nextImage}
                  aria-label="Próxima foto"
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center transition-all cursor-pointer backdrop-blur-sm"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </>
            )}

            {/* Image Counter */}
            <div className="absolute bottom-3 right-4 px-3 py-1 rounded-full bg-black/70 text-white text-xs font-medium backdrop-blur-sm">
              {activeImageIndex + 1} / {accommodation.galleryImages.length}
            </div>

            {/* Badges Overlay */}
            <div className="absolute bottom-3 left-4 flex flex-wrap gap-2">
              <span className="px-3 py-1 rounded-full bg-[#C29B48] text-[#14241A] text-xs font-bold uppercase tracking-wider">
                {accommodation.capacity}
              </span>
            </div>
          </div>

          {/* Description */}
          <div className="border-l-4 border-[#C29B48] pl-4 py-1">
            <p className="font-serif italic text-lg sm:text-xl text-[#14241A]">
              “{accommodation.description}”
            </p>
          </div>

          {/* Structure & Bedrooms */}
          <div>
            <h3 className="font-serif text-xl font-bold text-[#14241A] mb-4 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-[#C29B48]" />
              Estrutura & Quartos
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {accommodation.structure.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-white border border-[#E8DED1] shadow-sm"
                >
                  <h4 className="font-serif font-bold text-[#14241A] mb-2 text-base">
                    {item.title}
                  </h4>
                  <ul className="space-y-1.5 text-xs sm:text-sm text-[#526048]">
                    {item.details.map((detail, dIdx) => (
                      <li key={dIdx} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C29B48]" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Spa & Comfort Details */}
          {accommodation.spaDetails && (
            <div className="p-5 rounded-2xl bg-[#F3ECE2] border border-[#C29B48]/30">
              <h3 className="font-serif text-lg font-bold text-[#14241A] mb-3 flex items-center gap-2">
                <Bath className="w-5 h-5 text-[#1c3224]" />
                Ritual de Hidromassagem & Bem-Estar
              </h3>
              <p className="text-xs text-[#526048] mb-3">
                Disponibilizamos para a sua experiência de banho:
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs font-medium text-[#1c3224]">
                {accommodation.spaDetails.map((spa, sIdx) => (
                  <div
                    key={sIdx}
                    className="flex items-center gap-1.5 bg-white/70 px-3 py-1.5 rounded-lg border border-[#E3D9CC]"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-[#C29B48]" />
                    <span>{spa}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Entertainment & Tech */}
          <div>
            <h3 className="font-serif text-xl font-bold text-[#14241A] mb-4 flex items-center gap-2">
              <Tv className="w-5 h-5 text-[#C29B48]" />
              Entretenimento & Lazer
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {accommodation.entertainment.map((item, eIdx) => (
                <div
                  key={eIdx}
                  className="flex items-center gap-2 p-3 rounded-xl bg-white border border-[#E8DED1] text-xs sm:text-sm text-[#2C332D]"
                >
                  <ShieldCheck className="w-4 h-4 text-[#526048] shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Pricing Highlight inside Modal */}
          <div className="p-6 rounded-2xl bg-[#14241A] text-white flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <span className="text-xs uppercase tracking-wider text-[#C29B48] block">
                Valores por Diária
              </span>
              <div className="flex items-baseline gap-3 mt-1">
                <span className="text-sm text-white/80">Segunda a Quarta:</span>
                <span className="font-serif text-xl font-bold text-[#E8D4A2]">
                  R$ {accommodation.weekdayPrice.toLocaleString('pt-BR')}
                </span>
                <span className="bg-[#C29B48] text-[#14241A] text-[10px] font-bold px-1.5 py-0.5 rounded">
                  20% OFF
                </span>
              </div>
              <div className="flex items-baseline gap-3">
                <span className="text-sm text-white/80">Quinta a Domingo:</span>
                <span className="font-serif text-lg font-semibold text-white">
                  R$ {accommodation.weekendPrice.toLocaleString('pt-BR')}
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
              <button
                onClick={() => {
                  trackWhatsAppClick('accommodation_modal_direct', { accommodation: accommodation.name });
                  const link = createDirectAccommodationWhatsAppLink(accommodation.name);
                  window.open(link, '_blank');
                }}
                id={`modal-whatsapp-btn-${accommodation.id}`}
                className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-white/15 hover:bg-white/25 text-white font-semibold text-xs uppercase tracking-wider transition-all cursor-pointer flex items-center justify-center gap-2 border border-white/20"
              >
                <MessageSquare className="w-4 h-4 text-[#C29B48]" />
                <span>Conversar no WhatsApp</span>
              </button>

              <button
                onClick={() => {
                  onClose();
                  onOpenBooking(accommodation.id);
                }}
                id={`modal-reserve-btn-${accommodation.id}`}
                className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-[#C29B48] hover:bg-[#d6af57] text-[#14241A] font-bold text-xs uppercase tracking-wider transition-all hover:scale-105 cursor-pointer shadow-lg flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4 text-[#14241A]" />
                <span>Reservar Agora</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
