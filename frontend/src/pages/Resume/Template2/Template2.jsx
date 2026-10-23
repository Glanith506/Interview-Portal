import React from "react";
import "./Template2.css";

export default function Template2({ data }) {
  if (!data) {
    return <p>No resume data available. Please fill the form first.</p>;
  }

  return (
    <div className="template2">
      <header>
        <h1>{data?.fullName || "Your Name"}</h1>
        <h2>{data?.jobTitle || "Job Title"}</h2>
      </header>

      <section>
        <h3>Profile</h3>
        <p>{data?.profile || "Write your profile here..."}</p>
      </section>

      <div className="two-columns">
        <div>
          <section>
            <h3>Professional Experience</h3>
            {data?.experience && data.experience.length > 0 ? (
              data.experience.map((exp, i) => (
                <div key={i}>
                  <strong>
                    {exp.role || "Role"} - {exp.company || "Company"}
                  </strong>{" "}
                  ({exp.year || "Year"})
                  <p>{exp.details || "Details about your work..."}</p>
                </div>
              ))
            ) : (
              <p>No experience added.</p>
            )}
          </section>

          <section>
            <h3>Education</h3>
            {data?.education && data.education.length > 0 ? (
              data.education.map((edu, i) => (
                <div key={i}>
                  <strong>{edu.degree || "Degree"}</strong>,{" "}
                  {edu.school || "School"} ({edu.year || "Year"})
                </div>
              ))
            ) : (
              <p>No education added.</p>
            )}
          </section>
        </div>

        <div>
          <section>
            <h3>Contact</h3>
            <p>{data?.contact?.phone || "Phone number"}</p>
            <p>{data?.contact?.email || "Email"}</p>
            <p>{data?.contact?.address || "Address"}</p>
          </section>

          <section>
            <h3>Skills</h3>
            {data?.skills && data.skills.length > 0 ? (
              <ul>
                {data.skills.map((s, i) => (
                  <li key={i}>{s}</li>
                ))}
              </ul>
            ) : (
              <p>No skills added.</p>
            )}
          </section>

          <section>
            <h3>Certifications</h3>
            {data?.certifications && data.certifications.length > 0 ? (
              <ul>
                {data.certifications.map((c, i) => (
                  <li key={i}>{c}</li>
                ))}
              </ul>
            ) : (
              <p>No certifications added.</p>
            )}
          </section>
        </div>
      </div>
    </div>
  );
}
