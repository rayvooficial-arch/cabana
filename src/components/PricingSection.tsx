import React from 'react';
import { Calendar, Star } from 'lucide-react';
import { BookingButton } from './BookingButton';
import { useSiteContent } from '../context/SiteContentContext';

interface PricingSectionProps {
  onOpenBooking?: (accommodationId?: string) => void;
}

const formatBRL = (value: number | null) =>
  value === null ? 'Sob consulta' : value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

export const PricingSection: React.FC<PricingSectionProps> = () => {
  const { content } = useSiteContent();
  const { seasonalRates: SEASONAL_RATES, specialPackages: SPECIAL_PACKAGES } = content;
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
            Valores por diária para dezembro de 2026 e janeiro de 2027. Consulte a disponibilidade pelo WhatsApp.
          </p>
        </div>

        <div className="mb-10">
          <div className="flex items-center gap-2 mb-5">
            <Star className="w-4 h-4 text-[#C29B48]" />
            <h3 className="font-serif text-2xl font-bold">Dezembro e janeiro</h3>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-6">
            {([
              { name: 'Temporada Express', rates: SEASONAL_RATES.rates.express },
              { name: 'Temporada Conforto', rates: SEASONAL_RATES.rates.conforto },
            ] as const).map((mode) => (
              <article key={mode.name} className="rounded-xl sm:rounded-3xl bg-white/5 border border-[#C29B48]/30 p-3 sm:p-8">
                <span className="block text-[9px] sm:text-xs uppercase tracking-[0.12em] sm:tracking-[0.16em] text-[#E8D4A2] mb-2">
                  {SEASONAL_RATES.schedule}
                </span>
                <h4 className="font-serif text-base sm:text-2xl font-bold mb-4 sm:mb-5 leading-tight">{mode.name}</h4>
                <div className="space-y-3 sm:space-y-4 text-[10px] sm:text-sm">
                  <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-1 sm:gap-4 pb-3 sm:pb-4 border-b border-white/10">
                    <strong>Cabanas Éden e Manancial</strong>
                    <span className="text-[#E8D4A2] font-bold sm:text-right">{formatBRL(mode.rates.cabanas)} / diária</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-1 sm:gap-4">
                    <strong>Casa Pedacinho do Céu</strong>
                    <span className="text-[#E8D4A2] font-bold sm:text-right">{formatBRL(mode.rates.casa)} / diária</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <p className="text-center text-xs text-white/50 mt-4">{SEASONAL_RATES.period}</p>
        </div>

        <aside className="mb-10 sm:mb-12 rounded-3xl border border-[#C29B48]/40 bg-white/5 p-6 sm:p-8" aria-labelledby="informacoes-tarifas">
          <h3 id="informacoes-tarifas" className="font-serif text-2xl sm:text-3xl font-bold text-[#E8D4A2] mb-6">
            Informações importantes sobre nossas tarifas
          </h3>
          <div className="space-y-5 text-sm text-white/75 leading-relaxed">
            <p>
              <strong className="text-white">Tarifas de segunda a quarta-feira:</strong>{' '}
              os valores promocionais são válidos exclusivamente para períodos regulares de baixa temporada.
            </p>
            <p>
              <strong className="text-white">Feriados, datas comemorativas e alta temporada:</strong>{' '}
              possuem tarifas especiais, incluindo os meses de dezembro e janeiro, independentemente do dia da semana.
            </p>
            <p>
              <strong className="text-white">Planejando sua hospedagem para essas datas?</strong>{' '}
              Entre em contato com nossa equipe e solicite um orçamento personalizado.
            </p>
            <p className="text-white/85">
              Será um prazer ajudar você a planejar momentos especiais em nosso SPA em meio à natureza!
            </p>
          </div>
        </aside>

        <div className="mb-10">
          <div className="flex items-center gap-2 mb-5">
            <Calendar className="w-4 h-4 text-[#C29B48]" />
            <h3 className="font-serif text-2xl font-bold">Natal e Réveillon</h3>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-6">
            {SPECIAL_PACKAGES.map((pkg) => {
              const accommodations = [
                { name: 'Cabanas Éden e Manancial', rates: pkg.rates.cabanas },
                { name: 'Casa Pedacinho do Céu', rates: pkg.rates.casa },
              ];

              return (
                <article key={pkg.id} className="rounded-xl sm:rounded-3xl bg-[#1c3224] border border-[#C29B48]/40 p-3 sm:p-8">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-4 mb-4 sm:mb-5">
                    <div>
                      <h4 className="font-serif text-lg sm:text-2xl font-bold">{pkg.name}</h4>
                    </div>
                    <span className="self-start rounded-full bg-[#C29B48]/15 border border-[#C29B48]/30 px-2 sm:px-3 py-1 text-[8px] sm:text-[10px] uppercase tracking-wider text-[#E8D4A2]">
                      Mínimo de {pkg.minimumNights} diárias
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4 mb-4 sm:mb-6">
                    {accommodations.map((accommodation) => (
                      <div key={accommodation.name} className="rounded-lg sm:rounded-2xl bg-white/5 border border-white/10 p-2.5 sm:p-4">
                        <strong className="block text-[10px] sm:text-sm mb-2 sm:mb-3">{accommodation.name}</strong>
                        <div className="space-y-2 text-[9px] sm:text-xs">
                          <div className="flex flex-col sm:flex-row sm:justify-between gap-0.5 sm:gap-3">
                            <span className="text-white/60">Express</span>
                            <strong className="text-[#E8D4A2]">{formatBRL(accommodation.rates.express)} / diária</strong>
                          </div>
                          <div className="flex flex-col sm:flex-row sm:justify-between gap-0.5 sm:gap-3">
                            <span className="text-white/60">Conforto</span>
                            <strong className="text-[#E8D4A2]">{formatBRL(accommodation.rates.conforto)} / diária</strong>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <BookingButton
                    id={`package-${pkg.id}-cta`}
                    label="ESCOLHER DATAS"
                    variant="gold"
                    size="md"
                    className="w-full px-2 py-2.5 sm:px-4 sm:py-3.5 text-[10px] sm:text-xs"
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
            label="ESCOLHER DATAS"
            variant="gold"
            size="lg"
            params={{ source: 'pricing_section' }}
          />
        </div>
      </div>
    </section>
  );
};

