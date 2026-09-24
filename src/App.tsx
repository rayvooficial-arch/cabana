import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ExperiencesSection } from './components/ExperiencesSection';
import { AccommodationsSection } from './components/AccommodationsSection';
import { StayModesSection } from './components/StayModesSection';
import { PersonalizeExperienceSection } from './components/PersonalizeExperienceSection';
import { PricingSection } from './components/PricingSection';
import { FaqSection } from './components/FaqSection';
import { LocationSection } from './components/LocationSection';
import { FinalCta } from './components/FinalCta';
import { Footer } from './components/Footer';
import { MobileReservationBar } from './components/MobileReservationBar';
import { PendingBookingModal } from './components/PendingBookingModal';

export default function App() {
  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#2C332D] flex flex-col selection:bg-[#1c3224] selection:text-[#FAF7F2]">
      <Navbar />

      <main className="flex-1">
        <Hero videoUrl="/b0br9k.mp4" />
        <AccommodationsSection />
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
  );
}
