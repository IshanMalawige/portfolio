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
      <Col xs={4} md={2} className="tech-icons" title="Visual Studio Code" style={{ color: "#007acc" }}>
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="VMware ESXi / Workstation" style={{ color: "#607078" }}>
        <SiVmware />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Wireshark Network Analyzer" style={{ color: "#1679A7" }}>
        <SiWireshark />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="EVE-NG / PNETLab" style={{ color: "#00b4d8" }}>
        <FaNetworkWired />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Windows Server & AD DS" style={{ color: "#0078d4" }}>
        <FaServer />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="FortiGate Security & VPN" style={{ color: "#ee1c25" }}>
        <FaShieldAlt />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Windows 11 / Terminal" style={{ color: "#00a4ef" }}>
        <SiWindows11 />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Vercel Deployment" style={{ color: "#ffffff" }}>
        <SiVercel />
      </Col>
    </Row>
  );
}

export default Toolstack;