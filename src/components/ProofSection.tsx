import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
const ProofSection = () => {
  return <section className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-8">
            O toque que desperta
          </h2>
        </div>
        
        {/* Testimonial with Image */}
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="order-2 lg:order-1">
              <div className="relative">
                <img src="/lovable-uploads/0722d406-a9c0-42cc-9706-36d5673b317e.png" alt="Saliza Seródio aplicando tratamento" className="w-full h-[300px] md:h-[400px] object-cover rounded-lg elegant-shadow" />
              </div>
            </div>
            
            {/* Content */}
            <div className="order-1 lg:order-2">
              <blockquote className="text-base md:text-lg lg:text-xl font-body text-foreground mb-6 leading-relaxed">"Há 20 anos descobri que nossas mãos têm o poder de despertar o que as máquinas não alcançam. Cada mulher é única, cada corpo conta uma história. Por isso desenvolvemos um método que transforma de verdade: você sai mais leve na primeira sessão e descobre que a mudança externa desperta algo muito maior dentro de você. E agora é a vez de Campinas viver essa transformação."</blockquote>
              
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