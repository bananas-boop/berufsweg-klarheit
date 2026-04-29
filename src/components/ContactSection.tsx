import { useEffect, useRef, useState } from "react";

const ContactSection = () => {
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
    <section id="kontakt" className="py-20 md:py-28 px-6 md:px-12 bg-background">
      <div
        ref={ref}
        className={`max-w-3xl mx-auto card-surface p-8 md:p-14 transition-all duration-1000 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-light mb-10 text-foreground tracking-tight">
          Kontakt
        </h2>
        <div className="space-y-4 text-foreground/85 text-base md:text-[1.05rem] font-light leading-[1.85]">
          <p className="text-foreground font-normal">Sarah Abu-Koash</p>
          <div className="w-12 h-px bg-primary/40 my-6" />
          <p>
            T:{" "}
            <a href="tel:1234567890" className="hover:text-primary transition-colors">
              1234567890
            </a>
          </p>
          <p>
            E:{" "}
            <a href="mailto:bimbimbamvam@gmail.com" className="hover:text-primary transition-colors">
              bimbimbamvam@gmail.com
            </a>
          </p>
          <p>M: Adresse folgt</p>
        </div>
      </div>

      {/* Footer */}
      <div className="max-w-3xl mx-auto mt-16 pt-8 border-t border-divider">
        <p className="text-muted-foreground text-sm font-light text-center">
          © {new Date().getFullYear()} Sarah Abu-Koash
        </p>
      </div>
    </section>
  );
};

export default ContactSection;
