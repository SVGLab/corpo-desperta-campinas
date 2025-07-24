import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin } from "lucide-react";

const LocationSection = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <Card className="max-w-4xl mx-auto elegant-shadow border-accent/30">
          <CardHeader className="text-center">
            <CardTitle className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Nos encontre em Campinas
            </CardTitle>
          </CardHeader>
          
          <CardContent className="text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <MapPin className="w-6 h-6 text-primary" />
              <h3 className="text-xl md:text-2xl font-bold text-foreground">
                Av. Orosimbo Maia, 430 | Vila Itapura
              </h3>
            </div>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Localização premium no coração de Campinas
            </p>
            
            <Button 
              variant="ctaSecondary" 
              size="lg"
              onClick={() => window.open('https://maps.google.com/?q=Av.+Orosimbo+Maia+430+Vila+Itapura+Campinas', '_blank')}
            >
              VER NO GOOGLE MAPS
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default LocationSection;