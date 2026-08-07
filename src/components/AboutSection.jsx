"use client";

import Image from "next/image";
import { Phone, MessageCircle } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function AboutSection({ about, contact }) {
  return (
    <section className="bg-[#7b8526] py-20 lg:py-28 overflow-hidden">
      <h2 className="text-4xl text-center md:text-5xl font-serif text-[#2C2C2C]">
        About Us
      </h2>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Content */}
          <div>
            <span className="uppercase tracking-[5px] text-yellow-200 text-sm font-medium">
              {about.title}
            </span>

            <h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-serif mt-5 leading-tight">
              {about.heading}
            </h2>

            <div className="w-24 h-1 bg-yellow-300 rounded-full mt-6 mb-8"></div>

            <p className="text-white/90 text-lg leading-8">
              {about.description}
            </p>

            <p className="text-white/80 text-lg leading-8 mt-6">
              {about.description2}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-5 mt-10">
              {about.stats.map((item, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-5 hover:bg-white/20 transition-all duration-300"
                >
                  <h3 className="text-3xl md:text-4xl font-bold text-yellow-300">
                    {item.number}
                  </h3>

                  <p className="text-white mt-2 text-sm md:text-base">
                    {item.title}
                  </p>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-10">
              <a
                href={`tel:${contact.phone}`}
                className="flex items-center justify-center gap-2 bg-white text-black px-7 py-4 rounded-lg font-semibold hover:bg-yellow-300 transition duration-300"
              >
                <Phone size={20} />
                Call Now
              </a>

              <a
                href={`https://wa.me/${contact.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-green-600 text-white px-7 py-4 rounded-lg font-semibold hover:bg-green-700 transition duration-300"
              >
                <FaWhatsapp size={20} />
                WhatsApp
              </a>
            </div>
          </div>

          {/* Right Images */}
          <div className="grid grid-cols-2 gap-6">

            {about.images.map((item, index) => (
              <div
                key={index}
                className="relative aspect-[3/4] overflow-hidden rounded-t-[180px] rounded-b-3xl shadow-2xl"
              >
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  priority={index === 0}
                  sizes="(max-width:768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 hover:scale-110"
                />
              </div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
}