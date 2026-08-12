import type { Metadata } from "next";

export const metadata: Metadata = { title: "Gallery — Khemra Guesthouse" };

const categories = [
  { label: "Terrace", tone: "from-gold to-clay" },
  { label: "Rooms", tone: "from-clay/40 to-cream-deep" },
  { label: "Restaurant", tone: "from-rice/40 to-cream-deep" },
  { label: "Riverside", tone: "from-clay to-clay-deep" },
  { label: "Exterior", tone: "from-gold/50 to-clay" },
  { label: "River view", tone: "from-rice-light/40 to-cream-deep" },
];

export default function GalleryPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-clay mb-3">Gallery</p>
      <h1 className="font-display text-4xl text-ink md:text-5xl max-w-xl mb-4">
        A look around the guesthouse
      </h1>
      <p className="text-ink-soft max-w-lg mb-14 leading-relaxed">
        Photos coming soon — this gallery is ready for real property images once uploaded.
      </p>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {categories.map((c, i) => (
          <div
            key={c.label}
            className={`group relative aspect-square overflow-hidden rounded-xl border border-clay/20 bg-gradient-to-br ${c.tone} ${
              i % 5 === 0 ? "col-span-2 row-span-2 aspect-auto" : ""
            }`}
          >
            <div className="absolute inset-0 flex items-end p-4">
              <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-cream bg-ink/50 backdrop-blur px-2.5 py-1 rounded-full">
                {c.label}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
