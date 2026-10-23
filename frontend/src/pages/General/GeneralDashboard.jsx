import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import IModal from "../../components/IModal";

export default function GeneralDashboard() {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState(null);

  const topics = [
    { title: "GK", desc: "Practice GK", path: "/general/instruction/gk" },
    { title: "Current Affairs", desc: "Practice Current Affairs", path: "/general/instruction/current-affairs" },
    { title: "Logical Reasoning", desc: "Practice Logical Reasoning", path: "/general/instruction/logical-reasoning" },
  ];

  // ✅ Card gradient changed to teal
  const cardGradient = "linear-gradient(135deg, #009688 0%, #26a69a 100%)";

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
        backgroundImage: "url('/general.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "40px 20px",
        fontFamily: "'Poppins', sans-serif",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* Heading */}
      <h1
        style={{
          fontSize: "2.3rem",
          fontWeight: 700,
          marginBottom: "40px",
          textAlign: "center",
          color: "#fff",
          textShadow: "2px 2px 6px rgba(0,0,0,0.6)",
        }}
      >
        General Quiz Modules
      </h1>

      {/* Cards Layout - 2 top, 1 bottom center */}
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
        {topics.slice(0, 2).map((m, i) => (
          <div
            key={i}
            style={cardStyle(cardGradient)}
            onMouseEnter={(e) => hoverEffect(e, true)}
            onMouseLeave={(e) => hoverEffect(e, false)}
          >
            <div>
              <h2 style={cardTitle}>{m.title}</h2>
              <p style={cardDesc}>{m.desc}</p>
            </div>
            <button
              onClick={() => openModal(m.title)}
              style={startButtonStyle}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background =
                  "linear-gradient(135deg, #d500f9, #f06292)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background =
                  "linear-gradient(135deg, #9c27b0, #e91e63)")
              }
            >
              Start
            </button>
          </div>
        ))}
      </div>

      {/* Third Card Centered */}
      <div style={{ marginTop: "30px", display: "flex", justifyContent: "center", width: "100%" }}>
        <div
          style={cardStyle(cardGradient)}
          onMouseEnter={(e) => hoverEffect(e, true)}
          onMouseLeave={(e) => hoverEffect(e, false)}
        >
          <div>
            <h2 style={cardTitle}>{topics[2].title}</h2>
            <p style={cardDesc}>{topics[2].desc}</p>
          </div>
          <button
            onClick={() => openModal(topics[2].title)}
            style={startButtonStyle}
            onMouseEnter={(e) =>
              (e.currentTarget.style.background =
                "linear-gradient(135deg, #d500f9, #f06292)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.background =
                "linear-gradient(135deg, #9c27b0, #e91e63)")
            }
          >
            Start
          </button>
        </div>
      </div>

      {/* Bottom Back Button */}
      <div style={{ textAlign: "center", marginTop: "60px" }}>
        <button onClick={() => navigate("/dashboard")} style={backButtonStyle}>
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
            const topicPath = selectedTopic.toLowerCase().replace(/\s+/g, "-");
            navigate(`/general/quiz/${topicPath}`);
          }}
        />
      )}
    </div>
  );
}

// Card style
const cardStyle = (gradient) => ({
  background: gradient,
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
});

const hoverEffect = (e, enter) => {
  if (enter) {
    e.currentTarget.style.transform = "scale(1.07)";
    e.currentTarget.style.boxShadow = "0 18px 38px rgba(38, 50, 56, 0.6)";
  } else {
    e.currentTarget.style.transform = "scale(1)";
    e.currentTarget.style.boxShadow = "0 12px 28px rgba(38, 50, 56, 0.4)";
  }
};

const cardTitle = {
  fontSize: "1.4rem",
  fontWeight: 600,
  marginBottom: 8,
};

const cardDesc = {
  fontSize: "1rem",
  fontWeight: 400,
  userSelect: "none",
};

// ✅ Start button style (purple → pink theme)
const startButtonStyle = {
  padding: "10px 22px",
  borderRadius: "25px",
  border: "none",
  background: "linear-gradient(135deg, #7c4785ff, #ea4e82ff)",
  color: "#fff",
  fontWeight: 600,
  cursor: "pointer",
  boxShadow: "0 6px 14px rgba(0,0,0,0.25)",
  alignSelf: "center",
  transition: "background 0.3s ease",
};

// ✅ Back button style (same purple → pink as Start button)
const backButtonStyle = {
  padding: "10px 22px",
  borderRadius: "25px",
  border: "none",
  background: "linear-gradient(135deg, #7c4785ff, #ea4e82ff)",
  color: "#fff",
  fontWeight: 600,
  cursor: "pointer",
  marginBottom: "30px",
  boxShadow: "0 4px 12px rgba(0,0,0,0.25)",
};
