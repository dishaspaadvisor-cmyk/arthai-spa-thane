import Link from "next/link";
import Image from "next/image";
import {
    MapPin,
    Phone,
    Mail,
    Clock,
} from "lucide-react";

import {
    FaFacebookF,
    FaInstagram,
    FaWhatsapp,
    FaYoutube,
} from "react-icons/fa";

export default function Footer({ data }) {
    return (
        <footer className="bg-[#F8F5EA] text-gray-800">

            <div className="max-w-7xl mx-auto px-5 py-20">

                <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

                    {/* Logo */}

                    <div>

                        <Image
                            src="/logo/4.webp" // Replace with your logo path
                            alt="Spa Berry Logo"
                            width={180}
                            height={60}
                            priority
                            className="h-auto w-auto object-contain"
                        />

                        <p className="mt-6 text-gray-400 leading-8">
                            {data.description}
                        </p>

                        <div className="flex gap-4 mt-8">

                            <a
                                href={data.social.facebook}
                                className="w-11 h-11 rounded-full border border-gray-700 flex items-center justify-center hover:bg-[#d4af37] hover:text-black duration-300"
                            >
                                <FaFacebookF />
                            </a>

                            <a
                                href={data.social.instagram}
                                className="w-11 h-11 rounded-full border border-gray-700 flex items-center justify-center hover:bg-[#d4af37] hover:text-black duration-300"
                            >
                                <FaInstagram />
                            </a>

                            <a
                                href={data.social.whatsapp}
                                className="w-11 h-11 rounded-full border border-gray-700 flex items-center justify-center hover:bg-[#d4af37] hover:text-black duration-300"
                            >
                                <FaWhatsapp />
                            </a>

                            <a
                                href={data.social.youtube}
                                className="w-11 h-11 rounded-full border border-gray-700 flex items-center justify-center hover:bg-[#d4af37] hover:text-black duration-300"
                            >
                                <FaYoutube />
                            </a>

                        </div>

                    </div>

                    {/* Services */}

                    <div>

                        <h3 className="text-2xl font-semibold mb-6">
                            Services
                        </h3>

                        <ul className="space-y-4">

                            {data.services.map((service) => (
                                <li key={service}>
                                    {service}
                                </li>
                            ))}

                        </ul>

                    </div>

                    {/* Quick Links */}

                    <div>

                        <h3 className="text-2xl font-semibold mb-6">
                            Quick Links
                        </h3>

                        <ul className="space-y-4">

                            {data.quickLinks.map((item) => (
                                <li key={item.title}>

                                    <Link
                                        href={item.link}
                                        className="hover:text-[#d4af37] duration-300"
                                    >
                                        {item.title}
                                    </Link>

                                </li>
                            ))}

                        </ul>

                    </div>

                    {/* Contact */}

                    <div>

                        <h3 className="text-2xl font-semibold mb-6">
                            Contact Us
                        </h3>

                        <div className="space-y-5">

                            <div className="flex gap-4">

                                <MapPin className="text-[#d4af37] mt-1" />

                                <p className="text-gray-400">
                                    {data.contact.address}
                                </p>

                            </div>

                            <div className="flex gap-4">

                                <Phone className="text-[#d4af37]" />

                                <a href={`tel:${data.contact.phone}`}>
                                    {data.contact.phone}
                                </a>

                            </div>

                            <div className="flex gap-4">

                                <Mail className="text-[#d4af37]" />

                                <a href={`mailto:${data.contact.email}`}>
                                    {data.contact.email}
                                </a>

                            </div>

                            <div className="flex gap-4">

                                <Clock className="text-[#d4af37]" />

                                <span>{data.contact.timing}</span>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

            <div className="border-t border-gray-800">

                <div className="max-w-7xl mx-auto px-5 py-6 flex flex-col md:flex-row justify-between items-center gap-3">

                    <p className="text-gray-400 text-sm">
                        © {new Date().getFullYear()} Spa Berry. All Rights Reserved.
                    </p>

                    <p className="text-gray-500 text-sm">
                        Designed with ❤️ for Luxury Wellness
                    </p>

                </div>

            </div>

        </footer>
    );
}