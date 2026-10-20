import React, { FormEvent, useEffect, useMemo, useState } from 'react';
import { CalendarCheck, CalendarDays, ExternalLink, Gift, MessageCircle, Users, X } from 'lucide-react';
import {
  BookingEngineParams,
  createBookingWhatsAppLink,
  registerPendingBookingListener,
} from '../utils/booking';
import { PUBLIC_AVAILABILITY_URL } from '../config/constants';
import { useSiteContent } from '../context/SiteContentContext';

type StayMode = 'express' | 'conforto';

const DAY_IN_MS = 24 * 60 * 60 * 1000;

function parseDate(value: string): Date {
  return new Date(`${value}T12:00:00`);
}

function formatInputDate(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function nightsBetween(checkIn: string, checkOut: string): number {
  if (!checkIn || !checkOut) return 0;
  return Math.max(0, Math.round((parseDate(checkOut).getTime() - parseDate(checkIn).getTime()) / DAY_IN_MS));
}

function isChristmasNight(date: Date): boolean {
  return date.getFullYear() === 2026 && date.getMonth() === 11 && [24, 25].includes(date.getDate());
}

function isNewYearNight(date: Date): boolean {
  return (
    (date.getFullYear() === 2026 && date.getMonth() === 11 && [30, 31].includes(date.getDate())) ||
    (date.getFullYear() === 2027 && date.getMonth() === 0 && date.getDate() === 1)
  );
}

function isHighSeason(date: Date): boolean {
  return (
    (date.getFullYear() === 2026 && date.getMonth() === 11) ||
    (date.getFullYear() === 2027 && date.getMonth() === 0)
  );
}

export const PendingBookingModal: React.FC = () => {
  const { content } = useSiteContent();
  const {
    accommodations,
    stayModes,
    experiencesAndBaskets,
    seasonalRates: SEASONAL_RATES,
    specialPackages: SPECIAL_PACKAGES,
  } = content;
  const [isOpen, setIsOpen] = useState(false);
  const [currentParams, setCurrentParams] = useState<BookingEngineParams | null>(null);
  const [accommodationId, setAccommodationId] = useState('');
  const [stayMode, setStayMode] = useState<StayMode>('express');
  const [guestName, setGuestName] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState(2);
  const [selectedAddOnIds, setSelectedAddOnIds] = useState<string[]>([]);
  const [error, setError] = useState('');

  const today = useMemo(() => formatInputDate(new Date()), []);
  const selectedAccommodation = accommodations.find((item) => item.id === accommodationId);
  const nights = nightsBetween(checkIn, checkOut);

  useEffect(() => {
    return registerPendingBookingListener((params) => {
      const selected = accommodations.find(
        (item) =>
          item.id === params?.accommodationId ||
          item.name.toLowerCase() === params?.accommodationName?.toLowerCase(),
      );
      const source = params?.source || '';
      setCurrentParams(params);
      setAccommodationId(selected?.id || '');
      setStayMode(source.includes('conforto') ? 'conforto' : 'express');
      setGuestName('');
      setCheckIn('');
      setCheckOut('');
      setGuests(2);
      setSelectedAddOnIds(
        params?.experienceId && experiencesAndBaskets.some((item) => item.id === params.experienceId)
          ? [params.experienceId]
          : [],
      );
      setError('');
      setIsOpen(true);
    });
  }, [accommodations, experiencesAndBaskets]);

  const selectedAddOnNames = useMemo(
    () => experiencesAndBaskets
      .filter((item) => selectedAddOnIds.includes(item.id))
      .map((item) => item.name),
    [experiencesAndBaskets, selectedAddOnIds],
  );

  const toggleAddOn = (id: string) => {
    setSelectedAddOnIds((current) => (
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id]
    ));
  };

  const estimate = useMemo(() => {
    if (!selectedAccommodation || nights <= 0) return 0;
    const propertyType = selectedAccommodation.id === 'pedacinho-do-ceu' ? 'casa' : 'cabanas';
    let total = 0;
    const cursor = parseDate(checkIn);

    for (let index = 0; index < nights; index += 1) {
      let nightlyRate: number;

      if (isChristmasNight(cursor)) {
        nightlyRate = SPECIAL_PACKAGES[0].rates[propertyType][stayMode];
      } else if (isNewYearNight(cursor)) {
        nightlyRate = SPECIAL_PACKAGES[1].rates[propertyType][stayMode];
      } else if (isHighSeason(cursor)) {
        nightlyRate = SEASONAL_RATES.rates[stayMode][propertyType];
      } else {
        const rate = stayModes[stayMode].pricing[propertyType];
        const dayOfWeek = cursor.getDay();
        nightlyRate = dayOfWeek >= 1 && dayOfWeek <= 3
          ? (rate.weekday as number)
          : (rate.weekend as number);
      }

      total += nightlyRate;
      cursor.setDate(cursor.getDate() + 1);
    }

    return total;
  }, [checkIn, nights, selectedAccommodation, stayMode, stayModes, SEASONAL_RATES, SPECIAL_PACKAGES]);

  const minimumStayWarning = useMemo(() => {
    if (!checkIn || nights <= 0) return '';
    const cursor = parseDate(checkIn);
    let includesChristmas = false;
    let includesNewYear = false;

    for (let index = 0; index < nights; index += 1) {
      includesChristmas ||= isChristmasNight(cursor);
      includesNewYear ||= isNewYearNight(cursor);
      cursor.setDate(cursor.getDate() + 1);
    }

    if (includesNewYear && nights < 2) return 'O pacote de Réveillon exige o mínimo de 2 diárias.';
    if (includesChristmas && nights < 2) return 'O pacote de Natal exige o mínimo de 2 diárias.';
    return '';
  }, [checkIn, nights]);

  if (!isOpen) return null;

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError('');

    if (!selectedAccommodation || !guestName.trim() || !checkIn || !checkOut || nights <= 0) {
      setError('Preencha todos os campos e escolha um período válido.');
      return;
    }
    if (guests < 1 || guests > selectedAccommodation.maxGuests) {
      setError(`Esta acomodação recebe até ${selectedAccommodation.maxGuests} hóspedes.`);
      return;
    }
    if (minimumStayWarning) {
      setError(minimumStayWarning);
      return;
    }

    const url = createBookingWhatsAppLink(
      {
        accommodationName: selectedAccommodation.name,
        guestName: guestName.trim(),
        checkIn,
        checkOut,
        nights,
        guests,
        estimatedValue: estimate,
        stayMode,
        stayModeName: stayMode === 'express' ? 'Temporada Express' : 'Temporada Conforto',
        selectedAddOns: selectedAddOnNames,
      },
      currentParams || undefined,
    );
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      id="booking-inquiry-modal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-inquiry-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/75 backdrop-blur-md overflow-y-auto"
      onClick={(event) => event.target === event.currentTarget && setIsOpen(false)}
    >
      <div className="relative w-full max-w-2xl rounded-3xl overflow-hidden bg-[#FAF7F2] shadow-2xl border border-[#C29B48]/40">
        <header className="relative bg-[#14241A] px-5 py-5 sm:px-7 sm:py-6 text-white">
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            aria-label="Fechar formulário de reserva"
            className="absolute right-4 top-4 rounded-full p-2 bg-white/10 hover:bg-white/20 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
          <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#E8D4A2]">
            Consulta rápida
          </span>
          <h2 id="booking-inquiry-title" className="font-serif text-2xl sm:text-3xl font-bold mt-1 pr-10">
            Escolha as datas da sua estadia
          </h2>
          <p className="text-sm text-white/75 mt-2">
            Preencha os dados para enviar uma mensagem completa à nossa equipe pelo WhatsApp.
          </p>
        </header>

        <form onSubmit={handleSubmit} className="p-5 sm:p-7 space-y-5">
          <a
            href={PUBLIC_AVAILABILITY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between gap-3 rounded-2xl border border-[#D6C49C] bg-[#F3ECE2] px-4 py-3.5 text-[#14241A] transition-colors hover:border-[#8B6A2F] hover:bg-[#EEE3D4]"
          >
            <span className="flex items-center gap-3">
              <CalendarCheck className="h-5 w-5 shrink-0 text-[#8B6A2F]" />
              <span>
                <strong className="block text-sm">Confira a agenda antes de escolher</strong>
                <span className="block text-xs font-normal text-[#6B746D]">Veja as noites disponíveis de cada acomodação.</span>
              </span>
            </span>
            <ExternalLink className="h-4 w-4 shrink-0 text-[#8B6A2F]" />
          </a>

          <div className="grid sm:grid-cols-2 gap-4">
            <label className="text-sm font-semibold text-[#14241A]">
              Acomodação
              <select
                required
                value={accommodationId}
                onChange={(event) => {
                  setAccommodationId(event.target.value);
                  const accommodation = accommodations.find((item) => item.id === event.target.value);
                  if (accommodation && guests > accommodation.maxGuests) setGuests(accommodation.maxGuests);
                }}
                className="mt-1.5 w-full rounded-xl border border-[#D8CCBC] bg-white px-3.5 py-3 font-normal outline-none focus:border-[#8B6A2F]"
              >
                <option value="">Selecione</option>
                {accommodations.map((item) => (
                  <option key={item.id} value={item.id}>{item.name}</option>
                ))}
              </select>
            </label>

            <label className="text-sm font-semibold text-[#14241A]">
              Modalidade
              <select
                value={stayMode}
                onChange={(event) => setStayMode(event.target.value as StayMode)}
                className="mt-1.5 w-full rounded-xl border border-[#D8CCBC] bg-white px-3.5 py-3 font-normal outline-none focus:border-[#8B6A2F]"
              >
                <option value="express">Temporada Express</option>
                <option value="conforto">Temporada Conforto</option>
              </select>
            </label>
          </div>

          <label className="block text-sm font-semibold text-[#14241A]">
            Seu nome
            <input
              required
              type="text"
              value={guestName}
              onChange={(event) => setGuestName(event.target.value)}
              placeholder="Nome completo"
              autoComplete="name"
              className="mt-1.5 w-full rounded-xl border border-[#D8CCBC] bg-white px-3.5 py-3 font-normal outline-none focus:border-[#8B6A2F]"
            />
          </label>

          <div className="grid sm:grid-cols-2 gap-4">
            <label className="text-sm font-semibold text-[#14241A]">
              Check-in — 15h
              <input
                required
                type="date"
                min={today}
                value={checkIn}
                onChange={(event) => {
                  setCheckIn(event.target.value);
                  if (checkOut && event.target.value >= checkOut) setCheckOut('');
                }}
                className="mt-1.5 w-full rounded-xl border border-[#D8CCBC] bg-white px-3.5 py-3 font-normal outline-none focus:border-[#8B6A2F]"
              />
            </label>
            <label className="text-sm font-semibold text-[#14241A]">
              Check-out — 12h
              <input
                required
                type="date"
                min={checkIn || today}
                value={checkOut}
                onChange={(event) => setCheckOut(event.target.value)}
                className="mt-1.5 w-full rounded-xl border border-[#D8CCBC] bg-white px-3.5 py-3 font-normal outline-none focus:border-[#8B6A2F]"
              />
            </label>
          </div>

          <label className="block text-sm font-semibold text-[#14241A]">
            Hóspedes
            <div className="relative mt-1.5">
              <Users className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8B6A2F]" />
              <input
                required
                type="number"
                min={1}
                max={selectedAccommodation?.maxGuests || 8}
                value={guests}
                onChange={(event) => setGuests(Number(event.target.value))}
                className="w-full rounded-xl border border-[#D8CCBC] bg-white pl-10 pr-3.5 py-3 font-normal outline-none focus:border-[#8B6A2F]"
              />
            </div>
          </label>

          <fieldset className="rounded-2xl border border-[#D8CCBC] bg-white p-4">
            <legend className="px-1 text-sm font-semibold text-[#14241A]">
              Cestas e experiências <span className="font-normal text-[#6B746D]">(opcional)</span>
            </legend>
            <p className="mb-3 flex items-center gap-2 text-xs text-[#6B746D]">
              <Gift className="h-4 w-4 shrink-0 text-[#8B6A2F]" />
              Selecione uma ou mais opções para consultar junto com a reserva.
            </p>
            <div className="grid gap-2 sm:grid-cols-2">
              {experiencesAndBaskets.map((item) => {
                const checked = selectedAddOnIds.includes(item.id);
                return (
                  <label
                    key={item.id}
                    className={`flex cursor-pointer items-start gap-2.5 rounded-xl border px-3 py-2.5 text-xs transition-colors ${
                      checked
                        ? 'border-[#8B6A2F] bg-[#F3ECE2] text-[#14241A]'
                        : 'border-[#E8DED1] bg-[#FAF7F2] text-[#526048] hover:border-[#C9B78F]'
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={checked}
                      onChange={() => toggleAddOn(item.id)}
                      className="mt-0.5 h-4 w-4 shrink-0 accent-[#1C5335]"
                    />
                    <span>
                      <strong className="block font-semibold">{item.name}</strong>
                      <span className="mt-0.5 block text-[10px] text-[#7A817B]">
                        {item.priceFormatted || (item.price ? `R$ ${item.price.toLocaleString('pt-BR')}` : 'Consultar valor')}
                      </span>
                    </span>
                  </label>
                );
              })}
            </div>
            <p className="mt-3 text-[11px] text-[#6B746D]">
              Valores e disponibilidade dos adicionais serão confirmados pela equipe.
            </p>
          </fieldset>

          {nights > 0 && selectedAccommodation && (
            <div className="rounded-2xl border border-[#D6C49C] bg-[#F3ECE2] p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <CalendarDays className="w-5 h-5 text-[#8B6A2F]" />
                <div>
                  <strong className="block text-sm text-[#14241A]">{nights} noite(s)</strong>
                  <span className="text-xs text-[#6B746D]">Valor sujeito à confirmação da disponibilidade</span>
                </div>
              </div>
              <strong className="font-serif text-xl text-[#14241A]">R$ {estimate.toLocaleString('pt-BR')}</strong>
            </div>
          )}

          {minimumStayWarning && <p className="text-sm font-semibold text-amber-800">{minimumStayWarning}</p>}
          {error && <p role="alert" className="text-sm font-semibold text-red-700">{error}</p>}

          <button
            type="submit"
            className="w-full rounded-full bg-[#1C5335] hover:bg-[#153D28] text-white px-6 py-4 font-bold uppercase tracking-wider text-sm flex items-center justify-center gap-2 cursor-pointer shadow-lg"
          >
            <MessageCircle className="w-5 h-5" />
            Consultar disponibilidade no WhatsApp
          </button>
          <p className="text-center text-[11px] text-[#6B746D]">
            O valor é uma estimativa baseada nas tarifas do site e será confirmado por nossa equipe.
          </p>
        </form>
      </div>
    </div>
  );
};

