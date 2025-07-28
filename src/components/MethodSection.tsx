import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
const MethodSection = () => {
  const methods = [
    {
      title: "Drenagem Linfática: Método Saliza Serodio",
      description: "Transformação que você vê e sente"
    }, 
    {
      title: "Técnicas manuais com resultados comprovados",
      description: "O toque que nenhuma máquina alcança"
    }, 
    {
      title: "Para cada beleza, um despertar sob medida",
      description: "Uma estética que cabe na sua vida"
    }
  ];

  return (
    <section className="py-6 md:py-12 bg-primary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-primary-foreground">
            Por que a Corpo S/A é única:
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {methods.map((method, index) => (
            <Card key={index} className="text-center elegant-shadow border-accent/20 hover:border-accent/40 smooth-transition">
              <CardHeader className="pb-3">
                <CardTitle className="font-heading text-lg md:text-xl font-semibold text-primary leading-tight">
                  {method.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-3">
                  {method.description}
                </p>
                {index === 0 && (
                  <div className="mt-4">
                    <img 
                      src="/lovable-uploads/2b72531c-2a6e-4a80-b3a9-b162bbcb0440.png" 
                      alt="Resultados na primeira sessão" 
                      className="w-full h-auto mx-auto rounded-lg"
                    />
                  </div>
                )}
                {index === 1 && (
                  <div className="mt-4">
                    <img 
                      src="/lovable-uploads/d8d1f12a-679a-4948-a2b8-11410ad57e52.png" 
                      alt="Técnicas 100% manuais" 
                      className="w-full h-auto mx-auto rounded-lg"
                    />
                  </div>
                )}
                {index === 2 && (
                  <div className="mt-4">
                    <img 
                      src="/lovable-uploads/d4988c77-b848-4bea-9ef9-e7604b8f9732.png" 
                      alt="Personalização total" 
                      className="w-full h-auto mx-auto rounded-lg"
                    />
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <Button 
            variant="outline" 
            size="lg" 
            onClick={() => window.open('https://api.whatsapp.com/send/?phone=%2B5532999171361&text=Oi!+Vi+que+a+Corpo+SA+chegou+em+Campinas!+Quero+agendar+minha+avalia%C3%A7%C3%A3o+gratuita', '_blank')}
            className="bg-primary-foreground text-primary border-primary-foreground hover:bg-primary-foreground/90"
          >
            QUERO CONHECER O MÉTODO
          </Button>
        </div>
      </div>
    </section>
  );
};
export default MethodSection;