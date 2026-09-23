import React from 'react';
import { BookingButton } from './BookingButton';

export const FinalCta: React.FC = () => {
  return (
    <section className="py-20 sm:py-24 bg-[#14241A] text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#D8B466]">
          Consulte sua data
        </span>
        <h2 className="font-serif text-3xl sm:text-5xl font-bold mt-3 mb-5 leading-tight">
          Escolheu sua acomodação?
        </h2>
        <p className="text-sm sm:text-base text-white/70 max-w-2xl mx-auto mb-8 leading-relaxed">
          Confira as datas disponíveis, a tarifa aplicável e as condições da estadia diretamente no motor oficial de reservas.
        </p>
        <BookingButton
          id="final-cta-reserve-btn"
          label="VER DISPONIBILIDADE"
          variant="gold"
          size="lg"
          className="w-full sm:w-auto"
        />
      </div>
    </section>
  );
};
