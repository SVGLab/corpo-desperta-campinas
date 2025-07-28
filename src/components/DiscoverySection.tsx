import { Button } from "@/components/ui/button";

const DiscoverySection = () => {
  return (
    <section className="py-6 md:py-12 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto text-center">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8">
            <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden flex-shrink-0">
              <img 
                src="/lovable-uploads/f25472b5-3627-4d4a-8f53-dcbcdc4c1ff9.png" 
                alt="Avatar representando descoberta personalizada" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="flex-1 max-w-lg">
              <h2 className="font-heading text-xl md:text-2xl lg:text-3xl font-bold mb-4 leading-tight text-primary">
                Descubra qual dos nossos procedimentos mais combina com o seu despertar
              </h2>
              
              <Button 
                variant="cta" 
                size="lg"
                onClick={() => window.open('https://preview--corpo-quiz-magico.lovable.app/', '_blank')}
                className="mt-4"
              >
                DESCOBRIR MEU PROCEDIMENTO
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscoverySection;