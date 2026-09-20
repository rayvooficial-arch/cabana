import React from 'react';
import { Sparkles } from 'lucide-react';
import { BookingButton } from './BookingButton';

interface MobileReservationBarProps {
  onOpenBooking?: () => void;
}

export const MobileReservationBar: React.FC<MobileReservationBarProps> = () => {
  return (
    <div
      id="mobile-bottom-reservation-bar"
      className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-[#14241A]/95 backdrop-blur-md border-t border-[#C29B48]/30 p-2.5 px-4 flex items-center justify-between shadow-2xl animate-in slide-in-from-bottom duration-300"
    >
      <div className="pr-2">
        <span className="text-[10px] uppercase tracking-wider text-[#E8D4A2] font-semibold flex items-center gap-1">
          <Sparkles className="w-2.5 h-2.5 text-[#C29B48]" />
          Cabana das Mansões
        </span>
        <span className="text-xs text-white font-serif font-medium block leading-tight">
          Seu refúgio começa aqui
        </span>
      </div>

      <div className="flex items-center gap-2 shrink-0">
        <BookingButton
          id="mobile-bar-reserve-button"
          label="VER DISPONIBILIDADE"
          variant="compact"
          size="sm"
          className="px-5 py-2.5 rounded-full font-bold uppercase tracking-wider text-xs"
        />
      </div>
    </div>
  );
};
