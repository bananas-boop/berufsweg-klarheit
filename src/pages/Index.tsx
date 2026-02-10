import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import QuoteSection from "@/components/QuoteSection";
import NextStepSection from "@/components/NextStepSection";
import WorkSection from "@/components/WorkSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <main>
      <Navigation />
      <Hero />
      <QuoteSection />
      <NextStepSection />
      <WorkSection />
      <AboutSection />
      <ContactSection />
    </main>
  );
};

export default Index;
