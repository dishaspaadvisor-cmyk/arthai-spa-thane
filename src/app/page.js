import HeroSection from "@/components/HeroSection";
import { heroSlides, contactData } from "@/data/data";
import FAQSection from "@/components/FAQSection";
import { faqData } from "@/data/data";
import ServicesSection from "@/components/ServicesSection";
import OfferCard from "@/components/OfferCard";
import { servicesData} from "@/data/data";
import { offersData } from "@/data/data";
import AboutPage from "./about/page";
import GallerySection from "@/components/GallerySection";
import { galleryData } from "@/data/data";
import ContactCard from "@/components/ContactCard";
import GoogleReviews from "@/components/GoogleReviews";
import { reviews } from "@/data/data";
export default function Home() {
  return (
    <>

      <HeroSection
        slides={heroSlides}
        contact={contactData}
      />
      <ServicesSection
        services={servicesData}
        contact={contactData}
      />
      <AboutPage />
      <OfferCard
        offers={offersData}
        contact={contactData}
      />
      <GallerySection gallery={galleryData} />
      <ContactCard data={contactData} />
      <GoogleReviews
        title="Google Reviews | Best Luxury Spa in Park View Layout, bangalore"
        rating="4.9"
        totalReviews="850+"
        reviewLink="https://g.page/your-google-business-link"
        reviews={reviews}
      />

      <FAQSection
        faq={faqData}
        contact={contactData}
      />

    </>
  );
}