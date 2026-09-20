import React from 'react';
import { Star, ShieldCheck, Heart, Sparkles, Quote } from 'lucide-react';

interface Review {
  id: string;
  name: string;
  profile: string;
  stayType: string;
  accommodation: string;
  rating: number;
  text: string;
  date: string;
}

const reviews: Review[] = [
  {
    id: '1',
    name: 'Mariana & Lucas S.',
    profile: 'Casal • Comemoração Especial',
    stayType: 'Final de Semana Romântico',
    accommodation: 'Cabana Éden',
    rating: 5,
    text: 'Ficamos na Cabana Éden para comemorar nosso aniversário de casamento e superou tudo o que imaginávamos. A hidromassagem com vista para a mata, os sais de banho, o cinema sob as estrelas e a cama com lençóis 600 fios fizeram a gente desligar completamente do mundo. Atendimento impecável da equipe de anfitriões!',
    date: 'Estadia recente',
  },
  {
    id: '2',
    name: 'Família Ribeiro (Juliana, Tiago e 2 filhos)',
    profile: 'Família com Crianças',
    stayType: 'Férias em Família',
    accommodation: 'Cabana Manancial',
    rating: 5,
    text: 'Nossos filhos de 5 e 8 anos ficaram encantados com a fazendinha! Poder interagir e alimentar os animais com segurança, além de cozinhar com os ovos frescos da fazenda, foi uma lição linda sobre o campo. A cabana é muito confortável, limpa e com ar puro o dia inteiro.',
    date: 'Estadia recente',
  },
  {
    id: '3',
    name: 'Carlos Eduardo M. & Mel',
    profile: 'Hóspede com Pet (Golden Retriever)',
    stayType: 'Fim de Semana com Amigos & Pet',
    accommodation: 'Casa Pedacinho do Céu',
    rating: 5,
    text: 'Sempre é difícil achar um refúgio de luxo que realmente receba bem animais de grande porte. A Casa Pedacinho do Céu foi perfeita: espaçosa, gramado verde incrível para a Mel correr solta, dois fogões a lenha e churrasqueira de primeira. Experiência 10/10.',
    date: 'Estadia recente',
  },
];

export const SocialProofSection: React.FC = () => {
  return (
    <section id="avaliacoes" className="py-24 bg-[#14241A] text-white relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#1c3224] rounded-full blur-3xl pointer-events-none opacity-50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C29B48]/20 text-[#E8D4A2] text-xs font-semibold uppercase tracking-widest mb-4 border border-[#C29B48]/30">
            <Sparkles className="w-3.5 h-3.5 text-[#C29B48]" />
            <span>Depoimentos & Reputação</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            A Experiência de Quem Já Viveu
          </h2>

          <p className="font-sans text-base sm:text-lg text-white/75 leading-relaxed max-w-2xl mx-auto">
            Mais do que palavras nossas, veja o que hóspedes reais dizem sobre seus dias de descanso, privacidade e conexão com o campo na Cabana das Mansões.
          </p>

          {/* Aggregate Rating Banner */}
          <div className="mt-8 inline-flex flex-wrap items-center justify-center gap-4 bg-white/5 border border-white/10 px-6 py-3 rounded-2xl backdrop-blur-sm">
            <div className="flex items-center gap-1 text-[#C29B48]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <span className="font-serif font-bold text-lg text-white">
              5.0 / 5.0
            </span>
            <span className="text-xs text-white/60">
              • Avaliação Máxima em Conforto, Privacidade & Natureza
            </span>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {reviews.map((rev) => (
            <div
              key={rev.id}
              id={`review-card-${rev.id}`}
              className="bg-[#1c3224]/80 rounded-3xl p-7 sm:p-8 border border-[#C29B48]/25 shadow-xl flex flex-col justify-between hover:border-[#C29B48]/60 transition-all duration-300 relative group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-[#C29B48]">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <span className="text-[10px] uppercase tracking-wider text-white/50">
                    {rev.date}
                  </span>
                </div>

                <Quote className="w-8 h-8 text-[#C29B48]/30 mb-3" />

                <p className="font-sans text-sm text-white/85 leading-relaxed italic mb-6">
                  “{rev.text}”
                </p>
              </div>

              <div className="pt-4 border-t border-white/10">
                <h4 className="font-serif font-bold text-base text-[#E8D4A2]">
                  {rev.name}
                </h4>
                <div className="flex items-center justify-between text-xs text-white/60 mt-0.5">
                  <span>{rev.profile}</span>
                  <span className="text-[#C29B48] font-medium">{rev.accommodation}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 3 Pillars of Trust */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-white/10 text-center">
          <div className="space-y-1">
            <span className="font-serif font-bold text-xl text-[#E8D4A2] block">
              100% Privativo
            </span>
            <p className="text-xs text-white/60">
              Cada cabana conta com seu espaço exclusivo de hidromassagem e spa
            </p>
          </div>
          <div className="space-y-1">
            <span className="font-serif font-bold text-xl text-[#E8D4A2] block">
              Sem Taxas Ocultas
            </span>
            <p className="text-xs text-white/60">
              Enxoval 600 fios, despensa abastecida e lenha sem cobranças surpresa
            </p>
          </div>
          <div className="space-y-1">
            <span className="font-serif font-bold text-xl text-[#E8D4A2] block">
              Reserva Confiável
            </span>
            <p className="text-xs text-white/60">
              Reserva online direta sem comissões e suporte dedicado à sua estadia
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
