import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
const ProofSection = () => {
  return <section className="py-16" style={{backgroundColor: '#F4E6D8'}}>
      <div className="container mx-auto px-1 flex justify-center">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-2 items-start">
            {/* Image */}
            <div className="order-1 lg:order-1 flex justify-end items-center">
              <img 
                src="/lovable-uploads/043646fc-68f2-4edc-bd8f-bbe295c048ed.png" 
                alt="Saliza Seródio aplicando método de drenagem" 
                className="w-1/3 h-auto shadow-lg"
              />
            </div>
            
            {/* Content */}
            <div className="order-2 lg:order-2 flex flex-col justify-between h-full">
              <div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-8" style={{color: '#98361F'}}>
                  Desperta, Mulher!
                </h2>
                
                <blockquote className="text-base md:text-lg lg:text-xl font-body mb-8 leading-relaxed" style={{color: '#8B4513'}}>"Há quase 20 anos, minhas mãos transformam mulheres como você: cheia de beleza pra despertar! Meu método respeita o SEU momento e acelera os SEUS resultados. Você vai sair mais leve já na primeira sessão. Vim pessoalmente para Campinas porque chegou a SUA hora de despertar."</blockquote>
              </div>
              
              <div className="mt-auto">
                <div className="mb-8">
                <img 
                  src="/lovable-uploads/eafc9b2d-3dba-450b-b96a-31ddf195c35d.png" 
                  alt="Assinatura Saliza Seródio" 
                  className="w-48 h-auto mb-2"
                />
                </div>
                
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={() => window.open('https://api.whatsapp.com/send/?phone=%2B5532999171361&text=Oi!+Quero+saber+mais+sobre+os+tratamentos', '_blank')}
                  className="w-full sm:w-auto px-8 py-3"
                  style={{backgroundColor: 'transparent', borderColor: '#8B4513', color: '#8B4513'}}
                >
                  QUERO SABER MAIS
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default ProofSection;