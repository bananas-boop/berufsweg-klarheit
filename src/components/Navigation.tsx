import { useEffect, useState } from "react";

const Navigation = () => {
  const [visible, setVisible] = useState(false);
  const [atTop, setAtTop] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const isAtTop = currentScrollY < 80;

      setAtTop(isAtTop);

      if (isAtTop) {
        setVisible(false);
      } else if (currentScrollY > lastScrollY) {
        // scrolling down
        setVisible(true);
      } else {
        // scrolling up
        setVisible(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-nav transition-all duration-500 ease-in-out border-b border-divider ${
      visible && !atTop ?
      "translate-y-0 opacity-100" :
      "-translate-y-full opacity-0"}`
      }>

      <div className="max-w-6xl mx-auto px-6 md:px-12 flex items-center justify-between h-16 text-primary bg-inherit">
        <button
          onClick={scrollToTop}
          className="text-foreground font-light text-lg tracking-tight hover:text-primary transition-colors">

          Sarah Abu-Koash
        </button>
        <div className="hidden md:flex items-center gap-10">
          {[
          { label: "Nächster Schritt", id: "naechster-schritt" },
          { label: "Arbeit", id: "arbeit" },
          { label: "Über mich", id: "ueber-mich" },
          { label: "Kontakt", id: "kontakt" }].
          map((item) =>
          <button
            key={item.id}
            onClick={() => scrollTo(item.id)}
            className="text-foreground text-sm font-light tracking-wide hover:text-primary transition-colors">

              {item.label}
            </button>
          )}
        </div>
      </div>
    </nav>);

};

export default Navigation;