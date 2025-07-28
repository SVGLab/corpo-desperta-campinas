import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
const ProofSection = () => {
  return <section className="py-16" style={{backgroundColor: '#F4E6D8'}}>
      <div className="container mx-auto px-4 flex justify-center">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex flex-col items-center">
            {/* Content */}
            <div className="flex flex-col justify-center items-center">
              <div>
                <Button 
                  variant="default"
                  size="lg"
                  className="mb-6"
                >
                  Desperta, Mulher!
                </Button>
                
                <blockquote className="text-sm md:text-base lg:text-lg font-body mb-6 leading-relaxed max-w-3xl" style={{color: '#8B4513'}}>"Há quase 20 anos, minhas mãos transformam mulheres como você: cheia de beleza pra despertar! Meu método respeita o SEU momento e acelera os SEUS resultados. Você vai sair mais leve já na primeira sessão. Vim pessoalmente para Campinas porque chegou a SUA hora de despertar."</blockquote>
              </div>
              
              <div className="mt-6">
                <div className="mb-6 flex justify-center">
                <img 
                  src="/lovable-uploads/eafc9b2d-3dba-450b-b96a-31ddf195c35d.png" 
                  alt="Assinatura Saliza Seródio" 
                  className="w-40 h-auto mb-2"
                />
                </div>
                
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={() => window.open('https://api.whatsapp.com/send/?phone=%2B5532999171361&text=Oi!+Quero+saber+mais+sobre+os+tratamentos', '_blank')}
                  className="px-6 py-2"
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