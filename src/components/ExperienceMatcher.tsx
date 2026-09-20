import React, { useState } from 'react';
import { Heart, Users, Sparkles, Dog, ArrowRight, CheckCircle2 } from 'lucide-react';
import { BookingButton } from './BookingButton';

interface ProfileOption {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ElementType;
  recommendedAccId: 'eden' | 'manancial' | 'pedacinho-do-ceu';
  recommendedName: string;
  recommendedTag: string;
  reasons: string[];
  capacity: string;
  startingPrice: string;
  anchorId: string;
}

const profiles: ProfileOption[] = [
  {
    id: 'romantico',
    title: 'Viagem a Dois / Romântica',
    subtitle: 'Privacidade total, spa relaxante e celebrações especiais',
    icon: Heart,
    recommendedAccId: 'eden',
    recommendedName: 'Cabana Éden ou Manancial',
    recommendedTag: 'Ideal para Casais',
    reasons: [
      'Hidromassagem privativa aquecida com sais aromáticos',
      'Cama Queen Size com lençóis acetinados 600 fios',
      'Cinema ao ar livre sob as estrelas e kit para fondue & vinho',
      'Ambiente intimista e silencioso integrado à mata',
    ],
    capacity: 'Até 4 pessoas',
    startingPrice: 'A partir de R$ 890/diária (Temporada Express)',
    anchorId: 'cabana-eden',
  },
  {
    id: 'familia',
    title: 'Família com Crianças',
    subtitle: 'Espaço, lazer ao ar livre e contato direto com animais dóceis',
    icon: Users,
    recommendedAccId: 'manancial',
    recommendedName: 'Cabana Manancial ou Casa Pedacinho do Céu',
    recommendedTag: 'Perfeito para Famílias',
    reasons: [
      'Fazendinha interativa para alimentar os mini animais',
      'Smart TV 43" com videogame, Netflix e jogos de tabuleiro',
      'Cozinha completa para preparar receitas caseiras',
      'Espaço seguro, amplo e cercado de natureza',
    ],
    capacity: 'De 4 a 8 pessoas',
    startingPrice: 'A partir de R$ 890/diária',
    anchorId: 'cabana-manancial',
  },
  {
    id: 'grupo',
    title: 'Amigos ou Grupo Grande',
    subtitle: '3 quartos, churrasqueira, fogões a lenha e conforto para até 8 pessoas',
    icon: Sparkles,
    recommendedAccId: 'pedacinho-do-ceu',
    recommendedName: 'Casa Pedacinho do Céu',
    recommendedTag: 'Mais Espaço & Tradição',
    reasons: [
      '3 quartos completos e confortáveis',
      '2 fogões a lenha tradicionais e churrasqueira privativa',
      'Hidromassagem privativa para recarregar as energias',
      'Ampla área de convivência e cozinha equipada',
    ],
    capacity: 'Até 8 pessoas',
    startingPrice: 'A partir de R$ 1.350/diária (Temporada Express)',
    anchorId: 'casa-pedacinho-do-ceu',
  },
  {
    id: 'pet',
    title: 'Viajando com Meu Pet',
    subtitle: 'Seu melhor amigo de 4 patas solto e feliz em amplo gramado verde',
    icon: Dog,
    recommendedAccId: 'pedacinho-do-ceu',
    recommendedName: 'Casa Pedacinho do Céu',
    recommendedTag: 'Exclusivo Pet Friendly',
    reasons: [
      'Acomodação 100% preparada e acolhedora para pets',
      'Muito espaço verde seguro para seu pet correr e farejar',
      'Toda a família reunida sem precisar deixar ninguém para trás',
      'Acesso livre aos recantos arborizados da propriedade',
    ],
    capacity: 'Até 8 pessoas + Pets',
    startingPrice: 'A partir de R$ 1.350/diária (Temporada Express)',
    anchorId: 'casa-pedacinho-do-ceu',
  },
];

interface ExperienceMatcherProps {
  onSelectAccommodation: (id: string) => void;
}

