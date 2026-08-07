import ContactCard from "@/components/ContactCard";
import { contactData } from "@/data/data";

export const metadata = {
  // Your existing metadata...
};

export default function ContactPage() {
  return (
    <>
      {/* SEO Hero Section */}
      <section className="bg-[#faf7f2] py-20">
        <div className="max-w-7xl mx-auto px-5 text-center">

          <div className="flex items-center justify-center gap-6 mb-6">
            <div className="h-[1px] w-20 bg-gray-400"></div>

            <h1 className="text-4xl md:text-5xl font-serif text-[#2C2C2C]">
              Contact the Best Luxury Spa in Park View Layout, bangalore
            </h1>

            <div className="h-[1px] w-20 bg-gray-400"></div>
          </div>

          <p className="max-w-5xl mx-auto text-lg text-gray-600 leading-8">
            Looking for the <strong>best spa near me</strong> or a trusted
            <strong> massage spa in bangalore</strong>? Visit our luxury spa at
            <strong> 273, Second Floor, Bellary Rd, Park View Layout,
            Park View Layout, bangalore, Karnataka 560092</strong>.
            Book premium <strong>Body Massage</strong>,
            <strong> Thai Massage</strong>,
            <strong> Deep Tissue Massage</strong>,
            <strong> Swedish Massage</strong>,
            <strong> Couple Spa</strong>,
            <strong> Aroma Therapy</strong>, and relaxing
            <strong> wellness spa treatments</strong>. Whether you're searching
            for a <strong>luxury spa near me</strong>,
            <strong> body massage center</strong>,
            <strong> massage therapy near me</strong>, or
            <strong> spa & massage services</strong>, our experienced therapists
            provide personalized treatments designed to relax your body, reduce
            stress, and restore your well-being. Call or WhatsApp us today to
            book your appointment.
          </p>

          {/* SEO Keyword Highlights */}
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {[
              "Spa Near Me",
              "Best Spa bangalore",
              "Luxury Spa",
              "Massage Spa bangalore",
              "Body Massage",
              "Thai Massage",
              "Deep Tissue Massage",
              "Swedish Massage",
              "Couple Spa",
              "Aroma Therapy",
              "Sports Massage",
              "Wellness Spa",
              "Massage Center",
              "Luxury Spa Near Me",
              "Park View Layout",
              "Bellary Road",
            ].map((item) => (
              <span
                key={item}
                className="rounded-full border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <ContactCard data={contactData} />
    </>
  );
}