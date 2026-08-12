import Link from "next/link";
import { Phone, Mail, Share2, MapPin, Globe } from "lucide-react";
import { hotel, nav } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-clay/15 bg-cream-deep">
      <div className="mx-auto max-w-6xl px-6 py-14 grid gap-10 md:grid-cols-3">
        <div>
          <p className="font-display text-xl text-ink">
            Khemra <span className="italic text-clay">Guesthouse</span>
          </p>
          <p className="mt-1 text-sm text-ink-soft">{hotel.nameKhmer}</p>
          <p className="mt-3 text-sm text-ink-soft leading-relaxed max-w-xs">
            A family-run terrace guesthouse on the Kampot River.
          </p>
          <div className="mt-4 flex items-center gap-2 font-mono text-xs text-clay">
            <span>★ {hotel.rating}</span>
            <span className="text-ink-soft">· {hotel.reviewCount} reviews · {hotel.stars}-star</span>
          </div>
        </div>

        <div>
          <p className="font-mono text-xs uppercase tracking-[0.15em] text-rice mb-4">Explore</p>
          <ul className="space-y-2 text-sm text-ink-soft">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-clay transition-colors">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-mono text-xs uppercase tracking-[0.15em] text-rice mb-4">Reach us</p>
          <ul className="space-y-3 text-sm text-ink-soft">
            <li className="flex items-start gap-2">
              <MapPin className="h-4 w-4 mt-0.5 text-clay shrink-0" />
              <a href={hotel.mapsUrl} target="_blank" rel="noopener noreferrer" className="hover:text-clay transition-colors">
                {hotel.address}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-clay shrink-0" />
              <a href={`tel:${hotel.phone1.replace(/\s/g, "")}`} className="hover:text-clay transition-colors">
                {hotel.phone1}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-clay shrink-0" />
              <a href={`mailto:${hotel.email}`} className="hover:text-clay transition-colors">
                {hotel.email}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Globe className="h-4 w-4 text-clay shrink-0" />
              <span>{hotel.website}</span>
            </li>
            <li className="flex items-center gap-2">
              <Share2 className="h-4 w-4 text-clay shrink-0" />
              <a href={hotel.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-clay transition-colors">
                Facebook
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-clay/10 py-5 text-center font-mono text-[11px] uppercase tracking-[0.15em] text-ink-soft/60">
        © {new Date().getFullYear()} Khemra Guesthouse
      </div>
    </footer>
  );
}
