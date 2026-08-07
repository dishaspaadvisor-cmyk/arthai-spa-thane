"use client";

import { useEffect, useState } from "react";
import { Phone, MessageCircle } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function HeroSection({ slides, contact }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const slider = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(slider);
  }, [slides.length]);

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Images */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute object-top inset-0 bg-cover bg-center transition-opacity duration-1000 ${index === current ? "opacity-100" : "opacity-0"
            }`}
          style={{
            backgroundImage: `url(${slide.image})`,
            backgroundPosition: "top center",
            backgroundSize: "cover",
          }}
        />
      ))}

   

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center px-6">
        <div className="max-w-4xl text-center text-white">

    
          <h1 className="mt-6 text-4xl md:text-6xl lg:text-7xl font-serif leading-tight">
            {slides[current].title}
          </h1>

       

          <div className="mt-12 flex flex-col sm:flex-row justify-center gap-5">

            <a
              href={`tel:${contact.phone}`}
              className="flex items-center justify-center gap-2 bg-white text-black px-8 py-4 rounded-md font-semibold hover:bg-yellow-500 hover:text-white duration-300"
            >
              <Phone size={20} />
              Call Now
            </a>

            <a
              href={`https://wa.me/${contact.whatsapp}`}
              target="_blank"
              className="flex items-center justify-center gap-2 border border-white px-8 py-4 rounded-md hover:bg-green-500 hover:border-green-500 duration-300"
            >
              <FaWhatsapp size={20} />
              WhatsApp
            </a>

          </div>
        </div>
      </div>

      {/* Slider Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition-all ${current === index ? "bg-yellow-400 w-8" : "bg-white"
              }`}
          />
        ))}
      </div>
    </section>
  );
}