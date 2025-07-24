import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import heroImage from "@/assets/hero-spa-treatment.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Tratamento facial profissional" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-gradient opacity-90"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <Badge variant="secondary" className="mb-6 text-sm font-medium px-4 py-2 bg-white/20 text-white border-white/30 backdrop-blur-sm">
          CHEGAMOS EM CAMPINAS!
        </Badge>
        
        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          O toque que desperta<br />sua beleza
        </h1>
        
        <p className="text-lg md:text-xl lg:text-2xl mb-8 max-w-3xl mx-auto font-light opacity-95 leading-relaxed">
          Após 16 anos transformando vidas, o método exclusivo de Saliza Seródio chega a Campinas.
        </p>
        
        <Button 
          variant="cta" 
          size="xl" 
          className="mb-4 bg-white text-primary hover:bg-white/90"
          onClick={() => window.open('https://api.whatsapp.com/send/?phone=%2B5532999171361&text=Oi!+Vi+que+a+Corpo+SA+chegou+em+Campinas!+Quero+agendar+minha+avaliação+gratuita', '_blank')}
        >
          AGENDAR AVALIAÇÃO GRATUITA
        </Button>
        
        <p className="text-sm md:text-base opacity-90 font-medium">
          *Primeiras 100 vagas com 20% de desconto
        </p>
      </div>
    </section>
  );
};

export default HeroSection;