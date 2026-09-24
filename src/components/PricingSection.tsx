import React from 'react';
import { Calendar, Star } from 'lucide-react';
import { SPECIAL_PACKAGES, STAY_MODES, SEASONAL_RATES } from '../data/commercial';
import { BookingButton } from './BookingButton';

interface PricingSectionProps {
  onOpenBooking?: (accommodationId?: string) => void;
}

const formatBRL = (value: number | null) =>
  value === null ? 'Sob consulta' : value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

export const PricingSection: React.FC<PricingSectionProps> = () => {
  const express = STAY_MODES.express.pricing;
  const conforto = STAY_MODES.conforto.pricing;

  return (
    <section id="tarifario" className="py-20 sm:py-24 bg-[#14241A] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#E8D4A2]">
            Datas e valores
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold mt-3 mb-4">
            Tarifas e pacotes
          </h2>
          <p className="text-sm sm:text-base text-white/70 leading-relaxed">
            Use os valores abaixo como referência e confirme disponibilidade e preço final no motor de reservas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
          <article className="rounded-3xl bg-white/5 border border-white/10 p-6 sm:p-8">
            <h3 className="font-serif text-2xl font-bold mb-5">Temporada Express</h3>
            <div className="space-y-4">
              <div className="flex items-end justify-between gap-4 pb-4 border-b border-white/10">
                <div>
                  <strong className="block text-sm">Éden e Manancial</strong>
                  <span className="text-xs text-white/55">Seg–Qua / Qui–Dom</span>
                </div>
                <div className="text-right text-sm">
                  <strong className="block text-[#E8D4A2]">{formatBRL(express.cabanas.weekday)}</strong>
                  <span className="text-white/60">{formatBRL(express.cabanas.weekend)}</span>
                </div>
              </div>
              <div className="flex items-end justify-between gap-4">
                <div>
                  <strong className="block text-sm">Casa Pedacinho do Céu</strong>
                  <span className="text-xs text-white/55">Seg–Qua / Qui–Dom</span>
                </div>
                <div className="text-right text-sm">
                  <strong className="block text-[#E8D4A2]">{formatBRL(express.casa.weekday)}</strong>
                  <span className="text-white/60">{formatBRL(express.casa.weekend)}</span>
                </div>
              </div>
            </div>
          </article>

          <article className="rounded-3xl bg-white/5 border border-[#C29B48]/30 p-6 sm:p-8">
            <h3 className="font-serif text-2xl font-bold mb-5">Temporada Conforto</h3>
            <div className="space-y-4">
              <div className="flex items-end justify-between gap-4 pb-4 border-b border-white/10">
                <div>
                  <strong className="block text-sm">Éden e Manancial</strong>
                  <span className="text-xs text-white/55">Seg–Qua / Qui–Dom</span>
                </div>
                <div className="text-right text-sm">
                  <strong className="block text-[#E8D4A2]">{formatBRL(conforto.cabanas.weekday)}</strong>
                  <span className="text-white/60">{formatBRL(conforto.cabanas.weekend)}</span>
                </div>
              </div>
              <div className="flex items-end justify-between gap-4">
                <div>
                  <strong className="block text-sm">Casa Pedacinho do Céu</strong>
                  <span className="text-xs text-white/55">Seg–Qua / Qui–Dom</span>
                </div>
                <div className="text-right text-sm">
                  <strong className="block text-[#E8D4A2]">{formatBRL(conforto.casa.weekday)}</strong>
                  <span className="text-white/60">{formatBRL(conforto.casa.weekend)}</span>
                </div>
              </div>
            </div>
          </article>
        </div>

        <div className="mb-10">
          <div className="flex items-center gap-2 mb-5">
            <Star className="w-4 h-4 text-[#C29B48]" />
            <h3 className="font-serif text-2xl font-bold">Pacotes de fim de ano</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SPECIAL_PACKAGES.map((pkg) => (
              <article key={pkg.id} className="rounded-3xl bg-[#1c3224] border border-[#C29B48]/40 p-6 sm:p-8">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <span className="text-xs text-[#E8D4A2] flex items-center gap-1.5 mb-2">
                      <Calendar className="w-3.5 h-3.5" />
                      {pkg.period}
                    </span>
                    <h4 className="font-serif text-2xl font-bold">{pkg.name}</h4>
                  </div>
                  <span className="text-[10px] uppercase tracking-wider text-white/55">{pkg.nights} noites</span>
                </div>

                <div className="font-serif text-3xl font-bold text-[#E8D4A2] mb-5">
                  {formatBRL(pkg.price)}
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
            ))}
          </div>
        </div>

        <div className="rounded-3xl bg-white/5 border border-white/10 p-6 sm:p-8 mb-8">
          <h3 className="font-serif text-xl sm:text-2xl font-bold mb-4">Alta temporada</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
            {SEASONAL_RATES.dezembroAlta.map((period) => (
              <div key={period.id} className="rounded-2xl bg-white/5 border border-white/10 p-4">
                <span className="block text-white/60 text-xs mb-1">{period.period}</span>
                <strong className="text-[#E8D4A2]">{formatBRL(period.rate)} / diária</strong>
              </div>
            ))}
            <div className="rounded-2xl bg-white/5 border border-white/10 p-4">
              <span className="block text-white/60 text-xs mb-1">{SEASONAL_RATES.janeiro2027.period}</span>
              <strong className="text-[#E8D4A2]">Janeiro 2027</strong>
              <span className="block text-white/55 text-xs mt-1">Consulte a tarifa da acomodação no motor.</span>
            </div>
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
