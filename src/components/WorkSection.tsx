import { useEffect, useRef, useState } from "react";

const WorkSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="arbeit" className="py-24 md:py-36 px-6 md:px-12 bg-background">
      <div
        ref={ref}
        className={`max-w-2xl mx-auto transition-all duration-1000 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-light mb-12 text-foreground">
          Über meine Arbeit
        </h2>
        <p className="text-foreground/85 text-base md:text-[1.05rem] font-light leading-[1.85]">
          Ich arbeite mit Fach- und Führungskräften an beruflichen Entscheidungs- und Entwicklungsthemen. Dabei verbinde ich Beratung, Coaching und strukturierende Methoden. Je nach Fragestellung arbeite ich analytisch, reflektierend oder klärend und betrachte die jeweilige Situation systemisch. Ziel ist eine Entwicklung, die tragfähig ist und sich langfristig leben lässt.
        </p>
      </div>
    </section>
  );
};

export default WorkSection;
