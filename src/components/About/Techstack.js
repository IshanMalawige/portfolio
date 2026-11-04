import React from "react";
import { Col, Row } from "react-bootstrap";

import adImg from "../../Assets/active directry.png";
import esxiImg from "../../Assets/esxi.jpg";
import eveImg from "../../Assets/eveng.jpg";
import pnetImg from "../../Assets/pnetlab.png";

import {
  SiCisco,
  SiPython,
  SiLinux,
  SiWindows,
  SiWireshark,
  SiKalilinux,
  SiDocker,
  SiGit,
  SiFortinet,
  SiVisualstudiocode,
  SiVercel,
} from "react-icons/si";
import { FaServer } from "react-icons/fa";

function Techstack() {
  const skills = [
    { icon: <SiCisco />, color: "#049fd9" },
    { icon: <SiFortinet />, color: "#ee1c25" },
    { icon: <FaServer />, color: "#0078d4" },
    { image: adImg, isImg: true },
    { image: esxiImg, isImg: true },
    { icon: <SiWireshark />, color: "#1679A7" },
    { image: eveImg, isImg: true },
    { image: pnetImg, isImg: true },
    { icon: <SiPython />, color: "#3776ab" },
    { icon: <SiLinux />, color: "#fcc624" },
    { icon: <SiKalilinux />, color: "#557c94" },
    { icon: <SiDocker />, color: "#2496ed" },
    { icon: <SiGit />, color: "#f05032" },
    { icon: <SiWindows />, color: "#00a4ef" },
    { icon: <SiVisualstudiocode />, color: "#007acc" },
    { icon: <SiVercel />, color: "#ffffff" }
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {skills.map((skill, index) => (
        <Col 
          xs={6} 
          sm={4} 
          md={3} 
          lg={2} 
          className="tech-icons" 
          key={index} 
          style={{ 
            textAlign: "center", 
            padding: "10px", 
            width: "140px",
            height: "140px",
            display: "flex", 
            flexDirection: "column",
            alignItems: "center", 
            justifyContent: "center",
            margin: "10px"
          }}
        >
          {skill.isImg ? (
            <img 
              src={skill.image} 
              alt="tech-logo" 
              style={{ 
                width: "100px", 
                height: "100px", 
                objectFit: "contain", 
                filter: "drop-shadow(0px 2px 4px rgba(0,0,0,0.4))" 
              }} 
            />
          ) : (
            <div style={{ fontSize: "3.5rem", color: skill.color }}>
              {skill.icon}
            </div>
          )}
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;