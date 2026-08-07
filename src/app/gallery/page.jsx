import GallerySection from "@/components/GallerySection";
import { galleryData } from "@/data/data";

export const metadata = {
  title:
    "Luxury Spa Gallery in Park View Layout, bangalore | Massage Spa Photos",

  description:
    "Explore our luxury spa gallery in Park View Layout, bangalore. View elegant spa rooms, couple spa suites, Thai massage rooms, body massage facilities, wellness treatments, and premium spa interiors.",

  keywords: [
    "spa gallery bangalore",
    "massage spa gallery",
    "luxury spa bangalore",
    "spa near me",
    "massage spa bangalore",
    "best spa bangalore",
    "body massage bangalore",
    "Thai massage bangalore",
    "couple spa bangalore",
    "wellness spa bangalore",
    "spa photos",
    "massage center bangalore",
    "luxury spa near me",
    "Park View Layout spa",
    "Bellary Road spa"
  ],

  openGraph: {
    title: "Luxury Spa Gallery | Park View Layout, bangalore",
    description:
      "Browse our premium spa gallery showcasing luxury massage rooms, wellness therapies, couple spa suites, and relaxing interiors in bangalore.",
    url: "https://yourdomain.com/gallery",
    type: "website",
  },

  alternates: {
    canonical: "https://yourdomain.com/gallery",
  },
};

export default function GalleryPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#faf7f2] py-20">
        <div className="max-w-7xl mx-auto px-5 text-center">
          <div className="flex items-center justify-center gap-6 mb-6">
            <div className="h-[1px] w-20 bg-gray-400"></div>

            <h1 className="text-4xl md:text-5xl font-serif text-[#2C2C2C]">
              Luxury Spa & Massage Gallery in Park View Layout, bangalore
            </h1>

            <div className="h-[1px] w-20 bg-gray-400"></div>
          </div>

          <p className="max-w-4xl mx-auto text-lg leading-8 text-gray-600">
            Explore our luxury <strong>spa and massage gallery</strong> featuring
            elegant treatment rooms, <strong>Thai massage</strong>,
            <strong> deep tissue massage</strong>,
            <strong> body massage</strong>, <strong>couple spa suites</strong>,
            aromatherapy rooms, and premium wellness experiences. Located in
            <strong> Park View Layout, bangalore</strong>, our spa offers a calm
            and luxurious environment for guests searching for the
            <strong> best spa near me</strong>,
            <strong> massage spa in bangalore</strong>,
            <strong> luxury spa near me</strong>, and
            <strong> wellness spa treatments</strong>.
          </p>
        </div>
      </section>

      <GallerySection gallery={galleryData} />
    </>
  );
}