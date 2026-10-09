import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import HopeSection from "../components/HopeSection";
import WhoWeHelpSection from "../components/WhoWeHelpSection";
import QuoteSection from "../components/QuoteSection";
import ExpertiseSection from "../components/ExpertiseSection";
import HowWeWorkSection from "../components/HowWeWorkSection";
import HonoringSection from "../components/HonoringSection";
import SpecialtiesIncludeSection from "../components/SpecialtiesIncludeSection";
import ScheduleAppointmentSection from "../components/ScheduleAppointmentSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-brand-bg flex flex-col">
      <Navbar />
      <HeroSection />
      <HopeSection />
      <WhoWeHelpSection />
      <QuoteSection />
      <ExpertiseSection />
      <HowWeWorkSection />
      <HonoringSection />
      <SpecialtiesIncludeSection />
      <ScheduleAppointmentSection />
      <Footer />
    </main>
  );
}

