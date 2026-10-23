import React, { useState, useEffect, useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import codingQuestions from "../../questions/coding/coding";

export default function QuizPageCoding({ module = "coding" }) {
  const { topic, level } = useParams();
  const navigate = useNavigate();

  const t = topic?.toLowerCase();
  const l = level?.toLowerCase();
  const codingTopics = ["coding", "python", "javascript"];

  const questions = useMemo(() => {
    if (!t && !l) return [];
    const filtered = codingQuestions.filter(
      (q) =>
        (!t || (codingTopics.includes(t) && q.topic.toLowerCase() === t)) &&
        (!l || q.level?.toLowerCase() === l)
    );

    if (filtered.length > 0) return filtered;

    return Array.from({ length: 10 }, (_, i) => ({
      id: i + 1,
      question: `Sample coding question ${i + 1} for ${topic || level}`,
      options: ["Option A", "Option B", "Option C", "Option D"],
      type: "mcq",
    }));
  }, [t, l, topic, level]);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [codeAnswers, setCodeAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(1200);

  useEffect(() => {
    const savedAnswers = localStorage.getItem("codingQuizAnswers");
    if (savedAnswers) {
      try {
        const parsed = JSON.parse(savedAnswers);
        setAnswers(parsed.answers || {});
        setCodeAnswers(parsed.codeAnswers || {});
      } catch {}
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "codingQuizAnswers",
      JSON.stringify({ answers, codeAnswers })
    );
  }, [answers, codeAnswers]);

  useEffect(() => {
    if (timeLeft === 0) {
      alert("Time is up! Your quiz will be submitted automatically.");
      handleSubmit();
      return;
    }
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  const handleAnswer = (qIndex, opt) => {
    setAnswers((prev) => ({ ...prev, [qIndex]: opt }));
  };

  const handleCodeChange = (qIndex, newCode) => {
    setCodeAnswers((prev) => ({ ...prev, [qIndex]: newCode }));
  };

  const clearAnswer = (qIndex) => {
    setAnswers((prev) => {
      const updated = { ...prev };
      delete updated[qIndex];
      return updated;
    });
    setCodeAnswers((prev) => {
      const updated = { ...prev };
      delete updated[qIndex];
      return updated;
    });
  };

const handleSubmit = () => {
  const answeredCount =
    Object.keys(answers || {}).length +
    Object.keys(codeAnswers || {}).length;

  if (
    window.confirm(
      `You have answered ${answeredCount} out of ${
        questions.length
      } questions.\nAre you sure you want to submit?`
    )
  ) {
    localStorage.removeItem("codingQuizAnswers");
    navigate(`/${module}/result/${topic || level}`, {
      state: { answers, codeAnswers, questions },
    });
  }
};
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  if (questions.length === 0) {
    return (
      <div style={{ padding: "20px" }}>
        <h2>
          No questions found for topic "{topic || "(none)"}" and level "
          {level || "(none)"}"
        </h2>
      </div>
    );
  }

  return (
    <div className="quiz-page">
      <style>{`
        body {
          margin: 0;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background: #f5f7fa;
        }
        .quiz-page {
          display: flex;
          flex-direction: column;
          height: 100vh;
        }
        .quiz-header {
          background: #2c3e50;
          color: white;
          padding: 15px 30px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .quiz-title {
          font-size: 18px;
          font-weight: bold;
        }
        .quiz-status {
          display: flex;
          gap: 15px;
          align-items: center;
        }
        .status-badge {
          background: #34495e;
          padding: 8px 16px;
          border-radius: 20px;
          font-size: 14px;
          font-weight: 600;
        }
        .status-badge.time {
          background: #e67e22;
        }
        .status-badge.answered {
          background: #27ae60;
        }
        .quiz-body {
          display: flex;
          flex: 1;
          overflow: hidden;
        }
        .question-section {
          flex: 3;
          padding: 30px;
          margin: 20px;
          background: white;
          border-radius: 12px;
          box-shadow: 0 4px 10px rgba(0,0,0,0.1);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .sidebar {
          flex: 1;
          padding: 20px;
          background: #fff;
          margin: 20px 20px 20px 0;
          border-radius: 12px;
          box-shadow: 0 4px 10px rgba(0,0,0,0.1);
          overflow-y: auto;
          max-height: calc(100vh - 100px);
        }
        .question-section h3 {
          margin-bottom: 20px;
          font-size: 20px;
          font-weight: 600;
          color: #333;
        }
        label {
          display: block;
          margin: 8px 0;
          font-size: 16px;
          cursor: pointer;
        }
        input[type="radio"] {
          margin-right: 8px;
        }
        textarea.code-editor {
          width: 95%;
          min-height: 220px;
          font-family: monospace;
          font-size: 15px;
          background-color: #272822;
          color: #f8f8f2;
          padding: 15px;
          border-radius: 8px;
          border: none;
          resize: vertical;
          margin: 10px auto;
          display: block;
        }
        .clear-btn {
          margin-top: 15px;
          background: #ff6961;
          color: white;
          padding: 8px 16px;
          border: none;
          border-radius: 6px;
          cursor: pointer;
          font-size: 14px;
          align-self: flex-start;
        }
        .clear-btn:hover {
          background: #e63946;
        }

        /* === BUTTONS === */
        .nav-buttons {
          display: flex;
          justify-content: space-between;  /* left vs right */
          align-items: center;
          margin-top: 20px;
        }
        .nav-left {
          display: flex;
          gap: 20px;
        }
        .nav-right {
          display: flex;
        }
        .nav-buttons button {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 160px;
          height: 45px;
          font-size: 15px;
          font-weight: 600;
          border: none;
          border-radius: 6px;
          cursor: pointer;
          transition: 0.3s;
          white-space: nowrap;
        }
        .nav-buttons .prev-next {
          background: #3498db;
          color: white;
        }
        .nav-buttons .prev-next:hover {
          background: #2980b9;
        }
        .nav-buttons .prev-next:disabled {
          background: #ddd;
          cursor: not-allowed;
        }
        .nav-buttons .submit-btn {
          background: #27ae60;
          color: white;
        }
        .nav-buttons .submit-btn:hover {
          background: #1e8449;
        }
        .nav-buttons .submit-btn:disabled {
          background: #bbb;
          cursor: not-allowed;
        }

        .sidebar h4 {
          margin-bottom: 15px;
          font-size: 18px;
          color: #333;
          text-align: center;
        }
        .question-nav {
          display: grid;
          grid-template-columns: repeat(auto-fill, 50px);
          gap: 12px;
          justify-content: center;
        }
        .question-circle {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          font-size: 15px;
          cursor: pointer;
          transition: transform 0.2s;
          color: white;
        }
        .question-circle.not-answered {
          background: #e74c3c;
        }
        .question-circle.answered {
          background: #2ecc71;
        }
        .question-circle.current {
          background: #f1c40f;
          color: black;
        }
        .question-circle:hover {
          transform: scale(1.1);
        }
      `}</style>

      <div className="quiz-header">
        <div className="quiz-title">
          {module.toUpperCase()} — {topic || level}
        </div>
        <div className="quiz-status">
          <div className="status-badge answered">
            Answered: {Object.keys(answers).length}/{questions.length}
          </div>
          <div className="status-badge time">
            ⏱ {minutes}:{seconds.toString().padStart(2, "0")}
          </div>
        </div>
      </div>

      <div className="quiz-body">
        <div className="question-section">
          <div>
            <h3>
              Q{currentQuestion + 1}: {questions[currentQuestion]?.question}
            </h3>

            {questions[currentQuestion]?.type === "mcq" &&
              questions[currentQuestion]?.options?.map((opt, idx) => (
                <label key={idx}>
                  <input
                    type="radio"
                    name={`q${currentQuestion}`}
                    value={opt}
                    checked={answers[currentQuestion] === opt}
                    onChange={() => handleAnswer(currentQuestion, opt)}
                  />
                  {opt}
                </label>
              ))}

            {questions[currentQuestion]?.starterCode && (
              <textarea
                className="code-editor"
                value={
                  codeAnswers[currentQuestion] !== undefined
                    ? codeAnswers[currentQuestion]
                    : questions[currentQuestion].starterCode
                }
                onChange={(e) =>
                  handleCodeChange(currentQuestion, e.target.value)
                }
                spellCheck={false}
                aria-label="Code editor"
              />
            )}

            <button
              className="clear-btn"
              onClick={() => clearAnswer(currentQuestion)}
            >
              Clear Answer
            </button>
          </div>

          {/* ✅ Buttons */}
          <div className="nav-buttons">
            {/* Prev + Next (left) */}
            <div className="nav-left">
              <button
                className="prev-next"
                onClick={() => setCurrentQuestion((prev) => prev - 1)}
                disabled={currentQuestion === 0}
              >
                Previous
              </button>
              <button
                className="prev-next"
                onClick={() => setCurrentQuestion((prev) => prev + 1)}
                disabled={currentQuestion === questions.length - 1}
              >
                Next
              </button>
            </div>

            {/* Submit (right) */}
            <div className="nav-right">
              <button
                className="submit-btn"
                onClick={handleSubmit}
                disabled={
                  Object.keys(answers).length === 0 &&
                  Object.keys(codeAnswers).length === 0
                }
              >
                Submit & Confirm
              </button>
            </div>
          </div>
        </div>

        <div className="sidebar">
          <h4>Question Navigator</h4>
          <div className="question-nav">
            {questions.map((_, index) => {
              let circleClass = "question-circle";
              if (index === currentQuestion) circleClass += " current";
              else if (answers[index] || codeAnswers[index])
                circleClass += " answered";
              else circleClass += " not-answered";

              return (
                <div
                  key={index}
                  className={circleClass}
                  onClick={() => setCurrentQuestion(index)}
                  title={`Question ${index + 1}`}
                >
                  {index + 1}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
    
  );
}
