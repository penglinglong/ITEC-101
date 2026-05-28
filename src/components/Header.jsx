export default function Header({ page, setPage }) {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        background: "rgba(255,255,255,0.85)",
        backdropFilter: "blur(12px)",
        borderBottom: "2px solid #f5a8c844",
        padding: "0 24px",
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 64,
        }}
      >
        {/* Logo */}
        <div
          style={{
            fontSize: "22px",
            fontWeight: 900,
            animation: "rainbowText 4s linear infinite",
            fontFamily: "'Comic Sans MS', 'Chalkboard SE', cursive",
          }}
        >
          ✿ Sanrio Squad ✿
        </div>

        {/* Nav links */}
        <nav style={{ display: "flex", gap: "8px" }}>
          {["home", "members"].map((p) => (
            <button
              key={p}
              onClick={() => setPage(p)}
              style={{
                padding: "8px 20px",
                borderRadius: "20px",
                background:
                  page === p
                    ? "linear-gradient(135deg, #f5a8c8, #a8d8f0)"
                    : "rgba(245,168,200,0.12)",
                border: "2px solid",
                borderColor: page === p ? "transparent" : "#f5a8c844",
                color: page === p ? "white" : "#e05a90",
                fontWeight: 700,
                fontSize: "13px",
                cursor: "pointer",
                textTransform: "capitalize",
                transition: "all 0.2s",
                fontFamily: "'Comic Sans MS', 'Chalkboard SE', cursive",
                boxShadow: page === p ? "0 4px 15px #f5a8c844" : "none",
              }}
            >
              {p === "home" ? "🏠 Home" : "👥 Members"}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}
