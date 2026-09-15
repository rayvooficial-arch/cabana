import React from 'react';
import { farmAnimals } from '../data/experiences';
import { Leaf, Sparkles, Heart, Sun, Trees, Apple, Sprout } from 'lucide-react';

export const ConceptSection: React.FC = () => {
  return (
    <section id="experiencia" className="py-24 bg-[#FAF7F2] text-[#2C332D] relative overflow-hidden">
      {/* Decorative subtle background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#1c3224]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#C29B48]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#526048]/10 text-[#2d4f3b] text-xs font-semibold uppercase tracking-widest mb-4">
            <Leaf className="w-3.5 h-3.5 text-[#526048]" />
            <span>Refúgio de Experiência no Campo</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#14241A] tracking-tight mb-6 leading-tight">
            Não é apenas um lugar para dormir.<br className="hidden sm:inline" /> É um refúgio para viver o campo.
          </h2>

          <p className="font-sans text-base sm:text-lg md:text-xl text-[#526048] leading-relaxed font-normal max-w-2xl mx-auto">
            Esqueça o ritmo acelerado da cidade. Aqui, cada detalhe foi desenhado para você desacelerar o relógio, respirar ar puro e se reconectar com o que realmente importa.
          </p>
        </div>

        {/* The 4 Pillars of the Experience */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-20">
          {[
            { title: 'Natureza', desc: 'Mata nativa e ar puro', icon: Trees },
            { title: 'Conforto', desc: 'Roupas 600 fios & hidro', icon: Sparkles },
            { title: 'Lazer', desc: 'Cinema 100", esportes e jogos', icon: Sun },
            { title: 'Privacidade', desc: 'Refúgios exclusivos', icon: Heart },
          ].map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="bg-white/80 border border-[#E8DED1] rounded-2xl p-5 text-center shadow-sm hover:shadow-md hover:border-[#C29B48]/50 transition-all duration-300 group"
              >
                <div className="w-10 h-10 mx-auto rounded-xl bg-[#1c3224]/10 text-[#1c3224] flex items-center justify-center mb-3 group-hover:bg-[#1c3224] group-hover:text-[#FAF7F2] transition-colors">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-base font-bold text-[#14241A] mb-1">
                  {pillar.title}
                </h3>
                <p className="text-xs text-[#6B7280]">{pillar.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Interactive Farm & Agricultural Connection Feature Block */}
        <div className="bg-[#1c3224] text-[#FAF7F2] rounded-3xl p-8 sm:p-12 lg:p-14 shadow-2xl relative overflow-hidden mb-16">
          {/* Background subtle image pattern */}
          <div className="absolute inset-0 opacity-10 mix-blend-overlay pointer-events-none">
            <img
              src="https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=1600&q=80"
              alt="Paisagem do campo"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Description Column */}
            <div className="lg:col-span-6 space-y-6">
              <span className="inline-block text-xs uppercase tracking-[0.25em] font-semibold text-[#C29B48]">
                Fazendinha Interativa
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl text-white font-bold leading-tight">
                Adultos e crianças vivenciando momentos únicos no campo.
              </h3>
              <p className="text-white/85 text-base sm:text-lg leading-relaxed font-light">
                Esqueça o ritmo acelerado da cidade. Aqui, você e sua família têm a oportunidade especial de conhecer de perto os animais, interagir, alimentar e sentir o verdadeiro ritmo da vida simples e encantadora do campo.
              </p>

              {/* Horta & Pomar Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/15">
                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-white/10 text-[#C29B48]">
                    <Sprout className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-white text-base">Horta Orgânica</h4>
                    <p className="text-xs text-white/70">Temperos, folhas e aromas frescos da terra.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-white/10 text-[#C29B48]">
                    <Apple className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-white text-base">Pomar & Frutas</h4>
                    <p className="text-xs text-white/70">Contato com a vida agrícola e árvores frutíferas.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Animals Showcase Grid */}
            <div className="lg:col-span-6">
              <div className="bg-[#122118]/80 backdrop-blur-md rounded-2xl p-6 border border-white/10 shadow-inner">
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/10">
                  <h4 className="font-serif font-semibold text-lg text-[#E8D4A2] flex items-center gap-2">
                    <Heart className="w-4 h-4 text-[#C29B48]" />
                    Nossos Animais do Campo
                  </h4>
                  <span className="text-xs text-white/60">Interação com carinho</span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-2 gap-3.5">
                  {farmAnimals.map((animal, i) => (
                    <div
                      key={i}
                      className="bg-white/5 hover:bg-white/10 p-3.5 rounded-xl border border-white/5 hover:border-[#C29B48]/40 transition-colors"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-semibold text-sm text-white font-serif">
                          {animal.name}
                        </span>
                        <span className="w-2 h-2 rounded-full bg-[#C29B48]" />
                      </div>
                      <span className="text-[11px] text-[#C29B48] block mb-1 font-medium">
                        {animal.tag}
                      </span>
                      <p className="text-[11px] text-white/70 leading-snug">
                        {animal.description}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-white/70">
                  <span>E outros animais da propriedade</span>
                  <span className="text-[#C29B48] font-medium">Experiência rural inclusa</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
