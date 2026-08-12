import type { Metadata } from "next";
import RoomCard from "@/components/RoomCard";
import { rooms, hotel } from "@/lib/data";

export const metadata: Metadata = { title: "Rooms — Khemra Guesthouse" };

export default function RoomsPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-clay mb-3">
        Fan, air-con, or terrace view · $10–$28
      </p>
      <h1 className="font-display text-4xl text-ink md:text-5xl max-w-xl mb-4">
        A room for every budget
      </h1>
      <p className="text-ink-soft max-w-lg mb-14 leading-relaxed">
        All rooms include a private bathroom and free Wi-Fi. Check-in and
        check-out are both at {hotel.checkIn}.
      </p>

      <div className="grid gap-6 md:grid-cols-3">
        {rooms.map((room, i) => (
          <RoomCard key={room.slug} room={room} index={i} />
        ))}
      </div>

      <div className="mt-16 rounded-2xl border border-clay/30 bg-cream-deep p-8 text-center">
        <p className="font-display text-xl text-ink mb-2">Ready to book your stay?</p>
        <p className="text-ink-soft text-sm mb-6">
          Call or email us directly and we'll confirm your room.
        </p>
        <a
          href={`tel:${hotel.phone1.replace(/\s/g, "")}`}
          className="inline-flex items-center gap-2 rounded-full bg-clay px-7 py-3.5 font-mono text-xs uppercase tracking-[0.15em] text-cream"
        >
          Call {hotel.phone1}
        </a>
      </div>
    </div>
  );
}
