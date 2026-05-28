const STAR_COLORS = ["#f5a8c8", "#a8d8f0", "#b8e8a8", "#f8d8a8", "#d8a8f8"];

export default function StarField() {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        pointerEvents: "none",
        zIndex: 0,
      }}
    >
      {Array.from({ length: 30 }).map((_, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            left: `${(i * 31 + 7) % 100}%`,
            top: `${(i * 47 + 3) % 100}%`,
            width: `${4 + (i % 4) * 2}px`,
            height: `${4 + (i % 4) * 2}px`,
            borderRadius: "50%",
            background: STAR_COLORS[i % STAR_COLORS.length],
            opacity: 0.35,
            animation: `twinkle ${2 + (i % 5)}s ease-in-out infinite`,
            animationDelay: `${i * 0.3}s`,
          }}
        />
      ))}
    </div>
  );
}
