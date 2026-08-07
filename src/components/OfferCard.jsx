"use client";

import Image from "next/image";
import { Phone, MessageCircle } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function OfferCard({ offers, contact }) {
    return (
        <section className="bg-[#F8F5EA] py-20">
            <div className="max-w-7xl mx-auto px-5">

                {/* Heading */}

                <div className="flex items-center justify-center gap-6 mb-16">

                    <div className="h-[1px] w-20 bg-gray-400"></div>

                    <h2 className="text-4xl md:text-5xl font-serif text-[#2B2B2B]">
                        Exclusive Spa Offers
                    </h2>

                    <div className="h-[1px] w-20 bg-gray-400"></div>

                </div>

                {/* Cards */}

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

                    {offers.map((item) => (
                        <div
                            key={item.id}
                            className="group text-center"
                        >

                            {/* Image */}

                            <div className="relative aspect-[1600/2255] w-full rounded-t-[180px] rounded-b-md overflow-hidden border border-gray-300">
                                <Image
                                    src={item.image}
                                    alt={item.alt}
                                    title={item.seo}
                                    fill
                                    priority={item.id <= 3}
                                    sizes="(max-width:768px)100vw,(max-width:1024px)50vw,33vw"
                                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                            </div>

                            {/* Content */}

                            <div className="mt-8">

                                {/* Buttons */}

                                <div className="grid grid-cols-2 gap-3 mt-8">

                                    <a
                                        href={`tel:${contact.phone}`}
                                        className="border border-[#8B5A2B] text-black  py-3 rounded-md flex items-center justify-center gap-2 hover:bg-[#8B5A2B] hover:text-white duration-300"
                                    >
                                        <Phone size={18} />
                                        Call Now
                                    </a>

                                    <a
                                        href={`https://wa.me/${contact.whatsapp}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-green-600 py-3 rounded-md text-white flex items-center justify-center gap-2 hover:bg-green-700 duration-300"
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