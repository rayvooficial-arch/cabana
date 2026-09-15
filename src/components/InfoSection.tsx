import React from 'react';
import { bookingRules } from '../data/pricingAndInfo';
import {
  Clock,
  CreditCard,
  Bed,
  Baby,
  Sparkles,
  PackageCheck,
  ShieldAlert,
} from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  'Check-in': Clock,
  'Check-out': Clock,
  'Berço': Baby,
  'Cama Extra': Bed,
  'Pagamento Facilitado': CreditCard,
  'Enxoval Completo': Sparkles,
  'Alimentos da Despensa': PackageCheck,
};

export const InfoSection: React.FC = () => {
  return (
    <section id="informacoes" className="py-24 bg-[#FAF7F2] text-[#2C332D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1c3224]/10 text-[#1c3224] text-xs font-semibold uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#C29B48]" />
            <span>Transparência & Estadia</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#14241A] tracking-tight mb-4">
            Informações Importantes
          </h2>

          <p className="font-sans text-base sm:text-lg text-[#526048] leading-relaxed">
            Tudo o que você precisa saber para planejar sua chegada e desfrutar de dias perfeitos no campo.
          </p>
        </div>

        {/* Rules Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {bookingRules.map((rule, idx) => {
            const IconComponent = iconMap[rule.label] || Sparkles;
            return (
              <div
                key={idx}
                id={`info-card-${idx}`}
                className="bg-white rounded-2xl p-6 border border-[#E3D9CC] shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#1c3224]/10 text-[#1c3224] flex items-center justify-center mb-4">
                    <IconComponent className="w-5 h-5 text-[#C29B48]" />
                  </div>
                  <span className="text-xs uppercase tracking-wider text-[#526048] font-semibold block mb-1">
                    {rule.label}
                  </span>
                  <div className="font-serif text-2xl font-bold text-[#14241A] mb-2">
                    {rule.value}
                  </div>
                </div>
                <p className="text-xs text-[#526048] leading-relaxed">
                  {rule.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Summary banner */}
        <div className="bg-[#F3ECE2] border border-[#E8DED1] rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="font-serif font-bold text-lg text-[#14241A]">
              Dúvidas sobre sua reserva?
            </h3>
            <p className="text-xs sm:text-sm text-[#526048]">
              Nossa equipe está à disposição para esclarecer qualquer detalhe antes de sua chegada.
            </p>
          </div>
          <a
            href="https://wa.me/67992788230"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full bg-[#1c3224] hover:bg-[#2d4f3b] text-white font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer whitespace-nowrap"
          >
            Fale Conosco via WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};
