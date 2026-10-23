import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import API from "../../api/axiosConfig";

export default function Instruction({ module }) {
  const { topic, level } = useParams();
  const navigate = useNavigate();
  const [quizInfo, setQuizInfo] = useState(null);

  useEffect(() => {
    // optional: fetch quiz metadata from backend (instructions, duration)
    // For now, we build a simple default instruction per module.
    const name = topic || level;
    setQuizInfo({
      title: `${module === "coding" ? (level || "coding") : (topic || "quiz")}`,
      instructions:
        module === "aptitude"
          ? "+4 correct, -1 wrong. Edit answers before submit."
          : module === "general"
          ? "+2 correct, -0.5 wrong. Edit answers before submit."
          : "Coding: write code, no negative marking."
      , durationMinutes: module === "coding" ? 15 : 10
    });
  }, [module, topic, level]);

  if (!quizInfo) return <div>Loading...</div>;

  const name = topic || level;

  return (
    <div style={{ padding: 20 }}>
      <h2>Instructions — {quizInfo.title}</h2>
      <p>{quizInfo.instructions}</p>
      <p>Duration: {quizInfo.durationMinutes} minutes</p>
      <button onClick={() => navigate(`/${module}/quiz/${name}`)}>Start Test</button>
    </div>
  );
}
