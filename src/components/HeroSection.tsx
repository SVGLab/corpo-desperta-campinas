import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
const heroImage = "/lovable-uploads/e01b6ac9-3bb4-4e07-afb5-b224150f1b5b.png";
const HeroSection = () => {
  return <section className="relative w-full">
      {/* Background Image */}
      <div className="relative w-full max-w-[1920px] mx-auto">
        <img src={heroImage} alt="Tratamento facial profissional" className="w-full h-auto max-h-[654px] object-contain" />
        
        {/* Overlay Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
          <Badge variant="outline" className="mb-4 bg-white/10 text-white border-white/20">
            CHEGAMOS EM CAMPINAS!
          </Badge>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-4 font-serif">
            Chegamos a Campinas
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl">
            pra despertar sua beleza!
          </p>
          
          <Button variant="cta" size="xl" className="bg-white text-primary hover:bg-white/90" onClick={() => window.open('https://api.whatsapp.com/send/?phone=%2B5532999171361&text=Oi!+Vi+que+a+Corpo+SA+chegou+em+Campinas!+Quero+agendar+minha+avaliação+gratuita', '_blank')}>
            AGENDAR AVALIAÇÃO GRATUITA
          </Button>
        </div>
      </div>
    </section>;
};
export default HeroSection;