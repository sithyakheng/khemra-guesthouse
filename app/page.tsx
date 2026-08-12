"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { Star, ArrowRight, MapPin } from "lucide-react";
import TerraceMotif from "@/components/TerraceMotif";
import AmenityGrid from "@/components/AmenityGrid";
import RoomCard from "@/components/RoomCard";
import { hotel, rooms } from "@/lib/data";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% -10%, var(--color-gold) 0%, var(--color-cream) 55%)",
            opacity: 0.35,
          }}
        />
        <div className="relative mx-auto max-w-6xl px-6 pt-24 pb-16 md:pt-32">
          <motion.div initial="hidden" animate="show" variants={fadeUp}>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-clay mb-6">
              Kampong Bay Tbong, Kampot
            </p>
            <h1 className="font-display text-5xl leading-[1.05] text-ink md:text-7xl">
              A family terrace
              <br />
              on the <span className="italic text-clay">Kampot River</span>
            </h1>
            <p className="mt-6 max-w-lg text-ink-soft leading-relaxed">
              {hotel.nameKhmer} — three minutes from the riverside and the
              market, with a wide terrace looking out toward Bokor Mountain
              and a family kitchen serving Khmer and Chinese food.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href={`tel:${hotel.phone1.replace(/\s/g, "")}`}
                className="group inline-flex items-center gap-2 rounded-full bg-clay px-7 py-3.5 font-mono text-xs uppercase tracking-[0.15em] text-cream transition-transform hover:-translate-y-0.5"
              >
                Check availability
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </a>
              <Link
                href="/rooms"
                className="inline-flex items-center gap-2 rounded-full border border-ink-soft/30 px-7 py-3.5 font-mono text-xs uppercase tracking-[0.15em] text-ink transition-colors hover:border-clay hover:text-clay"
              >
                View rooms
              </Link>
            </div>

            <div className="mt-14 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-clay/15 pt-8">
              <div className="flex items-center gap-2">
                <Star className="h-4 w-4 fill-clay text-clay" />
                <span className="font-mono text-sm text-ink">{hotel.rating}</span>
                <span className="font-mono text-xs text-ink-soft">
                  ({hotel.reviewCount} reviews)
                </span>
              </div>
              <div className="flex items-center gap-2 text-ink-soft">
                <MapPin className="h-4 w-4 text-clay" />
                <span className="font-mono text-xs">{hotel.stars}-star · LGBTQ+ friendly</span>
              </div>
            </div>
          </motion.div>
        </div>
        <TerraceMotif className="w-full h-24 md:h-32" />
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} variants={fadeUp}>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-clay mb-3">What's included</p>
          <h2 className="font-display text-3xl text-ink md:text-4xl mb-10 max-w-md">
            Simple comforts, family hospitality
          </h2>
          <AmenityGrid />
        </motion.div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24 border-t border-clay/15">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          className="flex flex-wrap items-end justify-between gap-4 mb-10"
        >
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-clay mb-3">Stay</p>
            <h2 className="font-display text-3xl text-ink md:text-4xl">Three room tiers, one terrace</h2>
          </div>
          <Link
            href="/rooms"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.15em] text-clay hover:text-clay-deep transition-colors"
          >
            All rooms <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {rooms.map((room, i) => (
            <motion.div
              key={room.slug}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              variants={fadeUp}
              transition={{ delay: i * 0.1 }}
            >
              <RoomCard room={room} index={i} />
            </motion.div>
          ))}
        </div>
      </section>

      <section className="border-t border-clay/15 bg-cream-deep">
        <div className="mx-auto max-w-6xl px-6 py-20 text-center">
          <p className="font-display italic text-2xl text-clay md:text-3xl">
            "A terrace overlooking the river, a family in the kitchen."
          </p>
          <a
            href={`tel:${hotel.phone1.replace(/\s/g, "")}`}
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-clay px-7 py-3.5 font-mono text-xs uppercase tracking-[0.15em] text-cream transition-transform hover:-translate-y-0.5"
          >
            Call {hotel.phone1}
          </a>
        </div>
      </section>
    </>
  );
}
