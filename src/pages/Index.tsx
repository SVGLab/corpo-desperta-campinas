import HeroSection from "@/components/HeroSection";
import ProofSection from "@/components/ProofSection";
import MethodSection from "@/components/MethodSection";

import ResultsCarouselSection from "@/components/ResultsCarouselSection";
import TestimonialsVideoSection from "@/components/TestimonialsVideoSection";
import LocationSection from "@/components/LocationSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ProofSection />
      <TestimonialsVideoSection />
      <ResultsCarouselSection />
      <MethodSection />
      
      <LocationSection />
      <Footer />
    </div>
  );
};

export default Index;