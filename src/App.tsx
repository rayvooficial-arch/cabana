import React, { Suspense, lazy } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ExperiencesSection } from './components/ExperiencesSection';
import { AccommodationsSection } from './components/AccommodationsSection';
import { AvailabilitySection } from './components/AvailabilitySection';
import { StayModesSection } from './components/StayModesSection';
import { PersonalizeExperienceSection } from './components/PersonalizeExperienceSection';
import { PricingSection } from './components/PricingSection';
import { FaqSection } from './components/FaqSection';
import { LocationSection } from './components/LocationSection';
import { FinalCta } from './components/FinalCta';
import { Footer } from './components/Footer';
import { MobileReservationBar } from './components/MobileReservationBar';
import { PendingBookingModal } from './components/PendingBookingModal';
import { SiteContentProvider } from './context/SiteContentContext';

const AdminApp = lazy(() => import('./admin/AdminApp').then((module) => ({ default: module.AdminApp })));

export default function App() {
  if (window.location.pathname.startsWith('/admin')) {
    return (
      <Suspense fallback={<div className="min-h-screen bg-[#10251A] grid place-items-center text-white">Carregando painel…</div>}>
        <AdminApp />
      </Suspense>
    );
  }

  return (
    <SiteContentProvider>
      <div className="min-h-screen bg-[#FAF7F2] text-[#2C332D] flex flex-col selection:bg-[#1c3224] selection:text-[#FAF7F2]">
        <Navbar />

        <main className="flex-1">
          <Hero videoUrl="/herosite.mp4" hasAudio={false} />
          <AccommodationsSection />
          <AvailabilitySection />
          <StayModesSection />
          <ExperiencesSection />
          <PersonalizeExperienceSection />
          <PricingSection />
          <FaqSection />
          <LocationSection />
          <FinalCta />
        </main>

        <Footer />
        <MobileReservationBar />
        <PendingBookingModal />
      </div>
    </SiteContentProvider>
  );
}

