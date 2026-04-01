import dynamic from "next/dynamic";
import { HeroIntro, MoedasLibertySection } from "@/components/landing/HeroSection";
import { MarqueeSection } from "@/components/landing/MarqueeSection";
import { SiteNav } from "@/components/landing/SiteNav";
import { SiteFooter } from "@/components/landing/SiteFooter";

/* ── Lazy-loaded sections (below the fold) ── */
const CardsShowcase = dynamic(() => import("@/components/landing/CardsShowcase").then(m => m.CardsShowcase));
const WorldGlobeSection = dynamic(() => import("@/components/landing/FeatureSections").then(m => m.WorldGlobeSection));
const SecuritySection = dynamic(() => import("@/components/landing/FeatureSections").then(m => m.SecuritySection));
const TrustSection = dynamic(() => import("@/components/landing/TrustSection").then(m => m.TrustSection));
const ProductsSection = dynamic(() => import("@/components/landing/ProductsSection").then(m => m.ProductsSection));
const CompanySection = dynamic(() => import("@/components/landing/FeatureSections").then(m => m.CompanySection));
const AppDownloadSection = dynamic(() => import("@/components/landing/AppDownloadSection").then(m => m.AppDownloadSection));
const ScrollToTop = dynamic(() => import("@/components/landing/ScrollToTop").then(m => m.ScrollToTop));
const WhatsAppButton = dynamic(() => import("@/components/landing/WhatsAppButton").then(m => m.WhatsAppButton));
const CookieBanner = dynamic(() => import("@/components/landing/CookieBanner").then(m => m.CookieBanner));

export default function Home() {
  return (
    <>
      <SiteNav />
      <main>
        {/* Above the fold — loaded immediately */}
        <HeroIntro />
        <MarqueeSection />
        <MoedasLibertySection />

        {/* Below the fold — lazy loaded */}
        <CardsShowcase />
        <WorldGlobeSection />
        <SecuritySection />
        <TrustSection />
        <ProductsSection />
        <CompanySection />
        <AppDownloadSection />

      </main>
      <SiteFooter />
      <ScrollToTop />
      <WhatsAppButton />
      <CookieBanner />
    </>
  );
}
