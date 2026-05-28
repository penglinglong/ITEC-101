import { useState, useEffect, useRef } from "react";

import "../src/assets/animations.css";

import members from "./data/members";
import StarField from "./components/StarField";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProfileModal from "./components/ProfileModal";
import HomePage from "./pages/HomePage";
import MembersPage from "./pages/MembersPage";

export default function App() {
  const [page, setPage] = useState("home");
  const [selectedMember, setSelectedMember] = useState(null);
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [sparkles, setSparkles] = useState([]);
  const sparkleId = useRef(0);

  // Track cursor position
  useEffect(() => {
    const handleMove = (e) => setCursorPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  // Spawn sparkle on click
  const handleClick = (e) => {
    const id = sparkleId.current++;
    setSparkles((prev) => [...prev, { id, x: e.clientX, y: e.clientY }]);
    setTimeout(() => setSparkles((prev) => prev.filter((s) => s.id !== id)), 800);
  };

  return (
    <div
      onClick={handleClick}
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(160deg, #fff0f8 0%, #f0f8ff 40%, #f8fff0 70%, #fff8f0 100%)",
        position: "relative",
        fontFamily: "'Comic Sans MS', 'Chalkboard SE', cursive",
        overflowX: "hidden",
      }}
    >
      {/* Background stars */}
      <StarField />

      {/* Cursor glow */}
      <div
        style={{
          position: "fixed",
          left: cursorPos.x - 10,
          top: cursorPos.y - 10,
          width: 20,
          height: 20,
          borderRadius: "50%",
          background: "radial-gradient(circle, #f5a8c844, transparent)",
          pointerEvents: "none",
          zIndex: 9998,
          transition: "left 0.05s, top 0.05s",
        }}
      />

      {/* Click sparkles */}
      {sparkles.map((s) => (
        <div
          key={s.id}
          style={{
            position: "fixed",
            left: s.x - 12,
            top: s.y - 12,
            width: 24,
            height: 24,
            fontSize: "18px",
            pointerEvents: "none",
            zIndex: 9999,
            animation: "sparkleOut 0.8s ease-out forwards",
            userSelect: "none",
          }}
        >
          ✨
        </div>
      ))}

      {/* Navigation header */}
      <Header page={page} setPage={setPage} />

      {/* Page content */}
      <main
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "40px 24px",
          position: "relative",
          zIndex: 1,
        }}
      >
        {page === "home" && (
          <HomePage setPage={setPage} setSelectedMember={setSelectedMember} />
        )}
        {page === "members" && (
          <MembersPage setSelectedMember={setSelectedMember} />
        )}
      </main>

      {/* Footer */}
      <Footer />

      {/* Profile modal (portal-like, rendered at root) */}
      {selectedMember && (
        <ProfileModal
          member={selectedMember}
          onClose={() => setSelectedMember(null)}
        />
      )}
    </div>
  );
}
