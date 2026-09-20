import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ExperiencesSection } from './components/ExperiencesSection';
import { AccommodationsSection } from './components/AccommodationsSection';
import { AccommodationDetailModal } from './components/AccommodationDetailModal';
import { StayModesSection } from './components/StayModesSection';
import { PersonalizeExperienceSection } from './components/PersonalizeExperienceSection';
import { PricingSection } from './components/PricingSection';
import { FaqSection } from './components/FaqSection';
import { InfoSection } from './components/InfoSection';
import { LocationSection } from './components/LocationSection';
import { FinalCta } from './components/FinalCta';
import { Footer } from './components/Footer';
import { MobileReservationBar } from './components/MobileReservationBar';
import { openBookingEngine } from './utils/booking';
import { Accommodation } from './types';

export default function App() {
  const [selectedAccForDetail, setSelectedAccForDetail] = useState<Accommodation | null>(null);

  const handleOpenBooking = (accommodationId?: string) => {
    openBookingEngine({ accommodationId });
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#2C332D] flex flex-col selection:bg-[#1c3224] selection:text-[#FAF7F2]">
      <Navbar onOpenBooking={handleOpenBooking} />

      <main className="flex-1">
        <Hero onOpenBooking={() => handleOpenBooking()} videoUrl="/SaveClip.mp4" />

        <AccommodationsSection
          onOpenBooking={handleOpenBooking}
          onOpenDetails={setSelectedAccForDetail}
        />

        <StayModesSection onOpenBooking={handleOpenBooking} />
        <ExperiencesSection onOpenBooking={() => handleOpenBooking()} />
        <PersonalizeExperienceSection />
        <PricingSection onOpenBooking={handleOpenBooking} />
        <FaqSection />
        <InfoSection />
        <LocationSection />
        <FinalCta onOpenBooking={() => handleOpenBooking()} />
      </main>

      <Footer />

      <AccommodationDetailModal
        accommodation={selectedAccForDetail}
        onClose={() => setSelectedAccForDetail(null)}
        onOpenBooking={(accId) => {
          setSelectedAccForDetail(null);
          handleOpenBooking(accId);
        }}
      />

      <MobileReservationBar onOpenBooking={() => handleOpenBooking()} />
    </div>
  );
}
