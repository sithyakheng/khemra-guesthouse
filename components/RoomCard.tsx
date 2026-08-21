import { hotel, type Room } from "@/lib/data";
import { Check, Phone } from "lucide-react";
import Image from "next/image";

export default function RoomCard({ room, index }: { room: Room; index: number }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-clay/20 bg-white/40 transition-colors hover:border-clay/50">
      <div className="relative h-56 w-full overflow-hidden">
        <Image
          src={room.image}
          alt={room.name}
          fill
          sizes="(min-width: 768px) 33vw, 100vw"
          className="object-cover"
        />
        <span className="absolute left-4 top-4 font-mono text-[10px] uppercase tracking-[0.15em] text-cream bg-rice px-3 py-1 rounded-full">
          {room.category}
        </span>
        <span className="absolute right-4 bottom-4 font-mono text-[10px] uppercase tracking-[0.1em] text-cream/80">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <div className="p-6">
        <h3 className="font-display text-xl text-ink">{room.name}</h3>
        <p className="mt-3 text-sm leading-relaxed text-ink-soft">{room.description}</p>
        <ul className="mt-4 grid grid-cols-2 gap-2">
          {room.features.map((f) => (
            <li key={f} className="flex items-center gap-1.5 text-xs text-ink-soft">
              <Check className="h-3 w-3 text-rice shrink-0" />
              {f}
            </li>
          ))}
        </ul>
        <a
          href={`tel:${hotel.phone1.replace(/\s/g, "")}`}
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-clay px-5 py-2.5 font-mono text-xs uppercase tracking-[0.15em] text-cream transition-transform hover:-translate-y-0.5"
        >
          <Phone className="h-3.5 w-3.5" />
          Book Now
        </a>
      </div>
    </div>
  );
}
