import React, { useEffect, useRef, useState } from 'react';
import { accommodations } from '../data/accommodations';
import { PRICING_CONFIG } from '../config/constants';
import { BookingButton } from './BookingButton';
import { AccommodationCardCarousel } from './AccommodationCardCarousel';
import { CalendarDays, Check, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { trackAccommodationCatalogView } from '../utils/metaPixel';

const formatPrice = (value: number) => value.toLocaleString('pt-BR');

export const AccommodationsSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const viewTrackedRef = useRef(false);
  const [activeAccommodation, setActiveAccommodation] = useState(0);

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

  const scrollToAccommodation = (index: number) => {
    const carousel = carouselRef.current;
    const card = carousel?.children[index] as HTMLElement | undefined;
    if (!carousel || !card) return;

    carousel.scrollTo({
      left: card.offsetLeft - carousel.offsetLeft,
      behavior: 'smooth',
    });
    setActiveAccommodation(index);
  };

  const updateActiveAccommodation = () => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const cards = Array.from(carousel.children) as HTMLElement[];
    const nextIndex = cards.reduce((closestIndex, card, index) => {
      const currentDistance = Math.abs(card.offsetLeft - carousel.offsetLeft - carousel.scrollLeft);
      const closestCard = cards[closestIndex];
      const closestDistance = Math.abs(
        closestCard.offsetLeft - carousel.offsetLeft - carousel.scrollLeft,
      );
      return currentDistance < closestDistance ? index : closestIndex;
    }, 0);

    setActiveAccommodation(nextIndex);
  };

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

        <div className="flex items-center justify-between gap-4 mb-5">
          <p className="text-sm font-semibold text-[#526048]" aria-live="polite">
            {activeAccommodation + 1} de {accommodations.length} acomodações
          </p>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => scrollToAccommodation(Math.max(0, activeAccommodation - 1))}
              disabled={activeAccommodation === 0}
              aria-label="Ver acomodação anterior"
              className="w-11 h-11 rounded-full border border-[#D8CCBC] bg-white text-[#14241A] flex items-center justify-center shadow-sm hover:border-[#8B6A2F] hover:text-[#8B6A2F] disabled:opacity-35 disabled:cursor-not-allowed cursor-pointer transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={() => scrollToAccommodation(Math.min(accommodations.length - 1, activeAccommodation + 1))}
              disabled={activeAccommodation === accommodations.length - 1}
              aria-label="Ver próxima acomodação"
              className="w-11 h-11 rounded-full border border-[#D8CCBC] bg-white text-[#14241A] flex items-center justify-center shadow-sm hover:border-[#8B6A2F] hover:text-[#8B6A2F] disabled:opacity-35 disabled:cursor-not-allowed cursor-pointer transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div
          ref={carouselRef}
          onScroll={updateActiveAccommodation}
          className="flex gap-5 sm:gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 -mx-4 px-4 sm:mx-0 sm:px-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          aria-label="Carrossel de acomodações"
        >
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
                className="shrink-0 basis-[92%] sm:basis-[72%] lg:basis-[calc((100%-1.5rem)/2)] snap-start bg-white rounded-3xl border border-[#E3D9CC] overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col group"
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
                      label="ESCOLHER DATAS"
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

        <div className="flex items-center justify-center gap-2 mt-2" aria-label="Selecionar acomodação">
          {accommodations.map((accommodation, index) => (
            <button
              key={accommodation.id}
              type="button"
              onClick={() => scrollToAccommodation(index)}
              aria-label={`Ver ${accommodation.name}`}
              aria-current={index === activeAccommodation ? 'true' : undefined}
              className={`h-2.5 rounded-full transition-all cursor-pointer ${
                index === activeAccommodation
                  ? 'w-8 bg-[#8B6A2F]'
                  : 'w-2.5 bg-[#D8CCBC] hover:bg-[#B8A88F]'
              }`}
            />
          ))}
        </div>

        <p className="mt-6 text-xs text-[#6B746D] text-center">
          Valores são referências das modalidades exibidas. Disponibilidade, pacotes e condições finais são confirmados pelo WhatsApp.
        </p>
      </div>

    </section>
  );
};

