import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiCisco,
  SiPython,
  SiLinux,
  SiWindows,
  SiVmware,
  SiWireshark,
  SiKalilinux,
  SiDocker,
  SiGit,
  SiFortinet,
} from "react-icons/si";
import { FaNetworkWired, FaServer, FaShieldAlt } from "react-icons/fa";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons" style={{ color: "#049fd9" }}>
        <SiCisco />
        <div style={{ fontSize: "0.8rem", marginTop: "10px", color: "#c770f0" }}>Cisco Routing & Switching</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{ color: "#ee1c25" }}>
        <SiFortinet />
        <div style={{ fontSize: "0.8rem", marginTop: "10px", color: "#c770f0" }}>FortiGate Security</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{ color: "#0078d4" }}>
        <FaServer />
        <div style={{ fontSize: "0.8rem", marginTop: "10px", color: "#c770f0" }}>Windows Server AD DS</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{ color: "#607078" }}>
        <SiVmware />
        <div style={{ fontSize: "0.8rem", marginTop: "10px", color: "#c770f0" }}>VMware ESXi</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{ color: "#1679A7" }}>
        <SiWireshark />
        <div style={{ fontSize: "0.8rem", marginTop: "10px", color: "#c770f0" }}>Wireshark Analyzer</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{ color: "#38bdf8" }}>
        <FaNetworkWired />
        <div style={{ fontSize: "0.8rem", marginTop: "10px", color: "#c770f0" }}>EVE-NG / PNETLab</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{ color: "#3776ab" }}>
        <SiPython />
        <div style={{ fontSize: "0.8rem", marginTop: "10px", color: "#c770f0" }}>Python Scripting</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{ color: "#fcc624" }}>
        <SiLinux />
        <div style={{ fontSize: "0.8rem", marginTop: "10px", color: "#c770f0" }}>Linux Systems</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{ color: "#557c94" }}>
        <SiKalilinux />
        <div style={{ fontSize: "0.8rem", marginTop: "10px", color: "#c770f0" }}>Cybersecurity / Kali</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{ color: "#2496ed" }}>
        <SiDocker />
        <div style={{ fontSize: "0.8rem", marginTop: "10px", color: "#c770f0" }}>Docker & Virtualization</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{ color: "#f05032" }}>
        <SiGit />
        <div style={{ fontSize: "0.8rem", marginTop: "10px", color: "#c770f0" }}>Git & Version Control</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{ color: "#00a4ef" }}>
        <SiWindows />
        <div style={{ fontSize: "0.8rem", marginTop: "10px", color: "#c770f0" }}>Windows Administration</div>
      </Col>
    </Row>
  );
}

export default Techstack;