"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/data/data";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";
import { contactData } from "@/data/data";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scroll
        ? "bg-[#F8F5EA] backdrop-blur-md shadow-lg py-4"
        : "bg-transparent py-6"
        }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6">

        {/* Logo */}

        <Image
          src="/logo/4.webp" // Place your logo in the public folder
          alt="Spa Berry Logo"
          width={250}
          height={250}
          priority
          className="object-contain"
        />


        {/* Desktop */}

        <nav className="hidden lg:flex items-center gap-10">

          {navLinks.map((item) => (
            <Link
              key={item.id}
              href={item.link}
              className="relative text-gray-900 text-[16px] md:text-[17px] font-semibold tracking-wide font-sans group"
            >
              {item.title}

              <span className="absolute left-0 -bottom-2 w-0 h-[2px] bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}

        </nav>

        {/* Button */}

        <div className="hidden lg:block">
          <Link
            href={`https://wa.me/91${contactData.whatsapp}?text=${encodeURIComponent(
              "Hello! I would like to book a spa appointment."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-md bg-[#25D366] px-6 py-3 text-sm font-semibold uppercase tracking-wider text-white transition-all duration-300 hover:bg-[#1EBE5D] hover:scale-105"
          >
            <FaWhatsapp size={22} />
            Book Now
          </Link>
        </div>

        {/* Mobile */}

        <button
          onClick={() => setOpen(!open)}
          className="text-black lg:hidden"
        >
          {open ? <X size={34} /> : <Menu size={34} />}
        </button>

      </div>

      {/* Mobile Menu */}

      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ${open ? "max-h-[500px]" : "max-h-0"
          }`}
      >
        <div className="bg-black/95 backdrop-blur-lg px-8 py-6">

          {navLinks.map((item) => (
            <Link
              key={item.id}
              href={item.link}
              onClick={() => setOpen(false)}
              className="block text-white py-4 border-b border-gray-700 hover:text-yellow-400"
            >
              {item.title}
            </Link>
          ))}

          <Link
            href={`https://wa.me/91${contactData.whatsapp}?text=${encodeURIComponent(
              "Hello! I would like to book a spa appointment."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 flex w-full items-center justify-center gap-2 rounded-md bg-[#25D366] py-3 font-semibold uppercase text-white transition-all duration-300 hover:bg-[#1ebe5d]"
          >
            <FaWhatsapp size={20} />
            Book on WhatsApp
          </Link>

        </div>
      </div>
    </header>
  );
}