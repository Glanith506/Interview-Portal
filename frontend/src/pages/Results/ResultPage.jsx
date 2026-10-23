import React, { useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

import probabilityQuestions from "../../questions/aptitude/probability";
import permutationQuestions from "../../questions/aptitude/permutations";
import speedQuestions from "../../questions/aptitude/speed";
import bloodQuestions from "../../questions/aptitude/blood";
import codingQuestions from "../../questions/coding/coding";
import {
  generalQuestions,
  currentAffairsQuestions,
  logicalReasoningQuestions,
} from "../../questions/general/general";

// Convert fractions or string numbers to decimal
const toDecimal = (str) => {
  if (!str) return null;
  if (typeof str !== "string") return str;
  if (str.includes("/")) {
    const [num, den] = str.split("/").map(Number);
    return num / den;
  }
  return parseFloat(str);
};

// Score calculation logic (+2 for correct, -1 for wrong)
function calculateScore(questions, submittedAnswers, forceIndexMode = false) {
  let score = 0;
  questions.forEach((q, index) => {
    const userAns = forceIndexMode
      ? submittedAnswers[index] || null // ✅ use index for general
      : submittedAnswers[q.id] ||
        submittedAnswers[String(q.id)] ||
        submittedAnswers[index] ||
        null;

    if (!userAns) return;

    // MCQs / aptitude scoring
    if (!q.starterCode && q.answer) {
      const normalizedUser = String(userAns).trim().toLowerCase();
      const normalizedCorrect = String(q.answer).trim().toLowerCase();

      if (
        toDecimal(normalizedUser) === toDecimal(normalizedCorrect) ||
        normalizedUser === normalizedCorrect
      ) {
        score += 2;
      } else {
        score -= 1;
      }
    }

    // Coding scoring
    
// Coding scoring
if (q.starterCode) {
  if (userAns && q.answerCode) {
    const cleanUser = userAns.replace(/\s/g, "");
    const cleanAnswer = q.answerCode.replace(/\s/g, "");

    if (cleanUser === cleanAnswer) {
      score += 2;
    }
  }

}
  });
  return Math.max(score, 0);
}

export default function ResultPage({ module }) {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { topic, level } = useParams();
  const name = topic || level;

  const submittedAnswers = {
    ...(state?.answers || {}),
    ...(state?.codeAnswers || {}),
  };

  let questions = [];
  let forceIndexMode = false;
  const t = name?.toLowerCase();

  if (t?.includes("probability")) questions = probabilityQuestions;
  else if (t?.includes("permutations")) questions = permutationQuestions;
  else if (t?.includes("speed")) questions = speedQuestions;
  else if (t?.includes("blood")) questions = bloodQuestions;
  else if (t?.includes("general") || t?.includes("gk")) {
    questions = generalQuestions;
    forceIndexMode = true; // ✅ fix for general
  } else if (t?.includes("current")) questions = currentAffairsQuestions;
  else if (t?.includes("logical")) questions = logicalReasoningQuestions;
  else if (["easy", "medium", "hard"].includes(t)) {
    questions = codingQuestions.filter((q) => q.level?.toLowerCase() === t);
  } else if (t?.includes("coding")) {
    questions = codingQuestions;
  }

  const score = calculateScore(questions, submittedAnswers, forceIndexMode);
  const maxScore = questions.length * 2;
  const percentage =
    maxScore > 0 ? ((score / maxScore) * 100).toFixed(2) : "0.00";
    useEffect(() => {
  const saveResult = async () => {
    try {
      await fetch("http://localhost:5000/api/results/save-result", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          module: module,       // Aptitude / Coding / General
          topic: name,          // probability / speed etc
          score: score,
          total: maxScore,
          percentage: percentage,
          answers: submittedAnswers
        })
      });
    } catch (error) {
      console.error("Error saving result:", error);
    }
  };

  saveResult();
}, []);

  const getGrade = () => {
    const percent = parseFloat(percentage);
    if (percent >= 90) return "A+";
    if (percent >= 80) return "A";
    if (percent >= 70) return "B+";
    if (percent >= 60) return "B";
    if (percent >= 50) return "C";
    return "F";
  };

  return (
    <div
      style={{
        fontFamily: "Segoe UI, Tahoma, Geneva, Verdana, sans-serif",
        padding: 20,
        maxWidth: 1000,
        margin: "auto",
      }}
    >
      <h1 style={{ textAlign: "center", marginBottom: 20 }}>
        {module.toUpperCase()} — {name} Result
      </h1>

      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          background: "#f0f4f8",
          padding: 20,
          borderRadius: 12,
          marginBottom: 30,
        }}
      >
        <div style={{ textAlign: "center" }}>
          <h3>Score</h3>
          <p style={{ fontSize: 24, fontWeight: "bold" }}>
            {score} / {maxScore}
          </p>
        </div>
        <div style={{ textAlign: "center" }}>
          <h3>Percentage</h3>
          <p style={{ fontSize: 24, fontWeight: "bold" }}>{percentage}%</p>
        </div>
        <div style={{ textAlign: "center" }}>
          <h3>Grade</h3>
          <p style={{ fontSize: 24, fontWeight: "bold" }}>{getGrade()}</p>
        </div>
      </div>

      <h2>Question Review</h2>
      <div>
        {questions.map((q, idx) => {
          const submitted = forceIndexMode
            ? submittedAnswers[idx] || "Not answered"
            : submittedAnswers[q.id] ||
              submittedAnswers[String(q.id)] ||
              submittedAnswers[idx] ||
              "Not answered";

          const correct = q.answer;
          const isCoding = q.starterCode || q.topic?.toLowerCase() === "coding";
          const isCorrect =
            !isCoding &&
            (toDecimal(submitted) === toDecimal(correct) ||
              String(submitted).trim().toLowerCase() ===
                String(correct).trim().toLowerCase());

          return (
            <div
              key={q.id || idx}
              style={{
                border: "1px solid #ddd",
                borderRadius: 10,
                marginBottom: 15,
                padding: 15,
                background: isCoding
                  ? "#f9f9f9"
                  : isCorrect
                  ? "#e6ffed"
                  : "#ffe6e6",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <h4 style={{ margin: 0 }}>
                  Q{idx + 1}: {q.question}
                </h4>
                {!isCoding && (
                  <span style={{ fontSize: 22 }}>
                    {isCorrect ? (
                      <FaCheckCircle color="green" />
                    ) : (
                      <FaTimesCircle color="crimson" />
                    )}
                  </span>
                )}
              </div>

              {!isCoding ? (
                <>
                  <p>
                    <strong>Submitted Answer:</strong> {submitted}
                  </p>
                  <p>
                    <strong>Correct Answer:</strong> {correct}
                  </p>
                </>
              ) : (
                <>
                  <p>
                    <strong>Your Code:</strong>
                  </p>
                  <pre
                    style={{
                      background: "#272822",
                      color: "#f8f8f2",
                      padding: "10px",
                      borderRadius: "6px",
                      overflowX: "auto",
                    }}
                  >
                    {submitted}
                  </pre>
                  {q.answerCode && (
                    <>
                      <p>
                        <strong>Correct Solution:</strong>
                      </p>
                      <pre
                        style={{
                          background: "#eee",
                          padding: "10px",
                          borderRadius: "6px",
                          overflowX: "auto",
                        }}
                      >
                        {q.answerCode}
                      </pre>
                    </>
                  )}
                </>
              )}
            </div>
          );
        })}
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: 30,
          gap: 15,
        }}
      >
        <button
          onClick={() => navigate(`/${module}/quiz/${name}`)}
          style={{
            padding: "10px 20px",
            borderRadius: 8,
            border: "none",
            background: "#3498db",
            color: "white",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Reattempt
        </button>
        <button
          onClick={() => navigate("/dashboard")}
          style={{
            padding: "10px 20px",
            borderRadius: 8,
            border: "none",
            background: "#27ae60",
            color: "white",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Back to Dashboard
        </button>
      </div>
    </div>
  );
}
