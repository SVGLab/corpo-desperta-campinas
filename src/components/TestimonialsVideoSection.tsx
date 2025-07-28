import { Button } from "@/components/ui/button";
const TestimonialsVideoSection = () => {
  return <section className="py-6 md:py-12 bg-muted">{/* Changed from bg-background to bg-muted */}
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold mb-4 text-primary">Quem desperta, comprova!</h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">São quase 20 anos transformando milhares de mulheres, com uma estética que traz resultados rápidos para o corpo e duradouros para a vida.</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* Primeiro vídeo */}
          <div className="relative">
            <div className="aspect-video rounded-lg overflow-hidden elegant-shadow">
              <iframe src="https://www.youtube.com/embed/Jz0S9HE-BOg" title="Depoimento de Cliente 1" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen className="w-full h-full"></iframe>
            </div>
          </div>
          
          {/* Segundo vídeo */}
          <div className="relative">
            <div className="aspect-video rounded-lg overflow-hidden elegant-shadow">
              <iframe src="https://www.youtube.com/embed/9AR8quRKICs" title="Depoimento de Cliente 2" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen className="w-full h-full"></iframe>
            </div>
          </div>
          
          {/* Terceiro vídeo */}
          <div className="relative">
            <div className="aspect-video rounded-lg overflow-hidden elegant-shadow">
              <iframe src="https://www.youtube.com/embed/lEtYKTyKGN4" title="Depoimento de Cliente 3" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen className="w-full h-full"></iframe>
            </div>
          </div>
          
          {/* Quarto vídeo */}
          <div className="relative">
            <div className="aspect-video rounded-lg overflow-hidden elegant-shadow">
              <iframe src="https://www.youtube.com/embed/hGzNkHpowLM" title="Depoimento de Cliente 4" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen className="w-full h-full"></iframe>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-8">
          <Button 
            variant="default" 
            size="lg" 
            className="px-8 py-4 text-lg"
            onClick={() => window.open('https://api.whatsapp.com/send/?phone=%2B5532999171361&text=Oi!+Vi+que+a+Corpo+SA+chegou+em+Campinas!+Quero+agendar+minha+avalia%C3%A7%C3%A3o+gratuita', '_blank')}
          >
            TOQUE PARA DESPERTAR
          </Button>
        </div>
      </div>
    </section>;
};
export default TestimonialsVideoSection;