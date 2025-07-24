const salizaImage = "/lovable-uploads/0722d406-a9c0-42cc-9706-36d5673b317e.png";

const SalizaSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="order-2 lg:order-1">
              <div className="relative">
                <img 
                  src={salizaImage} 
                  alt="Saliza Seródio aplicando tratamento" 
                  className="w-full h-[500px] md:h-[600px] object-cover rounded-lg elegant-shadow"
                />
              </div>
            </div>
            
            {/* Content */}
            <div className="order-1 lg:order-2 text-center lg:text-left">
              <blockquote className="mb-8">
                <p className="font-heading text-2xl md:text-3xl lg:text-4xl italic text-foreground mb-8 leading-relaxed">
                  "Há 17 anos descobri que nossas mãos podem despertar a beleza adormecida. Agora, Campinas receberá essa expertise."
                </p>
              </blockquote>
              
              <div className="border-l-4 border-accent pl-6">
                <p className="text-lg md:text-xl font-semibold text-foreground mb-2">
                  Saliza Seródio
                </p>
                <p className="text-base md:text-lg text-muted-foreground">
                  Fundadora da Corpo S/A
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SalizaSection;