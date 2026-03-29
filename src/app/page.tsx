import { HeroIntro, MoedasLibertySection } from "@/components/landing/HeroSection";
import { MarqueeSection } from "@/components/landing/MarqueeSection";
// import { StatsSection } from "@/components/landing/StatsSection";
import { CardsShowcase } from "@/components/landing/CardsShowcase";
import {
  BeyondFinanceSection,
  CompanySection,
  SecuritySection,
  SpeedCirclesSection,
  WorldGlobeSection,
} from "@/components/landing/FeatureSections";
import { TrustSection } from "@/components/landing/TrustSection";
import { AppDownloadSection } from "@/components/landing/AppDownloadSection";
import { FaqSection } from "@/components/landing/FaqSection";
import { SiteNav } from "@/components/landing/SiteNav";
import { SiteFooter } from "@/components/landing/SiteFooter";
import { ScrollToTop } from "@/components/landing/ScrollToTop";
import { WhatsAppButton } from "@/components/landing/WhatsAppButton";
import { CookieBanner } from "@/components/landing/CookieBanner";

export default function Home() {
  return (
    <>
      <SiteNav />
      <main>
        <HeroIntro />
        <MarqueeSection />
        <MoedasLibertySection />
        {/* StatsSection removida — info já presente em outras seções */}
        <CardsShowcase />
        <WorldGlobeSection />
        <SecuritySection />
        <TrustSection />
        <SpeedCirclesSection />
        <BeyondFinanceSection />
        <CompanySection />
        <AppDownloadSection />
        <FaqSection />
      </main>
      <SiteFooter />
      <ScrollToTop />
      <WhatsAppButton />
      <CookieBanner />
    </>
  );
}
