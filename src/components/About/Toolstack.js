import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiVmware,
  SiWireshark,
  SiWindows11,
  SiVercel,
} from "react-icons/si";
import { FaNetworkWired, FaServer, FaShieldAlt } from "react-icons/fa";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons" title="Visual Studio Code">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="VMware ESXi / Workstation">
        <SiVmware />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Wireshark Network Analyzer">
        <SiWireshark />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="EVE-NG / PNETLab">
        <FaNetworkWired />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Windows Server & AD DS">
        <FaServer />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="FortiGate Security & VPN">
        <FaShieldAlt />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Windows 11 / Terminal">
        <SiWindows11 />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Vercel Deployment">
        <SiVercel />
      </Col>
    </Row>
  );
}

export default Toolstack;