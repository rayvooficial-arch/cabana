import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ConceptSection } from './components/ConceptSection';
import { ExperiencesSection } from './components/ExperiencesSection';
import { ExperienceMatcher } from './components/ExperienceMatcher';
import { AccommodationsSection } from './components/AccommodationsSection';
import { AccommodationDetailModal } from './components/AccommodationDetailModal';
import { StayModesSection } from './components/StayModesSection';
import { KitchenAndPantrySection } from './components/KitchenAndPantrySection';
import { PersonalizeExperienceSection } from './components/PersonalizeExperienceSection';
import { PricingSection } from './components/PricingSection';
import { SocialProofSection } from './components/SocialProofSection';
import { FaqSection } from './components/FaqSection';
import { InfoSection } from './components/InfoSection';
import { LocationSection } from './components/LocationSection';
import { FinalCta } from './components/FinalCta';
import { Footer } from './components/Footer';
import { PendingBookingModal } from './components/PendingBookingModal';
import { MobileReservationBar } from './components/MobileReservationBar';
import { openBookingEngine } from './utils/booking';
import { Accommodation } from './types';

export default function App() {
  const [selectedAccForDetail, setSelectedAccForDetail] = useState<Accommodation | null>(null);

  const handleOpenBooking = (accommodationId?: string) => {
    openBookingEngine({ accommodationId });
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

        {/* 04 — GUIA "QUAL EXPERIÊNCIA COMBINA COM VOCÊ?" (Casal, Família, Grupo, Pet) */}
        <ExperienceMatcher onSelectAccommodation={handleOpenBooking} />

        {/* 05 — ESCOLHA SUA ACOMODAÇÃO (Cabana Éden, Manancial e Casa Pedacinho do Céu) */}
        <AccommodationsSection
          onOpenBooking={handleOpenBooking}
          onOpenDetails={handleOpenDetailModal}
        />

        {/* 06 — ESCOLHA SUA MODALIDADE (Temporada Express × Temporada Conforto + Detalhes do Enxoval) */}
        <StayModesSection onOpenBooking={handleOpenBooking} />

        {/* 07 — VEJA O QUE ESTÁ INCLUSO: EXPERIÊNCIAS DA PROPRIEDADE (Hidromassagem, Cinema 100", Fazendinha) */}
        <ExperiencesSection onOpenBooking={() => handleOpenBooking()} />

        {/* 08 — O QUE ESTÁ INCLUSO: GASTRONOMIA, COZINHA & CONFORTO */}
        <KitchenAndPantrySection />

        {/* 09 — PERSONALIZE SUA EXPERIÊNCIA (Fogareiro Premium, Cestas Café da Manhã, Boas-Vindas) */}
        <PersonalizeExperienceSection />

        {/* 10 — CONSULTE DATA / TARIFÁRIO (Modalidades, Natal, Réveillon, Janeiro 2027) */}
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

      {/* 16 — FOOTER COM DADOS & CONTATO INSTITUCIONAL */}
      <Footer />

      {/* Modal elegante para quando a URL do motor estiver pendente */}
      <PendingBookingModal />

      {/* Modal de Detalhes da Acomodação (quando solicitado) */}
      <AccommodationDetailModal
        accommodation={selectedAccForDetail}
        onClose={handleCloseDetailModal}
        onOpenBooking={(accId) => {
          handleCloseDetailModal();
          handleOpenBooking(accId);
        }}
      />

      {/* Barra Fixa Mobile Discreta com "Seu refúgio começa aqui" */}
      <MobileReservationBar onOpenBooking={() => handleOpenBooking()} />
    </div>
  );
}
