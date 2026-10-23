// src/pages/Resume/Template2/ResumeForm2.jsx
import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./ResumeForm2.css";

export default function ResumeForm2() {
  const navigate = useNavigate();
  const location = useLocation();

  // ✅ If Edit → preload old data
  const initialData = location.state || {
    fullName: "",
    jobTitle: "",
    profile: "",
    contact: { phone: "", email: "", address: "" },
    experience: [{ role: "", company: "", year: "", details: "" }],
    education: [{ degree: "", school: "", year: "" }],
    skills: [""],
    certifications: [""],
  };

  const [formData, setFormData] = useState(initialData);

  // Handle simple inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (["phone", "email", "address"].includes(name)) {
      setFormData({
        ...formData,
        contact: { ...formData.contact, [name]: value },
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  // Handle list fields
  const handleListChange = (e, index, field) => {
    const values = [...formData[field]];
    values[index] = e.target.value;
    setFormData({ ...formData, [field]: values });
  };

  const addListItem = (field) => {
    setFormData({ ...formData, [field]: [...formData[field], ""] });
  };

  // Handle nested fields (experience, education)
  const handleNestedChange = (e, index, field) => {
    const { name, value } = e.target;
    const updated = [...formData[field]];
    updated[index][name] = value;
    setFormData({ ...formData, [field]: updated });
  };

  const addNested = (field, obj) => {
    setFormData({ ...formData, [field]: [...formData[field], obj] });
  };

  // ✅ Submit → go back to Preview2 with updated data
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/resume/preview/2", { state: formData });
  };

  return (
    <div className="resume-form2">
      <h2>Resume Form (Template 2)</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleChange}
        />
        <input
          type="text"
          name="jobTitle"
          placeholder="Job Title"
          value={formData.jobTitle}
          onChange={handleChange}
        />
        <textarea
          name="profile"
          placeholder="Profile / Summary"
          value={formData.profile}
          onChange={handleChange}
        />

        <h3>Contact</h3>
        <div className="section-block">
          <input
            type="text"
            name="phone"
            placeholder="Phone"
            value={formData.contact.phone}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.contact.email}
            onChange={handleChange}
          />
          <input
            type="text"
            name="address"
            placeholder="Address"
            value={formData.contact.address}
            onChange={handleChange}
          />
        </div>

        <h3>Experience</h3>
        {formData.experience.map((exp, i) => (
          <div className="section-block" key={i}>
            <input
              type="text"
              name="role"
              placeholder="Role"
              value={exp.role}
              onChange={(e) => handleNestedChange(e, i, "experience")}
            />
            <input
              type="text"
              name="company"
              placeholder="Company"
              value={exp.company}
              onChange={(e) => handleNestedChange(e, i, "experience")}
            />
            <input
              type="text"
              name="year"
              placeholder="Year"
              value={exp.year}
              onChange={(e) => handleNestedChange(e, i, "experience")}
            />
            <textarea
              name="details"
              placeholder="Details"
              value={exp.details}
              onChange={(e) => handleNestedChange(e, i, "experience")}
            />
          </div>
        ))}
        <button
          type="button"
          onClick={() =>
            addNested("experience", { role: "", company: "", year: "", details: "" })
          }
        >
          + Add Experience
        </button>

        <h3>Education</h3>
        {formData.education.map((edu, i) => (
          <div className="section-block" key={i}>
            <input
              type="text"
              name="degree"
              placeholder="Degree"
              value={edu.degree}
              onChange={(e) => handleNestedChange(e, i, "education")}
            />
            <input
              type="text"
              name="school"
              placeholder="School"
              value={edu.school}
              onChange={(e) => handleNestedChange(e, i, "education")}
            />
            <input
              type="text"
              name="year"
              placeholder="Year"
              value={edu.year}
              onChange={(e) => handleNestedChange(e, i, "education")}
            />
          </div>
        ))}
        <button
          type="button"
          onClick={() => addNested("education", { degree: "", school: "", year: "" })}
        >
          + Add Education
        </button>

        <h3>Skills</h3>
        {formData.skills.map((s, i) => (
          <input
            key={i}
            type="text"
            placeholder="Skill"
            value={s}
            onChange={(e) => handleListChange(e, i, "skills")}
          />
        ))}
        <button type="button" onClick={() => addListItem("skills")}>
          + Add Skill
        </button>

        <h3>Certifications</h3>
        {formData.certifications.map((c, i) => (
          <input
            key={i}
            type="text"
            placeholder="Certification"
            value={c}
            onChange={(e) => handleListChange(e, i, "certifications")}
          />
        ))}
        <button type="button" onClick={() => addListItem("certifications")}>
          + Add Certification
        </button>

        <button type="submit" className="submit-btn">
          {location.state ? "Update Resume" : "Generate Resume"}
        </button>
      </form>
    </div>
  );
}
