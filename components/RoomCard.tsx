import type { Room } from "@/lib/data";
import { Check } from "lucide-react";

export default function RoomCard({ room, index }: { room: Room; index: number }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-clay/20 bg-white/40 transition-colors hover:border-clay/50">
      <div className="relative h-56 w-full overflow-hidden">
        <div
          className="absolute inset-0 opacity-90 transition-transform duration-700 group-hover:scale-105"
          style={{
            background: `linear-gradient(160deg, var(--color-gold) 0%, var(--color-clay) 55%, var(--color-clay-deep) 100%)`,
          }}
        />
        <span className="absolute left-4 top-4 font-mono text-[10px] uppercase tracking-[0.15em] text-cream bg-rice px-3 py-1 rounded-full">
          {room.category}
        </span>
        <span className="absolute right-4 bottom-4 font-mono text-[10px] uppercase tracking-[0.1em] text-cream/80">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <div className="p-6">
        <div className="flex items-baseline justify-between gap-4">
          <h3 className="font-display text-xl text-ink">{room.name}</h3>
          <p className="font-mono text-sm text-clay whitespace-nowrap">
            ${room.priceFrom}–{room.priceTo}
          </p>
        </div>
        <p className="mt-3 text-sm leading-relaxed text-ink-soft">{room.description}</p>
        <ul className="mt-4 grid grid-cols-2 gap-2">
          {room.features.map((f) => (
            <li key={f} className="flex items-center gap-1.5 text-xs text-ink-soft">
              <Check className="h-3 w-3 text-rice shrink-0" />
              {f}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
