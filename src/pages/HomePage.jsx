import members from "../data/members";
import MemberCard from "../components/MemberCard";
import FloatingParticles from "../components/FloatingParticles";

const STATS = [
  { icon: "🏫", label: "School",   value: "CvSU Naic" },
  { icon: "👥", label: "Members",  value: "4 students" },
  { icon: "🎨", label: "Mascots",  value: "4 Sanrio chars" },
  { icon: "✨", label: "Vibes",    value: "Kawaii 100%" },
];

export default function HomePage({ setPage, setSelectedMember }) {
  return (
    <div style={{ animation: "bounceIn 0.5s ease-out", backgroundColor: "#ffd9d0", padding: "24px" }}>
      {/* ── Hero ── */}
      <div
        style={{
          textAlign: "center",
          marginBottom: "60px",
          padding: "80px 24px 60px",
          minHeight: "min(700px, 72vh)",
          backgroundColor: "#ffd9d0",
          backgroundImage: "url('/home-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          borderRadius: "32px",
          border: "2px solid rgba(245,168,200,0.2)",
          backdropFilter: "blur(8px)",
          position: "relative",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <FloatingParticles color="#f5a8c8" pattern="stars" />
        <FloatingParticles color="#a8d8f0" pattern="hearts" />

        <div style={{ fontSize: "62px", marginBottom: "20px", position: "relative", zIndex: 1 }}>
          🌸 ✨ 🌟 ✨ 🌸
        </div>

        <h1
          style={{
            fontSize: "clamp(36px, 6vw, 68px)",
            lineHeight: 1.05,
            fontWeight: 900,
            background: "linear-gradient(135deg, #e05a90, #5ba3cc, #5aaa3a, #e05555)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            margin: "0 0 22px",
            position: "relative",
            zIndex: 1,
            fontFamily: "'Comic Sans MS', 'Chalkboard SE', cursive",
          }}
        >
          Welcome to Our Portfolio!
        </h1>

        <p
          style={{
            fontSize: "16px",
            color: "#7a5a8a",
            maxWidth: 500,
            margin: "0 auto 28px",
            lineHeight: 1.7,
            position: "relative",
            zIndex: 1,
            fontFamily: "'Comic Sans MS', 'Chalkboard SE', cursive",
          }}
        >
          We are 4 friends from CvSU Naic, each with our own Sanrio spirit animal 🐱
          Explore our group portfolio and get to know us~ ♡
        </p>

        <div
          style={{
            display: "flex",
            gap: "12px",
            justifyContent: "center",
            flexWrap: "wrap",
            position: "relative",
            zIndex: 1,
          }}
        >
          <button
            onClick={() => setPage("members")}
            style={{
              padding: "14px 32px",
              borderRadius: "24px",
              background: "linear-gradient(135deg, #e05a90, #c03a70)",
              color: "white",
              border: "none",
              fontWeight: 800,
              fontSize: "15px",
              cursor: "pointer",
              boxShadow: "0 6px 20px #e05a9044",
              fontFamily: "'Comic Sans MS', 'Chalkboard SE', cursive",
              transition: "transform 0.2s",
            }}
            onMouseEnter={(e) => (e.target.style.transform = "scale(1.05)")}
            onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
          >
            ✨ Meet the Squad
          </button>
        </div>
      </div>

      {/* ── Squad preview ── */}
      <h2
        style={{
          textAlign: "center",
          fontSize: "24px",
          fontWeight: 900,
          color: "#2a2a3e",
          marginBottom: "28px",
          fontFamily: "'Comic Sans MS', 'Chalkboard SE', cursive",
        }}
      >
        🌟 Our Squad 🌟
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "20px",
        }}
      >
        {members.map((m) => (
          <MemberCard
            key={m.id}
            member={m}
            onClick={(member) => {
              setSelectedMember(member);
              setPage("members");
            }}
          />
        ))}
      </div>

      {/* ── School stats ── */}
      <div
        style={{
          marginTop: "60px",
          background: "rgba(255,255,255,0.6)",
          borderRadius: "28px",
          border: "2px solid #a8d8f033",
          padding: "36px",
          backdropFilter: "blur(8px)",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: "22px",
            fontWeight: 900,
            color: "#2a2a3e",
            marginBottom: "24px",
            fontFamily: "'Comic Sans MS', 'Chalkboard SE', cursive",
          }}
        >
          💫 Our School 💫
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: "16px",
            textAlign: "center",
          }}
        >
          {STATS.map((item) => (
            <div
              key={item.label}
              style={{
                background:
                  "linear-gradient(135deg, rgba(245,168,200,0.15), rgba(168,216,240,0.15))",
                borderRadius: "18px",
                padding: "20px",
                border: "1.5px solid #f5a8c833",
              }}
            >
              <div style={{ fontSize: "32px", marginBottom: "8px" }}>{item.icon}</div>
              <div
                style={{
                  fontSize: "11px",
                  color: "#9a7aaa",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  marginBottom: "4px",
                  fontFamily: "'Comic Sans MS', 'Chalkboard SE', cursive",
                }}
              >
                {item.label}
              </div>
              <div
                style={{
                  fontSize: "16px",
                  fontWeight: 800,
                  color: "#2a2a3e",
                  fontFamily: "'Comic Sans MS', 'Chalkboard SE', cursive",
                }}
              >
                {item.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
