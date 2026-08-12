export default function TerraceMotif({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 300 120" className={className} aria-hidden="true" fill="none">
      <circle cx="240" cy="30" r="18" fill="var(--color-gold)" opacity="0.9" />
      <path
        d="M0 90 Q 25 70 50 90 T 100 90 T 150 90 T 200 90 T 250 90 T 300 90"
        stroke="var(--color-rice)"
        strokeWidth="2"
        opacity="0.5"
      />
      <path
        d="M0 100 Q 25 82 50 100 T 100 100 T 150 100 T 200 100 T 250 100 T 300 100"
        stroke="var(--color-clay)"
        strokeWidth="2"
        opacity="0.35"
      />
      <path
        d="M0 110 Q 25 94 50 110 T 100 110 T 150 110 T 200 110 T 250 110 T 300 110"
        stroke="var(--color-gold)"
        strokeWidth="2"
        opacity="0.25"
      />
    </svg>
  );
}
