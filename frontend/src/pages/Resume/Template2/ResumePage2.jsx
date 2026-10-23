import React from "react";
import { useNavigate } from "react-router-dom";
import "./ResumePage2.css";

export default function ResumePage2() {
  const navigate = useNavigate();

  return (
    <div className="resume-page">
      <h2>Choose Resume Template 2</h2>

      <div className="templates">
        <div className="template-card">
          <div className="template-img-wrapper">
            {/* 👇 replace with your sample image */}
            <img
              src="/template2-sample.png"
              alt="Template 2 Preview"
              className="template-preview"
            />
          </div>

          <div className="template-actions">
            <button
              className="choose-btn"
              onClick={() => navigate("/resume/form/2")}
            >
              Use This Template
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
