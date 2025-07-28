const TestimonialsVideoSection = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
            Milhares de mulheres transformadas
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            São quase 20 anos despertando todo tipo de beleza. Nossa estética traz resultados rápidos para o corpo e duradouros para a vida.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
          {/* Primeiro vídeo */}
          <div className="relative">
            <div className="aspect-video rounded-lg overflow-hidden elegant-shadow">
              <iframe
                src="https://www.youtube.com/embed/WNda-2xBpZw"
                title="Depoimento de Cliente 1"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
          
          {/* Segundo vídeo */}
          <div className="relative">
            <div className="aspect-video rounded-lg overflow-hidden elegant-shadow">
              <iframe
                src="https://www.youtube.com/embed/DaCHYm1unwY"
                title="Depoimento de Cliente 2"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsVideoSection;