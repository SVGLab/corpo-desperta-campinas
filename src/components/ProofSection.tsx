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
                <blockquote className="text-base md:text-lg lg:text-xl font-body mb-6 leading-relaxed max-w-3xl" style={{
                color: '#8B4513'
              }}>"Há quase <strong>20 anos</strong>, minhas mãos <strong>transformam</strong> mulheres como você: cheias de beleza pra <strong>despertar</strong>! Meu método respeita o <strong>SEU momento</strong> e acelera os <strong>SEUS resultados</strong>. Você vai sair mais leve já na <strong>primeira sessão</strong>. Vim pessoalmente para Campinas porque chegou a <strong>SUA hora</strong> de <strong>despertar</strong>."</blockquote>
                
                <Button 
                  variant="default" 
                  size="lg" 
                  className="mb-6 px-8 py-4 text-lg"
                  onClick={() => window.open('https://wa.me/5532999052295?text=Oi!%20Vi%20que%20a%20Corpo%20SA%20chegou%20em%20Campinas!%20Quero%20saber%20de%20tudo!', '_blank')}
                >
                  QUERO FAZER PARTE
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