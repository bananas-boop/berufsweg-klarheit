import { useEffect, useRef, useState } from "react";

const AboutSection = () => {
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
    <section id="ueber-mich" className="py-20 md:py-28 px-6 md:px-12 bg-background">
      <div
        ref={ref}
        className={`max-w-3xl mx-auto card-surface p-8 md:p-14 transition-all duration-1000 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-light mb-10 text-foreground tracking-tight">
          Über mich
        </h2>
        <div className="space-y-6 text-foreground/85 text-base md:text-[1.05rem] font-light leading-[1.85]">
          <p>
            Ich bin Architektin mit acht Jahren Berufspraxis und habe mich anschließend beruflich neu ausgerichtet. In diesem Zusammenhang habe ich Ausbildungen als geprüfte Kommunikations- und Rhetoriktrainerin sowie als NLP Master (DVNLP) absolviert, meine freiberufliche Tätigkeit aufgebaut und mich in der Personal- und Organisationsentwicklung weiterqualifiziert.
          </p>
          <p>
            Heute arbeite ich als Personalentwicklerin am Universitätsklinikum Tübingen und bin dort sowohl in der Personalentwicklung als auch in der Mitarbeitenden- und Führungskräfteberatung tätig. Ergänzend arbeite ich freiberuflich als Trainerin für Hochschulen und weitere Bildungseinrichtungen.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
