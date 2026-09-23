import React from 'react';
import { CalendarDays } from 'lucide-react';
import { BookingButton } from './BookingButton';

interface MobileReservationBarProps {
  onOpenBooking?: () => void;
}

export const MobileReservationBar: React.FC<MobileReservationBarProps> = () => {
  return (
    <div
      id="mobile-bottom-reservation-bar"
      className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-[#14241A]/96 backdrop-blur-md border-t border-[#C29B48]/30 p-2.5 px-4 flex items-center justify-between shadow-2xl"
    >
      <div className="pr-3 min-w-0">
        <span className="text-[10px] uppercase tracking-wider text-[#E8D4A2] font-semibold flex items-center gap-1">
          <CalendarDays className="w-3 h-3 text-[#C29B48]" />
          Reserva online
        </span>
        <span className="text-xs text-white/80 block leading-tight truncate">
          Consulte datas e valores
        </span>
      </div>

      <BookingButton
        id="mobile-bar-reserve-button"
        label="VER DATAS"
        variant="compact"
        size="sm"
        className="px-5 py-2.5 rounded-full font-bold uppercase tracking-wider text-xs shrink-0"
        params={{ source: 'mobile_sticky_bar' }}
      />
    </div>
  );
};
