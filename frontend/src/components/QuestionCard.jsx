import React from "react";

export default function QuestionCard({ question, options, selected, onSelect }) {
  return (
    <div style={{ border: "1px solid #eee", padding: 12, borderRadius: 6 }}>
      <p><b>{question}</b></p>
      {options.map((opt, i) => (
        <label key={i} style={{ display: "block", margin: "6px 0" }}>
          <input type="radio" checked={selected === i} onChange={() => onSelect(i)} /> {opt}
        </label>
      ))}
    </div>
  );
}
