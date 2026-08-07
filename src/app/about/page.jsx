import AboutSection from "@/components/AboutSection";
import { aboutData, contactData } from "@/data/data";

export default function AboutPage() {
  return (
    <AboutSection
      about={aboutData}
      contact={contactData}
    />
  );
}