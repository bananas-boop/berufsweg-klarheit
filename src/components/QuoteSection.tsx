import { useEffect, useRef, useState } from "react";

const QuoteSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="quote" className="py-28 md:py-40 px-6 md:px-12 bg-background">
      <div
        ref={ref}
        className={`max-w-3xl mx-auto text-center transition-all duration-1000 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <div className="w-10 h-px bg-primary/40 mx-auto mb-10" />
        <blockquote className="text-foreground text-xl md:text-2xl lg:text-[1.7rem] font-light leading-relaxed">
          „Entwicklung beginnt nicht immer mit einer klaren Richtung.
          <br />
          Oft beginnt sie damit, die richtigen Fragen zu stellen und den eigenen Standpunkt zu klären."
        </blockquote>
      </div>
    </section>
  );
};

export default QuoteSection;
