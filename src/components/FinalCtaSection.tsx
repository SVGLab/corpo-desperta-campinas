import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const FinalCtaSection = () => {
  const features = [
    "Atendimento imediato no WhatsApp",
    "Tire suas dúvidas",
    "Agende sua avaliação gratuita"
  ];

  return (
    <section className="py-12 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
          Pronta para despertar<br />sua beleza?
        </h2>
        
        <Button 
          variant="outline" 
          size="lg" 
          className="mb-6 bg-primary-foreground text-primary border-primary-foreground hover:bg-primary-foreground/90"
          onClick={() => window.open('https://api.whatsapp.com/send/?phone=%2B5532999171361&text=Olá!+Gostaria+de+tirar+dúvidas+sobre+os+tratamentos', '_blank')}
        >
          FALAR COM ESPECIALISTA AGORA
        </Button>
        
        <div className="max-w-sm mx-auto space-y-3">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-3 justify-center">
              <Check className="w-4 h-4 text-primary-foreground flex-shrink-0" />
              <span className="text-sm md:text-base">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FinalCtaSection;