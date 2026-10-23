import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import IModal from "../../components/IModal";

export default function CodingDashboard() {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [selectedLevel, setSelectedLevel] = useState(null);

  const levels = [
    { key: "easy", label: "Easy", desc: "Easy coding problems" },
    { key: "medium", label: "Medium", desc: "Medium coding problems" },
    { key: "hard", label: "Hard", desc: "Hard coding problems" },
  ];

  const cardColor = "#1e3a8a";

  const openModal = (level) => {
    setSelectedLevel(level);
    setShowModal(true);
  };

  const closeModal = () => {
    setSelectedLevel(null);
    setShowModal(false);
  };

  return (
    <div
      style={{
        padding: 40,
        minHeight: "100vh",
        backgroundImage: "url('/coding.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        fontFamily: "'Poppins', sans-serif",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* Heading */}
      <h2
        style={{
          color: "white",
          textAlign: "center",
          fontSize: "2.3rem",
          fontWeight: "700",
          marginBottom: "40px",
          textShadow: "1px 1px 4px rgba(0,0,0,0.6)",
        }}
      >
        Coding Test Levels
      </h2>

      {/* Cards */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "30px",
          maxWidth: "900px",
          margin: "0 auto",
        }}
      >
        {levels.map((l) => (
          <div
            key={l.key}
            style={{
              background: cardColor,
              color: "white",
              padding: "28px",
              borderRadius: "12px",
              width: "280px",
              textAlign: "center",
              boxShadow: "0 6px 15px rgba(0,0,0,0.5)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              cursor: "pointer",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "scale(1.05)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform = "scale(1)")
            }
          >
            <h3 style={{ marginBottom: "10px", fontSize: "1.3rem" }}>
              {l.label}
            </h3>
            <p style={{ marginBottom: "20px" }}>{l.desc}</p>
            <button
              onClick={() => openModal(l.label)}
              style={{
                padding: "10px 20px",
                border: "none",
                borderRadius: "20px",
                background: "#ff9800",
                color: "white",
                cursor: "pointer",
                fontWeight: "bold",
                boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
                transition: "background 0.3s ease",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = "#e68900")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = "#ff9800")
              }
            >
              Start
            </button>
          </div>
        ))}
      </div>

      {/* Back Button */}
      <div style={{ marginTop: "50px" }}>
        <button
          onClick={() => navigate("/dashboard")}
          style={{
            padding: "10px 22px",
            borderRadius: "25px",
            border: "none",
            background: "linear-gradient(135deg, #8e44ad, #e91e63)",
            color: "#fff",
            fontWeight: 600,
            cursor: "pointer",
            boxShadow: "0 4px 12px rgba(0,0,0,0.25)",
          }}
        >
          ← Back to Dashboard
        </button>
      </div>

      {/* Instruction Modal */}
      {showModal && (
        <IModal
          topic={selectedLevel}
          onClose={closeModal}
          onStart={() => {
            closeModal();
            const topicPath = selectedLevel.toLowerCase();
            navigate(`/coding/quiz/${topicPath}`);
          }}
        />
      )}
    </div>
  );
}
