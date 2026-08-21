export const hotel = {
  name: "Khemra Guesthouse",
  nameKhmer: "ផ្ទះសំណាក់ ខេមរា",
  tagline: "A family terrace on the Kampot River",
  rating: 3.8,
  reviewCount: 192,
  stars: 3,
  address: "Kampong Bay Tbong, Kampot 13205, Cambodia",
  website: "khemraguesthouse.cc",
  phone1: "077 789 736",
  email: "reservation.khemra@gmail.com",
  facebook: "https://www.facebook.com/share/1EWR2gVT8v/?mibextid=wwXIfr",
  mapsUrl: "https://maps.app.goo.gl/7Tm5jSNKvnDp4Vh57",
  mapsEmbedQuery: "Khemra Guesthouse, Kampong Bay Tbong, Kampot, Cambodia",
  checkIn: "12:00 PM",
  checkOut: "12:00 PM",
  lgbtqFriendly: true,
};

export type Room = {
  slug: string;
  name: string;
  category: string;
  priceFrom: number;
  priceTo: number;
  description: string;
  features: string[];
  image: string;
};

export const rooms: Room[] = [
  {
    slug: "fan-room",
    name: "Fan Room",
    category: "Budget",
    priceFrom: 10,
    priceTo: 14,
    description:
      "Simple, tiled room with traditional Khmer furnishings and a ceiling fan. Straightforward and easy on the wallet, a 3-minute walk from Kampot Riverside.",
    features: ["Fan cooled", "Private bathroom", "Hot water", "Free Wi-Fi"],
    image: "https://krkkglikurxisofklznv.supabase.co/storage/v1/object/public/gallery/1%20bed%20%20(2).jpg",
  },
  {
    slug: "air-con-room",
    name: "Air-Con Room",
    category: "Standard",
    priceFrom: 15,
    priceTo: 20,
    description:
      "Air-conditioned room with satellite TV and tiled flooring, close to the family restaurant downstairs — good for guests who want a bit more comfort.",
    features: ["Air-conditioned", "Satellite TV", "Private bathroom", "Free Wi-Fi"],
    image: "https://krkkglikurxisofklznv.supabase.co/storage/v1/object/public/gallery/2%20bed%20%20(2).jpg",
  },
  {
    slug: "terrace-view-room",
    name: "Terrace View Room",
    category: "Deluxe",
    priceFrom: 20,
    priceTo: 28,
    description:
      "Upper-floor room looking out over the large terrace toward the Kampot River and Bokor Mountain — the best view in the house.",
    features: ["Air-conditioned", "River view", "Satellite TV", "Balcony access", "Free Wi-Fi"],
    image: "https://krkkglikurxisofklznv.supabase.co/storage/v1/object/public/gallery/3%20bed%20.jpg",
  },
];

export const amenities = [
  { label: "Free Wi-Fi", icon: "wifi" },
  { label: "Air-Conditioned", icon: "wind" },
  { label: "Pet-Friendly", icon: "paw" },
  { label: "Conference Hall", icon: "presentation" },
];

export const galleryImages = [
  {
    url: "https://krkkglikurxisofklznv.supabase.co/storage/v1/object/public/gallery/amenities%20%20(1).jpg",
    label: "Guest Room Amenities",
    category: "Amenities",
  },
  {
    url: "https://krkkglikurxisofklznv.supabase.co/storage/v1/object/public/gallery/amenities%20%20(2).jpg",
    label: "Guest Room Amenities",
    category: "Amenities",
  },
  {
    url: "https://krkkglikurxisofklznv.supabase.co/storage/v1/object/public/gallery/amenities%20.jpg",
    label: "Guest Room Amenities",
    category: "Amenities",
  },
  {
    url: "https://krkkglikurxisofklznv.supabase.co/storage/v1/object/public/gallery/building%20photo%20.jpg",
    label: "Property Exterior",
    category: "Exterior",
  },
  {
    url: "https://krkkglikurxisofklznv.supabase.co/storage/v1/object/public/gallery/meeting%20room%20%20(2).jpg",
    label: "Conference Hall",
    category: "Events",
  },
  {
    url: "https://krkkglikurxisofklznv.supabase.co/storage/v1/object/public/gallery/meeting%20room%20%20(3).jpg",
    label: "Conference Hall",
    category: "Events",
  },
  {
    url: "https://krkkglikurxisofklznv.supabase.co/storage/v1/object/public/gallery/meeting%20room%20%20(5).jpg",
    label: "Conference Hall",
    category: "Events",
  },
  {
    url: "https://krkkglikurxisofklznv.supabase.co/storage/v1/object/public/gallery/meeting%20room%20.jpg",
    label: "Conference Hall",
    category: "Events",
  },
];

export const nav = [
  { href: "/", label: "Home" },
  { href: "/rooms", label: "Rooms" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];
