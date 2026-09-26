import React, { useEffect, useRef } from 'react';
import { accommodations } from '../data/accommodations';
import { PRICING_CONFIG } from '../config/constants';
import { BookingButton } from './BookingButton';
import { AccommodationCardCarousel } from './AccommodationCardCarousel';
import { CalendarDays, Check, Sparkles } from 'lucide-react';
import { trackAccommodationCatalogView } from '../utils/metaPixel';

const formatPrice = (value: number) => value.toLocaleString('pt-BR');

export const AccommodationsSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const viewTrackedRef = useRef(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || viewTrackedRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          viewTrackedRef.current = true;
          trackAccommodationCatalogView();
          observer.disconnect();
        }
      },
      { threshold: 0.35 },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="acomodacoes" className="py-20 sm:py-24 bg-[#FAF7F2] text-[#2C332D]">
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

            return (
              <article
                key={acc.id}
                id={`accommodation-card-${acc.id}`}
                className="bg-white rounded-3xl border border-[#E3D9CC] overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col group"
              >
                <AccommodationCardCarousel accommodation={acc} />

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

    </section>
  );
};
