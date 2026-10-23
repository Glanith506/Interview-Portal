import React, { useState, useEffect, useMemo, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";

// ✅ Import general question sets
import {
  generalQuestions,
  currentAffairsQuestions,
  logicalReasoningQuestions,
} from "../../questions/general/general";

export default function QuizPageGeneral({ module = "general" }) {
  const { topic, level } = useParams();
  const navigate = useNavigate();

  const t = topic?.toLowerCase();
  const l = level?.toLowerCase();

  // ✅ Select correct question set
  const questions = useMemo(() => {
    let qs = [];
    if (t?.includes("gk")) qs = generalQuestions;
    else if (t?.includes("current")) qs = currentAffairsQuestions;
    else if (t?.includes("logical")) qs = logicalReasoningQuestions;

    if (l && qs.length > 0) {
      const filtered = qs.filter(
        (q) => q.level && q.level.toLowerCase() === l
      );
      if (filtered.length > 0) return filtered;
    }

    return qs.length
      ? qs
      : Array.from({ length: 20 }, (_, i) => ({
          id: i + 1,
          question: `Sample ${topic || "general"} question ${i + 1}`,
          options: ["A", "B", "C", "D"],
        }));
  }, [t, l]);

  // ✅ State
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(1200); // 20 min

  // ✅ Restore answers
  useEffect(() => {
    const savedAnswers = localStorage.getItem("generalQuizAnswers");
    if (savedAnswers) {
      try {
        setAnswers(JSON.parse(savedAnswers));
      } catch {
        // ignore
      }
    }
  }, []);

  // ✅ Persist answers
  useEffect(() => {
    localStorage.setItem("generalQuizAnswers", JSON.stringify(answers));
  }, [answers]);

  // ✅ Submit handler
  const handleSubmit = useCallback(() => {
    if (
      window.confirm(
        `You have answered ${Object.keys(answers).length} out of ${
          questions.length
        } questions.\nAre you sure you want to submit?`
      )
    ) {
      localStorage.removeItem("generalQuizAnswers");
      navigate(`/${module}/result/${topic || level}`, {
        state: { answers, questions },
      });
    }
  }, [answers, questions, navigate, module, topic, level]);

  // ✅ Timer
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
  }, [timeLeft, handleSubmit]);

  // ✅ Answer handling
  const handleAnswer = (qIndex, opt) => {
    setAnswers((prev) => ({ ...prev, [qIndex]: opt }));
  };

  const clearAnswer = (qIndex) => {
    setAnswers((prev) => {
      const updated = { ...prev };
      delete updated[qIndex];
      return updated;
    });
  };

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="quiz-page">
      <style>{`
        body { margin: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background: #f5f7fa; }
        .quiz-page { display: flex; flex-direction: column; height: 100vh; }
        .quiz-header { background: #2c3e50; color: white; padding: 15px 30px; display: flex; justify-content: space-between; align-items: center; }
        .quiz-title { font-size: 18px; font-weight: bold; }
        .quiz-status { display: flex; gap: 15px; align-items: center; }
        .status-badge { background: #34495e; padding: 8px 16px; border-radius: 20px; font-size: 14px; font-weight: 600; }
        .status-badge.time { background: #e67e22; }
        .status-badge.answered { background: #27ae60; }
        .quiz-body { display: flex; flex: 1; overflow: hidden; }
        .question-section { flex: 3; padding: 30px; margin: 20px; background: white; border-radius: 12px; box-shadow: 0 4px 10px rgba(0,0,0,0.1); display: flex; flex-direction: column; justify-content: space-between; }
        .sidebar { flex: 1; padding: 20px; background: #fff; margin: 20px 20px 20px 0; border-radius: 12px; box-shadow: 0 4px 10px rgba(0,0,0,0.1); overflow-y: auto; max-height: calc(100vh - 100px); }
        .question-section h3 { margin-bottom: 20px; font-size: 20px; font-weight: 600; color: #333; }
        label { display: block; margin: 8px 0; font-size: 16px; cursor: pointer; }
        input[type="radio"] { margin-right: 8px; }
        .clear-btn { margin-top: 15px; background: #ff6961; color: white; padding: 6px 12px; border: none; border-radius: 6px; cursor: pointer; font-size: 14px; }
        .clear-btn:hover { background: #e63946; }
        
        /* ✅ Button section fixed */
        .nav-buttons {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 30px;
        }
        .nav-buttons-left {
          display: flex;
          gap: 20px;
        }
        .nav-buttons-right {
          display: flex;
        }
        .nav-buttons button {
          display: flex;
          align-items: center;
          justify-content: center;
          min-width: 140px;
          height: 45px;
          font-size: 15px;
          font-weight: 600;
          border: none;
          border-radius: 6px;
          cursor: pointer;
          transition: 0.3s;
          white-space: nowrap;
        }
        .nav-buttons .prev-next { background: #3498db; color: white; }
        .nav-buttons .prev-next:hover { background: #2980b9; }
        .nav-buttons .prev-next:disabled { background: #ddd; cursor: not-allowed; }
        .nav-buttons .submit-btn { background: #27ae60; color: white; }
        .nav-buttons .submit-btn:hover { background: #1e8449; }
        .nav-buttons .submit-btn:disabled { background: #bbb; cursor: not-allowed; }

        .sidebar h4 { margin-bottom: 15px; font-size: 18px; color: #333; text-align: center; }
        .question-nav { display: grid; grid-template-columns: repeat(auto-fill, 50px); gap: 12px; justify-content: center; }
        .question-circle { width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 15px; cursor: pointer; transition: transform 0.2s; color: white; }
        .question-circle.not-answered { background: #e74c3c; }
        .question-circle.answered { background: #2ecc71; }
        .question-circle.current { background: #f1c40f; color: black; }
        .question-circle:hover { transform: scale(1.1); }
      `}</style>

      {/* Header */}
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

      {/* Main Body */}
      <div className="quiz-body">
        {/* Question Panel */}
        <div className="question-section">
          <div>
            <h3>
              Q{currentQuestion + 1}: {questions[currentQuestion]?.question}
            </h3>

            {questions[currentQuestion]?.options?.map((opt, idx) => (
              <label key={idx}>
                <input
                  type="radio"
                  name={`q${currentQuestion}`}
                  value={opt}
                  checked={answers[currentQuestion] === opt}
                  onChange={() => handleAnswer(currentQuestion, opt)}
                  aria-checked={answers[currentQuestion] === opt}
                />
                {opt}
              </label>
            ))}

            <button
              className="clear-btn"
              onClick={() => clearAnswer(currentQuestion)}
            >
              Clear Answer
            </button>
          </div>

          {/* ✅ Navigation Buttons */}
          <div className="nav-buttons">
            <div className="nav-buttons-left">
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

            <div className="nav-buttons-right">
              <button
                className="submit-btn"
                onClick={handleSubmit}
                disabled={Object.keys(answers).length === 0}
                title={
                  Object.keys(answers).length === 0
                    ? "Please answer at least one question before submitting"
                    : "Submit & Confirm"
                }
              >
                Submit & Confirm
              </button>
            </div>
          </div>
        </div>

        {/* Sidebar Navigator */}
        <div className="sidebar">
          <h4>Question Navigator</h4>
          <div className="question-nav">
            {questions.map((_, index) => {
              let circleClass = "question-circle";
              if (index === currentQuestion) circleClass += " current";
              else if (answers[index]) circleClass += " answered";
              else circleClass += " not-answered";

              return (
                <div
                  key={index}
                  className={circleClass}
                  onClick={() => setCurrentQuestion(index)}
                  aria-current={index === currentQuestion ? "step" : undefined}
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      setCurrentQuestion(index);
                    }
                  }}
                  role="button"
                  aria-label={`Question ${index + 1} ${
                    answers[index] ? "answered" : "not answered"
                  }`}
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
