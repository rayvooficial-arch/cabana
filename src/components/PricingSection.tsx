import React, { useState } from 'react';
import { pricingTiers } from '../data/pricingAndInfo';
import { createDirectAccommodationWhatsAppLink, trackWhatsAppClick } from '../utils/whatsapp';
import {
  Calendar,
  Check,
  Percent,
  Sparkles,
  ArrowRight,
  Info,
  DollarSign,
  MessageSquare,
} from 'lucide-react';

interface PricingSectionProps {
  onOpenBooking: (accommodationId?: string) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onOpenBooking }) => {
  const [selectedPeriod, setSelectedPeriod] = useState<'all' | 'seg-qua' | 'qui-dom'>('all');

  return (
    <section id="tarifario" className="py-24 bg-[#14241A] text-white relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#1c3224]/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C29B48]/20 text-[#E8D4A2] text-xs font-semibold uppercase tracking-widest mb-4 border border-[#C29B48]/30">
            <Percent className="w-3.5 h-3.5 text-[#C29B48]" />
            <span>Condições Transparentes</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Tarifário
          </h2>

          <p className="font-serif italic text-lg sm:text-2xl text-[#E8D4A2] mb-3">
            “Escolha seus dias e venha viver essa experiência.”
          </p>

          <p className="font-sans text-xs sm:text-sm text-white/75 max-w-xl mx-auto">
            Aproveite a tranquilidade do campo com valores especiais de segunda a quarta-feira com 20% de desconto exclusivo.
          </p>
        </div>

        {/* Promo Highlight Banner */}
        <div className="max-w-3xl mx-auto mb-12 bg-gradient-to-r from-[#C29B48]/20 via-[#C29B48]/30 to-[#C29B48]/20 border border-[#C29B48]/50 rounded-2xl p-4 sm:p-5 flex items-center justify-center gap-4 text-center">
          <div className="w-10 h-10 rounded-full bg-[#C29B48] text-[#14241A] flex items-center justify-center shrink-0 font-bold text-sm">
            %
          </div>
          <div>
            <span className="font-serif font-bold text-base sm:text-lg text-[#E8D4A2] block">
              Desconto Especial de Segunda a Quarta-feira: 20% OFF
            </span>
            <span className="text-xs text-white/80">
              Desfrute do mesmo conforto, spa e lazer com tarifa reduzida durante os dias úteis.
            </span>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          {pricingTiers.map((tier) => (
            <div
              key={tier.id}
              id={`pricing-card-${tier.id}`}
              className="bg-[#1c3224]/90 rounded-3xl p-8 sm:p-10 border border-[#C29B48]/40 shadow-2xl flex flex-col justify-between relative hover:border-[#C29B48] transition-all duration-300"
            >
              <div>
                {/* Header of Card */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs uppercase tracking-widest text-[#C29B48] font-bold">
                    {tier.appliesTo}
                  </span>
                  <span className="text-xs px-2.5 py-1 rounded-full bg-white/10 text-white border border-white/10">
                    {tier.capacityText}
                  </span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-2">
                  {tier.name}
                </h3>

                <p className="text-xs sm:text-sm text-white/70 mb-8 leading-relaxed">
                  {tier.description}
                </p>

                {/* Price Blocks Comparison: Quinta-Domingo vs Segunda-Quarta */}
                <div className="space-y-4 mb-8">
                  {/* Weekend (Quinta a Domingo) */}
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between">
                    <div>
                      <span className="text-xs text-white/70 uppercase tracking-wider block">
                        Quinta a Domingo
                      </span>
                      <span className="text-[11px] text-white/50">Fim de semana padrão</span>
                    </div>
                    <div className="text-right">
                      <span className="font-serif text-2xl sm:text-3xl font-bold text-white">
                        R$ {tier.regularPrice.toLocaleString('pt-BR')}
                      </span>
                      <span className="text-xs text-white/60 block">/diária</span>
                    </div>
                  </div>

                  {/* Midweek (Segunda a Quarta) - 20% OFF Highlight */}
                  <div className="p-4 rounded-2xl bg-[#C29B48]/15 border-2 border-[#C29B48] flex items-center justify-between relative overflow-hidden">
                    <div className="absolute top-0 right-0 bg-[#C29B48] text-[#14241A] text-[9px] font-extrabold uppercase tracking-widest px-2.5 py-0.5 rounded-bl-lg">
                      20% OFF
                    </div>
                    <div>
                      <span className="text-xs text-[#E8D4A2] font-semibold uppercase tracking-wider block">
                        Segunda a Quarta
                      </span>
                      <span className="text-[11px] text-[#C29B48]">
                        Preço original:{' '}
                        <span className="line-through text-white/50">
                          R$ {tier.regularPrice.toLocaleString('pt-BR')}
                        </span>
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="font-serif text-2xl sm:text-3xl font-bold text-[#E8D4A2]">
                        R$ {tier.promoPrice.toLocaleString('pt-BR')}
                      </span>
                      <span className="text-xs text-white/80 block">/diária</span>
                    </div>
                  </div>
                </div>

                {/* What's Included in this tier */}
                <div className="mb-8">
                  <span className="text-xs uppercase tracking-wider text-white font-semibold block mb-3">
                    Incluso em sua estadia:
                  </span>
                  <ul className="space-y-2.5">
                    {tier.perks.map((perk, pIdx) => (
                      <li
                        key={pIdx}
                        className="text-xs sm:text-sm text-white/80 flex items-center gap-2.5"
                      >
                        <Check className="w-4 h-4 text-[#C29B48] shrink-0" />
                        <span>{perk}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Card Action Buttons */}
              <div className="space-y-2.5">
                <button
                  onClick={() => {
                    const accName = tier.category === 'cabanas' ? 'Cabanas (Éden ou Manancial)' : 'Casa Pedacinho do Céu';
                    trackWhatsAppClick('pricing_whatsapp_direct', { tier: tier.name });
                    const link = createDirectAccommodationWhatsAppLink(accName);
                    window.open(link, '_blank');
                  }}
                  id={`pricing-whatsapp-btn-${tier.id}`}
                  className="w-full py-3.5 rounded-2xl bg-white/10 hover:bg-white/20 text-[#E8D4A2] border border-[#C29B48]/40 font-bold text-xs uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4 text-[#C29B48]" />
                  <span>Consultar no WhatsApp</span>
                </button>

                <button
                  onClick={() =>
                    onOpenBooking(tier.category === 'cabanas' ? 'eden' : 'pedacinho-do-ceu')
                  }
                  id={`pricing-reserve-btn-${tier.id}`}
                  className="w-full py-4 rounded-2xl bg-gradient-to-r from-[#C29B48] to-[#d6af57] hover:from-[#d6af57] hover:to-[#e4c278] text-[#14241A] font-bold text-xs uppercase tracking-wider shadow-lg hover:shadow-[#C29B48]/30 transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Calendar className="w-4 h-4 text-[#14241A]" />
                  <span>Calcular & Reservar Minha Data</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Reassurance text */}
        <div className="text-center text-xs text-white/60 flex items-center justify-center gap-2">
          <Info className="w-4 h-4 text-[#C29B48]" />
          <span>Parcelamento no cartão conforme taxas da maquininha. Sem taxas ocultas.</span>
        </div>
      </div>
    </section>
  );
};
