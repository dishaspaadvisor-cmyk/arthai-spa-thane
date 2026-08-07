"use client";

import { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";

export default function GallerySection({ gallery }) {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="py-20 bg-[#F8F5EA]">
      <div className="max-w-7xl mx-auto px-5">

        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-6 mb-14">
            <div className="h-[1px] w-20 bg-gray-400"></div>

            <h2 className="text-4xl md:text-5xl font-serif text-[#2C2C2C]">
              Our Gallery
            </h2>

            <div className="h-[1px] w-20 bg-gray-400"></div>
          </div>

          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our luxurious spa interiors, relaxing massage rooms,
            wellness treatments, and peaceful ambiance.
          </p>
        </div>

        {/* Gallery */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {gallery.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className="group cursor-pointer overflow-hidden rounded-2xl shadow-lg bg-white"
            >
              <div className="relative h-[320px] overflow-hidden">

                <Image
                  src={item.image}
                  alt={item.alt}
                  title={item.seo}
                  fill
                  sizes="(max-width:768px) 100vw,(max-width:1024px) 50vw,33vw"
                  className="object-cover transition duration-500 group-hover:scale-110"
                />

              </div>
            </div>
          ))}

        </div>
      </div>

      {/* Lightbox */}

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-5"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 text-white"
          >
            <X size={35} />
          </button>

          <div
            className="relative w-full max-w-5xl h-[80vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage.image}
              alt={selectedImage.alt}
              fill
              className="object-contain rounded-xl"
              sizes="100vw"
            />
          </div>
        </div>
      )}
    </section>
  );
}