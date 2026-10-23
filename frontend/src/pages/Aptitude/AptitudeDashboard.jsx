import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import IModal from "../../components/IModal";

export default function AptitudeDashboard() {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState(null);

  const modules = [
    { title: "Probability", desc: "Test Probability", path: "/aptitude/instruction/probability" },
    { title: "Permutations", desc: "Test Permutations", path: "/aptitude/instruction/permutations" },
    { title: "Speed", desc: "Test Speed", path: "/aptitude/instruction/speed" },
    { title: "Blood Relations", desc: "Test Blood Relations", path: "/aptitude/instruction/blood-relations" },
  ];

  // Updated, more highlighted gradient for cards
  const cardGradient = "linear-gradient(135deg, #667eea 0%, #764ba2 100%)";

  const openModal = (topic) => {
    setSelectedTopic(topic);
    setShowModal(true);
  };

  const closeModal = () => {
    setSelectedTopic(null);
    setShowModal(false);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundImage: "url('/aptitude.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "40px 20px",
        fontFamily: "'Poppins', sans-serif",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Heading */}
      <h1
        style={{
          fontSize: "2.3rem",
          fontWeight: 700,
          marginBottom: "40px",
          textAlign: "center",
          color: "#111",
          textShadow: "1px 1px 4px rgba(255,255,255,0.8)",
        }}
      >
        Aptitude 
      </h1>

      {/* Cards Grid - 2 columns, 2 rows */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "30px",
          maxWidth: "620px",
          width: "100%",
          justifyContent: "center",
        }}
      >
        {modules.map((m, i) => (
          <div
            key={i}
            style={{
              background: cardGradient,
              borderRadius: "18px",
              padding: "28px",
              textAlign: "center",
              boxShadow: "0 12px 28px rgba(38, 50, 56, 0.4)",
              color: "#fff",
              height: "240px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              cursor: "pointer",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              minWidth: "280px",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.07)";
              e.currentTarget.style.boxShadow = "0 18px 38px rgba(38, 50, 56, 0.6)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "0 12px 28px rgba(38, 50, 56, 0.4)";
            }}
          >
            <div>
              <h2
                style={{
                  fontSize: "1.4rem",
                  fontWeight: 600,
                  marginBottom: 8,
                }}
              >
                {m.title}
              </h2>
              <p
                style={{
                  fontSize: "1rem",
                  fontWeight: 400,
                  userSelect: "none",
                }}
              >
                {m.desc}
              </p>
            </div>
            <button
              onClick={() => openModal(m.title)}
              style={{
                padding: "10px 22px",
                borderRadius: "25px",
                border: "none",
                background: "linear-gradient(135deg, #42a5f5, #1e88e5)",
                color: "#fff",
                fontWeight: 600,
                cursor: "pointer",
                boxShadow: "0 6px 14px rgba(0,0,0,0.2)",
                alignSelf: "center",
                transition: "background 0.3s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "linear-gradient(135deg, #1e88e5, #42a5f5)")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "linear-gradient(135deg, #42a5f5, #1e88e5)")}
            >
              Start
            </button>
          </div>
        ))}
      </div>

      {/* Bottom Back Button */}
      <div style={{ textAlign: "center", marginTop: "60px" }}>
        <button
          onClick={() => navigate("/dashboard")}
          style={backButtonStyle}
        >
          ← Back to Dashboard
        </button>
      </div>

      {/* Instruction Modal */}
      {showModal && (
        <IModal
          topic={selectedTopic}
          onClose={closeModal}
          onStart={() => {
            closeModal();
            // navigate to quiz page with selected topic lowercase and no spaces
            const topicPath = selectedTopic.toLowerCase().replace(/\s+/g, '-');
            navigate(`/aptitude/quiz/${topicPath}`);
          }}
        />
      )}
    </div>
  );
}

// Back button style
const backButtonStyle = {
  padding: "10px 22px",
  borderRadius: "25px",
  border: "none",
  background: "linear-gradient(135deg, #8e44ad, #e91e63)",
  color: "#fff",
  fontWeight: 600,
  cursor: "pointer",
  marginBottom: "30px",
  boxShadow: "0 4px 12px rgba(0,0,0,0.25)",
};
