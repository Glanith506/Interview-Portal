import React from "react";

export default function Template1({ data }) {
  return (
    <div className="template1">
      {/* ===== Header ===== */}
      <div
        className="header"
        style={{
          textAlign: "center",
          marginBottom: "20px",
        }}
      >
        {/* Profile Image */}
        {data.image && (
          <div style={{ marginBottom: "10px" }}>
            <img
              src={data.image}
              alt="Profile"
              style={{
                width: "120px",
                height: "120px",
                borderRadius: "50%",
                objectFit: "cover",
                border: "2px solid #444",
              }}
            />
          </div>
        )}

        {/* Name */}
        <h1 style={{ fontSize: "28px", margin: "0", color: "#222" }}>
          {data.name ||
            `${data.firstName || ""} ${data.middleName || ""} ${
              data.lastName || ""
            }`}
        </h1>

        {/* Contact Info */}
        <div style={{ fontSize: "14px", color: "#666", marginTop: "5px" }}>
          {data.phone} | {data.location}
        </div>
        <div style={{ fontSize: "14px", color: "#666" }}>
          {data.email} | {data.linkedin}
        </div>
      </div>

      {/* Objective */}
      {data.objective && (
        <section style={{ marginBottom: "15px" }}>
          <h2
            style={{
              fontSize: "18px",
              borderBottom: "1px solid #ccc",
              marginBottom: "5px",
            }}
          >
            OBJECTIVE
          </h2>
          <p>{data.objective}</p>
        </section>
      )}

      {/* Skills */}
      {data.skills && (
        <section style={{ marginBottom: "15px" }}>
          <h2
            style={{
              fontSize: "18px",
              borderBottom: "1px solid #ccc",
              marginBottom: "5px",
            }}
          >
            SKILLS
          </h2>
          <ul>
            {data.skills.split("\n").map((s, i) => (
              <li key={i}>{s}</li>
            ))}
          </ul>
        </section>
      )}

      {/* Projects */}
      {data.projects && data.projects.length > 0 && (
        <section style={{ marginBottom: "15px" }}>
          <h2
            style={{
              fontSize: "18px",
              borderBottom: "1px solid #ccc",
              marginBottom: "5px",
            }}
          >
            PROJECTS
          </h2>
          {data.projects.map((proj, i) => (
            <div key={i} style={{ marginBottom: "8px" }}>
              <p style={{ fontWeight: "bold", margin: "0" }}>{proj.title}</p>
              {proj.description && (
                <p style={{ margin: "2px 0" }}>{proj.description}</p>
              )}
              <p
                style={{
                  fontSize: "13px",
                  fontStyle: "italic",
                  margin: "2px 0",
                }}
              >
                Duration: {proj.duration} | Technologies: {proj.technologies}
              </p>
            </div>
          ))}
        </section>
      )}

      {/* Internships / Experience */}
      {data.internships && data.internships.length > 0 && (
        <section style={{ marginBottom: "15px" }}>
          <h2
            style={{
              fontSize: "18px",
              borderBottom: "1px solid #ccc",
              marginBottom: "5px",
            }}
          >
            INTERNSHIPS / EXPERIENCE
          </h2>
          {data.internships.map((intern, i) => (
            <div key={i} style={{ marginBottom: "8px" }}>
              <p style={{ fontWeight: "bold", margin: "0" }}>
                {intern.company}{" "}
                <span style={{ float: "right", fontStyle: "italic" }}>
                  {intern.duration}
                </span>
              </p>
              {intern.title && <p style={{ margin: "2px 0" }}>{intern.title}</p>}
              {intern.description && (
                <p style={{ margin: "2px 0" }}>{intern.description}</p>
              )}
            </div>
          ))}
        </section>
      )}

      {/* Education */}
      {data.education && data.education.length > 0 && (
        <section style={{ marginBottom: "15px" }}>
          <h2
            style={{
              fontSize: "18px",
              borderBottom: "1px solid #ccc",
              marginBottom: "5px",
            }}
          >
            EDUCATION
          </h2>
          {data.education.map((edu, i) => (
            <p key={i} style={{ margin: "2px 0" }}>
              {edu.course} – {edu.college}, {edu.year} ({edu.marks})
            </p>
          ))}
        </section>
      )}

      {/* Certifications */}
      {data.certifications && (
        <section style={{ marginBottom: "15px" }}>
          <h2
            style={{
              fontSize: "18px",
              borderBottom: "1px solid #ccc",
              marginBottom: "5px",
            }}
          >
            CERTIFICATIONS
          </h2>
          {data.certifications.split("\n").map((cert, i) => (
            <p key={i} style={{ margin: "2px 0" }}>
              • {cert}
            </p>
          ))}
        </section>
      )}

      {/* Activities */}
      {data.activities && (
        <section style={{ marginBottom: "15px" }}>
          <h2
            style={{
              fontSize: "18px",
              borderBottom: "1px solid #ccc",
              marginBottom: "5px",
            }}
          >
            EXTRA-CURRICULAR ACTIVITIES
          </h2>
          {data.activities.split("\n").map((act, i) => (
            <p key={i} style={{ margin: "2px 0" }}>
              • {act}
            </p>
          ))}
        </section>
      )}

      {/* Hobbies */}
      {data.hobbies && (
        <section style={{ marginBottom: "15px" }}>
          <h2
            style={{
              fontSize: "18px",
              borderBottom: "1px solid #ccc",
              marginBottom: "5px",
            }}
          >
            INTERESTS / HOBBIES
          </h2>
          {data.hobbies.split("\n").map((hobby, i) => (
            <p key={i} style={{ margin: "2px 0" }}>
              • {hobby}
            </p>
          ))}
        </section>
      )}

      {/* Declaration */}
      {data.declaration && (
        <section style={{ marginBottom: "15px" }}>
          <h2
            style={{
              fontSize: "18px",
              borderBottom: "1px solid #ccc",
              marginBottom: "5px",
            }}
          >
            DECLARATION
          </h2>
          <p>{data.declaration}</p>
        </section>
      )}
    </div>
  );
}
