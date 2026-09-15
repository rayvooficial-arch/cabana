import React from 'react';
import {
  kitchenAppliances,
  kitchenUtensils,
  includedFoods,
  includedCleaningSupplies,
  bathAndComfortItems,
} from '../data/kitchenAndPantry';
import {
  UtensilsCrossed,
  Sparkles,
  Coffee,
  Check,
  PackageCheck,
  Bath,
  Egg,
  ShieldCheck,
} from 'lucide-react';

export const KitchenAndPantrySection: React.FC = () => {
  return (
    <section id="cozinha-conforto" className="py-24 bg-[#F3ECE2] text-[#2C332D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1c3224]/10 text-[#1c3224] text-xs font-semibold uppercase tracking-widest mb-4">
            <UtensilsCrossed className="w-3.5 h-3.5 text-[#C29B48]" />
            <span>Culinária & Acolhimento</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#14241A] tracking-tight mb-4">
            Cozinha Completa & Conforto em Cada Detalhe
          </h2>

          <p className="font-sans text-base sm:text-lg text-[#526048] leading-relaxed">
            Preparamos tudo para que sua única preocupação seja desfrutar de bons momentos, receitas afetivas e descanso profundo.
          </p>
        </div>

        {/* 1. Cozinha Completa e Equipada Grid */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#E3D9CC] shadow-sm mb-16">
          <div className="max-w-3xl mb-8">
            <span className="text-xs uppercase tracking-[0.2em] text-[#C29B48] font-bold block mb-1">
              Estrutura Gastronômica
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#14241A]">
              Cozinha Totalmente Equipada
            </h3>
            <p className="text-sm sm:text-base text-[#526048] mt-2">
              Todas as nossas acomodações contam com uma bancada de preparação de alto nível, com eletrodomésticos modernos e jogos refinados de taças e panelas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Eletrodomésticos */}
            <div className="p-6 rounded-2xl bg-[#FAF7F2] border border-[#E8DED1]">
              <h4 className="font-serif font-bold text-lg text-[#14241A] mb-4 flex items-center gap-2">
                <Coffee className="w-5 h-5 text-[#8B5A2B]" />
                Eletrodomésticos & Aparelhos
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {kitchenAppliances.map((appliance, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 text-xs sm:text-sm text-[#2C332D]"
                  >
                    <Check className="w-4 h-4 text-[#C29B48] shrink-0" />
                    <span>{appliance}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Utensílios & Taças */}
            <div className="p-6 rounded-2xl bg-[#FAF7F2] border border-[#E8DED1]">
              <h4 className="font-serif font-bold text-lg text-[#14241A] mb-4 flex items-center gap-2">
                <UtensilsCrossed className="w-5 h-5 text-[#8B5A2B]" />
                Utensílios & Serviços de Mesa
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {kitchenUtensils.map((utensil, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 text-xs sm:text-sm text-[#2C332D]"
                  >
                    <Check className="w-4 h-4 text-[#C29B48] shrink-0" />
                    <span>{utensil}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 2. ALIMENTOS INCLUSOS — "Alguns detalhes já esperam por você" */}
        <div className="bg-[#14241A] text-white rounded-3xl p-8 sm:p-12 border border-[#C29B48]/30 shadow-xl mb-16 relative overflow-hidden">
          <div className="relative z-10">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-white/10">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C29B48]/20 text-[#E8D4A2] text-xs font-semibold uppercase tracking-wider mb-2">
                  <PackageCheck className="w-3.5 h-3.5 text-[#C29B48]" />
                  <span>Despensa de Boas-Vindas</span>
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                  Alguns detalhes já esperam por você
                </h3>
              </div>
              <div className="flex items-center gap-2 text-xs text-[#E8D4A2] bg-white/5 px-4 py-2 rounded-xl border border-white/10">
                <Egg className="w-4 h-4 text-[#C29B48]" />
                <span>Inclui ovos caipiras do galinheiro local</span>
              </div>
            </div>

            <p className="text-white/80 text-sm sm:text-base max-w-3xl mb-8 leading-relaxed font-light">
              Disponibilizamos alimentos não perecíveis essenciais e mimos para que sua chegada seja aconchegante e sem preocupações com supermercado de imediato.
            </p>

            {/* Foods Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 mb-8">
              {includedFoods.map((food, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2.5 p-3 rounded-xl bg-white/5 border border-white/10 text-xs sm:text-sm text-white/90 hover:border-[#C29B48]/50 transition-colors"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C29B48] shrink-0" />
                  <span className={food.includes('Ovos') ? 'text-[#E8D4A2] font-semibold' : ''}>
                    {food}
                  </span>
                </div>
              ))}
            </div>

            {/* Cleaning & Hygiene support */}
            <div className="pt-6 border-t border-white/10 flex flex-wrap items-center gap-4 text-xs text-white/70">
              <span className="font-semibold text-white uppercase tracking-wider">
                Também disponibilizados:
              </span>
              {includedCleaningSupplies.map((item, idx) => (
                <span
                  key={idx}
                  className="bg-white/10 px-3 py-1 rounded-full text-white/90 border border-white/10"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* 3. BANHO E CONFORTO — "Conforto em cada detalhe" */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#E3D9CC] shadow-sm">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#526048]/10 text-[#526048] text-xs font-semibold uppercase tracking-wider mb-2">
              <Bath className="w-3.5 h-3.5 text-[#526048]" />
              <span>Cuidado Pessoal</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#14241A]">
              Conforto em Cada Detalhe
            </h3>
            <p className="text-sm text-[#526048] mt-2">
              As roupas de cama e banho estão inclusas em todas as estadias, com padrão de maciez impecável.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {bathAndComfortItems.map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#E8DED1] text-center flex flex-col items-center justify-center gap-2 hover:border-[#C29B48]/50 transition-colors"
              >
                <div className="w-9 h-9 rounded-full bg-[#1c3224]/10 text-[#1c3224] flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5 text-[#C29B48]" />
                </div>
                <span className="text-xs sm:text-sm font-medium text-[#14241A]">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
