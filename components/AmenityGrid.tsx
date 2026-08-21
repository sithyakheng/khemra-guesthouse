import {
  Wifi,
  Car,
  Waves,
  Wind,
  Shirt,
  PawPrint,
  Utensils,
  Sun,
  Presentation,
  type LucideIcon,
} from "lucide-react";
import { amenities } from "@/lib/data";

const iconMap: Record<string, LucideIcon> = {
  wifi: Wifi,
  car: Car,
  waves: Waves,
  wind: Wind,
  shirt: Shirt,
  paw: PawPrint,
  utensils: Utensils,
  sun: Sun,
  presentation: Presentation,
};

export default function AmenityGrid() {
  return (
    <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-clay/20 bg-clay/10 sm:grid-cols-4">
      {amenities.map((a) => {
        const Icon = iconMap[a.icon];
        return (
          <div
            key={a.label}
            className="flex flex-col items-center gap-3 bg-cream px-4 py-8 text-center transition-colors hover:bg-cream-deep"
          >
            <Icon className="h-5 w-5 text-clay" strokeWidth={1.5} />
            <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-ink-soft">
              {a.label}
            </span>
          </div>
        );
      })}
    </div>
  );
}
