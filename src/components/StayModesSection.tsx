import React from 'react';
import { Check, Info, PackageCheck } from 'lucide-react';
import { STAY_MODES } from '../data/commercial';
import { BookingButton } from './BookingButton';

interface StayModesSectionProps {
  onOpenBooking?: (accommodationId?: string) => void;
}

export const StayModesSection: React.FC<StayModesSectionProps> = () => {
  const express = STAY_MODES.express;
  const conforto = STAY_MODES.conforto;

  return (
    <section id="modalidades" className="py-20 sm:py-24 bg-[#FAF7F2] text-[#2C332D]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8A6B2E]">
            Modalidades de hospedagem
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#14241A] mt-3 mb-4">
            Express ou Conforto?
          </h2>
          <p className="text-sm sm:text-base text-[#526048] leading-relaxed">
            A acomodação e a estrutura são as mesmas. O que muda é o enxoval e a preparação da estadia.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:gap-8">
          <article className="rounded-xl sm:rounded-3xl bg-white border border-[#E8DED1] p-3 sm:p-8 shadow-sm">
            <div className="flex items-start justify-between gap-4 mb-5">
              <div>
                <span className="text-[11px] uppercase tracking-wider font-bold text-[#8A6B2E]">
                  Mais econômica
                </span>
                <h3 className="font-serif text-lg sm:text-3xl font-bold text-[#14241A] mt-1 leading-tight">
                  {express.name}
                </h3>
              </div>
              <PackageCheck className="w-5 h-5 sm:w-6 sm:h-6 text-[#8A6B2E] shrink-0" />
            </div>

            <p className="text-[11px] sm:text-sm text-[#526048] leading-relaxed mb-4 sm:mb-6">
              A acomodação é entregue limpa, organizada e equipada. Você leva o seu próprio enxoval e os alimentos e bebidas que pretende consumir.
            </p>

            <div className="rounded-xl sm:rounded-2xl bg-[#FAF7F2] border border-[#E8DED1] p-3 sm:p-4 mb-4 sm:mb-6">
              <strong className="text-xs uppercase tracking-wider text-[#14241A] block mb-3">
                Você leva
              </strong>
              <ul className="space-y-2">
                {express.guestMustBring.map((item) => (
                  <li key={item} className="flex items-start gap-1.5 sm:gap-2 text-[10px] sm:text-sm text-[#526048]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C29B48] mt-2 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="text-[10px] sm:text-xs text-[#6B7568] mb-4 sm:mb-6">
              Itens básicos de chegada ficam disponíveis na acomodação, conforme a modalidade contratada.
            </p>

            <BookingButton
              id="stay-mode-express-cta"
              label="ESCOLHER DATAS"
              variant="outline"
              size="md"
              className="w-full px-2 py-2.5 sm:px-4 sm:py-3.5 text-[10px] sm:text-xs"
              params={{ source: 'stay_mode_express' }}
            />
          </article>

          <article className="rounded-xl sm:rounded-3xl bg-[#14241A] text-white border border-[#C29B48]/40 p-3 sm:p-8 shadow-xl">
            <div className="flex items-start justify-between gap-4 mb-5">
              <div>
                <span className="text-[11px] uppercase tracking-wider font-bold text-[#E8D4A2]">
                  Tudo preparado
                </span>
                <h3 className="font-serif text-lg sm:text-3xl font-bold mt-1 leading-tight">
                  {conforto.name}
                </h3>
              </div>
              <Check className="w-5 h-5 sm:w-6 sm:h-6 text-[#C29B48] shrink-0" />
            </div>

            <p className="text-[11px] sm:text-sm text-white/75 leading-relaxed mb-4 sm:mb-6">
              Você chega com a acomodação preparada, incluindo roupas de cama, mesa e banho. Basta trazer seus itens pessoais e alimentos perecíveis.
            </p>

            <div className="rounded-xl sm:rounded-2xl bg-white/5 border border-white/10 p-3 sm:p-4 mb-4 sm:mb-6">
              <strong className="text-xs uppercase tracking-wider text-[#E8D4A2] block mb-3">
                Incluso
              </strong>
              <ul className="space-y-2">
                {(conforto.includedItems || []).slice(0, 5).map((item) => (
                  <li key={item} className="flex items-start gap-1.5 sm:gap-2 text-[10px] sm:text-sm text-white/75">
                    <Check className="w-4 h-4 text-[#C29B48] mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="text-[10px] sm:text-xs text-white/60 mb-4 sm:mb-6">
              Os valores variam conforme acomodação e período. Consulte a disponibilidade pelo WhatsApp.
            </p>

            <BookingButton
              id="stay-mode-conforto-cta"
              label="ESCOLHER DATAS"
              variant="gold"
              size="md"
              className="w-full px-2 py-2.5 sm:px-4 sm:py-3.5 text-[10px] sm:text-xs"
              params={{ source: 'stay_mode_conforto' }}
            />
          </article>
        </div>

        <aside className="mt-6 sm:mt-8 rounded-2xl border border-[#D6C49C] bg-[#F3ECE2] p-5 sm:p-6" aria-label="Observação sobre os itens disponíveis">
          <div className="flex items-start gap-3">
            <Info className="w-5 h-5 text-[#8A6B2E] mt-0.5 shrink-0" />
            <div>
              <h3 className="text-sm font-bold text-[#14241A]">
                Itens não perecíveis e de apoio
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#526048]">
                Conforme a modalidade contratada, podem estar disponíveis: sal fino, sal de parrilla, azeite de oliva extravirgem, vinagre de vinho tinto, pimenta, açúcar, adoçante, café, milho de pipoca, detergente, esponja, guardanapos, papel-toalha e pano de prato.
              </p>
              <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-[#8A6B2E]">
                A disponibilidade e a composição desses produtos variam conforme a modalidade escolhida.
              </p>
              <p className="mt-2 text-xs font-semibold text-[#7A4F20]">
                Em feriados e datas comemorativas, as tarifas podem sofrer alterações. Consulte o valor aplicável ao período desejado.
              </p>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
};

