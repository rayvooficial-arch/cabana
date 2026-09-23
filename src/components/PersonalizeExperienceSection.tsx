import React from 'react';
import { Flame, Gift } from 'lucide-react';
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {EXPERIENCES_AND_BASKETS.map((item) => {
            const previewItems = item.items?.slice(0, 4) || item.extraItems?.slice(0, 4) || [];
            const Icon = item.id === 'fogareiro-premium' ? Flame : Gift;

            return (
              <article
                key={item.id}
                className={`rounded-3xl p-6 sm:p-7 border flex flex-col justify-between ${
                  item.id === 'fogareiro-premium'
                    ? 'bg-[#14241A] text-white border-[#C29B48]/40 shadow-xl'
                    : 'bg-white text-[#2C332D] border-[#E8DED1] shadow-sm'
                }`}
              >
                <div>
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <Icon className={`w-5 h-5 ${item.id === 'fogareiro-premium' ? 'text-[#C29B48]' : 'text-[#8A6B2E]'}`} />
                    <div className="text-right">
                      <span className={`block text-[10px] uppercase tracking-wider ${item.id === 'fogareiro-premium' ? 'text-white/55' : 'text-[#6B7568]'}`}>
                        {item.forGuests}
                      </span>
                      <strong className={`text-base ${item.id === 'fogareiro-premium' ? 'text-[#E8D4A2]' : 'text-[#14241A]'}`}>
                        {item.price ? `R$ ${item.price.toLocaleString('pt-BR')}` : item.priceFormatted || 'Consultar valor'}
                      </strong>
                    </div>
                  </div>

                  <h3 className={`font-serif text-xl sm:text-2xl font-bold mb-3 ${item.id === 'fogareiro-premium' ? 'text-white' : 'text-[#14241A]'}`}>
                    {item.name}
                  </h3>

                  {previewItems.length > 0 && (
                    <ul className="space-y-2 mb-5">
                      {previewItems.map((preview) => (
                        <li
                          key={preview}
                          className={`text-sm flex items-start gap-2 ${item.id === 'fogareiro-premium' ? 'text-white/70' : 'text-[#526048]'}`}
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#C29B48] mt-2 shrink-0" />
                          <span>{preview}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {item.note && (
                    <p className={`text-xs leading-relaxed mb-5 ${item.id === 'fogareiro-premium' ? 'text-white/55' : 'text-[#6B7568]'}`}>
                      {item.note}
                    </p>
                  )}
                </div>

                <BookingButton
                  id={`addon-${item.id}-cta`}
                  label="CONSULTAR NA RESERVA"
                  variant={item.id === 'fogareiro-premium' ? 'gold' : 'outline'}
                  size="sm"
                  className="w-full py-3"
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
