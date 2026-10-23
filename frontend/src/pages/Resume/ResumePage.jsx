import React from "react";
import { useNavigate } from "react-router-dom";
import "./ResumePage.css";

export default function ResumePage() {
  const navigate = useNavigate();

  return (
    <div className="resume-page">
      <h1>Choose a Resume Template</h1>
      <div className="template-options">
        
        {/* Template 1 */}
        <div
          className="template-card"
          onClick={() => navigate("/resume/form/1")}
        >
          <img src="/Template1.png" alt="Template 1" />
          <h3>Template 1</h3>
        </div>

        {/* Template 2 */}
        <div
          className="template-card"
          onClick={() => navigate("/resume/form/2")}
        >
          <img src="/Template2.png" alt="Template 2" />
          <h3>Template 2</h3>
        </div>
      </div>
    </div>
  );
}
