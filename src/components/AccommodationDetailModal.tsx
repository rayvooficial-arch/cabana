import React from 'react';
import { Accommodation } from '../types';
import { BookingButton } from './BookingButton';
import { Check, Heart, Users, X } from 'lucide-react';

interface AccommodationDetailModalProps {
  accommodation: Accommodation | null;
  onClose: () => void;
  onOpenBooking?: (accommodationId?: string) => void;
}

export const AccommodationDetailModal: React.FC<AccommodationDetailModalProps> = ({
  accommodation,
  onClose,
}) => {
  if (!accommodation) return null;

  const galleryImages = Array.from(
    new Set([accommodation.coverImage, ...accommodation.galleryImages])
  );

  return (
    <div
      className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm p-3 sm:p-6 overflow-y-auto"
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-label={`Detalhes de ${accommodation.name}`}
    >
      <div className="max-w-5xl mx-auto bg-[#FAF7F2] rounded-3xl overflow-hidden shadow-2xl my-4 sm:my-8">
        <div className="relative bg-[#14241A] text-white px-6 sm:px-8 py-6">
          <button
            type="button"
            onClick={onClose}
            aria-label="Fechar detalhes da acomodação"
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="pr-12">
            <span className="text-xs uppercase tracking-[0.18em] text-[#E8D4A2] font-semibold">
              Acomodação
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold mt-1">
              {accommodation.name}
            </h2>
            <div className="flex flex-wrap gap-2 mt-3">
              <span className="inline-flex items-center gap-1.5 text-xs bg-white/10 border border-white/15 rounded-full px-3 py-1.5">
                <Users className="w-3.5 h-3.5 text-[#C29B48]" />
                {accommodation.capacity}
              </span>
              {accommodation.isPetFriendly && (
                <span className="inline-flex items-center gap-1.5 text-xs bg-white/10 border border-white/15 rounded-full px-3 py-1.5">
                  <Heart className="w-3.5 h-3.5 text-[#C29B48]" />
                  Pet friendly
                </span>
              )}
            </div>
          </div>
        </div>

        <div className="p-5 sm:p-8 space-y-8">
          <div className={`grid gap-3 ${galleryImages.length > 1 ? 'grid-cols-2' : 'grid-cols-1'}`}>
            {galleryImages.slice(0, 6).map((image, index) => (
              <div
                key={`${image}-${index}`}
                className={`rounded-2xl overflow-hidden bg-stone-200 ${index === 0 ? 'col-span-2 h-72 sm:h-96' : 'h-44 sm:h-56'}`}
              >
                <img
                  src={image}
                  alt={`${accommodation.name} - foto ${index + 1}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-serif text-2xl font-bold text-[#14241A] mb-3">Sobre a acomodação</h3>
              <p className="text-sm text-[#526048] leading-relaxed mb-5">
                {accommodation.description}
              </p>

              <div className="space-y-4">
                {accommodation.structure.map((item) => (
                  <div key={item.title}>
                    <h4 className="text-sm font-bold text-[#14241A] mb-1">{item.title}</h4>
                    <p className="text-sm text-[#526048] leading-relaxed">
                      {item.details.join(' • ')}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-serif text-2xl font-bold text-[#14241A] mb-3">Principais comodidades</h3>
              <div className="space-y-2.5">
                {accommodation.highlightBadges.map((item) => (
                  <div key={item} className="flex items-start gap-2 text-sm text-[#445247]">
                    <Check className="w-4 h-4 text-[#8B6A2F] mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-[#E3D9CC] flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
            <p className="text-xs text-[#6B746D] max-w-lg">
              Disponibilidade, tarifa aplicável e condições finais são confirmadas no motor oficial de reservas.
            </p>
            <BookingButton
              id={`modal-reserve-${accommodation.id}`}
              accommodationId={accommodation.id}
              accommodationName={accommodation.name}
              label="VER DISPONIBILIDADE"
              variant="gold"
              size="md"
              className="sm:min-w-56"
              onClick={onClose}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
