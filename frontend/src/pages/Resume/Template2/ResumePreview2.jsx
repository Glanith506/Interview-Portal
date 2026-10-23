// src/pages/Resume/Template2/ResumePreview2.jsx
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import "./ResumePreview2.css";

export default function ResumePreview2() {
  const { state: data } = useLocation();
  const navigate = useNavigate();

  if (!data) return <p>No data available. Please fill out the form first.</p>;

  // ✅ Download as PDF
  const downloadPDF = () => {
    const input = document.getElementById("resume2-content");
    html2canvas(input, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const width = pdf.internal.pageSize.getWidth();
      const height = (canvas.height * width) / canvas.width;
      pdf.addImage(imgData, "PNG", 0, 0, width, height);
      pdf.save("resume2.pdf");
    });
  };

  // ✅ Save Resume locally
  const saveResume = () => {
    localStorage.setItem("resume-template2", JSON.stringify(data));
    alert("Resume saved successfully!");
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      {/* Resume Content */}
      <div id="resume2-content" className="resume2-container">
        {/* Header */}
        <div className="resume2-header">
          <h1>{data.fullName}</h1>
          <h2>{data.jobTitle}</h2>
          <p className="profile">{data.profile}</p>
        </div>

        <div className="resume2-body">
          {/* Left Sidebar */}
          <aside className="resume2-sidebar">
            <section>
              <h3>CONTACT</h3>
              <p>📞 {data.contact?.phone}</p>
              <p>✉️ {data.contact?.email}</p>
              <p>📍 {data.contact?.address}</p>
            </section>

            <section>
              <h3>SKILLS</h3>
              <ul>
                {data.skills.map((skill, i) => (
                  <li key={i}>{skill}</li>
                ))}
              </ul>
            </section>

            <section>
              <h3>CERTIFICATIONS</h3>
              <ul>
                {data.certifications.map((cert, i) => (
                  <li key={i}>{cert}</li>
                ))}
              </ul>
            </section>
          </aside>

          {/* Right Content */}
          <main className="resume2-main">
            <section>
              <h3>EXPERIENCE</h3>
              {data.experience.map((exp, i) => (
                <div key={i} className="resume2-item">
                  <h4>
                    {exp.role} - {exp.company}
                  </h4>
                  <span className="year">{exp.year}</span>
                  <p>{exp.details}</p>
                </div>
              ))}
            </section>

            <section>
              <h3>EDUCATION</h3>
              {data.education.map((edu, i) => (
                <div key={i} className="resume2-item">
                  <h4>{edu.degree}</h4>
                  <p>{edu.school}</p>
                  <span className="year">{edu.year}</span>
                </div>
              ))}
            </section>
          </main>
        </div>
      </div>

      {/* Action Buttons */}
      <div style={{ marginTop: "20px" }}>
        <button onClick={downloadPDF}>⬇️ Download PDF</button>
        <button onClick={saveResume} style={{ marginLeft: "10px" }}>
          💾 Save
        </button>
        <button
          style={{ marginLeft: "10px" }}
          onClick={() => navigate("/resume/form/2", { state: data })}
        >
          ✏️ Edit
        </button>
        <button style={{ marginLeft: "10px" }} onClick={() => navigate(-1)}>
          🔙 Back
        </button>
      </div>
    </div>
  );
}
