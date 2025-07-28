import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
const heroImage = "/lovable-uploads/8035b452-22a3-4b52-8c59-57f2eaabb376.png";
const HeroSection = () => {
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img src={heroImage} alt="Tratamento facial profissional" className="w-full h-full object-cover" />
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