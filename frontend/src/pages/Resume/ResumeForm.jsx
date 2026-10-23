import React, { useState, useEffect } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import "./ResumeForm.css";

export default function ResumeForm() {
  const navigate = useNavigate();
  const { id } = useParams();
  const location = useLocation();
  const existingData = location.state || null;

  // 🟢 Form State
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    linkedin: "",
    location: "",
    objective: "",
    skills: "",
    projects: [{ title: "", description: "", duration: "", technologies: "" }],
    internships: [{ title: "", company: "", duration: "", description: "" }],
    education: [{ course: "", college: "", year: "", marks: "" }],
    certifications: "",
    activities: "",
    hobbies: "",
    declaration:
      "I hereby declare that the above-mentioned information is correct to my knowledge and I bear the responsibility for the correction of the above-mentioned particulars.",
  });

  // 🟢 Load existing data if editing
  useEffect(() => {
    if (existingData) setFormData(existingData);
  }, [existingData]);

  // ======================
  // Dynamic Handlers
  // ======================
  const handleArrayChange = (section, index, field, value) => {
    const updated = [...formData[section]];
    updated[index][field] = value;
    setFormData({ ...formData, [section]: updated });
  };

  const addRow = (section, defaultObj) => {
    setFormData({ ...formData, [section]: [...formData[section], defaultObj] });
  };

  const deleteRow = (section, index) => {
    const updated = [...formData[section]];
    updated.splice(index, 1);
    setFormData({ ...formData, [section]: updated });
  };

  // ======================
  // Handle Submit
  // ======================
  // inside handleSubmit
const handleSubmit = (e) => {
  e.preventDefault();
  navigate("/resume/preview/1", { state: formData });
};


  return (
    <div className="resume-form">
      <h2>Resume Form</h2>
      <form onSubmit={handleSubmit}>
        {/* Basic Info */}
        <input
          type="text"
          placeholder="Full Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Phone"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Location"
          value={formData.location}
          onChange={(e) =>
            setFormData({ ...formData, location: e.target.value })
          }
        />
        <input
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="LinkedIn Profile (URL)"
          value={formData.linkedin}
          onChange={(e) =>
            setFormData({ ...formData, linkedin: e.target.value })
          }
        />

        {/* Objective */}
        <h3>Objective</h3>
        <textarea
          placeholder="Objective"
          value={formData.objective}
          onChange={(e) =>
            setFormData({ ...formData, objective: e.target.value })
          }
        />

        {/* Skills */}
        <h3>Skills</h3>
        <textarea
          placeholder="Skills"
          value={formData.skills}
          onChange={(e) => setFormData({ ...formData, skills: e.target.value })}
        />

        {/* Projects */}
        <h3>Projects</h3>
        {formData.projects.map((proj, index) => (
          <div key={index} className="edu-row">
            <input
              type="text"
              placeholder="Project Title"
              value={proj.title}
              onChange={(e) =>
                handleArrayChange("projects", index, "title", e.target.value)
              }
            />
            <textarea
              placeholder="Description"
              value={proj.description}
              onChange={(e) =>
                handleArrayChange("projects", index, "description", e.target.value)
              }
            />
            <input
              type="text"
              placeholder="Duration"
              value={proj.duration}
              onChange={(e) =>
                handleArrayChange("projects", index, "duration", e.target.value)
              }
            />
            <input
              type="text"
              placeholder="Technologies Used"
              value={proj.technologies}
              onChange={(e) =>
                handleArrayChange("projects", index, "technologies", e.target.value)
              }
            />
            <button type="button" className="add-btn" onClick={() =>
              addRow("projects", { title: "", description: "", duration: "", technologies: "" })
            }>➕</button>
            {formData.projects.length > 1 && (
              <button type="button" className="delete-btn" onClick={() => deleteRow("projects", index)}>❌</button>
            )}
          </div>
        ))}

        {/* Internships */}
        <h3>Internships / Experience</h3>
        {formData.internships.map((intern, index) => (
          <div key={index} className="edu-row">
            <input
              type="text"
              placeholder="Title / Role"
              value={intern.title}
              onChange={(e) =>
                handleArrayChange("internships", index, "title", e.target.value)
              }
            />
            <input
              type="text"
              placeholder="Company Name"
              value={intern.company}
              onChange={(e) =>
                handleArrayChange("internships", index, "company", e.target.value)
              }
            />
            <input
              type="text"
              placeholder="Duration"
              value={intern.duration}
              onChange={(e) =>
                handleArrayChange("internships", index, "duration", e.target.value)
              }
            />
            <textarea
              placeholder="Description"
              value={intern.description}
              onChange={(e) =>
                handleArrayChange("internships", index, "description", e.target.value)
              }
            />
            <button type="button" className="add-btn" onClick={() =>
              addRow("internships", { title: "", company: "", duration: "", description: "" })
            }>➕</button>
            {formData.internships.length > 1 && (
              <button type="button" className="delete-btn" onClick={() => deleteRow("internships", index)}>❌</button>
            )}
          </div>
        ))}

        {/* Education */}
        <h3>Education</h3>
        {formData.education.map((edu, index) => (
          <div key={index} className="edu-row">
            <input
              type="text"
              placeholder="Course"
              value={edu.course}
              onChange={(e) =>
                handleArrayChange("education", index, "course", e.target.value)
              }
            />
            <input
              type="text"
              placeholder="College Name"
              value={edu.college}
              onChange={(e) =>
                handleArrayChange("education", index, "college", e.target.value)
              }
            />
            <input
              type="text"
              placeholder="Academic Year"
              value={edu.year}
              onChange={(e) =>
                handleArrayChange("education", index, "year", e.target.value)
              }
            />
            <input
              type="text"
              placeholder="Marks/CGPA"
              value={edu.marks}
              onChange={(e) =>
                handleArrayChange("education", index, "marks", e.target.value)
              }
            />
            <button type="button" className="add-btn" onClick={() =>
              addRow("education", { course: "", college: "", year: "", marks: "" })
            }>➕</button>
            {formData.education.length > 1 && (
              <button type="button" className="delete-btn" onClick={() => deleteRow("education", index)}>❌</button>
            )}
          </div>
        ))}

        {/* Certifications, Activities, Hobbies, Declaration */}
        <h3>Certifications</h3>
        <textarea
          placeholder="Certifications"
          value={formData.certifications}
          onChange={(e) => setFormData({ ...formData, certifications: e.target.value })}
        />

        <h3>Extra-Curricular Activities</h3>
        <textarea
          placeholder="Activities"
          value={formData.activities}
          onChange={(e) => setFormData({ ...formData, activities: e.target.value })}
        />

        <h3>Interests / Hobbies</h3>
        <textarea
          placeholder="Hobbies"
          value={formData.hobbies}
          onChange={(e) => setFormData({ ...formData, hobbies: e.target.value })}
        />

        <h3>Declaration</h3>
        <textarea
          placeholder="Declaration"
          value={formData.declaration}
          onChange={(e) => setFormData({ ...formData, declaration: e.target.value })}
        />

        <button type="submit">Generate Resume</button>
      </form>
    </div>
  );
}
