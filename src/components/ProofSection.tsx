import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
const ProofSection = () => {
  return <section className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-8">
            Desperta, mulher!
          </h2>
        </div>
        
        {/* Testimonial with Image */}
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="order-2 lg:order-1">
              <div className="relative">
                <img 
                  src="/lovable-uploads/043646fc-68f2-4edc-bd8f-bbe295c048ed.png" 
                  alt="Saliza Seródio aplicando método de drenagem" 
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
            
            {/* Content */}
            <div className="order-1 lg:order-2">
              <blockquote className="text-base md:text-lg lg:text-xl font-body text-foreground mb-6 leading-relaxed">"Há quase 20 anos, minhas mãos transformam mulheres como você: cheia de beleza pra despertar! Meu método respeita o SEU momento e acelera os SEUS resultados. Você vai sair mais leve já na primeira sessão. Vim pessoalmente para Campinas porque chegou a SUA hora de despertar."</blockquote>
              
              <div className="border-l-4 border-accent pl-6">
                <cite className="text-sm md:text-base font-bold text-foreground block mb-1">
                  Saliza Seródio
                </cite>
                <cite className="text-xs md:text-sm font-medium text-muted-foreground">
                  Fundadora e CEO da Corpo S/A
                </cite>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => window.open('https://api.whatsapp.com/send/?phone=%2B5532999171361&text=Oi!+Quero+saber+mais+sobre+os+tratamentos', '_blank')}
            >
              Quero saber mais
            </Button>
          </div>
        </div>
      </div>
    </section>;
};
export default ProofSection;