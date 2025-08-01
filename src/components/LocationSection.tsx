import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin } from "lucide-react";

const LocationSection = () => {
  return (
    <section className="py-6 md:py-12 bg-muted">
      <div className="container mx-auto px-4">
        <Card className="max-w-4xl mx-auto elegant-shadow border-accent/30">
          <CardHeader className="text-center">
            <CardTitle className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Nos encontre em Campinas
            </CardTitle>
          </CardHeader>
          
          <div className="px-6 mb-6">
            <img 
              src="/lovable-uploads/0f582084-dd56-4bb5-85c9-390f1c486fec.png" 
              alt="Vista de Campinas" 
              className="w-full h-48 md:h-64 object-cover rounded-lg elegant-shadow"
            />
          </div>
          
          <CardContent className="text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <MapPin className="w-5 h-5 text-primary" />
              <h3 className="text-lg md:text-xl font-bold text-foreground">
                Av. Orosimbo Maia, 430 | Vila Itapura
              </h3>
            </div>
            
            
            <Button
              variant="outline" 
              size="lg"
              onClick={() => window.open('https://maps.google.com/?q=Av.+Orosimbo+Maia+430+Vila+Itapura+Campinas', '_blank')}
              className="font-heading"
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