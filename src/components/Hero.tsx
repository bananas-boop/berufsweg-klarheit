import heroBg from "@/assets/hero-bg.jpg";
const Hero = () => {
  const scrollToContent = () => {
    const el = document.getElementById("quote");
    if (el) {
      el.scrollIntoView({
        behavior: "smooth"
      });
    }
  };
  return <section className="relative h-screen w-full overflow-hidden">
      <img src={heroBg} alt="Beratungsgespräch in hellem, modernem Raum" className="absolute inset-0 w-full h-full object-cover" />
      {/* Very subtle warm overlay */}
      <div className="absolute inset-0" style={{
      background: "linear-gradient(to right, hsl(30 10% 22% / 0.35) 0%, hsl(30 10% 22% / 0.1) 60%, transparent 100%)"
    }} />
      <div className="relative z-10 flex flex-col justify-end h-full max-w-6xl mx-auto px-6 md:px-12 pb-24 md:pb-32">
        <div className="max-w-2xl">
          <h1 className="text-hero text-3xl md:text-5xl lg:text-[3.5rem] font-light leading-tight mb-6 fade-in">
            Berufliche Entscheidungs- und Entwicklungsberatung
          </h1>
          <p className="text-hero/80 text-base md:text-lg font-light leading-relaxed mb-10 max-w-xl fade-in-delay-1 text-primary-foreground">
            Für Fach- und Führungskräfte, die beruflich weiterkommen wollen und Orientierung für ihren nächsten Schritt suchen.
          </p>
          <button onClick={scrollToContent} className="text-hero border border-hero/40 px-8 py-3 text-sm font-light tracking-widest uppercase hover:bg-hero/10 transition-all duration-300 fade-in-delay-2">
            Mehr erfahren
          </button>
        </div>
      </div>
    </section>;
};
export default Hero;