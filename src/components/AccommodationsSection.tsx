import React, { useState } from 'react';
import { accommodations } from '../data/accommodations';
import { Accommodation } from '../types';
import { PRICING_CONFIG } from '../config/constants';
import { BookingButton } from './BookingButton';
import { EdenGalleryModal } from './EdenGalleryModal';
import { CalendarDays, Camera, Check, Heart, Sparkles, Users } from 'lucide-react';

const cardPhotoPosition: Record<Accommodation['id'], string> = {
  eden: 'center center',
  manancial: 'center 58%',
  'pedacinho-do-ceu': 'center 50%',
};

const formatPrice = (value: number) => value.toLocaleString('pt-BR');

export const AccommodationsSection: React.FC = () => {
  const [openGallery, setOpenGallery] = useState<Accommodation['id'] | null>(null);

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
            Compare a acomodação e escolha entre Temporada Conforto ou Temporada Express antes de consultar sua data.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {accommodations.map((acc) => {
            const isHouse = acc.id === 'pedacinho-do-ceu';
            const comfortPricing = isHouse
              ? PRICING_CONFIG.conforto.casa
              : PRICING_CONFIG.conforto.cabanas;
            const hasComfortPrice =
              comfortPricing.weekdayPrice !== null && comfortPricing.weekendPrice !== null;
            const hasGallery = Boolean(acc.detailedPhotos?.length);

            return (
              <article
                key={acc.id}
                id={`accommodation-card-${acc.id}`}
                className="bg-white rounded-3xl border border-[#E3D9CC] overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col group"
              >
                {/* Accommodation Card Image Container - Click to open gallery */}
                <div
                  className={`relative aspect-[20/13] bg-[#EEE8DF] overflow-hidden ${
                    hasGallery ? 'cursor-pointer' : ''
                  }`}
                  onClick={() => {
                    if (hasGallery) setOpenGallery(acc.id);
                  }}
                  title={hasGallery ? `Ver galeria da ${acc.name}` : undefined}
                >
                  <img
                    src={acc.coverImage}
                    alt={`Foto de ${acc.name}`}
                    className={`absolute inset-0 h-full w-full object-cover select-none transition-transform duration-500 ${
                      hasGallery ? 'group-hover:scale-105' : ''
                    }`}
                    style={{ objectPosition: cardPhotoPosition[acc.id] }}
                    loading="lazy"
                    decoding="async"
                    draggable={false}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10 pointer-events-none" />

                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 flex gap-2 flex-wrap pointer-events-none">
                    <span className="inline-flex items-center gap-1.5 bg-[#14241A]/90 text-white text-xs font-semibold px-3 py-1.5 rounded-full backdrop-blur-sm shadow-sm">
                      <Users className="w-3.5 h-3.5 text-[#C29B48]" />
                      {acc.capacity}
                    </span>
                    {acc.isPetFriendly && (
                      <span className="inline-flex items-center gap-1.5 bg-white/90 text-[#14241A] text-xs font-semibold px-3 py-1.5 rounded-full backdrop-blur-sm shadow-sm">
                        <Heart className="w-3.5 h-3.5 text-[#8B6A2F]" />
                        Pet friendly
                      </span>
                    )}
                  </div>

                  {/* Click to open gallery badge for Cabana Éden */}
                  {hasGallery && (
                    <div className="absolute bottom-3 right-3 flex items-center gap-1.5 bg-black/75 hover:bg-black/90 text-white text-[11px] font-semibold px-3 py-1.5 rounded-full backdrop-blur-sm border border-white/20 transition-all shadow-md group-hover:scale-105">
                      <Camera className="w-3.5 h-3.5 text-[#E8D4A2]" />
                      <span>{acc.detailedPhotos?.length} fotos • Ver galeria</span>
                    </div>
                  )}
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

                    <div className="relative rounded-2xl bg-[#173526] border border-[#C7A65A] p-4 mb-3 shadow-md overflow-hidden">
                      <div className="absolute top-0 right-0 rounded-bl-xl bg-[#D7B86A] text-[#14241A] px-3 py-1.5 text-[9px] sm:text-[10px] font-extrabold uppercase tracking-[0.14em]">
                        Mais reservada
                      </div>

                      <div className="flex items-center gap-2 mb-2 pr-24">
                        <Sparkles className="w-4 h-4 text-[#E8D4A2]" />
                        <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#F7E9C1]">
                          Temporada Conforto
                        </span>
                      </div>

                      <p className="text-[11px] leading-relaxed text-white/75 mb-3">
                        Chegue e encontre tudo preparado, com roupas de cama, mesa e banho inclusas.
                      </p>

                      {hasComfortPrice ? (
                        <div className="grid grid-cols-2 gap-3">
                          <div>
                            <span className="block text-[11px] text-white/65 mb-1">Segunda a quarta</span>
                            <strong className="font-serif text-xl text-white">
                              R$ {formatPrice(comfortPricing.weekdayPrice as number)}
                            </strong>
                            <span className="text-[11px] text-white/60"> / diária</span>
                          </div>
                          <div className="border-l border-white/20 pl-3">
                            <span className="block text-[11px] text-white/65 mb-1">Quinta a domingo</span>
                            <strong className="font-serif text-xl text-white">
                              R$ {formatPrice(comfortPricing.weekendPrice as number)}
                            </strong>
                            <span className="text-[11px] text-white/60"> / diária</span>
                          </div>
                        </div>
                      ) : (
                        <div className="rounded-xl bg-white/10 border border-white/10 px-3 py-2.5">
                          <strong className="text-sm text-white block">Valores sob consulta</strong>
                          <span className="text-[11px] text-white/65">
                            Consulte a disponibilidade e o valor oficial para sua data.
                          </span>
                        </div>
                      )}
                    </div>

                    <div className="rounded-2xl bg-[#F6F1EA] border border-[#E8DED1] p-4 mb-6">
                      <div className="flex items-center gap-2 mb-2">
                        <CalendarDays className="w-4 h-4 text-[#8B6A2F]" />
                        <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#526048]">
                          Temporada Express
                        </span>
                      </div>

                      <p className="text-[11px] leading-relaxed text-[#6B746D] mb-3">
                        Opção econômica: você traz seu próprio enxoval e aproveita toda a estrutura da propriedade.
                      </p>

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

                  <div className="pt-5 border-t border-[#E8DED1]">
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
            );
          })}
        </div>

        <p className="mt-6 text-xs text-[#6B746D] text-center">
          Valores são referências das modalidades exibidas. Disponibilidade, pacotes e condições finais são confirmados no motor oficial de reservas.
        </p>
      </div>

      <EdenGalleryModal
        isOpen={openGallery !== null}
        accommodationId={openGallery || 'eden'}
        onClose={() => setOpenGallery(null)}
      />
    </section>
  );
};
