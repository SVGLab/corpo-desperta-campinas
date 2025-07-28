const Footer = () => {
  return (
    <footer className="py-8 bg-foreground text-background">
      <div className="container mx-auto px-4 text-center">
        <div className="space-y-3">
          <p className="text-base md:text-lg font-heading font-semibold">
            Corpo S/A Campinas | O toque que desperta sua beleza
          </p>
          
          <p className="text-sm md:text-base font-body">
            Av. Orosimbo Maia, 430 | Vila Itapura | Campinas-SP
          </p>
          
          <p className="text-sm md:text-base font-body font-medium">
            @corposacampinas
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;