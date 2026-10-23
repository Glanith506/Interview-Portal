import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function Profile() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const colors = {
    containerBg:
      "linear-gradient(135deg, rgba(255,255,255,0.7), rgba(255,255,255,0.5))",
    containerBorder: "1.5px solid rgba(255, 255, 255, 0.9)",
    statsBg: "rgba(255, 255, 255, 0.45)",
    statsBorder: "1px solid rgba(255, 255, 255, 0.6)",
    heading: "#000",
    label: "#333",
    value: "#111",
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: "url('/profile.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        fontFamily: "'Roboto', sans-serif",
        padding: "20px",
      }}
    >
      <div
        style={{
          background: colors.containerBg,
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          padding: "30px 25px", // reduced padding
          borderRadius: "18px",
          boxShadow:
            "0 12px 28px rgba(0,0,0,0.25), 0 0 20px rgba(255,255,255,0.5)",
          color: colors.value,
          maxWidth: "380px", // smaller width
          width: "100%",
          textAlign: "center",
          border: colors.containerBorder,
        }}
      >
        {/* Heading */}
        <h2
          style={{
            fontSize: "1.8rem", // smaller heading
            fontWeight: 800,
            marginBottom: "20px",
            color: colors.heading,
            fontFamily: "'Inter', sans-serif",
          }}
        >
          My Profile
        </h2>

        {/* Info */}
        <div style={{ marginBottom: 20 }}>
          <p style={{ fontSize: "0.95rem", margin: "6px 0", color: colors.label }}>
            Name:{" "}
            <span style={{ color: colors.value, fontWeight: 500 }}>
              {user?.name || "Guest"}
            </span>
          </p>
          <p style={{ fontSize: "0.95rem", margin: "6px 0", color: colors.label }}>
            Email:{" "}
            <span style={{ color: colors.value, fontWeight: 500 }}>
              {user?.email || "guest@example.com"}
            </span>
          </p>
          <p
            style={{
              fontSize: "0.85rem",
              marginTop: 10,
              color: "#555",
              opacity: 0.9,
            }}
          >
            📅 Joined: Jan 2025
          </p>
        </div>

        {/* Stats */}
        <div
          style={{
            background: colors.statsBg,
            borderRadius: "14px",
            padding: "16px",
            marginBottom: 22,
            border: colors.statsBorder,
            fontSize: "0.95rem",
            lineHeight: "1.5",
            color: colors.label,
          }}
        >
          <p style={{ margin: "8px 0" }}>
            🎯 Quizzes Completed:{" "}
            <span style={{ fontWeight: 600, color: colors.value }}>12</span>
          </p>
          <p style={{ margin: "8px 0" }}>
            📊 Accuracy:{" "}
            <span style={{ fontWeight: 600, color: colors.value }}>82%</span>
          </p>
          <p style={{ margin: "8px 0" }}>
            🏆 Highest Score:{" "}
            <span style={{ fontWeight: 600, color: colors.value }}>95%</span>
          </p>
        </div>

        {/* Motivation */}
        <p
          style={{
            fontStyle: "italic",
            color: "#444",
            marginBottom: "25px",
            fontSize: "0.9rem",
          }}
        >
          Keep learning, keep growing 🚀
        </p>

        {/* Buttons */}
        <div style={{ display: "flex", justifyContent: "center", gap: "14px" }}>
          <button
            onClick={() => navigate("/dashboard")}
            style={buttonStyle("#1976D2", "#42A5F5", "#fff")}
          >
            Back to Dashboard
          </button>

          <button
            onClick={() => {
              logout();
              navigate("/auth");
            }}
            style={buttonStyle("#D32F2F", "#F44336", "#fff")}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

const buttonStyle = (start, end, textColor) => ({
  padding: "8px 20px", // smaller buttons
  borderRadius: "22px",
  border: "none",
  background: `linear-gradient(135deg, ${start}, ${end})`,
  color: textColor,
  fontWeight: 600,
  cursor: "pointer",
  fontSize: "0.9rem",
  boxShadow: "0px 4px 12px rgba(0,0,0,0.25), 0 0 8px rgba(255,255,255,0.4)",
  transition: "all 0.25s ease",
  minWidth: "120px",
  textAlign: "center",
  userSelect: "none",
  outline: "none",
});
