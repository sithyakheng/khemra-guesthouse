import type { Metadata } from "next";
import TerraceMotif from "@/components/TerraceMotif";
import { hotel } from "@/lib/data";

export const metadata: Metadata = { title: "About — Khemra Guesthouse" };

export default function AboutPage() {
  return (
    <div className="relative overflow-hidden">
      <div className="relative mx-auto max-w-3xl px-6 py-20">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-clay mb-3">About</p>
        <h1 className="font-display text-4xl text-ink md:text-5xl mb-8">
          Family-run, three minutes from the river
        </h1>

        <div className="space-y-6 text-ink-soft leading-relaxed">
          <p>
            {hotel.nameKhmer} has been a fixture of Kampong Bay Tbong for
            years — a family-owned guesthouse just a short walk from Kampot
            Riverside and the market, with a large terrace that looks out
            toward the river and Bokor Mountain.
          </p>
          <p>
            Rooms range from simple fan rooms to air-conditioned terrace-view
            rooms, all with tiled floors, traditional Khmer furnishings, and
            a private bathroom with hot water. Downstairs, the family
            restaurant serves Khmer and Chinese dishes daily, with in-room
            dining available too.
          </p>
          <p>
            The property is pet-friendly and LGBTQ+ friendly, with free
            on-site parking and free Wi-Fi throughout — the kind of
            straightforward, welcoming stay that's kept guests coming back.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-6 border-t border-clay/15 pt-10 sm:grid-cols-4">
          {[
            { value: hotel.rating, label: "Google rating" },
            { value: hotel.reviewCount, label: "Reviews" },
            { value: hotel.stars, label: "Star hotel" },
            { value: "3 min", label: "To riverside" },
          ].map((s) => (
            <div key={s.label}>
              <p className="font-display text-3xl text-clay">{s.value}</p>
              <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-ink-soft mt-1">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
      <TerraceMotif className="w-full h-20 opacity-60" />
    </div>
  );
}
