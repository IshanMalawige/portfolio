import React from "react";
import { Col, Row } from "react-bootstrap";

// Import local assets or use direct image paths / icons if placed in Assets folder
// මෙතන ඔයාට අවශ්‍ය නම් Assets folder එකට images දාලා import කරගන්නත් පුළුවන්, 
// නැත්නම් පහත විදිഹට direct SVG/PNG links පාවිච්චි කරන්න පුළුවන්:

function Toolstack() {
  const tools = [
    { name: "VS Code", img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/vscode/vscode-original.svg" },
    { name: "VMware", img: "https://www.vectorlogo.zone/logos/vmware/vmware-icon.svg" },
    { name: "Wireshark", img: "https://www.wireshark.org/assets/images/wireshark-fin.png" },
    { name: "Windows Server", img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/windows8/windows8-original.svg" },
    { name: "Active Directory", img: "https://www.vectorlogo.zone/logos/microsoft_azure/microsoft_azure-icon.svg" },
    { name: "Fortinet / FortiGate", img: "https://www.vectorlogo.zone/logos/fortinet/fortinet-icon.svg" },
    { name: "EVE-NG", img: "https://www.eve-ng.net/wp-content/uploads/2020/03/cropped-cropped-EVE-NG-NEW-LOGO-favicon-1-192x192.png" },
    { name: "Vercel", img: "https://assets.vercel.com/image/upload/v1588805858/repositories/vercel/logo.png" }
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {tools.map((tool, index) => (
        <Col xs={4} md={2} className="tech-icons" key={index} title={tool.name} style={{ padding: "20px", textAlign: "center" }}>
          <img 
            src={tool.img} 
            alt={tool.name} 
            style={{ width: "65px", height: "65px", objectFit: "contain", filter: "drop-shadow(0px 4px 8px rgba(0,0,0,0.3))" }} 
          />
          <div style={{ color: "#c770f0", fontSize: "0.85rem", marginTop: "10px", fontWeight: "600" }}>
            {tool.name}
          </div>
        </Col>
      ))}
    </Row>
  );
}

export default Toolstack;