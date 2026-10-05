import React from 'react';
import { Calendar, Star } from 'lucide-react';
import { SPECIAL_PACKAGES, SEASONAL_RATES } from '../data/commercial';
import { BookingButton } from './BookingButton';

interface PricingSectionProps {
  onOpenBooking?: (accommodationId?: string) => void;
}

const formatBRL = (value: number | null) =>
  value === null ? 'Sob consulta' : value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

export const PricingSection: React.FC<PricingSectionProps> = () => {
  return (
    <section id="tarifario" className="py-20 sm:py-24 bg-[#14241A] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#E8D4A2]">
            Datas e valores
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold mt-3 mb-4">
            Tarifas de alta temporada
          </h2>
          <p className="text-sm sm:text-base text-white/70 leading-relaxed">
            Valores por diária para dezembro de 2026 e janeiro de 2027. Consulte a disponibilidade no motor de reservas.
          </p>
        </div>

        <div className="mb-10">
          <div className="flex items-center gap-2 mb-5">
            <Star className="w-4 h-4 text-[#C29B48]" />
            <h3 className="font-serif text-2xl font-bold">Dezembro e janeiro</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {([
              { name: 'Temporada Express', rates: SEASONAL_RATES.rates.express },
              { name: 'Temporada Conforto', rates: SEASONAL_RATES.rates.conforto },
            ] as const).map((mode) => (
              <article key={mode.name} className="rounded-3xl bg-white/5 border border-[#C29B48]/30 p-6 sm:p-8">
                <span className="block text-xs uppercase tracking-[0.16em] text-[#E8D4A2] mb-2">
                  {SEASONAL_RATES.schedule}
                </span>
                <h4 className="font-serif text-2xl font-bold mb-5">{mode.name}</h4>
                <div className="space-y-4 text-sm">
                  <div className="flex items-end justify-between gap-4 pb-4 border-b border-white/10">
                    <strong>Cabanas Éden e Manancial</strong>
                    <span className="text-right text-[#E8D4A2] font-bold">{formatBRL(mode.rates.cabanas)} / diária</span>
                  </div>
                  <div className="flex items-end justify-between gap-4">
                    <strong>Casa Pedacinho do Céu</strong>
                    <span className="text-right text-[#E8D4A2] font-bold">{formatBRL(mode.rates.casa)} / diária</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <p className="text-center text-xs text-white/50 mt-4">{SEASONAL_RATES.period}</p>
        </div>

        <div className="mb-10">
          <div className="flex items-center gap-2 mb-5">
            <Calendar className="w-4 h-4 text-[#C29B48]" />
            <h3 className="font-serif text-2xl font-bold">Natal e Réveillon</h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {SPECIAL_PACKAGES.map((pkg) => {
              const accommodations = [
                { name: 'Cabanas Éden e Manancial', rates: pkg.rates.cabanas },
                { name: 'Casa Pedacinho do Céu', rates: pkg.rates.casa },
              ];

              return (
                <article key={pkg.id} className="rounded-3xl bg-[#1c3224] border border-[#C29B48]/40 p-6 sm:p-8">
                  <div className="flex items-start justify-between gap-4 mb-5">
                    <div>
                      <span className="text-xs text-[#E8D4A2] flex items-center gap-1.5 mb-2">
                        <Calendar className="w-3.5 h-3.5" />
                        {pkg.period}
                      </span>
                      <h4 className="font-serif text-2xl font-bold">{pkg.name}</h4>
                    </div>
                    <span className="rounded-full bg-[#C29B48]/15 border border-[#C29B48]/30 px-3 py-1 text-[10px] uppercase tracking-wider text-[#E8D4A2] text-right">
                      Mínimo de {pkg.minimumNights} diárias
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                    {accommodations.map((accommodation) => (
                      <div key={accommodation.name} className="rounded-2xl bg-white/5 border border-white/10 p-4">
                        <strong className="block text-sm mb-3">{accommodation.name}</strong>
                        <div className="space-y-2 text-xs">
                          <div className="flex justify-between gap-3">
                            <span className="text-white/60">Express</span>
                            <strong className="text-[#E8D4A2]">{formatBRL(accommodation.rates.express)} / diária</strong>
                          </div>
                          <div className="flex justify-between gap-3">
                            <span className="text-white/60">Conforto</span>
                            <strong className="text-[#E8D4A2]">{formatBRL(accommodation.rates.conforto)} / diária</strong>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <BookingButton
                    id={`package-${pkg.id}-cta`}
                    label="VER DISPONIBILIDADE"
                    variant="gold"
                    size="md"
                    className="w-full py-3.5"
                    params={{ rateCode: pkg.id, source: 'special_package' }}
                  />
                </article>
              );
            })}
          </div>
        </div>

        <div className="text-center">
          <BookingButton
            id="pricing-main-cta"
            label="CONSULTAR DISPONIBILIDADE"
            variant="gold"
            size="lg"
            params={{ source: 'pricing_section' }}
          />
        </div>
      </div>
    </section>
  );
};
