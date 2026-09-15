import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ConceptSection } from './components/ConceptSection';
import { ExperiencesSection } from './components/ExperiencesSection';
import { ExperienceMatcher } from './components/ExperienceMatcher';
import { AccommodationsSection } from './components/AccommodationsSection';
import { AccommodationDetailModal } from './components/AccommodationDetailModal';
import { KitchenAndPantrySection } from './components/KitchenAndPantrySection';
import { PricingSection } from './components/PricingSection';
import { SocialProofSection } from './components/SocialProofSection';
import { FaqSection } from './components/FaqSection';
import { InfoSection } from './components/InfoSection';
import { LocationSection } from './components/LocationSection';
import { FinalCta } from './components/FinalCta';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { MobileReservationBar } from './components/MobileReservationBar';
import { Accommodation } from './types';

export default function App() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [initialAccForBooking, setInitialAccForBooking] = useState<string | undefined>();
  const [selectedAccForDetail, setSelectedAccForDetail] = useState<Accommodation | null>(null);

  const handleOpenBooking = (accommodationId?: string) => {
    setInitialAccForBooking(accommodationId);
    setIsBookingModalOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingModalOpen(false);
  };

  const handleOpenDetailModal = (acc: Accommodation) => {
    setSelectedAccForDetail(acc);
  };

  const handleCloseDetailModal = () => {
    setSelectedAccForDetail(null);
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#2C332D] flex flex-col selection:bg-[#1c3224] selection:text-[#FAF7F2]">
      {/* 00 - Fixed Luxury Navbar */}
      <Navbar onOpenBooking={handleOpenBooking} />

      <main className="flex-1">
        {/* 01 — HERO / Primeira Dobra com Vídeo Limpo & Sofisticado */}
        <Hero
          onOpenBooking={() => handleOpenBooking()}
          videoUrl="/SaveClip.mp4"
        />

        {/* 02 & 03 — PROMESSA / POSICIONAMENTO ("Por que a Cabana das Mansões?") */}
        <ConceptSection />

        {/* 04 — EXPERIÊNCIAS DA PROPRIEDADE (Hidromassagens, Cinema 100", Fazendinha, Lazer) */}
        <ExperiencesSection onOpenBooking={() => handleOpenBooking()} />

        {/* 05 — GUIA "QUAL EXPERIÊNCIA COMBINA COM VOCÊ?" (Casal, Família, Grupo, Pet) */}
        <ExperienceMatcher onSelectAccommodation={handleOpenBooking} />

        {/* 06 — ESCOLHA SUA ACOMODAÇÃO (Fotos reais sem popup, comodidades & reservas) */}
        <AccommodationsSection
          onOpenBooking={handleOpenBooking}
          onOpenDetails={handleOpenDetailModal}
        />

        {/* 08 — O QUE ESTÁ INCLUSO / GASTRONOMIA, COZINHA & CONFORTO */}
        <KitchenAndPantrySection />

        {/* 10 — TARIFÁRIO & OFERTAS (Seg-Qua 20% OFF vs Qui-Dom) */}
        <PricingSection onOpenBooking={handleOpenBooking} />

        {/* 11 — PROVA SOCIAL / AVALIAÇÕES REAIS (5.0 Estrelas) */}
        <SocialProofSection />

        {/* 12 — FAQ / REDUÇÃO DE OBJEÇÕES INTERATIVO */}
        <FaqSection />

        {/* 13 — INFORMAÇÕES GERAIS DE CHECK-IN / CHECK-OUT */}
        <InfoSection />

        {/* 14 — LOCALIZAÇÃO & COMO CHEGAR (Chácara das Mansões, Campo Grande - MS) */}
        <LocationSection />

        {/* 15 — CTA FINAL EMOCIONAL & DIRETO */}
        <FinalCta onOpenBooking={() => handleOpenBooking()} />
      </main>

      {/* 16 — FOOTER COM DADOS & CONTATO WHATSAPP */}
      <Footer />

      {/* Reservation Drawer / Modal Completo com cálculo transparente */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={handleCloseBooking}
        initialAccommodationId={initialAccForBooking}
      />

      {/* Modal de Detalhes da Acomodação (quando solicitado) */}
      <AccommodationDetailModal
        accommodation={selectedAccForDetail}
        isOpen={!!selectedAccForDetail}
        onClose={handleCloseDetailModal}
        onOpenBooking={(accId) => {
          handleCloseDetailModal();
          handleOpenBooking(accId);
        }}
      />

      {/* Barra Fixa Mobile de Alta Conversão */}
      <MobileReservationBar onOpenBooking={() => handleOpenBooking()} />
    </div>
  );
}
