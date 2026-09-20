import React, { useState, useEffect } from 'react';
import { Sparkles, Calendar, Check, X, ShieldCheck, ArrowRight } from 'lucide-react';
import { registerPendingBookingListener, BookingEngineParams } from '../utils/booking';
import { accommodations } from '../data/accommodations';

export const PendingBookingModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentParams, setCurrentParams] = useState<BookingEngineParams | null>(null);

  useEffect(() => {
    // Registra ouvinte para cliques em botões de reserva enquanto a URL oficial não estiver configurada
    const unsubscribe = registerPendingBookingListener((params) => {
      setCurrentParams(params);
      setIsOpen(true);
    });
    return unsubscribe;
  }, []);

  if (!isOpen) return null;

  const currentAcc = accommodations.find(
    (a) =>
      a.id === currentParams?.accommodationId ||
      a.name.toLowerCase() === currentParams?.accommodationName?.toLowerCase()
  );

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleExploreAccommodations = () => {
    setIsOpen(false);
    const elem = document.getElementById('acomodacoes');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      id="pending-booking-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) handleClose();
      }}
    >
      <div
        id="pending-booking-card"
        className="bg-[#FAF7F2] text-[#2C332D] rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-[#C29B48]/40 flex flex-col relative animate-in zoom-in-95 duration-200"
      >
        {/* Header com Visual Sofisticado */}
        <div className="bg-[#14241A] text-white p-6 sm:p-7 relative border-b border-[#C29B48]/30">
          <button
            onClick={handleClose}
            id="close-pending-modal-btn"
            aria-label="Fechar janela"
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C29B48]/20 border border-[#C29B48]/40 text-[#E8D4A2] text-[11px] font-semibold uppercase tracking-wider mb-2">
            <Sparkles className="w-3 h-3 text-[#C29B48]" />
            <span>Reserva Online Inteligente</span>
          </div>

          <h3 className="font-serif text-2xl font-bold text-white tracking-tight">
            Motor de Reservas
          </h3>

          <p className="text-xs sm:text-sm text-white/80 font-light mt-1">
            {currentAcc
              ? `Interesse selecionado: ${currentAcc.name}`
              : 'Cabana das Mansões — Spa em Meio à Natureza'}
          </p>
        </div>

        {/* Conteúdo Explicativo Elegante (Sem jargões técnicos) */}
        <div className="p-6 sm:p-8 space-y-5">
          <div className="p-5 rounded-2xl bg-[#F3ECE2] border border-[#E8DED1] flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-[#1c3224] text-[#C29B48] flex items-center justify-center shrink-0 mt-0.5">
              <Calendar className="w-5 h-5" />
            </div>
            <div className="text-xs sm:text-sm leading-relaxed text-[#2C332D]">
              <strong className="font-serif block text-base font-bold text-[#14241A] mb-1">
                Reservas Online em Atualização
              </strong>
              Nosso sistema de reservas online está sendo atualizado. Por favor, tente novamente em alguns instantes.
            </div>
          </div>

          <div className="space-y-2 text-xs text-[#526048]">
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-[#1c3224] shrink-0" />
              <span>Garantia de menor tarifa diretamente com a propriedade</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-[#1c3224] shrink-0" />
              <span>Sem taxas intermediárias de comissão</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#1c3224] shrink-0" />
              <span>Privacidade total em meio à natureza com spa privativo</span>
            </div>
          </div>

          {/* Botões de Ação */}
          <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
            <button
              onClick={handleExploreAccommodations}
              id="pending-modal-explore-btn"
              className="w-full py-3.5 rounded-full bg-[#1c3224] hover:bg-[#2d4f3b] text-[#FAF7F2] font-semibold text-xs uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-md"
            >
              <span>Conhecer as Acomodações</span>
              <ArrowRight className="w-4 h-4 text-[#C29B48]" />
            </button>

            <button
              onClick={handleClose}
              id="pending-modal-close-btn"
              className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-white hover:bg-stone-100 text-[#14241A] border border-[#E8DED1] font-semibold text-xs uppercase tracking-wider transition-colors cursor-pointer text-center"
            >
              Entendido
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
