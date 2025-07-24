import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const FinalCtaSection = () => {
  const features = [
    "Atendimento imediato no WhatsApp",
    "Tire suas dúvidas",
    "Agende sua avaliação gratuita"
  ];

  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
          Pronta para despertar<br />sua beleza?
        </h2>
        
        <Button 
          variant="cta" 
          size="xl" 
          className="mb-8 bg-white text-primary hover:bg-white/90"
          onClick={() => window.open('https://api.whatsapp.com/send/?phone=%2B5532999171361&text=Olá!+Gostaria+de+tirar+dúvidas+sobre+os+tratamentos', '_blank')}
        >
          FALAR COM ESPECIALISTA AGORA
        </Button>
        
        <div className="max-w-md mx-auto space-y-4">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-3">
              <Check className="w-5 h-5 text-white flex-shrink-0" />
              <span className="text-base md:text-lg">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FinalCtaSection;