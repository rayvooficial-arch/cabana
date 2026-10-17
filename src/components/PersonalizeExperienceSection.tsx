import React from 'react';
import { Coffee, Film, Fish, Gift, GraduationCap, Heart, Sandwich, Sprout } from 'lucide-react';
import { EXPERIENCES_AND_BASKETS } from '../data/commercial';
import { BookingButton } from './BookingButton';

export const PersonalizeExperienceSection: React.FC = () => {
  return (
    <section id="personalize-experiencia" className="py-20 sm:py-24 bg-[#F3ECE2] text-[#2C332D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8A6B2E]">
            Adicionais
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#14241A] mt-3 mb-4">
            Cestas e experiências extras
          </h2>
          <p className="text-sm sm:text-base text-[#526048] leading-relaxed">
            Itens opcionais para incluir na estadia. Consulte disponibilidade junto com a sua reserva.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
          {EXPERIENCES_AND_BASKETS.map((item) => {
            const includedItems = item.items || item.extraItems || [];
            const Icon = item.id === 'cafe-express'
              ? Coffee
              : item.id === 'boas-vindas'
                ? Gift
                : item.id === 'dia-fazendeiro'
                  ? Sprout
                  : item.id === 'pescador-profissional'
                    ? Fish
                    : item.id === 'cinema-em-familia'
                      ? Film
                      : item.id === 'piquenique-no-campo'
                        ? Sandwich
                      : item.id === 'pacote-escola'
                        ? GraduationCap
                        : Heart;
            const highlighted = Boolean(item.isHighlight);

            return (
              <article
                key={item.id}
                className={`rounded-xl sm:rounded-3xl p-3 sm:p-7 border flex flex-col justify-between ${
                  highlighted
                    ? 'bg-[#14241A] text-white border-[#C29B48]/40 shadow-xl'
                    : 'bg-white text-[#2C332D] border-[#E8DED1] shadow-sm'
                }`}
              >
                <div>
                  <div className="flex items-start justify-between gap-2 sm:gap-4 mb-3 sm:mb-4">
                    <Icon className={`w-4 h-4 sm:w-5 sm:h-5 shrink-0 ${highlighted ? 'text-[#C29B48]' : 'text-[#8A6B2E]'}`} />
                    <div className="text-right">
                      <span className={`block text-[8px] sm:text-[10px] uppercase tracking-wider ${highlighted ? 'text-white/55' : 'text-[#6B7568]'}`}>
                        {item.forGuests}
                      </span>
                      <strong className={`block max-w-[190px] text-[10px] sm:text-base leading-snug ${highlighted ? 'text-[#E8D4A2]' : 'text-[#14241A]'}`}>
                        {item.priceFormatted || (item.price ? `R$ ${item.price.toLocaleString('pt-BR')}` : 'Consultar valor')}
                      </strong>
                    </div>
                  </div>

                  <h3 className={`font-serif text-base sm:text-2xl font-bold mb-2 leading-tight ${highlighted ? 'text-white' : 'text-[#14241A]'}`}>
                    {item.name}
                  </h3>

                  <p className={`text-[11px] sm:text-sm leading-relaxed mb-3 sm:mb-4 ${highlighted ? 'text-white/75' : 'text-[#526048]'}`}>
                    {item.emotionalCopy}
                  </p>

                  {item.subtitle && (
                    <p className={`text-[10px] sm:text-xs leading-relaxed mb-3 sm:mb-4 ${highlighted ? 'text-white/60' : 'text-[#6B7568]'}`}>
                      {item.subtitle}
                    </p>
                  )}

                  {includedItems.length > 0 && (
                    <ul className="space-y-1.5 sm:space-y-2 mb-4 sm:mb-5">
                      {includedItems.map((included) => (
                        <li
                          key={included}
                          className={`text-[10px] sm:text-sm flex items-start gap-1.5 sm:gap-2 ${highlighted ? 'text-white/70' : 'text-[#526048]'}`}
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#C29B48] mt-1.5 sm:mt-2 shrink-0" />
                          <span>{included}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {item.note && (
                    <p className={`text-[10px] sm:text-xs leading-relaxed mb-4 sm:mb-5 ${highlighted ? 'text-white/55' : 'text-[#6B7568]'}`}>
                      {item.note}
                    </p>
                  )}
                </div>

                <BookingButton
                  id={`addon-${item.id}-cta`}
                  label={item.ctaText || 'ESCOLHER DATAS'}
                  variant={highlighted ? 'gold' : 'outline'}
                  size="sm"
                  className="w-full px-2 py-2.5 sm:px-4 sm:py-3 text-[10px] sm:text-xs"
                  params={{ experienceId: item.id, source: 'addon_card' }}
                />
              </article>
            );
          })}
        </div>

        <p className="text-center text-xs text-[#6B7568] mt-8">
          Valores e disponibilidade dos adicionais podem variar. Confirme no momento da reserva.
        </p>
      </div>
    </section>
  );
};

