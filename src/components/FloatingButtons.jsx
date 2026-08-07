"use client";

import Link from "next/link";
import { Phone, MessageCircle } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function FloatingButtons({ phone, whatsapp }) {
  return (
    <div className="fixed bottom-6 right-5 z-50 flex flex-col gap-4">
      {/* WhatsApp */}
      <Link
        href={`https://wa.me/91${whatsapp}`}
        target="_blank"
        aria-label="Chat on WhatsApp"
        className="group flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition-all duration-300 hover:scale-110 hover:bg-[#20ba5a]"
      >
        <FaWhatsapp size={28} />
      </Link>

      {/* Call */}
      <Link
        href={`tel:${phone}`}
        aria-label="Call Now"
        className="group flex h-14 w-14 items-center justify-center rounded-full bg-[#0A84FF] text-white shadow-xl transition-all duration-300 hover:scale-110 hover:bg-[#0069d9]"
      >
        <Phone size={26} />
      </Link>
    </div>
  );
}