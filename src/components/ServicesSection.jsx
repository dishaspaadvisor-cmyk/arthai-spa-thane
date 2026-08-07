"use client";

import Image from "next/image";
import { Phone, MessageCircle } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function ServicesSection({ services, contact }) {
  return (
    <section className="bg-[#F8F5EA] py-20">
      <div className="max-w-7xl mx-auto px-5">

        {/* Heading */}

        <div className="flex items-center justify-center gap-6 mb-14">

          <div className="h-[1px] w-20 bg-gray-400"></div>

          <h2 className="text-4xl md:text-5xl font-serif text-[#2C2C2C]">
            Our Services
          </h2>

          <div className="h-[1px] w-20 bg-gray-400"></div>

        </div>

        {/* Cards */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

          {services.map((item) => (
            <div
              key={item.id}
              className="group text-center"
            >
              {/* Image */}

              <div className="relative h-[470px] overflow-hidden rounded-t-[180px] rounded-b-md border border-gray-300">

                <Image
                  src={item.image}
                  alt={item.alt}
                  title={item.seo}
                  fill
                  priority={item.id <= 3}
                  sizes="(max-width:768px)100vw,(max-width:1024px)50vw,33vw"
                  className="object-cover transition-transform duration-700 object-top group-hover:scale-110"
                />

              </div>

              {/* Content */}

              <div className="mt-7">

                <h3 className="text-3xl font-serif text-[#2B2B2B]">
                  {item.title}
                </h3>

           

                <p className="text-gray-600 mt-2">
                  {item.duration}
                </p>

                <p className="text-gray-600">
                  {item.therapist}
                </p>

                {/* Buttons */}

                <div className="grid grid-cols-2 gap-3 mt-8">

                  <a
                    href={`tel:${contact.phone}`}
                    className="border border-[#8B5A2B] py-3 text-black rounded-md flex items-center justify-center gap-2 hover:bg-[#8B5A2B] hover:text-white duration-300"
                  >
                    <Phone size={18} />
                    Call
                  </a>

                  <a
                    href={`https://wa.me/${contact.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-600 text-white py-3 rounded-md flex items-center justify-center gap-2 hover:bg-green-700 duration-300"
                  >
                    <FaWhatsapp size={18} />
                    WhatsApp
                  </a>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}