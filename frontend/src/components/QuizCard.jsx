import React from "react";
import { useNavigate } from "react-router-dom";

export default function QuizCard({ title, description, path }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(path)}
      style={{
        background: "#d4c497", // ✅ Light beige card
        color: "#000",
        borderRadius: 15,
        padding: 20,
        width: 280,
        cursor: "pointer",
        boxShadow: "0 6px 16px rgba(0,0,0,0.2)",
        transition: "transform 0.2s, box-shadow 0.2s",
        textAlign: "center",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-5px)";
        e.currentTarget.style.boxShadow = "0 12px 24px rgba(0,0,0,0.25)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 6px 16px rgba(0,0,0,0.2)";
      }}
    >
      {/* Title */}
      <h3 style={{ marginBottom: 10, fontWeight: "bold", fontSize: "18px" }}>
        {title}
      </h3>

      {/* Description */}
      <p style={{ fontSize: 14, marginBottom: 20, color: "#333" }}>
        {description}
      </p>

      {/* ✅ Start Button (Brown-Golden for better match) */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          navigate(path);
        }}
        style={{
          padding: "8px 20px",
          borderRadius: "20px",
          border: "none",
          backgroundColor: "#8b5e3c", // warm brown
          color: "#fff",
          fontWeight: "600",
          fontSize: "14px",
          cursor: "pointer",
          boxShadow: "0px 3px 8px rgba(0,0,0,0.2)",
          transition: "all 0.2s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = "#6b4226"; // darker brown
          e.currentTarget.style.transform = "translateY(-2px)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = "#8b5e3c";
          e.currentTarget.style.transform = "translateY(0)";
        }}
      >
        Start
      </button>
    </div>
  );
}
