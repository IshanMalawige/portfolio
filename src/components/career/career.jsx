import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import { CgWorkAlt } from "react-icons/cg";
import { FaCalendarAlt } from "react-icons/fa";
import zincatLogo from "../../Assets/CareerLogos/zincat-logo.webp";
import vtcLogo from "../../Assets/CareerLogos/vtc-dehiwala-logo.png";
import sltLogo from "../../Assets/CareerLogos/slt-logo.svg";

// Helper function to calculate duration between start and end date automatically
function calculateDuration(startDateStr, endDateStr) {
  const start = new Date(startDateStr);
  const end = endDateStr.toLowerCase() === "present" ? new Date() : new Date(endDateStr);

  let years = end.getFullYear() - start.getFullYear();
  let months = end.getMonth() - start.getMonth();

  if (end.getDate() < start.getDate()) {
    months--;
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  let result = "";
  if (years > 0) {
    result += `${years} yr${years > 1 ? "s" : ""} `;
  }
  if (months > 0) {
    result += `${months} mo${months > 1 ? "s" : ""}`;
  }
  if (!result) {
    const elapsedDays = Math.max(
      1,
      Math.floor((end.getTime() - start.getTime()) / (24 * 60 * 60 * 1000))
    );
    return `${elapsedDays} day${elapsedDays > 1 ? "s" : ""}`;
  }
  return result.trim();
}

function Experience() {
  const experiences = [
    {
      id: 3,
      role: "Junior Executive - IT Support",
      company: "Zincat Technology",
      logo: zincatLogo,
      startDate: "November 20, 2026",
      endDate: "Present",
      displayDate: "November 20, 2026 - Present",
      points: [],
    },
    {
      id: 1,
      role: "Demonstrator",
      company: "Vocational Training Center Dehiwala",
      logo: vtcLogo,
      startDate: "August 2026", // Automatic calculation සඳහා Start Date එක
      endDate: "Present",       // Present නම් දැනට ඇති දින දක්වා auto calculate වේ
      displayDate: "2026 August - Present",
      points: [
        "Manage Microsoft 365 Admin Tenant with user management (account creation, deletion, password resets, and access control).",
        "Provide hands-on technical support for lab practicals, troubleshooting, and resolving student access issues in real time."
      ],
    },
    {
      id: 2,
      role: "Network Engineer Intern",
      company: "Sri Lanka Telecom PLC",
      logo: sltLogo,
      startDate: "June 2025",
      endDate: "December 2025",
      displayDate: "June 2025 - December 2025",
      points: [
        "Gained practical exposure in networking, telecommunications, and emerging technologies through hands-on projects and real-world operations.",
        "Assisted senior engineers with configuring and maintaining routers, switches, and firewalls, and supported troubleshooting of network performance and connectivity issues.",
        "Designed and tested lab environments using GNS3, EVE-NG, VMware, and Wireshark to model and analyze enterprise-grade scenarios.",
        "Worked across multi-vendor platforms including Cisco, Huawei, and ZTE, focusing on routing, switching, VLAN implementations, and link aggregation.",
        "Contributed to OS backup and restoration processes using TFTP servers, and deepened skills in WAN/LAN design, IP addressing, and network monitoring.",
        "Expanded knowledge beyond networking into IoT, electronics, and telecommunications systems, gaining exposure to microcontrollers, sensors, and control card configurations."
      ],
    },
  ];

  return (
    <Container fluid className="project-section" id="career">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Professional <strong className="purple">Experience </strong>
        </h1>
        <p style={{ color: "white", paddingBottom: "20px" }}>
          Here is a timeline of my professional career journey and technical roles.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          <Col md={8}>
            <div style={{ position: "relative", borderLeft: "2px solid rgba(199, 112, 240, 0.4)", margin: "20px 0", paddingLeft: "30px" }}>
              {experiences.map((exp) => {
                const calculatedDuration = calculateDuration(exp.startDate, exp.endDate);
                return (
                  <div key={exp.id} style={{ position: "relative", marginBottom: "40px" }}>
                    {/* Timeline Icon Dot */}
                    <div style={{
                      position: "absolute",
                      left: "-47px",
                      top: "0",
                      background: "#c770f0",
                      color: "white",
                      borderRadius: "50%",
                      width: "34px",
                      height: "34px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0 0 10px rgba(199, 112, 240, 0.8)"
                    }}>
                      <CgWorkAlt style={{ fontSize: "1.2em" }} />
                    </div>

                    {/* Experience Card */}
                    <div className="career-experience-card">
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "10px" }}>
                        <h3 style={{ color: "#fff", fontSize: "1.3em", fontWeight: "bold", marginBottom: "8px" }}>
                          {exp.role}
                        </h3>
                        {/* Automatically calculated duration badge */}
                        <span style={{
                          background: "rgba(199, 112, 240, 0.2)",
                          color: "#c770f0",
                          border: "1px solid rgba(199, 112, 240, 0.4)",
                          padding: "4px 10px",
                          borderRadius: "20px",
                          fontSize: "0.75em",
                          fontWeight: "600"
                        }}>
                          {calculatedDuration}
                        </span>
                      </div>

                      <div className="career-company-row">
                        <div className="career-company-logo-frame">
                          <img
                            className="career-company-logo"
                            src={exp.logo}
                            alt={`${exp.company} logo`}
                          />
                        </div>
                        <h5 className="career-company-name">{exp.company}</h5>
                      </div>
                      <p style={{ color: "#a58cc4", fontSize: "0.85em", display: "flex", alignItems: "center", gap: "8px", marginBottom: "15px" }}>
                        <FaCalendarAlt /> {exp.displayDate}
                      </p>
                      
                      {exp.points.length > 0 && (
                        <ul style={{ color: "#dfdfdf", textAlign: "justify", fontSize: "0.95em", lineHeight: "1.6", paddingLeft: "20px", margin: "0" }}>
                          {exp.points.map((point, index) => (
                            <li key={index} style={{ marginBottom: "8px" }}>{point}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Experience;