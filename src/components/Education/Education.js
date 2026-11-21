import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
  FaAward,
  FaCertificate,
  FaExternalLinkAlt,
  FaGraduationCap,
  FaRegFileAlt,
} from "react-icons/fa";
import Particle from "../Particle";

const researchPaper = {
  title:
    "A Comprehensive Framework for Strengthening IoT Security: Mitigating Vulnerabilities through Advanced Mechanisms in Industrial Systems",
  conference: "KDU International Research Conference (IRC) 2024",
  track: "Technology",
  date: "September 26, 2024",
  paperId: "587",
  summary:
    "Presents a layered security framework and practical mitigation strategies for vulnerabilities in industrial IoT systems.",
  link: "https://irc.kdu.ac.lk/2024/publications/fot.pdf",
};

const certifications = [
  {
    title: "Firewall Administration",
    issuer: "Innovation Tech IT",
    issued: "November 2026",
  },
  {
    title: "Network Security",
    issuer: "Cisco",
    issued: "October 2025",
  },
  {
    title: "CCNA: Enterprise Networking, Security, and Automation",
    issuer: "Cisco",
    issued: "December 2024",
  },
  {
    title: "Python for Beginners",
    issuer: "University of Moratuwa",
    issued: "November 2024",
  },
  {
    title: "AI/ML Engineer - Stage 1",
    issuer: "SLIIT Faculty of Computing",
    issued: "November 2024",
    credentialId: "dbxgaj37ka",
  },
  {
    title: "CCNA: Switching, Routing, and Wireless Essentials",
    issuer: "Cisco",
    issued: "November 2024",
  },
  {
    title: "CCNA: Introduction to Networks",
    issuer: "Cisco",
    issued: "June 2024",
  },
  {
    title: "Web Design For Beginners",
    issuer: "University of Moratuwa",
    issued: "December 2023",
  },
];

const milestones = [
  {
    period: "2018",
    title: "G.C.E. Ordinary Level (O/L)",
    icon: FaGraduationCap,
    details: [
      "President's Central College, Embilipitiya",
      "Results: 3 As and 6 Bs",
    ],
  },
  {
    period: "2021",
    title: "G.C.E. Advanced Level (A/L)",
    icon: FaGraduationCap,
    details: [
      "President's Central College, Embilipitiya",
      "Stream: Technology",
      "Results: 3 As and 1 S",
      "Engineering Technology: C",
      "Science for Technology: S",
      "Information and Communication Technology: C",
      "Z-Score: 0.7122",
    ],
  },
  {
    period: "2023–2026",
    title: "General Sir John Kotelawala Defence University",
    icon: FaGraduationCap,
    details: [
      "Faculty of Technology",
      "Bachelor of Technology (Hons) in Information and Communication Technology",
      "GPA: 3.3",
    ],
  },
  {
    period: "Pending",
    title: "MSc",
    icon: FaGraduationCap,
    details: [],
  },
];

function Education() {
  return (
    <Container fluid className="education-section" id="education">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Education</strong>
        </h1>
        <p className="education-intro">
          My academic journey and qualifications.
        </p>
        <Row className="education-grid">
          <Col lg={9}>
            <div className="education-timeline">
              {milestones.map(({ period, title, icon: Icon, details }) => (
                <article className="education-item" key={title}>
                  <div className="education-marker" aria-hidden="true">
                    <Icon />
                  </div>
                  <div className="education-card">
                    <p className="education-period">{period}</p>
                    <h2>{title}</h2>
                    <div className="education-details">
                      {details.map((detail) => (
                        <p key={detail}>{detail}</p>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </Col>
        </Row>
        <section
          className="certifications-section"
          aria-labelledby="certifications-heading"
        >
          <h2 id="certifications-heading" className="project-heading">
            <FaAward aria-hidden="true" />{" "}
            <strong className="purple">Certifications</strong>
          </h2>
          <Row className="certification-grid">
            {certifications.map((certification) => (
              <Col
                md={6}
                lg={4}
                className="certification-column"
                key={certification.title}
              >
                <article className="certification-card">
                  <FaCertificate
                    className="certification-icon"
                    aria-hidden="true"
                  />
                  <h3>{certification.title}</h3>
                  <p className="certification-issuer">{certification.issuer}</p>
                  <p className="certification-issued">
                    Issued {certification.issued}
                  </p>
                  {certification.credentialId && (
                    <p className="certification-credential">
                      Credential ID: {certification.credentialId}
                    </p>
                  )}
                </article>
              </Col>
            ))}
          </Row>
        </section>
        <section
          className="research-publication-section"
          aria-labelledby="research-publication-heading"
        >
          <h2 id="research-publication-heading" className="project-heading">
            <FaRegFileAlt aria-hidden="true" />{" "}
            <strong className="purple">Research Publication</strong>
          </h2>
          <article className="research-publication-card">
            <p className="education-period">
              Published · Paper ID {researchPaper.paperId}
            </p>
            <h3>{researchPaper.title}</h3>
            <p className="research-publication-meta">
              {researchPaper.conference} · {researchPaper.date}
            </p>
            <p className="research-publication-track">
              Conference track: {researchPaper.track}
            </p>
            <p className="research-publication-summary">{researchPaper.summary}</p>
            <a
              className="research-publication-link"
              href={researchPaper.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              View publication <FaExternalLinkAlt aria-hidden="true" />
            </a>
          </article>
        </section>
      </Container>
    </Container>
  );
}

export default Education;
