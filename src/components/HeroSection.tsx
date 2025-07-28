import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
const heroImage = "/lovable-uploads/e01b6ac9-3bb4-4e07-afb5-b224150f1b5b.png";
const HeroSection = () => {
  return <section className="relative w-full">
      {/* Background Image */}
      <div className="relative w-full max-w-[1920px] mx-auto">
        <img src={heroImage} alt="Tratamento facial profissional" className="w-full h-auto max-h-[654px] object-contain" />
        
        {/* Overlay Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 sm:px-6 lg:px-8">
          {/* Badge */}
          <Badge variant="outline" className="bg-white/20 text-white border-white/30 text-xs sm:text-sm mb-4 sm:mb-6">
            CHEGAMOS EM CAMPINAS!
          </Badge>
          
          {/* Main Title */}
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 sm:mb-4">
            Chegamos a Campinas
          </h1>
          
          {/* Subtitle */}
          <p className="font-body text-lg sm:text-xl md:text-2xl lg:text-3xl mb-6 sm:mb-8 lg:mb-10">
            pra despertar sua beleza!
          </p>
          
          {/* CTA Button */}
          <Button variant="cta" size="xl" onClick={() => window.open('https://api.whatsapp.com/send/?phone=%2B5532999171361&text=Oi!+Vi+que+a+Corpo+SA+chegou+em+Campinas!+Quero+agendar+minha+avaliação+gratuita', '_blank')} className="bg-white text-primary hover:bg-white/90 text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4">
            AGENDAR AVALIAÇÃO GRATUITA
          </Button>
        </div>
      </div>
    </section>;
};
export default HeroSection;