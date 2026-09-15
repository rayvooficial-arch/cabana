import React from 'react';
import { Calendar, MessageSquare, Sparkles, Heart } from 'lucide-react';
import { createGeneralInquiryWhatsAppLink, trackWhatsAppClick } from '../utils/whatsapp';

interface FinalCtaProps {
  onOpenBooking: () => void;
}

export const FinalCta: React.FC<FinalCtaProps> = ({ onOpenBooking }) => {
  const handleWhatsAppClick = () => {
    trackWhatsAppClick('final_cta');
    const link = createGeneralInquiryWhatsAppLink('CTA Final da Página');
    window.open(link, '_blank');
  };

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
          <button
            onClick={onOpenBooking}
            id="final-cta-reserve-btn"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-4 rounded-full bg-gradient-to-r from-[#C29B48] to-[#D8B466] hover:from-[#d6af57] hover:to-[#e4c278] text-[#14241A] font-bold text-sm tracking-wider uppercase shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer"
          >
            <Calendar className="w-4 h-4 text-[#14241A]" />
            <span>Consultar Disponibilidade</span>
          </button>

          <button
            onClick={handleWhatsAppClick}
            id="final-cta-whatsapp-btn"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 text-[#FAF7F2] border border-white/25 hover:border-white/40 font-semibold text-sm tracking-wider uppercase backdrop-blur-md transition-all duration-300 hover:scale-[1.02] cursor-pointer"
          >
            <MessageSquare className="w-4 h-4 text-[#C29B48]" />
            <span>Fale Conosco via WhatsApp</span>
          </button>
        </div>

        {/* Trust microcopy */}
        <p className="mt-6 text-xs text-white/60">
          Atendimento acolhedor e direto pelos anfitriões • Confirmação rápida de datas
        </p>
      </div>
    </section>
  );
};

