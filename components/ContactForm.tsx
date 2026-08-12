"use client";

import { useState } from "react";
import { Send } from "lucide-react";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <div className="rounded-2xl border border-clay/30 bg-cream-deep p-8 text-center">
        <p className="font-display text-xl text-ink mb-2">Message ready</p>
        <p className="text-ink-soft text-sm">
          For now, please reach us directly by phone, email, or Facebook —
          we'll connect this form to a real inbox soon.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="font-mono text-[11px] uppercase tracking-[0.1em] text-ink-soft block mb-2">Name</label>
          <input
            required
            type="text"
            className="w-full rounded-lg border border-clay/30 bg-white/60 px-4 py-3 text-ink outline-none transition-colors focus:border-clay"
            placeholder="Your name"
          />
        </div>
        <div>
          <label className="font-mono text-[11px] uppercase tracking-[0.1em] text-ink-soft block mb-2">Email</label>
          <input
            required
            type="email"
            className="w-full rounded-lg border border-clay/30 bg-white/60 px-4 py-3 text-ink outline-none transition-colors focus:border-clay"
            placeholder="you@example.com"
          />
        </div>
      </div>
      <div>
        <label className="font-mono text-[11px] uppercase tracking-[0.1em] text-ink-soft block mb-2">Message</label>
        <textarea
          required
          rows={5}
          className="w-full rounded-lg border border-clay/30 bg-white/60 px-4 py-3 text-ink outline-none transition-colors focus:border-clay resize-none"
          placeholder="Dates, room type, questions..."
        />
      </div>
      <button
        type="submit"
        className="inline-flex items-center gap-2 rounded-full bg-clay px-7 py-3.5 font-mono text-xs uppercase tracking-[0.15em] text-cream transition-transform hover:-translate-y-0.5"
      >
        Send message <Send className="h-3.5 w-3.5" />
      </button>
    </form>
  );
}