export const ExperienceMatcher: React.FC<ExperienceMatcherProps> = ({
  onSelectAccommodation,
}) => {
  const [activeProfileId, setActiveProfileId] = useState<string>('romantico');

  const selectedProfile =
    profiles.find((p) => p.id === activeProfileId) || profiles[0];

  return (
    <section
      id="guia-de-escolha"
      className="py-20 bg-[#FAF7F2] text-[#2C332D] relative border-t border-[#E8DED1]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1c3224]/10 text-[#1c3224] text-xs font-semibold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#C29B48]" />
            <span>Guia Rápido de Escolha</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#14241A] tracking-tight mb-4">
            Qual experiência combina com você?
          </h2>

          <p className="font-sans text-base sm:text-lg text-[#526048] leading-relaxed">
            Selecione o seu estilo de viagem para descobrir a acomodação ideal para os seus dias de descanso.
          </p>
        </div>

        {/* Profile Selector Buttons */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-10">
          {profiles.map((prof) => {
            const Icon = prof.icon;
            const isSelected = prof.id === activeProfileId;
            return (
              <button
                key={prof.id}
                onClick={() => setActiveProfileId(prof.id)}
                id={`matcher-tab-${prof.id}`}
                className={`p-4 sm:p-5 rounded-2xl text-left border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-[#14241A] text-white border-[#C29B48] shadow-xl scale-[1.02]'
                    : 'bg-white text-[#2C332D] border-[#E8DED1] hover:border-[#C29B48]/50 hover:bg-white/90'
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 transition-colors ${
                    isSelected
                      ? 'bg-[#C29B48] text-[#14241A]'
                      : 'bg-[#1c3224]/10 text-[#1c3224]'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                </div>

                <div>
                  <h3
                    className={`font-serif font-bold text-sm sm:text-base leading-snug mb-1 ${
                      isSelected ? 'text-[#FAF7F2]' : 'text-[#14241A]'
                    }`}
                  >
                    {prof.title}
                  </h3>
                  <p
                    className={`text-[11px] leading-relaxed ${
                      isSelected ? 'text-white/70' : 'text-[#526048]'
                    }`}
                  >
                    {prof.subtitle}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Dynamic Recommendation Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#E3D9CC] shadow-lg flex flex-col lg:flex-row items-stretch justify-between gap-8 animate-in fade-in duration-300">
          <div className="space-y-4 flex-1">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-[#C29B48] text-[#14241A] text-xs font-bold uppercase tracking-wider">
                {selectedProfile.recommendedTag}
              </span>
              <span className="text-xs text-[#526048] font-medium">
                Capacidade: {selectedProfile.capacity}
              </span>
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#14241A]">
              Acomodação Recomendada: {selectedProfile.recommendedName}
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {selectedProfile.reasons.map((reason, idx) => (
                <div key={idx} className="flex items-start gap-2 text-sm text-[#2C332D]">
                  <CheckCircle2 className="w-4 h-4 text-[#1c3224] shrink-0 mt-0.5" />
                  <span>{reason}</span>
                </div>
              ))}
            </div>

            <p className="text-xs text-[#526048] pt-2">
              Tarifa estimada: <strong className="text-[#14241A] font-bold">{selectedProfile.startingPrice}</strong> com enxoval completo 600 fios, hidromassagem e alimentos da despensa inclusos.
            </p>
          </div>

          {/* Action Column */}
          <div className="lg:w-80 flex flex-col justify-center gap-3 pt-4 lg:pt-0 lg:border-l lg:border-[#E8DED1] lg:pl-8">
            <a
              href={`#${selectedProfile.anchorId}`}
              onClick={(e) => {
                const target = document.getElementById(selectedProfile.anchorId);
                if (target) {
                  e.preventDefault();
                  target.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              id="matcher-view-accommodation-btn"
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#1c3224] hover:bg-[#2d4f3b] text-[#FAF7F2] font-semibold text-xs tracking-wider uppercase transition-colors shadow-md text-center cursor-pointer"
            >
              <span>Ver Fotos & Detalhes</span>
              <ArrowRight className="w-4 h-4 text-[#C29B48]" />
            </a>

            <BookingButton
              id="matcher-reserve-btn"
              accommodationId={selectedProfile.recommendedAccId}
              accommodationName={selectedProfile.recommendedName}
              label="VER DISPONIBILIDADE"
              variant="gold"
              size="md"
              className="w-full text-center rounded-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
