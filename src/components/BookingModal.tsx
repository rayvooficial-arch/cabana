import React, { useState, useEffect } from 'react';
import { accommodations } from '../data/accommodations';
import { PRICING_CONFIG } from '../config/constants';
import { createWhatsAppLink, trackWhatsAppClick } from '../utils/whatsapp';
import {
  X,
  Calendar,
  Users,
  Check,
  Heart,
  Sparkles,
  Info,
  Send,
  Bed,
  Baby,
} from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialAccommodationId?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialAccommodationId,
}) => {
  const [selectedAccId, setSelectedAccId] = useState<string>(
    initialAccommodationId || 'eden'
  );
  const [guestName, setGuestName] = useState('');
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [guestCount, setGuestCount] = useState(2);
  const [requestCrib, setRequestCrib] = useState(false);
  const [requestExtraBed, setRequestExtraBed] = useState(false);
  const [hasPet, setHasPet] = useState(false);
  const [observations, setObservations] = useState('');

  useEffect(() => {
    if (initialAccommodationId) {
      setSelectedAccId(initialAccommodationId);
    }
  }, [initialAccommodationId]);

  if (!isOpen) return null;

  const currentAcc =
    accommodations.find((a) => a.id === selectedAccId) || accommodations[0];

  // Calculate pricing breakdown if dates are chosen
  const calculateEstimatedTotal = () => {
    if (!checkInDate || !checkOutDate) {
      return { nights: 0, total: 0, isMidweekPromo: false };
    }

    const start = new Date(checkInDate);
    const end = new Date(checkOutDate);
    const timeDiff = end.getTime() - start.getTime();
    const nights = Math.max(1, Math.round(timeDiff / (1000 * 3600 * 24)));

    if (nights <= 0 || isNaN(nights)) {
      return { nights: 0, total: 0, isMidweekPromo: false };
    }

    // Check days of week
    let total = 0;
    let hasMidweek = false;
    let curr = new Date(start);

    for (let i = 0; i < nights; i++) {
      const day = curr.getDay(); // 0: Sunday, 1: Monday, 2: Tuesday, 3: Wednesday, 4: Thursday, 5: Friday, 6: Saturday
      // Prompt: "SEGUNDA A QUARTA: 20% OFF (Cabanas R$ 960, Casa R$ 1.440)"
      // "QUINTA A DOMINGO: Cabanas R$ 1.200, Casa R$ 1.800"
      if (day >= 1 && day <= 3) {
        total += currentAcc.weekdayPrice;
        hasMidweek = true;
      } else {
        total += currentAcc.weekendPrice;
      }
      curr.setDate(curr.getDate() + 1);
    }

    if (requestExtraBed) {
      total += 50 * nights;
    }

    return { nights, total, isMidweekPromo: hasMidweek };
  };

  const { nights, total, isMidweekPromo } = calculateEstimatedTotal();

  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();

    const formattedCheckIn = checkInDate
      ? new Date(checkInDate + 'T15:00:00').toLocaleDateString('pt-BR')
      : 'A combinar';
    const formattedCheckOut = checkOutDate
      ? new Date(checkOutDate + 'T12:00:00').toLocaleDateString('pt-BR')
      : 'A combinar';

    trackWhatsAppClick('booking_modal', {
      accommodation: currentAcc.name,
      checkIn: formattedCheckIn,
      checkOut: formattedCheckOut,
      nights,
      guests: guestCount,
      estimatedTotal: total,
    });

    const link = createWhatsAppLink({
      accommodationName: currentAcc.name,
      guestName: guestName || undefined,
      checkInDate: formattedCheckIn,
      checkOutDate: formattedCheckOut,
      nights: nights > 0 ? nights : undefined,
      guestCount,
      requestCrib,
      requestExtraBed,
      hasPet: hasPet && currentAcc.isPetFriendly,
      estimatedTotal: total > 0 ? total : undefined,
      observations: observations || undefined,
    });

    window.open(link, '_blank');
  };

  return (
    <div
      id="booking-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/75 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        id="booking-modal-card"
        className="bg-[#FAF7F2] text-[#2C332D] rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl border border-[#C29B48]/30 max-h-[92vh] flex flex-col my-auto relative animate-in zoom-in-95 duration-200"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 sm:p-8 bg-[#14241A] text-white border-b border-[#2d4f3b]">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Sparkles className="w-3.5 h-3.5 text-[#C29B48]" />
              <span className="text-xs uppercase tracking-widest text-[#C29B48] font-semibold">
                Reserva & Disponibilidade
              </span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#FAF7F2]">
              Consultar Estadia
            </h2>
          </div>

          <button
            onClick={onClose}
            aria-label="Fechar consulta"
            className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Form */}
        <form onSubmit={handleSendWhatsApp} className="overflow-y-auto p-6 sm:p-8 space-y-6 flex-1">
          {/* Step 1: Accommodation Selector */}
          <div>
            <label className="block text-xs uppercase tracking-wider font-bold text-[#14241A] mb-2.5">
              1. Selecione a Acomodação
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {accommodations.map((acc) => (
                <button
                  type="button"
                  key={acc.id}
                  onClick={() => setSelectedAccId(acc.id)}
                  className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                    selectedAccId === acc.id
                      ? 'bg-[#1c3224] text-white border-[#1c3224] shadow-md ring-2 ring-[#C29B48]'
                      : 'bg-white text-[#2C332D] border-[#E3D9CC] hover:border-[#C29B48]'
                  }`}
                >
                  <div>
                    <span className="font-serif font-bold text-sm block">
                      {acc.name}
                    </span>
                    <span
                      className={`text-[11px] block mt-0.5 ${
                        selectedAccId === acc.id ? 'text-[#E8D4A2]' : 'text-[#526048]'
                      }`}
                    >
                      {acc.capacity}
                    </span>
                  </div>

                  {acc.isPetFriendly && (
                    <span className="inline-flex items-center gap-1 text-[9px] font-extrabold uppercase mt-2 px-1.5 py-0.5 rounded bg-[#526048] text-white self-start">
                      Pet Friendly
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Accommodation Highlights Summary */}
          <div className="p-4 rounded-2xl bg-[#F3ECE2] border border-[#E8DED1] text-xs text-[#526048] flex items-center justify-between">
            <div>
              <span className="font-bold text-[#14241A] block">
                {currentAcc.name} — Tarifas Oficiais:
              </span>
              <span>
                Qui a Dom: R$ {currentAcc.weekendPrice.toLocaleString('pt-BR')} | Seg a Qua (20% OFF): R$ {currentAcc.weekdayPrice.toLocaleString('pt-BR')}
              </span>
            </div>
          </div>

          {/* Step 2: Guest Details & Dates */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs uppercase tracking-wider font-bold text-[#14241A] mb-1.5">
                Seu Nome Completo
              </label>
              <input
                type="text"
                required
                placeholder="Ex: João da Silva"
                value={guestName}
                onChange={(e) => setGuestName(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-white border border-[#E3D9CC] focus:outline-none focus:border-[#C29B48] text-sm text-[#14241A]"
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider font-bold text-[#14241A] mb-1.5">
                Quantidade de Hóspedes (Máx: {currentAcc.maxGuests})
              </label>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  min={1}
                  max={currentAcc.maxGuests}
                  value={guestCount}
                  onChange={(e) =>
                    setGuestCount(
                      Math.min(currentAcc.maxGuests, Math.max(1, parseInt(e.target.value) || 1))
                    )
                  }
                  className="w-full px-4 py-3 rounded-xl bg-white border border-[#E3D9CC] focus:outline-none focus:border-[#C29B48] text-sm text-[#14241A]"
                />
              </div>
            </div>
          </div>

          {/* Dates */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs uppercase tracking-wider font-bold text-[#14241A] mb-1.5">
                Data de Check-in (15h)
              </label>
              <input
                type="date"
                required
                value={checkInDate}
                onChange={(e) => setCheckInDate(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-white border border-[#E3D9CC] focus:outline-none focus:border-[#C29B48] text-sm text-[#14241A]"
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider font-bold text-[#14241A] mb-1.5">
                Data de Check-out (12h)
              </label>
              <input
                type="date"
                required
                min={checkInDate || undefined}
                value={checkOutDate}
                onChange={(e) => setCheckOutDate(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-white border border-[#E3D9CC] focus:outline-none focus:border-[#C29B48] text-sm text-[#14241A]"
              />
            </div>
          </div>

          {/* Special Requests */}
          <div>
            <label className="block text-xs uppercase tracking-wider font-bold text-[#14241A] mb-2">
              Solicitações Especiais
            </label>
            <div className="space-y-2">
              <label className="flex items-center gap-3 p-3 rounded-xl bg-white border border-[#E3D9CC] cursor-pointer hover:border-[#C29B48]">
                <input
                  type="checkbox"
                  checked={requestCrib}
                  onChange={(e) => setRequestCrib(e.target.checked)}
                  className="w-4 h-4 text-[#1c3224] rounded focus:ring-0"
                />
                <Baby className="w-4 h-4 text-[#526048]" />
                <span className="text-xs text-[#2C332D]">
                  Berço (mediante solicitação prévia para bebês - sem custo)
                </span>
              </label>

              <label className="flex items-center gap-3 p-3 rounded-xl bg-white border border-[#E3D9CC] cursor-pointer hover:border-[#C29B48]">
                <input
                  type="checkbox"
                  checked={requestExtraBed}
                  onChange={(e) => setRequestExtraBed(e.target.checked)}
                  className="w-4 h-4 text-[#1c3224] rounded focus:ring-0"
                />
                <Bed className="w-4 h-4 text-[#526048]" />
                <span className="text-xs text-[#2C332D]">
                  Cama Extra (+ R$ 50,00 por diária)
                </span>
              </label>

              {currentAcc.isPetFriendly && (
                <label className="flex items-center gap-3 p-3 rounded-xl bg-[#FAF7F2] border border-[#526048]/40 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={hasPet}
                    onChange={(e) => setHasPet(e.target.checked)}
                    className="w-4 h-4 text-[#526048] rounded focus:ring-0"
                  />
                  <Heart className="w-4 h-4 text-[#C29B48]" />
                  <span className="text-xs text-[#14241A] font-semibold">
                    Vou levar meu pet (Acomodação Pet Friendly)
                  </span>
                </label>
              )}
            </div>
          </div>

          {/* Observations */}
          <div>
            <label className="block text-xs uppercase tracking-wider font-bold text-[#14241A] mb-1.5">
              Mensagem ou Observações (Opcional)
            </label>
            <textarea
              rows={2}
              placeholder="Alguma celebração especial, preferência ou horário previsto?"
              value={observations}
              onChange={(e) => setObservations(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#E3D9CC] focus:outline-none focus:border-[#C29B48] text-sm text-[#14241A]"
            />
          </div>

          {/* Real-time Calculation Summary */}
          {nights > 0 && (
            <div className="p-5 rounded-2xl bg-[#14241A] text-white space-y-2 border border-[#C29B48]/30">
              <div className="flex items-center justify-between text-xs text-white/70">
                <span>Período Selecionado:</span>
                <span className="font-semibold text-white">
                  {nights} noite(s)
                </span>
              </div>

              {isMidweekPromo && (
                <div className="flex items-center justify-between text-xs text-[#E8D4A2]">
                  <span className="flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-[#C29B48]" />
                    Desconto de Segunda a Quarta aplicado:
                  </span>
                  <span className="font-bold">20% OFF</span>
                </div>
              )}

              {requestExtraBed && (
                <div className="flex items-center justify-between text-xs text-white/70">
                  <span>Adicional Cama Extra:</span>
                  <span>R$ {(50 * nights).toLocaleString('pt-BR')}</span>
                </div>
              )}

              <div className="pt-2 border-t border-white/10 flex items-baseline justify-between">
                <div>
                  <span className="text-xs uppercase tracking-wider text-[#C29B48] block">
                    Valor Estimado:
                  </span>
                  <span className="text-[10px] text-white/60">
                    Parcelamos no cartão conforme taxas da maquininha
                  </span>
                </div>
                <div className="font-serif text-2xl sm:text-3xl font-bold text-[#FAF7F2]">
                  R$ {total.toLocaleString('pt-BR')}
                </div>
              </div>
            </div>
          )}

          {/* Action button */}
          <button
            type="submit"
            id="submit-booking-whatsapp-btn"
            className="w-full py-4 rounded-2xl bg-gradient-to-r from-[#C29B48] to-[#d6af57] hover:from-[#d6af57] hover:to-[#e4c278] text-[#14241A] font-bold text-xs uppercase tracking-wider shadow-lg hover:shadow-[#C29B48]/30 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
          >
            <Send className="w-4 h-4 text-[#14241A]" />
            <span>Consultar Disponibilidade via WhatsApp</span>
          </button>
        </form>
      </div>
    </div>
  );
};
