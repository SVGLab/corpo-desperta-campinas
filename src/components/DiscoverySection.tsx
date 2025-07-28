import { Button } from "@/components/ui/button";

const DiscoverySection = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
            <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden flex-shrink-0">
              <img 
                src="/lovable-uploads/f25472b5-3627-4d4a-8f53-dcbcdc4c1ff9.png" 
                alt="Avatar representando descoberta personalizada" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="flex-1 max-w-md">
              <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold mb-6 leading-tight" style={{color: '#98361F'}}>
                Descubra qual dos nossos procedimentos mais combina com o seu{" "}
                <span className="text-accent font-bold">despertar</span>
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