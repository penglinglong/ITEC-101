import { useState } from "react";
import { mascotSVGs } from "../assets/MascotSVGs";
import FloatingParticles from "./FloatingParticles";

export default function ProfileModal({ member, onClose }) {
  const [tab, setTab] = useState("about");
  const MascotSVG = mascotSVGs[member.mascot];

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 1000,
        background: "rgba(0,0,0,0.55)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "16px",
        backdropFilter: "blur(6px)",
      }}
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: member.bgGradient,
          borderRadius: "28px",
          padding: "32px",
          maxWidth: "480px",
          width: "fit-content",
          position: "relative",
          border: `3px solid ${member.accent}66`,
          boxShadow: `0 32px 80px ${member.accent}44`,
          maxHeight: "90vh",
          overflowY: "auto",
          animation: "popIn 0.35s cubic-bezier(0.34,1.56,0.64,1)",
        }}
      >
        <FloatingParticles color={member.accent} pattern={member.pattern} />

        {/* Close button */}
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: 16,
            right: 16,
            background: `${member.accent}22`,
            border: `1px solid ${member.accent}44`,
            borderRadius: "50%",
            width: 36,
            height: 36,
            fontSize: "18px",
            cursor: "pointer",
            zIndex: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: member.accent,
            fontWeight: 800,
          }}
        >
          ×
        </button>

        <div style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
          {/* Profile photo */}
          <div
            style={{
              width: "fit-content",
              height: "fit-content",
              background: "transparent",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 16px",
              boxShadow: `0 10px 30px ${member.accent}44`,
              border: `4px solid ${member.accent}88`,
              borderRadius: "24px",
              overflow: "hidden",
            }}
          >
            {(member.modalPhoto || member.photo) ? (
              <img
                src={member.modalPhoto || member.photo}
                alt={member.nickname}
                style={{
                  width: "auto",
                  height: "auto",
                  maxWidth: "100%",
                  maxHeight: 240,
                  display: "block",
                }}
              />
            ) : (
              <MascotSVG size={88} />
            )}
          </div>

          <div
            style={{
              fontSize: "11px",
              fontWeight: 700,
              letterSpacing: "0.15em",
              color: member.accent,
              textTransform: "uppercase",
              marginBottom: "6px",
              fontFamily: "'Comic Sans MS', 'Chalkboard SE', cursive",
            }}
          >
            ✨ {member.mascot} vibes ✨
          </div>

          <h2
            style={{
              fontSize: "22px",
              fontWeight: 900,
              color: "#1a1a2e",
              margin: "0 0 4px",
              fontFamily: "'Comic Sans MS', 'Chalkboard SE', cursive",
            }}
          >
            {member.name}
          </h2>
          <p style={{ fontSize: "13px", color: "#5a5a7a", margin: "0 0 20px" }}>
            ({member.nickname}) · {member.age} yrs old · {member.school}
          </p>

          {/* Tabs */}
          <div
            style={{
              display: "flex",
              gap: "8px",
              justifyContent: "center",
              marginBottom: "20px",
            }}
          >
            {["about", "skills", "contact"].map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                style={{
                  padding: "7px 18px",
                  borderRadius: "20px",
                  background: tab === t ? member.accent : `${member.accent}18`,
                  color: tab === t ? "white" : member.accent,
                  border: `1.5px solid ${member.accent}66`,
                  fontWeight: 700,
                  fontSize: "12px",
                  cursor: "pointer",
                  textTransform: "capitalize",
                  transition: "all 0.2s",
                  fontFamily: "'Comic Sans MS', 'Chalkboard SE', cursive",
                }}
              >
                {t}
              </button>
            ))}
          </div>

          {/* Tab: About */}
          {tab === "about" && (
            <div
              style={{
                background: "rgba(255,255,255,0.7)",
                borderRadius: "16px",
                padding: "20px",
                textAlign: "left",
                backdropFilter: "blur(4px)",
              }}
            >
              <p style={{ fontSize: "13px", color: "#3a3a5a", lineHeight: 1.7, margin: 0 }}>
                Hi there! I'm <strong>{member.nickname}</strong>, a {member.age}-year-old
                student at CvSU Naic. My Sanrio bestie is{" "}
                <strong>{member.mascot}</strong> {member.mascotEmoji} — we totally match
                vibes! I love hanging out with friends, learning new things, and bringing
                good energy wherever I go~ 🌸
              </p>
            </div>
          )}

          {/* Tab: Skills */}
          {tab === "skills" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {member.skills.map((skill, i) => (
                <div
                  key={skill}
                  style={{
                    background: "rgba(255,255,255,0.7)",
                    borderRadius: "14px",
                    padding: "12px 16px",
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    backdropFilter: "blur(4px)",
                    border: `1px solid ${member.accent}33`,
                  }}
                >
                  <span
                    style={{
                      width: 28,
                      height: 28,
                      borderRadius: "50%",
                      background: member.accent,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "12px",
                      fontWeight: 800,
                      color: "white",
                      flexShrink: 0,
                    }}
                  >
                    {i + 1}
                  </span>
                  <span style={{ fontSize: "13px", color: "#2a2a3e", fontWeight: 600 }}>
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* Tab: Contact */}
          {tab === "contact" && (
            <div
              style={{
                background: "rgba(255,255,255,0.7)",
                borderRadius: "16px",
                padding: "20px",
                backdropFilter: "blur(4px)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  padding: "14px",
                  background: `${member.accent}11`,
                  borderRadius: "12px",
                  border: `1px solid ${member.accent}33`,
                }}
              >
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: "50%",
                    background: member.accent,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "18px",
                    flexShrink: 0,
                  }}
                >
                  ✉️
                </div>
                <div>
                  <div style={{ fontSize: "11px", color: "#7a7a9a", marginBottom: "2px" }}>
                    Gmail
                  </div>
                  <div
                    style={{
                      fontSize: "13px",
                      color: "#2a2a3e",
                      fontWeight: 700,
                      wordBreak: "break-all",
                    }}
                  >
                    {member.email}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
