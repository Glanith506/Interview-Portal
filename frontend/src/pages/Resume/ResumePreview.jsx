import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import Template1 from "./Template1"; // ✅ Template1 only

export default function ResumePreview() {
  const { state } = useLocation(); // ✅ get form data
  const navigate = useNavigate();

  const downloadPDF = () => {
    const input = document.getElementById("resume-content");
    html2canvas(input, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const width = pdf.internal.pageSize.getWidth();
      const height = (canvas.height * width) / canvas.width;
      pdf.addImage(imgData, "PNG", 0, 0, width, height);
      pdf.save("resume.pdf");
    });
  };

  const saveResume = () => {
    localStorage.setItem("resume-template1", JSON.stringify(state));
    alert("Resume saved successfully!");
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      {/* Resume Content */}
      <div
        id="resume-content"
        style={{
          width: "800px",
          margin: "0 auto",
          padding: "30px",
          background: "#fff",
          textAlign: "left",
          border: "1px solid #ddd",
          boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
          fontFamily: "Times New Roman, serif",
          fontSize: "14px",
          color: "#333",
        }}
      >
        {/* ✅ Always Template1 */}
        <Template1 data={state} />
      </div>

      {/* Actions */}
      <div style={{ marginTop: "15px" }}>
        <button onClick={downloadPDF}>Download PDF</button>
        <button onClick={saveResume} style={{ marginLeft: "10px" }}>
          Save
        </button>
        <button
          onClick={() => navigate("/resume/form/1", { state })}
          style={{ marginLeft: "10px" }}
        >
          Edit
        </button>
        <button onClick={() => navigate(-1)} style={{ marginLeft: "10px" }}>
          Back
        </button>
      </div>
    </div>
  );
}
