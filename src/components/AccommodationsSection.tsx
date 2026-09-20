import React from 'react';
import { accommodations } from '../data/accommodations';
import { Accommodation } from '../types';
import { BookingButton } from './BookingButton';
import { CalendarDays, Check, Heart, Users } from 'lucide-react';

interface AccommodationsSectionProps {
  onOpenBooking?: (accommodationId?: string) => void;
  onOpenDetails?: (accommodation: Accommodation) => void;
}

export const AccommodationsSection: React.FC<AccommodationsSectionProps> = ({
  onOpenDetails,
}) => {
  return (
    <section id="acomodacoes" className="py-20 sm:py-24 bg-[#FAF7F2] text-[#2C332D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-10 sm:mb-12">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8B6A2F]">
            Acomodações
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#14241A] mt-2 mb-4">
            Escolha onde você quer ficar
          </h2>
          <p className="text-sm sm:text-base text-[#526048] leading-relaxed max-w-2xl">
            Compare capacidade, principais comodidades e valores da Temporada Express antes de consultar sua data.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {accommodations.map((acc) => (
            <article
              key={acc.id}
              id={`accommodation-card-${acc.id}`}
              className="bg-white rounded-3xl border border-[#E3D9CC] overflow-hidden shadow-sm flex flex-col"
            >
              <div className="relative h-64 sm:h-72 bg-[#EEE8DF] overflow-hidden">
                <img
                  src={acc.coverImage}
                  alt={acc.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />

                <div className="absolute top-4 left-4 flex gap-2 flex-wrap">
                  <span className="inline-flex items-center gap-1.5 bg-[#14241A]/90 text-white text-xs font-semibold px-3 py-1.5 rounded-full backdrop-blur-sm">
                    <Users className="w-3.5 h-3.5 text-[#C29B48]" />
                    {acc.capacity}
                  </span>
                  {acc.isPetFriendly && (
                    <span className="inline-flex items-center gap-1.5 bg-white/90 text-[#14241A] text-xs font-semibold px-3 py-1.5 rounded-full backdrop-blur-sm">
                      <Heart className="w-3.5 h-3.5 text-[#8B6A2F]" />
                      Pet friendly
                    </span>
                  )}
                </div>
              </div>

              <div className="p-6 sm:p-7 flex flex-col flex-1">
                <div className="flex-1">
                  <h3 className="font-serif text-2xl font-bold text-[#14241A] mb-2">
                    {acc.name}
                  </h3>
                  <p className="text-sm text-[#526048] leading-relaxed mb-5">
                    {acc.tagline}
                  </p>

                  <div className="space-y-2 mb-5">
                    {acc.highlightBadges.slice(0, 4).map((badge) => (
                      <div key={badge} className="flex items-center gap-2 text-sm text-[#445247]">
                        <Check className="w-4 h-4 text-[#8B6A2F] shrink-0" />
                        <span>{badge}</span>
                      </div>
                    ))}
                  </div>

                  <div className="rounded-2xl bg-[#F6F1EA] border border-[#E8DED1] p-4 mb-6">
                    <div className="flex items-center gap-2 mb-3">
                      <CalendarDays className="w-4 h-4 text-[#8B6A2F]" />
                      <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#526048]">
                        Temporada Express
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <span className="block text-[11px] text-[#6B746D] mb-1">Segunda a quarta</span>
                        <strong className="font-serif text-xl text-[#14241A]">
                          R$ {acc.weekdayPrice.toLocaleString('pt-BR')}
                        </strong>
                        <span className="text-[11px] text-[#6B746D]"> / diária</span>
                      </div>
                      <div className="border-l border-[#DDD2C5] pl-3">
                        <span className="block text-[11px] text-[#6B746D] mb-1">Quinta a domingo</span>
                        <strong className="font-serif text-xl text-[#14241A]">
                          R$ {acc.weekendPrice.toLocaleString('pt-BR')}
                        </strong>
                        <span className="text-[11px] text-[#6B746D]"> / diária</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-5 border-t border-[#E8DED1] space-y-2.5">
                  {onOpenDetails && (
                    <button
                      type="button"
                      onClick={() => onOpenDetails(acc)}
                      id={`view-details-${acc.id}`}
                      className="w-full px-5 py-3 rounded-xl border border-[#D9CDBE] text-[#14241A] text-xs font-bold uppercase tracking-wider hover:bg-[#F3ECE2] transition-colors cursor-pointer"
                    >
                      Ver fotos e detalhes
                    </button>
                  )}

                  <BookingButton
                    id={`reserve-${acc.id}`}
                    accommodationId={acc.id}
                    accommodationName={acc.name}
                    label="VER DISPONIBILIDADE"
                    variant="primary"
                    size="md"
                    className="w-full"
                  />
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-6 text-xs text-[#6B746D] text-center">
          Valores acima são referência da Temporada Express. Disponibilidade, pacotes e condições finais são confirmados no motor oficial de reservas.
        </p>
      </div>
    </section>
  );
};
