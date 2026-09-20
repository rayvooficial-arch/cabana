import React from 'react';
import { Compass } from 'lucide-react';
import { BookingButton } from './BookingButton';

interface FinalCtaProps {
  onOpenBooking?: () => void;
}

export const FinalCta: React.FC<FinalCtaProps> = () => {
  return (
    <section className="py-28 bg-[#122118] text-white relative overflow-hidden text-center">
      {/* Background with luxury mood photography and dark forest vignette */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=2000&q=80"
          alt="Refúgio Cabana das Mansões"
          className="w-full h-full object-cover opacity-20 filter blur-[1px]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#122118] via-[#122118]/85 to-[#122118]" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Poetic Essence Words */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 mb-8 text-xs sm:text-sm uppercase tracking-[0.3em] text-[#C29B48] font-medium">
          <span>Desacelere</span>
          <span>•</span>
          <span>Respire</span>
          <span>•</span>
          <span>Conecte-se</span>
          <span>•</span>
          <span>Viva o Campo</span>
          <span>•</span>
          <span>Crie Memórias</span>
        </div>

        <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Um lugar para descansar e viver momentos especiais.
        </h2>

        <p className="font-sans text-base sm:text-lg text-white/80 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
          Garanta dias inesquecíveis de conforto, hidro aquecida, cinema ao ar livre e contato direto com nossos dóceis animais no campo.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <BookingButton
            id="final-cta-reserve-btn"
            label="RESERVAR AGORA"
            variant="gold"
            size="lg"
            className="w-full sm:w-auto px-10 py-4 shadow-2xl"
          />

          <a
            href="#acomodacoes"
            id="final-cta-explore-btn"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 text-[#FAF7F2] border border-white/25 hover:border-white/40 font-semibold text-sm tracking-wider uppercase backdrop-blur-md transition-all duration-300 hover:scale-[1.02] cursor-pointer"
          >
            <Compass className="w-4 h-4 text-[#C29B48]" />
            <span>Conhecer as Acomodações</span>
          </a>
        </div>

        {/* Trust microcopy */}
        <p className="mt-6 text-xs text-white/60">
          Reserva 100% segura • Menor tarifa garantida direto com a propriedade
        </p>
      </div>
    </section>
  );
};
