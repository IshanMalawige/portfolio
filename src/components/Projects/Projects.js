import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import AMS from "../../Assets/Projects/AMS.png";
import WSU from "../../Assets/Projects/WSU.png";
import BA from "../../Assets/Projects/BA.png";
import babyGender from "../../Assets/Projects/babyGender.png";
import PY from "../../Assets/Projects/PY.png";
import CA from "../../Assets/Projects/CA.png";
import Guess from "../../Assets/Projects/Guess.jpeg";
import XX from "../../Assets/Projects/XX.webp";
import networkTopologyImg from "../../Assets/network topology.jpg";
import multiSiteNetworkImg from "../../Assets/article2.jpg";
import activeDirectoryImg from "../../Assets/article3.jpg"; // Project 3 සඳහා Active Directory Lab image එක

function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const projectsData = [
    {
      id: 1,
      imgPath: networkTopologyImg,
      title: "Redesign and Configure Secure Network Infrastructure for KDU",
      description: "Designed and implemented a secure enterprise network infrastructure using a multi-vendor environment with Active Directory integration. The project focuses on network segmentation, centralized authentication, and secure access control across heterogeneous devices, incorporating core services like domain-based user management, policy enforcement, and role-based access.",
      ghLink: "https://github.com/IshanMalawige",
      category: "Network Projects",
    },
    {
      id: 2,
      imgPath: multiSiteNetworkImg,
      title: "Enterprise Network Modernization: Centralized AD/DHCP & Multi-Site FortiGate Security",
      description: "Designed, deployed, and secured a multi-site network infrastructure unifying Head Office, Server Network, and Branch operations under centralized Active Directory services and granular FortiGate security policies, featuring DHCP relay, zero-trust segmentation, and RBAC.",
      ghLink: "https://github.com/IshanMalawige",
      category: "Network Projects",
    },
    {
      id: 3,
      imgPath: activeDirectoryImg,
      title: "Enterprise Windows Server & Hybrid Active Directory Infrastructure",
      description: "Designed and implemented an end-to-end, enterprise-grade hybrid Windows Server infrastructure for Ceylon Trends (Pvt) Ltd (350+ employees), featuring Active Directory DS, GPOs, DHCP Failover, FSRM, IIS, WDS deployment, and an Azure cloud Additional Domain Controller (ADC).",
      ghLink: "https://www.linkedin.com/pulse/enterprise-windows-server-infrastructure-lab-ishan-malawige-bfstc/",
      category: "Network Projects",
    },
    {
      id: 4,
      imgPath: AMS,
      title: "Attendance Management System",
      description: "The Attendance Management System developed for KDU utilizes PHP for the web interface and an Arduino ESP8266 with a fingerprint sensor for attendance tracking. The system enables student enrollment, attendance recording, and report generation.",
      ghLink: "https://github.com/IshanMalawige/Attendance-Management-System.git",
      category: "Software Development",
    },
    {
      id: 5,
      imgPath: WSU,
      title: "Jungle Journey",
      description: "The Safari Booking Web Application, built using the MERN stack (MongoDB, Express, React, and Node.js), allows users to browse and book safari tours. It features a dynamic user interface where customers can explore various safari packages.",
      ghLink: "https://github.com/IshanMalawige/Safari_Booking",
      category: "Software Development",
    },
    {
      id: 6,
      imgPath: BA,
      title: "Saloon Booking App",
      description: "The Salon Booking App, developed using Dart and Flutter, allows users to easily browse and book salon services. It features a sleek and user-friendly interface where customers can view available services and choose their preferred stylist.",
      ghLink: "https://github.com/IshanMalawige/Salon-Booking-App",
      category: "Mobile Application Projects",
    },
    {
      id: 7,
      imgPath: Guess,
      title: "Guess GAME",
      description: "The Guess Game is a fun and interactive application built using Python. It challenges users to guess a randomly generated number within a specified range, providing feedback on each guess.",
      ghLink: "https://github.com/IshanMalawige/Guess-game",
      category: "Software Development",
    },
    {
      id: 8,
      imgPath: babyGender,
      title: "Genderizer app",
      description: "The Genderizor app, developed using Dart and Flutter, is designed to predict the gender of a person based on their name. Users input a name, and the app provides a gender prediction using machine learning algorithms.",
      ghLink: "https://github.com/IshanMalawige/Genderizor",
      category: "Mobile Application Projects",
    },
    {
      id: 9,
      imgPath: XX,
      title: "Portfolio",
      description: "The personal portfolio website built using React.js to showcase technical skills, projects, resume preview, and contact details with modern UI and particle background animations.",
      ghLink: "https://github.com/IshanMalawige/portfolio",
      category: "Software Development",
    },
    {
      id: 10,
      imgPath: PY,
      title: "GUI Calculator",
      description: "The Python GUI Calculator is a simple, user-friendly application built using Python and Tkinter. It allows users to perform basic arithmetic operations like addition, subtraction, multiplication, and division.",
      ghLink: "https://github.com/IshanMalawige/Genderizor",
      category: "Software Development",
    },
    {
      id: 11,
      imgPath: CA,
      title: "Calculator Mobile app",
      description: "The Calculator app, developed using Flutter and Dart, is a sleek and responsive mobile application that allows users to perform basic arithmetic operations with an intuitive interface.",
      ghLink: "",
      category: "Mobile Application Projects",
    },
  ];

  // සිලෙක්ට් කරන කැටගරි එකට අදාළ ප්‍රොජෙක්ට්ස් පමණක් ෆිල්ටර් කිරීම
  const filteredProjects = selectedCategory === "All" 
    ? projectsData 
    : projectsData.filter(project => project.category === selectedCategory);

  const categories = [
    "All", 
    "Network Projects",
    "Cloud Projects",
    "Cyber Security Projects",
    "Mobile Application Projects",
    "Software Development",
  ];

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>

        {/* Modern Filter Category Buttons (Tabs/Pills style) */}
        <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "10px", margin: "30px 0" }}>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              style={{
                padding: "10px 20px",
                borderRadius: "30px",
                border: selectedCategory === category ? "none" : "1px solid rgba(199, 112, 240, 0.4)",
                background: selectedCategory === category ? "#c770f0" : "transparent",
                color: "white",
                cursor: "pointer",
                fontWeight: "500",
                transition: "0.3s ease",
                boxShadow: selectedCategory === category ? "0 0 15px rgba(199, 112, 240, 0.6)" : "none"
              }}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Filtered Projects Cards Grid */}
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <Col md={4} className="project-card" key={project.id}>
                <ProjectCard
                  imgPath={project.imgPath}
                  isBlog={false}
                  title={project.title}
                  description={project.description}
                  ghLink={project.ghLink}
                />
              </Col>
            ))
          ) : (
            <p style={{ color: "white", textAlign: "center", marginTop: "20px" }}>No projects found in this category.</p>
          )}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;