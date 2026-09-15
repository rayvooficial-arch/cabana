import React from 'react';
import { Calendar, Sparkles, MessageSquare } from 'lucide-react';
import { PRICING_CONFIG } from '../config/constants';
import { createGeneralInquiryWhatsAppLink, trackWhatsAppClick } from '../utils/whatsapp';

interface MobileReservationBarProps {
  onOpenBooking: () => void;
}

export const MobileReservationBar: React.FC<MobileReservationBarProps> = ({
  onOpenBooking,
}) => {
  const handleQuickWhatsApp = () => {
    trackWhatsAppClick('mobile_sticky_bar');
    window.open(createGeneralInquiryWhatsAppLink('Barra Mobile'), '_blank');
  };

  return (
    <div
      id="mobile-bottom-reservation-bar"
      className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-[#14241A]/95 backdrop-blur-md border-t border-[#C29B48]/30 p-2.5 px-4 flex items-center justify-between shadow-2xl animate-in slide-in-from-bottom duration-300"
    >
      <div className="pr-2">
        <span className="text-[10px] uppercase tracking-wider text-[#E8D4A2] font-bold flex items-center gap-1">
          <Sparkles className="w-2.5 h-2.5 text-[#C29B48]" />
          A partir de R$ {PRICING_CONFIG.cabanas.weekdayPrice} ({PRICING_CONFIG.cabanas.discountPercentage}% OFF)
        </span>
        <span className="text-xs text-white font-medium block leading-tight">Cabana das Mansões</span>
      </div>

      <div className="flex items-center gap-2 shrink-0">
        <button
          onClick={handleQuickWhatsApp}
          id="mobile-bar-whatsapp-button"
          aria-label="Falar no WhatsApp"
          className="w-10 h-10 rounded-full bg-white/10 text-[#C29B48] flex items-center justify-center border border-[#C29B48]/40 active:scale-95 transition-transform"
        >
          <MessageSquare className="w-4 h-4" />
        </button>

        <button
          onClick={onOpenBooking}
          id="mobile-bar-reserve-button"
          className="px-5 py-2.5 rounded-full bg-[#C29B48] hover:bg-[#d6af57] text-[#14241A] font-bold text-xs uppercase tracking-wider shadow-lg flex items-center gap-1.5 transition-all cursor-pointer active:scale-95"
        >
          <Calendar className="w-3.5 h-3.5 text-[#14241A]" />
          <span>Consultar</span>
        </button>
      </div>
    </div>
  );
};

