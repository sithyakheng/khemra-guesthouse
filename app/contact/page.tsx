import type { Metadata } from "next";
import { Phone, Mail, Share2, MapPin, Clock, Globe } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import { hotel } from "@/lib/data";

export const metadata: Metadata = { title: "Contact — Khemra Guesthouse" };

export default function ContactPage() {
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(hotel.mapsEmbedQuery)}&output=embed`;

  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-clay mb-3">Contact</p>
      <h1 className="font-display text-4xl text-ink md:text-5xl max-w-xl mb-14">Get in touch</h1>

      <div className="grid gap-12 lg:grid-cols-5">
        <div className="lg:col-span-2 space-y-8">
          <ul className="space-y-5">
            <li className="flex items-start gap-3">
              <MapPin className="h-5 w-5 text-clay shrink-0 mt-0.5" />
              <div>
                <p className="text-ink text-sm">{hotel.address}</p>
                <a href={hotel.mapsUrl} target="_blank" rel="noopener noreferrer" className="font-mono text-xs text-clay hover:text-clay-deep">
                  Open in Google Maps
                </a>
              </div>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-clay shrink-0" />
              <a href={`tel:${hotel.phone1.replace(/\s/g, "")}`} className="text-ink text-sm hover:text-clay">
                {hotel.phone1}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-clay shrink-0" />
              <a href={`mailto:${hotel.email}`} className="text-ink text-sm hover:text-clay">
                {hotel.email}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Globe className="h-5 w-5 text-clay shrink-0" />
              <span className="text-ink text-sm">{hotel.website}</span>
            </li>
            <li className="flex items-center gap-3">
              <Share2 className="h-5 w-5 text-clay shrink-0" />
              <a href={hotel.facebook} target="_blank" rel="noopener noreferrer" className="text-ink text-sm hover:text-clay">
                Facebook page
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Clock className="h-5 w-5 text-clay shrink-0" />
              <p className="text-ink text-sm">
                Check-in {hotel.checkIn} · Check-out {hotel.checkOut}
              </p>
            </li>
          </ul>

          <div className="overflow-hidden rounded-2xl border border-clay/20 h-64">
            <iframe
              src={mapSrc}
              title="Khemra Guesthouse location"
              className="h-full w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        <div className="lg:col-span-3">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
