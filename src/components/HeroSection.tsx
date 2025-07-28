import { Button } from "@/components/ui/button";

const heroImage = "/lovable-uploads/1809f9d2-ee21-4b25-9dc5-7214f50e833e.png";

const HeroSection = () => {
  return (
    <section className="relative w-full">
      <div className="relative w-full max-w-[1080px] md:max-w-[1920px] mx-auto">
        {/* Mobile optimized image with better aspect ratio */}
        <div className="w-full h-[50vh] md:h-auto">
          <img 
            src={heroImage} 
            alt="Chegamos a Campinas pra despertar sua beleza" 
            className="w-full h-full md:h-auto object-cover object-center" 
          />
        </div>
        
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
          <Button 
            variant="cta" 
            size="lg"
            onClick={() => window.open('https://api.whatsapp.com/send/?phone=%2B5532999171361&text=Oi!+Vi+que+a+Corpo+SA+chegou+em+Campinas!+Quero+agendar+minha+avaliação+gratuita', '_blank')} 
            className="fixed top-1/2 md:bottom-6 left-1/2 transform -translate-x-1/2 md:-translate-y-0 -translate-y-1/2 z-50 elegant-shadow animate-pulse hover:animate-none text-sm md:text-base px-6 md:px-8 py-3 md:py-4"
          >
            Agende sua avaliação gratuita
          </Button>
        </div>
      </div>
    </section>
  );
};
export default HeroSection;