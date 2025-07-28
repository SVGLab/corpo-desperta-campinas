import HeroSection from "@/components/HeroSection";
import ProofSection from "@/components/ProofSection";
import MethodSection from "@/components/MethodSection";
import DiscoverySection from "@/components/DiscoverySection";
import OfferSection from "@/components/OfferSection";
import SalizaSection from "@/components/SalizaSection";
import TestimonialsVideoSection from "@/components/TestimonialsVideoSection";
import FinalCtaSection from "@/components/FinalCtaSection";
import LocationSection from "@/components/LocationSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ProofSection />
      <TestimonialsVideoSection />
      <MethodSection />
      <DiscoverySection />
      <OfferSection />
      <SalizaSection />
      <FinalCtaSection />
      <LocationSection />
      <Footer />
    </div>
  );
};

export default Index;