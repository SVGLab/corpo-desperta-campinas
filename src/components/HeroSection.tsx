import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
const heroImage = "/lovable-uploads/e01b6ac9-3bb4-4e07-afb5-b224150f1b5b.png";
const HeroSection = () => {
  return <section className="relative flex items-center justify-center w-full">
      {/* Background Image */}
      <div className="w-full max-w-[1920px] mx-auto">
        <img src={heroImage} alt="Tratamento facial profissional" className="w-full h-auto max-h-[654px] object-contain" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        
        
        
        
        
        
        <Button variant="cta" size="xl" className="mb-4 bg-white text-primary hover:bg-white/90" onClick={() => window.open('https://api.whatsapp.com/send/?phone=%2B5532999171361&text=Oi!+Vi+que+a+Corpo+SA+chegou+em+Campinas!+Quero+agendar+minha+avaliação+gratuita', '_blank')}>
          AGENDAR AVALIAÇÃO GRATUITA
        </Button>
        
        
      </div>
    </section>;
};
export default HeroSection;