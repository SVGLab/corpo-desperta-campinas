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
          {/* Botão flutuante removido */}
        </div>
      </div>
    </section>
  );
};
export default HeroSection;