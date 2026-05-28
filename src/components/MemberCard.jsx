import { useState } from "react";
import { mascotSVGs } from "../assets/MascotSVGs";
import FloatingParticles from "./FloatingParticles";

export default function MemberCard({ member, onClick }) {
  const [hovered, setHovered] = useState(false);
  const MascotSVG = mascotSVGs[member.mascot];

  return (
    <div
      onClick={() => onClick(member)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: member.bgGradient,
        borderRadius: "24px",
        padding: "28px 24px",
        cursor: "pointer",
        position: "relative",
        overflow: "hidden",
        border: `2.5px solid ${member.accent}44`,
        boxShadow: hovered
          ? `0 20px 40px ${member.accent}44, 0 0 0 3px ${member.accent}33`
          : `0 8px 24px ${member.accent}22`,
        transform: hovered
          ? "translateY(-8px) scale(1.02)"
          : "translateY(0) scale(1)",
        transition: "all 0.35s cubic-bezier(0.34,1.56,0.64,1)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "14px",
      }}
    >
      <FloatingParticles color={member.accent} pattern={member.pattern} />

      {/* Profile image */}
      <div
        style={{
          background: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: `0 6px 20px ${member.accent}44`,
          position: "relative",
          zIndex: 1,
          border: `3px solid ${member.accent}66`,
          overflow: "hidden",
        }}
      >
        {member.photo ? (
          <img
            src={member.photo}
            alt={member.nickname}
            style={{
              width: "auto",
              height: "auto",
              maxWidth: "100%",
              maxHeight: "240px",
              display: "block",
            }}
          />
        ) : (
          <MascotSVG size={70} />
        )}
      </div>

      {/* Name block */}
      <div style={{ textAlign: "center", position: "relative", zIndex: 1 }}>
        <div
          style={{
            fontSize: "11px",
            fontWeight: 700,
            letterSpacing: "0.15em",
            color: member.accent,
            textTransform: "uppercase",
            marginBottom: "4px",
            fontFamily: "'Comic Sans MS', 'Chalkboard SE', cursive",
          }}
        >
          {member.mascot} {member.mascotEmoji}
        </div>
        <div
          style={{
            fontSize: "19px",
            fontWeight: 800,
            color: "#2a2a3e",
            lineHeight: 1.2,
            fontFamily: "'Comic Sans MS', 'Chalkboard SE', cursive",
          }}
        >
          {member.nickname}
        </div>
        <div style={{ fontSize: "12px", color: "#5a5a7a", marginTop: "4px" }}>
          {member.age} yrs old
        </div>
      </div>

      {/* Skill chips */}
      <div
        style={{
          display: "flex",
          gap: "6px",
          flexWrap: "wrap",
          justifyContent: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        {member.skills.slice(0, 2).map((skill) => (
          <span
            key={skill}
            style={{
              background: `${member.accent}22`,
              border: `1px solid ${member.accent}66`,
              borderRadius: "20px",
              padding: "3px 10px",
              fontSize: "10px",
              color: member.accent,
              fontWeight: 600,
            }}
          >
            {skill}
          </span>
        ))}
      </div>

      {/* CTA hint */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          fontSize: "11px",
          color: member.accent,
          fontWeight: 600,
          marginTop: "auto",
          opacity: hovered ? 1 : 0.5,
          transition: "opacity 0.2s",
        }}
      >
        {hovered ? "✨ Click to view profile ✨" : "Tap to explore →"}
      </div>
    </div>
  );
}
