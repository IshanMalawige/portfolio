import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiVmware,
  SiWireshark,
  SiWindows,
  SiVercel,
  SiFortinet,
} from "react-icons/si";
import { FaNetworkWired, FaServer, FaCloud, FaShieldAlt } from "react-icons/fa";

function Toolstack() {
  const tools = [
    { name: "VS Code", icon: <SiVisualstudiocode />, color: "#007acc" },
    { name: "VMware / ESXi", icon: <SiVmware />, color: "#607078" },
    { name: "Wireshark", icon: <SiWireshark />, color: "#1679A7" },
    { name: "Active Directory", icon: <FaServer />, color: "#0078d4" },
    { name: "Windows Server", icon: <SiWindows />, color: "#00a4ef" },
    { name: "FortiGate", icon: <SiFortinet />, color: "#ee1c25" },
    { name: "EVE-NG", icon: <FaCloud />, color: "#38bdf8" },
    { name: "PNETLab", icon: <FaNetworkWired />, color: "#10b981" },
    { name: "Vercel", icon: <SiVercel />, color: "#ffffff" }
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {tools.map((tool, index) => (
        <Col xs={6} sm={4} md={3} lg={3} className="tech-icons" key={index} style={{ textAlign: "center", margin: "12px 0" }}>
          <div style={{ fontSize: "2.8rem", color: tool.color, marginBottom: "8px" }}>
            {tool.icon}
          </div>
          <div style={{ color: "#c770f0", fontSize: "0.9rem", fontWeight: "600" }}>
            {tool.name}
          </div>
        </Col>
      ))}
    </Row>
  );
}

export default Toolstack;