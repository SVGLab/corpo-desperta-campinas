import { Star } from "lucide-react";
const ProofSection = () => {
  return <section className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        {/* Stats */}
        <div className="text-center mb-12">
          <p className="text-base md:text-lg font-semibold text-muted-foreground mb-8">
            15.000+ mulheres transformadas | 16 anos de expertise | 4 unidades de sucesso
          </p>
        </div>
        
        {/* Testimonial */}
        <div className="max-w-4xl mx-auto text-center">
          <blockquote className="text-lg md:text-xl lg:text-2xl font-body text-foreground mb-6 leading-relaxed">
            "Há 16 anos descobri que nossas mãos têm o poder de despertar o que as máquinas não alcançam. Não prometemos milagres - entregamos resultados reais através do toque personalizado. Cada mulher é única, cada corpo conta uma história. Por isso desenvolvemos um método que transforma de verdade: você sai mais leve na primeira sessão e descobre que a mudança externa desperta algo muito maior dentro de você. Não vendemos procedimentos, despertamos a beleza que já existe. E agora é a vez de Campinas viver essa transformação."
          </blockquote>
          
          <div className="border-l-4 border-accent pl-6 max-w-md mx-auto px-[41px]">
            <cite className="text-base md:text-lg font-bold text-foreground block mb-1">
              Saliza Seródio
            </cite>
            <cite className="text-sm md:text-base font-medium text-muted-foreground">
              Fundadora e CEO da Corpo S/A
            </cite>
          </div>
        </div>
      </div>
    </section>;
};
export default ProofSection;