import OfferCard from "@/components/OfferCard";
import { offersData, contactData } from "@/data/data";

export const metadata = {
  title: "Best Spa Offers in Park View Layout, bangalore | Luxury Massage Deals",
  description:
    "Explore exclusive spa offers, couple spa packages, body massage discounts, Thai massage deals, deep tissue massage offers, and luxury wellness packages in Park View Layout, bangalore.",
  keywords: [
    "spa offers bangalore",
    "massage offers bangalore",
    "couple spa offers",
    "body massage offers",
    "thai massage offers",
    "luxury spa bangalore",
    "spa near me",
    "best spa bangalore",
    "massage spa bangalore",
    "spa packages bangalore",
    "wellness spa offers",
    "deep tissue massage",
  ],
  alternates: {
    canonical: "https://yourdomain.com/offers",
  },
};

export default function OffersPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#faf7f2] py-20">
        <div className="max-w-7xl mx-auto px-5 text-center">
          <div className="flex items-center justify-center gap-6 mb-6">
            <div className="h-[1px] w-20 bg-gray-400"></div>

            <h1 className="text-4xl md:text-5xl font-serif text-[#2C2C2C]">
              Luxury Spa Offers in Park View Layout, bangalore
            </h1>

            <div className="h-[1px] w-20 bg-gray-400"></div>
          </div>

          <p className="max-w-4xl mx-auto text-gray-600 text-lg leading-8">
            Discover exclusive <strong>spa and massage offers</strong> at our
            luxury spa in <strong>Park View Layout, bangalore</strong>. Enjoy
            special discounts on <strong>body massage</strong>,
            <strong> Thai massage</strong>, <strong>couple spa packages</strong>,
            <strong> deep tissue massage</strong>, aromatherapy, and premium
            wellness treatments. Whether you're searching for the
            <strong> best spa near me</strong>,
            <strong> massage spa in bangalore</strong>, or
            <strong> luxury spa near me</strong>, our limited-time offers make
            every visit more relaxing and affordable.
          </p>
        </div>
      </section>

      <OfferCard
        offers={offersData}
        contact={contactData}
      />
    </>
  );
}