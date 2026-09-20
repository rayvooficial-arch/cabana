import React from 'react';
import { Check, PackageCheck } from 'lucide-react';
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          <article className="rounded-3xl bg-white border border-[#E8DED1] p-6 sm:p-8 shadow-sm">
            <div className="flex items-start justify-between gap-4 mb-5">
              <div>
                <span className="text-[11px] uppercase tracking-wider font-bold text-[#8A6B2E]">
                  Mais econômica
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#14241A] mt-1">
                  {express.name}
                </h3>
              </div>
              <PackageCheck className="w-6 h-6 text-[#8A6B2E] shrink-0" />
            </div>

            <p className="text-sm text-[#526048] leading-relaxed mb-6">
              A acomodação é entregue limpa, organizada e equipada. Você leva o seu próprio enxoval e os alimentos e bebidas que pretende consumir.
            </p>

            <div className="rounded-2xl bg-[#FAF7F2] border border-[#E8DED1] p-4 mb-6">
              <strong className="text-xs uppercase tracking-wider text-[#14241A] block mb-3">
                Você leva
              </strong>
              <ul className="space-y-2">
                {express.guestMustBring.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-[#526048]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C29B48] mt-2 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="text-xs text-[#6B7568] mb-6">
              Itens básicos de chegada ficam disponíveis na acomodação, conforme a modalidade contratada.
            </p>

            <BookingButton
              id="stay-mode-express-cta"
              label="VER DATAS E VALORES"
              variant="outline"
              size="md"
              className="w-full py-3.5"
              params={{ source: 'stay_mode_express' }}
            />
          </article>

          <article className="rounded-3xl bg-[#14241A] text-white border border-[#C29B48]/40 p-6 sm:p-8 shadow-xl">
            <div className="flex items-start justify-between gap-4 mb-5">
              <div>
                <span className="text-[11px] uppercase tracking-wider font-bold text-[#E8D4A2]">
                  Tudo preparado
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold mt-1">
                  {conforto.name}
                </h3>
              </div>
              <Check className="w-6 h-6 text-[#C29B48] shrink-0" />
            </div>

            <p className="text-sm text-white/75 leading-relaxed mb-6">
              Você chega com a acomodação preparada, incluindo roupas de cama, mesa e banho. Basta trazer seus itens pessoais e alimentos perecíveis.
            </p>

            <div className="rounded-2xl bg-white/5 border border-white/10 p-4 mb-6">
              <strong className="text-xs uppercase tracking-wider text-[#E8D4A2] block mb-3">
                Incluso
              </strong>
              <ul className="space-y-2">
                {(conforto.includedItems || []).slice(0, 5).map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-white/75">
                    <Check className="w-4 h-4 text-[#C29B48] mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="text-xs text-white/60 mb-6">
              Os valores variam conforme acomodação e período. Consulte a disponibilidade no motor de reservas.
            </p>

            <BookingButton
              id="stay-mode-conforto-cta"
              label="VER DATAS E VALORES"
              variant="gold"
              size="md"
              className="w-full py-3.5"
              params={{ source: 'stay_mode_conforto' }}
            />
          </article>
        </div>
      </div>
    </section>
  );
};
