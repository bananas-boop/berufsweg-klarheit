import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToContent = () => {
    const el = document.getElementById("quote");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section className="relative h-screen w-full overflow-hidden bg-background">
      <img
        src={heroBg}
        alt="Beratungsgespräch in hellem, modernem Raum"
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Soft bright overlay for a Nordic lifestyle feel */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, hsl(0 0% 100% / 0.7) 0%, hsl(0 0% 100% / 0.35) 55%, hsl(0 0% 100% / 0.1) 100%)",
        }}
      />
      <div className="relative z-10 flex flex-col justify-end h-full max-w-6xl mx-auto px-6 md:px-12 pb-24 md:pb-32">
        <div className="max-w-2xl">
          <h1 className="text-foreground text-3xl md:text-5xl lg:text-[3.5rem] font-light leading-tight mb-6 fade-in tracking-tight">
            Berufliche Entscheidungs- und Entwicklungsberatung
          </h1>
          <p className="text-foreground/75 text-base md:text-lg font-light leading-relaxed mb-10 max-w-xl fade-in-delay-1">
            Für Fach- und Führungskräfte, die beruflich weiterkommen wollen und Orientierung für ihren nächsten Schritt suchen.
          </p>
          <button
            onClick={scrollToContent}
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-3 rounded-full text-sm font-light tracking-wide hover:bg-primary/90 transition-all duration-300 fade-in-delay-2 shadow-sm"
          >
            Mehr erfahren
            <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
