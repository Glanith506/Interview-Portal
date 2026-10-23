import React from "react";

export default function IModal({ topic, onClose, onStart }) {
  const modalStyle = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)", // 👈 Center the modal
    backgroundColor: "#ffffff",
    padding: "28px 24px",
    borderRadius: "16px",
    width: "360px",
    maxWidth: "90%",
    boxShadow: "0 12px 32px rgba(0, 0, 0, 0.25)",
    zIndex: 1001,
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  };

  const overlayStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    height: "100vh",
    width: "100vw",
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    zIndex: 1000,
  };

  const titleStyle = {
    color: "#2563eb", // Tailwind blue-600
    fontWeight: 700,
    fontSize: "20px",
    textAlign: "center",
    marginBottom: "20px",
  };

  const closeButtonStyle = {
    position: "absolute",
    top: "14px",
    right: "18px",
    fontSize: "22px",
    border: "none",
    background: "none",
    cursor: "pointer",
    color: "#555",
  };

  const startButtonStyle = {
    width: "100%",
    padding: "12px 0",
    background: "linear-gradient(to right, #4f46e5, #3b82f6)", // Indigo to blue
    color: "#fff",
    fontSize: "16px",
    fontWeight: "600",
    border: "none",
    borderRadius: "25px",
    cursor: "pointer",
    boxShadow: "0 6px 16px rgba(59, 130, 246, 0.3)",
    marginTop: "24px",
    transition: "all 0.3s ease",
  };

  return (
    <>
      {/* Dim Background Overlay */}
      <div style={overlayStyle} onClick={onClose} />

      {/* Modal Box */}
      <div style={modalStyle}>
        <button onClick={onClose} style={closeButtonStyle} aria-label="Close">
          &times;
        </button>
        <div>
          <h3 style={titleStyle}>Instructions - {topic}</h3>
          <ul style={{ paddingLeft: "20px", lineHeight: 1.6, color: "#333", fontSize: "15px" }}>
            <li>You will have 20 questions.</li>
            <li>+2 for each correct answer, -1 for each wrong answer.</li>
            <li>You can review and edit your answers before submitting.</li>
          </ul>
          <button
            onClick={onStart}
            style={startButtonStyle}
            onMouseEnter={(e) =>
              (e.currentTarget.style.background = "linear-gradient(to right, #3b82f6, #4f46e5)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.background = "linear-gradient(to right, #4f46e5, #3b82f6)")
            }
          >
            Start Quiz
          </button>
        </div>
      </div>
    </>
  );
}
