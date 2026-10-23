import React from "react";
import { useNavigate } from "react-router-dom";
import QuizCard from "../../components/QuizCard";
import { useAuth } from "../../context/AuthContext";

export default function Dashboard() {
  const navigate = useNavigate();
  const { logout, user } = useAuth();

  return (
    <div
      style={{
        backgroundImage: "url('/home.jpg')", // full background
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        padding: 20,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        color: "#fff",
      }}
    >
      <div style={{ width: "100%", maxWidth: 900 }}>
        {/* Title */}
        <h1
          style={{
            fontSize: "3rem",
            fontWeight: "900",
            color: "#004d40", // deep teal
            textAlign: "center",
            marginBottom: 10,
            textShadow: "0px 3px 6px rgba(0,0,0,0.4)",
            letterSpacing: "1px",
          }}
        >
          Interview Portal
        </h1>

        {/* Welcome */}
        <p
          style={{
            textAlign: "center",
            marginBottom: 20,
            fontSize: "1.4rem",
            fontWeight: "700",
            color: "#333", // dark gray
            textShadow: "0px 2px 4px rgba(0,0,0,0.4)",
          }}
        >
          Welcome <b style={{ color: "#004d40" }}>{user?.name || "User"}</b>
        </p>

        {/* Cards */}
        <div
          style={{
            display: "flex",
            gap: 40,
            flexWrap: "wrap",
            justifyContent: "center",
            marginBottom: 60,
          }}
        >
          <QuizCard
            title="Aptitude"
            description="Probability, Permutations, Speed..."
            path="/aptitude"
            style={{ width: 320, minHeight: 180 }}
          />
          <QuizCard
            title="Coding"
            description="Easy / Medium / Hard coding tests"
            path="/coding"
            style={{ width: 320, minHeight: 180 }}
          />
          <QuizCard
            title="General"
            description="GK, Current Affairs, Logical Reasoning"
            path="/general"
            style={{ width: 320, minHeight: 180 }}
          />
          {/* ✅ New Resume Building Module */}
          <QuizCard
            title="Resume Building"
            description="Choose a template and build your professional resume"
            path="/resume"
            style={{ width: 320, minHeight: 180 }}
          />
        </div>

        {/* Buttons */}
        <div style={{ textAlign: "center" }}>
          <button
            onClick={() => navigate("/profile")}
            style={{
              padding: "10px 20px",
              borderRadius: 25,
              border: "none",
              background: "linear-gradient(135deg, #009688, #00796b)", // teal gradient
              color: "#fff",
              fontWeight: "bold",
              cursor: "pointer",
              marginRight: 12,
              transition: "0.3s",
              boxShadow: "0px 4px 10px rgba(0,0,0,0.25)",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.background =
                "linear-gradient(135deg, #00796b, #004d40)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.background =
                "linear-gradient(135deg, #009688, #00796b)")
            }
          >
            Profile
          </button>

          <button
            onClick={() => {
              logout();
              navigate("/auth");
            }}
            style={{
              padding: "10px 20px",
              borderRadius: 25,
              border: "none",
              background: "linear-gradient(135deg, #e53935, #c62828)", // red gradient
              color: "#fff",
              fontWeight: "bold",
              cursor: "pointer",
              transition: "0.3s",
              boxShadow: "0px 4px 10px rgba(0,0,0,0.25)",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.background =
                "linear-gradient(135deg, #c62828, #b71c1c)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.background =
                "linear-gradient(135deg, #e53935, #c62828)")
            }
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
