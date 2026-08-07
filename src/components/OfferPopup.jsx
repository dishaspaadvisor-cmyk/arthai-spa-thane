"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, X } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function OfferPopup({ contact }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Show popup after 15 seconds
    const timer = setTimeout(() => {
      setShow(true);
    }, 15000);

    return () => clearTimeout(timer);
  }, []);

  const closePopup = () => {
    setShow(false);

    // Show again after 15 seconds
    setTimeout(() => {
      setShow(true);
    }, 15000);
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 p-4">
      <div className="relative w-full max-w-[360px] overflow-hidden rounded-[28px] bg-white shadow-2xl animate-[popup_.4s_ease] sm:max-w-md">

        {/* Close Button */}
        <button
          onClick={closePopup}
          className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-lg transition hover:rotate-90"
        >
          <X size={20} className="text-red-500" />
        </button>

        {/* Offer Badge */}
        <div className="absolute left-4 top-4 z-20 rounded-full bg-red-600 px-4 py-2 text-xs font-bold text-white shadow-lg sm:text-sm">
          25% OFF
        </div>

        {/* Image */}
        <div className="relative h-52 sm:h-72">
          <Image
            src="/hero/offers-bg.avif"
            alt="Luxury Spa Offer"
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* Content */}
        <div className="p-5 sm:p-7">
          <p className="mb-2 text-[11px] font-bold uppercase tracking-[4px] text-[#B8860B] sm:text-xs sm:tracking-[6px]">
            Limited Time Offer
          </p>

          <h2 className="font-serif text-3xl leading-tight text-[#6b432d] sm:text-5xl">
            Get Flat
            <span className="block text-red-600">25% OFF</span>
          </h2>

          <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-[17px]">
            Experience premium <strong>Thai Massage</strong>,
            <strong> Swedish Massage</strong>,
            <strong> Couple Spa</strong>,
            <strong> Deep Tissue Massage</strong>, and
            <strong> Aroma Therapy</strong> in a luxurious and relaxing
            environment. Book your appointment today and enjoy an exclusive
            <strong> 25% discount.</strong>
          </p>

          {/* Buttons */}
          <div className="mt-6 grid grid-cols-2 gap-3">
            <Link
              href={`tel:${contact.phone}`}
              className="flex items-center justify-center gap-2 rounded-xl bg-[#6b432d] py-3 text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-[#563221] sm:text-base"
            >
              <Phone size={18} />
              Call
            </Link>

            <Link
              href={`https://wa.me/91${contact.whatsapp}?text=${encodeURIComponent(
                "Hello! I would like to book a spa appointment."
              )}`}
              target="_blank"
              className="flex items-center justify-center gap-2 rounded-xl bg-[#25D366] py-3 text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-[#1EBE5D] sm:text-base"
            >
              <FaWhatsapp size={20} />
              WhatsApp
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes popup {
          0% {
            opacity: 0;
            transform: scale(0.8) translateY(30px);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
      `}</style>
    </div>
  );
}