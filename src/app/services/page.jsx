import ServicesSection from "@/components/ServicesSection";
import { servicesData, contactData } from "@/data/data";

export const metadata = {
  title:
    "Luxury Spa Services in Park View Layout, bangalore | Body Massage & Thai Spa",

  description:
    "Discover luxury spa services in Park View Layout, bangalore including Thai Massage, Deep Tissue Massage, Swedish Massage, Couple Spa, Aroma Therapy, Body Massage, Sports Massage, and wellness treatments by professional therapists.",

  keywords: [
    "spa near me",
    "spa in Park View Layout",
    "massage spa bangalore",
    "massage spa Park View Layout",
    "best spa bangalore",
    "luxury spa bangalore",
    "luxury spa near me",
    "body massage bangalore",
    "body massage spa",
    "body spa near me",
    "massage center bangalore",
    "massage service bangalore",
    "Thai massage bangalore",
    "Thai spa bangalore",
    "Swedish massage",
    "Deep tissue massage",
    "Sports massage",
    "Aroma therapy",
    "Couple spa bangalore",
    "Couple massage bangalore",
    "Wellness spa bangalore",
    "Relaxation spa",
    "Massage near me",
    "Spa & massage services",
    "Best massage spa bangalore"
  ],

  openGraph: {
    title: "Luxury Spa & Massage Services in bangalore",
    description:
      "Book premium body massage, Thai massage, couple spa, Swedish massage, deep tissue massage, aroma therapy, and wellness spa services in Park View Layout, bangalore.",
    url: "https://yourdomain.com/services",
    type: "website",
  },

  alternates: {
    canonical: "https://yourdomain.com/services",
  },
};

export default function ServicePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#faf7f2] py-20">
        <div className="max-w-7xl mx-auto px-5 text-center">
          <div className="flex items-center justify-center gap-6 mb-6">
            <div className="h-[1px] w-20 bg-gray-400"></div>

            <h1 className="text-4xl md:text-5xl font-serif text-[#2C2C2C]">
              Luxury Spa & Massage Services in Park View Layout, bangalore
            </h1>

            <div className="h-[1px] w-20 bg-gray-400"></div>
          </div>

          <p className="max-w-4xl mx-auto text-lg leading-8 text-gray-600">
            Experience premium <strong>spa and massage services</strong> at our
            luxury spa in <strong>Park View Layout, bangalore</strong>. Choose
            from <strong>Swedish Massage</strong>,
            <strong> Thai Massage</strong>,
            <strong> Deep Tissue Massage</strong>,
            <strong> Couple Spa</strong>,
            <strong> Aroma Therapy</strong>,
            <strong> Body Massage</strong>, and
            <strong> Sports Massage</strong>. Whether you're searching for the
            <strong> best spa near me</strong>,
            <strong> massage spa in bangalore</strong>, or a
            <strong> luxury wellness spa</strong>, our experienced therapists
            provide personalized treatments to help you relax, rejuvenate, and
            restore your body and mind.
          </p>
        </div>
      </section>

      <ServicesSection
        services={servicesData}
        contact={contactData}
      />
    </>
  );
}