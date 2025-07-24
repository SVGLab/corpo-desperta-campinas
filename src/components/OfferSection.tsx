import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

const OfferSection = () => {
  const benefits = [
    "Avaliação GRATUITA",
    "20% DESCONTO no primeiro protocolo",
    "Kit Home Care de PRESENTE"
  ];

  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <Card className="max-w-4xl mx-auto elegant-shadow border-accent/30">
          <CardHeader className="text-center pb-8">
            <CardTitle className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              CONDIÇÃO ESPECIAL PARA AS<br />PRIMEIRAS 100 CLIENTES
            </CardTitle>
          </CardHeader>
          
          <CardContent className="text-center">
            <div className="space-y-6 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center justify-center gap-4">
                  <Check className="w-6 h-6 text-primary flex-shrink-0" />
                  <span className="text-lg md:text-xl font-semibold text-foreground">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
            
            <div className="mb-8">
              <p className="text-lg md:text-xl font-bold text-destructive mb-6">
                Restam apenas 47 vagas
              </p>
              
              <Button 
                variant="cta" 
                size="xl" 
                className="w-full md:w-auto"
                onClick={() => window.open('https://api.whatsapp.com/send/?phone=%2B5532999171361&text=Oi!+Quero+garantir+minha+vaga+com+20+porcento+de+desconto', '_blank')}
              >
                GARANTIR MINHA VAGA NO WHATSAPP
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default OfferSection;