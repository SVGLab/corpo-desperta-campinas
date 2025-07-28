import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
const MethodSection = () => {
  const methods = [{
    title: "Drenagem Linfática: Método Saliza Serodio",
    description: "Resultado visível em 45 minutos"
  }, {
    title: "Técnicas manuais com resultados comprovados",
    description: "O toque que nenhuma máquina alcança"
  }, {
    title: "Para cada beleza, um despertar único",
    description: "sob medida"
  }];
  return <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">Para cada beleza, um despertar único</h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {methods.map((method, index) => <Card key={index} className="text-center elegant-shadow border-accent/20 hover:border-accent/40 smooth-transition">
              <CardHeader className="pb-4">
                <CardTitle className="font-heading text-xl md:text-2xl font-semibold text-foreground leading-tight">
                  {method.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4">
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
            </Card>)}
        </div>
        
        <div className="text-center">
          <Button variant="ctaSecondary" size="lg" onClick={() => window.open('https://api.whatsapp.com/send/?phone=%2B5532999171361&text=Olá!+Quero+conhecer+o+método+exclusivo+da+Corpo+SA', '_blank')}>
            QUERO CONHECER O MÉTODO
          </Button>
        </div>
      </div>
    </section>;
};
export default MethodSection;