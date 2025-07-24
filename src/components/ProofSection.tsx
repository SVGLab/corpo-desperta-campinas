import { Star } from "lucide-react";

const ProofSection = () => {
  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        {/* Stats */}
        <div className="text-center mb-12">
          <p className="text-base md:text-lg font-semibold text-muted-foreground mb-8">
            15.000+ mulheres transformadas | 16 anos de expertise | 4 unidades de sucesso
          </p>
        </div>
        
        {/* Testimonial */}
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          
          <blockquote className="text-xl md:text-2xl lg:text-3xl font-heading italic text-foreground mb-6 leading-relaxed">
            "Em 8 sessões, perdi 12cm. Mas o melhor foi voltar a me sentir mulher"
          </blockquote>
          
          <cite className="text-base md:text-lg font-medium text-muted-foreground">
            - Juliana M., 39 anos
          </cite>
        </div>
      </div>
    </section>
  );
};

export default ProofSection;