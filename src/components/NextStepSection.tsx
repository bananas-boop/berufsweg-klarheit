import { useEffect, useRef, useState } from "react";

const NextStepSection = () => {
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
    <section id="naechster-schritt" className="py-24 md:py-36 px-6 md:px-12 bg-section-alt">
      <div
        ref={ref}
        className={`max-w-2xl mx-auto transition-all duration-1000 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-light mb-12 text-foreground">
          Dein nächster beruflicher Schritt
        </h2>
        <div className="space-y-6 text-foreground/85 text-base md:text-[1.05rem] font-light leading-[1.85]">
          <p>
            Viele Menschen erreichen in ihrem Berufsleben einen Punkt, an dem sie Orientierung suchen.
          </p>
          <p>
            Manche, weil sie merken, dass es so nicht mehr weitergeht. Andere, weil sie spüren, dass mehr möglich wäre, als das, was sie gerade leben.
          </p>
          <p>
            Sie sind engagiert, kompetent und leistungsfähig und wollen ihre berufliche Entwicklung bewusst weiterführen. Gleichzeitig stellt sich die Frage, was jetzt wirklich der nächste sinnvolle Schritt ist.
          </p>
          <p>
            Vielleicht hast du klare Vorstellungen davon, wie es beruflich weitergehen soll, merkst aber, dass sie im Moment nicht tragen.
          </p>
          <p>
            Oder du weißt, dass du dich weiterentwickeln willst, ohne bereits sagen zu können, in welche Richtung oder mit welchem Fokus.
          </p>
          <p>
            In solchen Phasen geht es nicht darum, schneller zu werden oder sich neu zu motivieren.
          </p>
          <p>
            Es geht darum, innezuhalten, die eigene Situation einzuordnen und zu verstehen, was jetzt wirklich ansteht.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NextStepSection;
