import React from 'react';
import {
  Bath,
  Film,
  Flame,
  Heart,
  Trees,
  Utensils,
  Waves,
  Baby,
} from 'lucide-react';

const experiences = [
  { title: 'Hidromassagens', description: 'Momentos de descanso dentro da proposta de cada acomodação.', icon: Bath },
  { title: 'Cinema ao ar livre', description: 'Sessões em telão de até 100 polegadas em meio à natureza.', icon: Film },
  { title: 'Fazendinha', description: 'Contato com mini animais e a rotina da propriedade.', icon: Heart },
  { title: 'Fogareiros', description: 'Espaços para aproveitar o fim do dia ao redor do fogo.', icon: Flame },
  { title: 'Redários e piquenique', description: 'Áreas ao ar livre para descansar e passar o tempo sem pressa.', icon: Trees },
  { title: 'Playground e campinho', description: 'Espaços para crianças e momentos em família.', icon: Baby },
  { title: 'Pesque e solte', description: 'Uma atividade tranquila para aproveitar o ambiente rural.', icon: Waves },
  { title: 'Churrasqueiras', description: 'Estrutura para preparar refeições durante a estadia.', icon: Utensils },
];

export const ExperiencesSection: React.FC = () => {
  return (
    <section id="estrutura" className="py-20 sm:py-24 bg-[#F3ECE2] text-[#2C332D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-10 sm:mb-12">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8B6A2F]">
            Na propriedade
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#14241A] mt-2 mb-4">
            O que você encontra por aqui
          </h2>
          <p className="text-sm sm:text-base text-[#526048] leading-relaxed max-w-2xl">
            Estrutura para descansar, aproveitar em família e curtir o campo sem precisar sair da propriedade.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5">
          {experiences.map(({ title, description, icon: Icon }) => (
            <article
              key={title}
              className="bg-white rounded-2xl border border-[#E3D9CC] p-5 sm:p-6 min-h-44"
            >
              <div className="w-10 h-10 rounded-xl bg-[#1c3224]/8 flex items-center justify-center mb-4">
                <Icon className="w-5 h-5 text-[#8B6A2F]" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#14241A] mb-2">{title}</h3>
              <p className="text-xs sm:text-sm text-[#526048] leading-relaxed">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
