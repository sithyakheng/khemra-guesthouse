import type { Metadata } from "next";
import Image from "next/image";
import { galleryImages } from "@/lib/data";

export const metadata: Metadata = { title: "Gallery — Khemra Guesthouse" };

export default function GalleryPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-clay mb-3">Gallery</p>
      <h1 className="font-display text-4xl text-ink md:text-5xl max-w-xl mb-4">
        A look around the guesthouse
      </h1>
      <p className="text-ink-soft max-w-lg mb-14 leading-relaxed">
        A closer look at the rooms, amenities, property, and spaces for gathering.
      </p>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {galleryImages.map((image, i) => (
          <div
            key={image.url}
            className={`group relative aspect-square overflow-hidden rounded-xl border border-clay/20 ${
              i % 5 === 0 ? "col-span-2 row-span-2 aspect-auto" : ""
            }`}
          >
            <Image
              src={image.url}
              alt={image.label}
              fill
              sizes={i % 5 === 0 ? "(min-width: 640px) 66vw, 100vw" : "(min-width: 640px) 33vw, 50vw"}
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 flex items-end p-4">
              <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-cream bg-ink/50 backdrop-blur px-2.5 py-1 rounded-full">
                {image.label}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
