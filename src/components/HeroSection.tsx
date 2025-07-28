import { Button } from "@/components/ui/button";

const heroImage = "/lovable-uploads/e6266964-6342-4176-84b6-a8283996ca86.png";

const HeroSection = () => {
  return (
    <section className="relative w-full">
      <div className="relative w-full max-w-[1920px] mx-auto">
        <img 
          src={heroImage} 
          alt="Tratamento facial profissional" 
          className="w-full h-auto max-h-[654px] object-contain" 
        />
        
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
          <Button 
            variant="cta" 
            size="lg"
            onClick={() => window.open('https://api.whatsapp.com/send/?phone=%2B5532999171361&text=Oi!+Vi+que+a+Corpo+SA+chegou+em+Campinas!+Quero+agendar+minha+avaliação+gratuita', '_blank')} 
            className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 elegant-shadow animate-pulse hover:animate-none"
          >
            QUERO DESPERTAR!
          </Button>
        </div>
      </div>
    </section>
  );
};
export default HeroSection;