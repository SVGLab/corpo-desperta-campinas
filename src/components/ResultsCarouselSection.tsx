import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const ResultsCarouselSection = () => {
  const transformationImages = [
    "/lovable-uploads/6dd9413d-18ee-48df-99cf-16258d097bd8.png",
    "/lovable-uploads/fca3d2ad-587e-4b2d-8771-ebea60476660.png",
    "/lovable-uploads/1a400bfa-5256-4e58-ad35-ef49f39d7ebf.png",
    "/lovable-uploads/69d71e26-5625-42d6-b608-7c513c2831af.png",
    "/lovable-uploads/9202c671-4106-49ac-86ac-7dcd994fcf34.png",
    "/lovable-uploads/e89906f6-c3d8-43c3-84f1-05e161c728ca.png",
    "/lovable-uploads/a6e117dc-38b0-4188-9629-de9cbdcce9de.png",
    "/lovable-uploads/da028c2b-c359-45b8-a9a8-fd4617102f7c.png",
  ];

  return (
    <section className="py-8 md:py-12 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-primary mb-2">
            O corpo sente o toque.
          </h2>
          <h3 className="text-xl md:text-2xl lg:text-3xl font-heading font-medium text-primary">
            Os olhos veem o resultado.
          </h3>
        </div>

        <div className="max-w-4xl mx-auto overflow-hidden">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {transformationImages.map((image, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-4/5 md:basis-1/2 lg:basis-1/3">
                  <div className="aspect-square rounded-lg overflow-hidden elegant-shadow">
                    <img
                      src={image}
                      alt={`Transformação ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="default" 
            size="lg" 
            className="px-6 py-3 text-base"
            onClick={() => window.open('https://wa.me/5532999052295?text=Oi!%20Vi%20que%20a%20Corpo%20SA%20chegou%20em%20Campinas!%20Quero%20saber%20de%20tudo!', '_blank')}
          >
            QUERO ESTA TRANSFORMAÇÃO
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ResultsCarouselSection;