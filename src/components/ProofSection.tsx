import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
const ProofSection = () => {
  return <section className="py-6 md:py-12" style={{
    backgroundColor: '#F4E6D8'
  }}>
      <div className="container mx-auto px-4 flex justify-center">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex flex-col items-center">
            {/* Content */}
            <div className="flex flex-col justify-center items-center">
              <div>
                <blockquote className="text-sm md:text-base lg:text-lg font-body mb-6 leading-relaxed max-w-3xl" style={{
                color: '#8B4513'
              }}>"Há quase 20 anos, minhas mãos transformam mulheres como você: cheias de beleza pra despertar! Meu método respeita o SEU momento e acelera os SEUS resultados. Você vai sair mais leve já na primeira sessão. Vim pessoalmente para Campinas porque chegou a SUA hora de despertar."</blockquote>
                
                <Button variant="default" size="lg" className="mb-6 px-8 py-4 text-lg">
                  QUERO SABER DE TUDO
                </Button>
                
                <div className="mt-4">
                  <div className="flex justify-center">
                    <img src="/lovable-uploads/eafc9b2d-3dba-450b-b96a-31ddf195c35d.png" alt="Assinatura Saliza Seródio" className="w-60 h-auto" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default ProofSection;