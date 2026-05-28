const SYMBOLS = {
  circles: ["●", "○", "◉"],
  stars: ["★", "✦", "✧", "⋆"],
  dots: ["•", "·", "∙"],
  hearts: ["♥", "♡", "❤"],
};

export default function FloatingParticles({ color, pattern }) {
  const s = SYMBOLS[pattern] || SYMBOLS.stars;

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
        pointerEvents: "none",
      }}
    >
      {Array.from({ length: 12 }).map((_, i) => (
        <span
          key={i}
          style={{
            position: "absolute",
            left: `${(i * 17 + 5) % 95}%`,
            top: `${(i * 23 + 10) % 90}%`,
            fontSize: `${10 + (i % 3) * 5}px`,
            color: color,
            opacity: 0.25 + (i % 4) * 0.1,
            animation: `float${i % 3} ${3 + (i % 4)}s ease-in-out infinite`,
            animationDelay: `${i * 0.4}s`,
          }}
        >
          {s[i % s.length]}
        </span>
      ))}
    </div>
  );
}
