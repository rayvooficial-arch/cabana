import React from 'react';
import { includedExperiences } from '../data/experiences';
import {
  Bath,
  Trees,
  Tv,
  Flame,
  Sprout,
  Compass,
  Anchor,
  Utensils,
  Smile,
  Activity,
  CookingPot,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';

interface ExperiencesSectionProps {
  onOpenBooking: () => void;
}

const iconMap: Record<string, React.ElementType> = {
  Bath,
  Trees,
  Tv,
  Flame,
  Sprout,
  Compass,
  Anchor,
  Utensils,
  Smile,
  Activity,
  CookingPot,
  ShieldCheck,
};

export const ExperiencesSection: React.FC<ExperiencesSectionProps> = ({ onOpenBooking }) => {
  if (includedExperiences.length === 0) {
    return null;
  }

  return (
    <section id="estrutura" className="py-24 bg-[#F3ECE2] text-[#2C332D] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1c3224]/10 text-[#1c3224] text-xs font-semibold uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#C29B48]" />
            <span>Infraestrutura Completa</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#14241A] tracking-tight mb-4">
            Experiências Inclusas
          </h2>

          <p className="font-sans text-base sm:text-lg text-[#526048] leading-relaxed">
            Cada cantinho da propriedade foi planejado para proporcionar bem-estar, momentos em família, romance e tranquilidade genuína.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {includedExperiences.map((exp) => {
            const IconComponent = iconMap[exp.iconName] || Sparkles;
            return (
              <div
                key={exp.id}
                id={`exp-card-${exp.id}`}
                className="group bg-white rounded-2xl overflow-hidden border border-[#E3D9CC] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col hover:-translate-y-1"
              >
                {/* Visual Image with Zoom on Hover */}
                <div className="relative h-44 w-full overflow-hidden bg-stone-200">
                  <img
                    src={exp.image}
                    alt={exp.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  {/* Badge */}
                  {exp.badge && (
                    <span className="absolute top-3 left-3 bg-[#14241A]/85 backdrop-blur-md text-[#E8D4A2] text-[10px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full border border-white/10">
                      {exp.badge}
                    </span>
                  )}

                  {/* Icon Circle */}
                  <div className="absolute bottom-3 right-3 w-10 h-10 rounded-full bg-white/90 backdrop-blur-md text-[#1c3224] flex items-center justify-center shadow-md">
                    <IconComponent className="w-5 h-5 text-[#1c3224]" />
                  </div>
                </div>

                {/* Card Text Content */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-lg font-bold text-[#14241A] mb-2 leading-snug group-hover:text-[#8B5A2B] transition-colors">
                      {exp.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#526048] leading-relaxed">
                      {exp.subtitle}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Cinema Highlight Feature Card */}
        <div className="bg-gradient-to-r from-[#14241A] via-[#1c3224] to-[#14241A] rounded-3xl p-8 sm:p-10 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-8 border border-[#C29B48]/30">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C29B48]/20 text-[#E8D4A2] text-xs font-semibold uppercase tracking-wider">
              <Tv className="w-3.5 h-3.5 text-[#C29B48]" />
              <span>Destaque Exclusivo</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
              Cinema ao Ar Livre com Telão de 100 Polegadas
            </h3>
            <p className="text-white/80 text-sm sm:text-base leading-relaxed font-light">
              Projetor de altíssima definição, som acolhedor e o céu estrelado do campo. Uma experiência mágica e imersiva para reunir quem você ama, preparar a pipoca inclusa e curtir momentos inesquecíveis.
            </p>
          </div>

          <button
            onClick={onOpenBooking}
            className="whitespace-nowrap px-8 py-3.5 rounded-full bg-[#C29B48] hover:bg-[#d6af57] text-[#14241A] font-bold text-xs uppercase tracking-wider shadow-lg hover:scale-105 transition-all cursor-pointer"
          >
            Viver Essa Experiência
          </button>
        </div>
      </div>
    </section>
  );
};
