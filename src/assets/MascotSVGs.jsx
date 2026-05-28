export function Cinnamoroll({ size = 80 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      <ellipse cx="40" cy="55" rx="28" ry="20" fill="#d6eeff" />
      <circle cx="40" cy="38" r="26" fill="white" />
      <ellipse cx="40" cy="58" rx="18" ry="12" fill="white" />
      <ellipse cx="16" cy="28" rx="12" ry="20" fill="#a8d8ff" transform="rotate(-20 16 28)" />
      <ellipse cx="64" cy="28" rx="12" ry="20" fill="#a8d8ff" transform="rotate(20 64 28)" />
      <circle cx="33" cy="36" r="4" fill="#1a1a2e" />
      <circle cx="47" cy="36" r="4" fill="#1a1a2e" />
      <circle cx="34" cy="35" r="1.5" fill="white" />
      <circle cx="48" cy="35" r="1.5" fill="white" />
      <ellipse cx="33" cy="44" rx="5" ry="3" fill="#f5a8c8" />
      <ellipse cx="47" cy="44" rx="5" ry="3" fill="#f5a8c8" />
      <path d="M37 42 Q40 45 43 42" stroke="#555" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <circle cx="40" cy="40" r="2" fill="#f5a8c8" />
      <path d="M40 12 Q48 4 44 16" stroke="#88bbdd" strokeWidth="3" strokeLinecap="round" fill="none" />
    </svg>
  );
}

export function MyMelody({ size = 80 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      <ellipse cx="30" cy="22" rx="18" ry="24" fill="#e06090" transform="rotate(-20 30 22)" />
      <ellipse cx="50" cy="22" rx="18" ry="24" fill="#e06090" transform="rotate(20 50 22)" />
      <circle cx="40" cy="48" r="26" fill="white" />
      <circle cx="40" cy="48" r="22" fill="#fff0f8" />
      <ellipse cx="40" cy="62" rx="14" ry="10" fill="white" />
      <circle cx="34" cy="45" r="3.5" fill="#1a1a2e" />
      <circle cx="46" cy="45" r="3.5" fill="#1a1a2e" />
      <circle cx="35" cy="44" r="1.2" fill="white" />
      <circle cx="47" cy="44" r="1.2" fill="white" />
      <ellipse cx="32" cy="52" rx="5" ry="3" fill="#f5b8d0" />
      <ellipse cx="48" cy="52" rx="5" ry="3" fill="#f5b8d0" />
      <circle cx="40" cy="50" r="2.5" fill="#f5a8c8" />
      <path d="M36 54 Q40 57 44 54" stroke="#888" strokeWidth="1.2" fill="none" strokeLinecap="round" />
      <circle cx="35" cy="38" r="2" fill="#ffe0f0" />
      <circle cx="45" cy="38" r="2" fill="#ffe0f0" />
    </svg>
  );
}

export function Keroppi({ size = 80 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      <circle cx="40" cy="44" r="28" fill="#5aaa3a" />
      <ellipse cx="40" cy="60" rx="22" ry="14" fill="#7acc5a" />
      <circle cx="28" cy="30" r="14" fill="#5aaa3a" />
      <circle cx="52" cy="30" r="14" fill="#5aaa3a" />
      <circle cx="28" cy="28" r="11" fill="white" />
      <circle cx="52" cy="28" r="11" fill="white" />
      <circle cx="28" cy="28" r="7" fill="#1a1a2e" />
      <circle cx="52" cy="28" r="7" fill="#1a1a2e" />
      <circle cx="30" cy="26" r="2.5" fill="white" />
      <circle cx="54" cy="26" r="2.5" fill="white" />
      <ellipse cx="40" cy="52" rx="16" ry="8" fill="white" />
      <path d="M28 54 Q40 62 52 54" stroke="#3a8a2a" strokeWidth="2" fill="none" />
      <circle cx="38" cy="49" r="3" fill="#f5a8a8" />
      <circle cx="42" cy="49" r="3" fill="#f5a8a8" />
      <ellipse cx="22" cy="48" rx="6" ry="4" fill="#7acc5a" transform="rotate(-30 22 48)" />
      <ellipse cx="58" cy="48" rx="6" ry="4" fill="#7acc5a" transform="rotate(30 58 48)" />
    </svg>
  );
}

export function HelloKitty({ size = 80 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      <circle cx="40" cy="44" r="28" fill="white" />
      <ellipse cx="40" cy="60" rx="20" ry="14" fill="#f5f5f5" />
      <ellipse cx="20" cy="22" rx="12" ry="16" fill="white" transform="rotate(-10 20 22)" />
      <ellipse cx="60" cy="22" rx="12" ry="16" fill="white" transform="rotate(10 60 22)" />
      <circle cx="32" cy="40" r="4" fill="#1a1a2e" />
      <circle cx="48" cy="40" r="4" fill="#1a1a2e" />
      <circle cx="33" cy="39" r="1.5" fill="white" />
      <circle cx="49" cy="39" r="1.5" fill="white" />
      <ellipse cx="30" cy="48" rx="5" ry="3" fill="#f5c8c8" />
      <ellipse cx="50" cy="48" rx="5" ry="3" fill="#f5c8c8" />
      <circle cx="55" cy="26" r="6" fill="#e05555" />
      <path d="M36 46 L44 46" stroke="#888" strokeWidth="1.5" strokeLinecap="round" />
      <ellipse cx="26" cy="42" rx="3" ry="2" fill="#f5a8a8" />
      <ellipse cx="54" cy="42" rx="3" ry="2" fill="#f5a8a8" />
    </svg>
  );
}

// Map mascot name → component for easy lookup
export const mascotSVGs = {
  Cinnamoroll,
  "My Melody": MyMelody,
  Keroppi,
  "Hello Kitty": HelloKitty,
};
