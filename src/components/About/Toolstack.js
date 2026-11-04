import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiGit,
  SiGithub,
  SiFigma,
  SiNotion,
  SiCanva,
  SiJira,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons" style={{ color: "#007ACC" }}>
        <SiVisualstudiocode />
        <div style={{ fontSize: "0.8rem", marginTop: "10px", color: "#c770f0" }}>VS Code</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{ color: "#FF6C37" }}>
        <SiPostman />
        <div style={{ fontSize: "0.8rem", marginTop: "10px", color: "#c770f0" }}>Postman</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{ color: "#F05032" }}>
        <SiGit />
        <div style={{ fontSize: "0.8rem", marginTop: "10px", color: "#c770f0" }}>Git</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{ color: "#181717" }}>
        <SiGithub />
        <div style={{ fontSize: "0.8rem", marginTop: "10px", color: "#c770f0" }}>GitHub</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{ color: "#F24E1E" }}>
        <SiFigma />
        <div style={{ fontSize: "0.8rem", marginTop: "10px", color: "#c770f0" }}>Figma</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{ color: "#000000" }}>
        <SiNotion />
        <div style={{ fontSize: "0.8rem", marginTop: "10px", color: "#c770f0" }}>Notion</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{ color: "#00C4CC" }}>
        <SiCanva />
        <div style={{ fontSize: "0.8rem", marginTop: "10px", color: "#c770f0" }}>Canva</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{ color: "#0052CC" }}>
        <SiJira />
        <div style={{ fontSize: "0.8rem", marginTop: "10px", color: "#c770f0" }}>Jira</div>
      </Col>
    </Row>
  );
}

export default Toolstack;
