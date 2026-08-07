"use client";

import { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  Phone,
  MessageCircle,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function FAQSection({ faq, contact }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  return (
    <section className="bg-[#7b8526] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Side */}
          <div>
            <span className="uppercase tracking-[5px] text-yellow-200 text-sm">
              Frequently Asked Questions
            </span>

            <h2 className="text-white text-4xl md:text-6xl font-serif mt-5 leading-tight">
              Everything You Need to Know About Our Spa
            </h2>

            <div className="w-28 h-[2px] bg-yellow-200 my-8"></div>

            <p className="text-white/90 text-lg leading-8">
              Discover answers to the most common questions about our luxury
              massage therapies, spa treatments, appointments, wellness
              packages, and more.
            </p>

            <p className="text-white/80 mt-8 text-lg">
              Open Daily <br />
              <span className="font-semibold">
                10:00 AM – 10:00 PM
              </span>
            </p>

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

          {/* Right Side */}
          <div className="space-y-5">
            {faq.map((item, index) => (
              <div
                key={item.id}
                className="border-b border-white/30 pb-5"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between text-left"
                >
                  <h3 className="text-white text-lg md:text-xl font-semibold pr-4">
                    {item.question}
                  </h3>

                  {activeIndex === index ? (
                    <ChevronUp className="text-white flex-shrink-0" size={22} />
                  ) : (
                    <ChevronDown
                      className="text-white flex-shrink-0"
                      size={22}
                    />
                  )}
                </button>

                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    activeIndex === index
                      ? "max-h-96 opacity-100 mt-5"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-white/90 leading-8">
                    {item.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}