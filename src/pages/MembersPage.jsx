import members from "../data/members";
import { mascotSVGs } from "../assets/MascotSVGs";
import MemberCard from "../components/MemberCard";

export default function MembersPage({ setSelectedMember }) {
  return (
    <div style={{ animation: "bounceIn 0.5s ease-out", backgroundColor: "#ffd9d0", padding: "24px" }}>
      <h2
        style={{
          textAlign: "center",
          fontSize: "28px",
          fontWeight: 900,
          color: "#2a2a3e",
          marginBottom: "8px",
          fontFamily: "'Comic Sans MS', 'Chalkboard SE', cursive",
        }}
      >
        👥 Meet the Members 👥
      </h2>
      <p
        style={{
          textAlign: "center",
          color: "#9a7aaa",
          marginBottom: "36px",
          fontSize: "14px",
          fontFamily: "'Comic Sans MS', 'Chalkboard SE', cursive",
        }}
      >
        Click on a card to learn more about each member~ ♡
      </p>

      {/* Card grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "24px",
        }}
      >
        {members.map((m) => (
          <MemberCard key={m.id} member={m} onClick={setSelectedMember} />
        ))}
      </div>

      {/* Squad lineup table */}
      <div style={{ marginTop: "48px" }}>
        <h3
          style={{
            textAlign: "center",
            fontSize: "20px",
            fontWeight: 900,
            color: "#2a2a3e",
            marginBottom: "20px",
            fontFamily: "'Comic Sans MS', 'Chalkboard SE', cursive",
          }}
        >
          🎀 Squad Lineup 🎀
        </h3>

        <div
          style={{
            background: "rgba(255,255,255,0.7)",
            borderRadius: "24px",
            border: "2px solid #f5a8c833",
            overflow: "hidden",
            backdropFilter: "blur(8px)",
          }}
        >
          {members.map((m, i) => {
            const MascotSVG = mascotSVGs[m.mascot];
            return (
              <div
                key={m.id}
                onClick={() => setSelectedMember(m)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                  padding: "16px 24px",
                  borderBottom:
                    i < members.length - 1 ? "1.5px solid #f5a8c822" : "none",
                  cursor: "pointer",
                  transition: "background 0.2s",
                  background: "transparent",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.background = `${m.accent}11`)
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.background = "transparent")
                }
              >
                {/* Mascot thumbnail */}
                <div
                  style={{
                    width: 52,
                    height: 52,
                    borderRadius: "50%",
                    background: m.bgGradient,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: `2px solid ${m.accent}44`,
                    flexShrink: 0,
                  }}
                >
                  <MascotSVG size={40} />
                </div>

                {/* Name & mascot */}
                <div style={{ flex: 1 }}>
                  <div
                    style={{
                      fontWeight: 800,
                      fontSize: "15px",
                      color: "#1a1a2e",
                      fontFamily: "'Comic Sans MS', 'Chalkboard SE', cursive",
                    }}
                  >
                    {m.name}
                  </div>
                  <div style={{ fontSize: "12px", color: "#8a7a9a" }}>
                    {m.mascot} · {m.age} yrs
                  </div>
                </div>

                {/* First skill chip */}
                <div
                  style={{
                    display: "flex",
                    gap: "6px",
                    flexWrap: "wrap",
                    justifyContent: "flex-end",
                    maxWidth: "200px",
                  }}
                >
                  {m.skills.slice(0, 1).map((skill) => (
                    <span
                      key={skill}
                      style={{
                        background: `${m.accent}18`,
                        border: `1px solid ${m.accent}44`,
                        borderRadius: "12px",
                        padding: "3px 10px",
                        fontSize: "10px",
                        color: m.accent,
                        fontWeight: 600,
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <span style={{ fontSize: "18px", color: m.accent, opacity: 0.6 }}>›</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
