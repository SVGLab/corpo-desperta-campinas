import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const MethodSection = () => {
  const methods = [
    {
      title: "DRENAGEM MÉTODO SALIZA SERÓDIO",
      description: "Resultado visível em 45 minutos"
    },
    {
      title: "TÉCNICAS 100% MANUAIS",
      description: "O toque que nenhuma máquina alcança"
    },
    {
      title: "PERSONALIZAÇÃO TOTAL",
      description: "Seu protocolo, suas necessidades"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Por que somos diferentes?
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {methods.map((method, index) => (
            <Card key={index} className="text-center elegant-shadow border-accent/20 hover:border-accent/40 smooth-transition">
              <CardHeader className="pb-4">
                <CardTitle className="font-heading text-xl md:text-2xl font-semibold text-foreground leading-tight">
                  {method.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  {method.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <Button 
            variant="ctaSecondary" 
            size="lg"
            onClick={() => window.open('https://api.whatsapp.com/send/?phone=%2B5532999171361&text=Olá!+Quero+conhecer+o+método+exclusivo+da+Corpo+SA', '_blank')}
          >
            QUERO CONHECER O MÉTODO
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MethodSection;