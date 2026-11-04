import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Particle from "../Particle";
import { ImNewTab } from "react-icons/im";

// Articles 1 සිට 7 දක්වා අදාළ images import කරගැන්ම (අවශ්‍ය පරිදි filenames වෙනස් කරගත හැක)
import flaskCoverImg from "../../Assets/article1.jpg"; 
import networkArtImg from "../../Assets/article2.jpg"; 
import activeDirectoryImg from "../../Assets/article3.jpg"; // Active Directory Lab image
import eveNgImg from "../../Assets/article4.jpg";          // EVE-NG / PNETLab resources image
import vmwareVTImg from "../../Assets/article5.png";        // VMware VT-x/EPT error image
import staticRoutingImg from "../../Assets/article6.png";   // Multi-router static routing image
import dhcpLabImg from "../../Assets/article7.png";         // Cisco Router DHCP Lab image

function Articles() {
  const articlesList = [
    {
      id: 1,
      title: "High-Speed Automated Video Stream Downloader Using Flask, yt-dlp & Browser Extension",
      description: "A comprehensive guide on building a high-speed, automated video stream downloader web application powered by Flask, Python, yt-dlp, and browser automation.",
      imgPath: flaskCoverImg,
      link: "https://www.linkedin.com/pulse/high-speed-automated-video-stream-downloader-using-flask-malawige-mrlec/",
      date: "September 21, 2026",
    },
    {
      id: 2,
      title: "Enterprise Network Modernization & FortiGate Security",
      description: "An in-depth look into designing and implementing centralized AD/DHCP services and multi-site FortiGate firewall security topologies.",
      imgPath: networkArtImg, 
      link: "https://www.linkedin.com/pulse/enterprise-network-modernization-centralized-addhcp-ishan-malawige-bqnac/", 
      date: "October 2026",
    },
    {
      id: 3,
      title: "Enterprise Windows Server Infrastructure Lab",
      description: "A detailed walkthrough of setting up an enterprise-grade Windows Server infrastructure lab featuring Active Directory Domain Services (AD DS).",
      imgPath: activeDirectoryImg,
      link: "https://www.linkedin.com/pulse/enterprise-windows-server-infrastructure-lab-ishan-malawige-bfstc/",
      date: "October 2026",
    },
    {
      id: 4,
      title: "Free Networking Lab Resources: EVE-NG, PNETLab & GNS3",
      description: "Exploring essential free resources, images, and community repositories for building advanced network simulation labs in EVE-NG, PNETLab, and GNS3.",
      imgPath: eveNgImg,
      link: "https://www.linkedin.com/pulse/free-networking-lab-resources-eve-ng-pnetlab-gns3-ishan-malawige-jw3nc/",
      date: "October 2026",
    },
    {
      id: 5,
      title: "Fixing Virtualized Intel VT-x/EPT Not Supported on VMware",
      description: "Step-by-step troubleshooting guide on resolving the 'Virtualized Intel VT-x/EPT is not supported on this platform' error when running virtual machines.",
      imgPath: vmwareVTImg,
      link: "https://www.linkedin.com/pulse/fixing-virtualized-intel-vt-xept-supported-platform-vmware-malawige-2amgc/",
      date: "September 2026",
    },
    {
      id: 6,
      title: "Building Basic Multi-Router Network Using Static Routing",
      description: "Learn how to interconnect multiple routers and configure static routing tables to establish end-to-end network connectivity across subnets.",
      imgPath: staticRoutingImg,
      link: "https://www.linkedin.com/pulse/building-basic-multi-router-network-using-static-routing-malawige-bbaac/",
      date: "September 2026",
    },
    {
      id: 7,
      title: "Lab 01: Basic DHCP Configuration on Cisco Router",
      description: "A beginner-friendly practical lab guide on configuring a Cisco router as a DHCP server to dynamically assign IP addresses to local network hosts.",
      imgPath: dhcpLabImg,
      link: "https://www.linkedin.com/pulse/lab-01-basic-dhcp-configuration-cisco-router-ishan-malawige-mlinc/",
      date: "September 2026",
    },
  ];

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My LinkedIn <strong className="purple">Articles </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are some technical articles and project write-ups I've shared on LinkedIn. Click to read directly on LinkedIn.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {articlesList.map((article) => (
            <Col md={4} className="project-card" key={article.id}>
              <Card className="project-card-view" style={{ background: "transparent", border: "1px solid rgba(199, 112, 240, 0.2)", color: "white", padding: "15px", borderRadius: "10px", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                
                <Card.Img 
                  variant="top" 
                  src={article.imgPath} 
                  alt="article-img" 
                  style={{ borderRadius: "8px", width: "100%", height: "200px", objectFit: "cover", marginBottom: "15px" }} 
                />
                
                <Card.Body style={{ padding: "0", display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%" }}>
                  <div>
                    <Card.Title style={{ fontWeight: "bold", marginBottom: "10px", fontSize: "1.1em" }}>{article.title}</Card.Title>
                    <p style={{ fontSize: "0.85em", color: "#c770f0", marginBottom: "10px" }}>{article.date}</p>
                    <Card.Text style={{ textAlign: "justify", marginBottom: "20px", fontSize: "0.9em" }}>
                      {article.description}
                    </Card.Text>
                  </div>
                  
                  <div style={{ display: "flex", justifyContent: "center", width: "100%", marginTop: "10px" }}>
                    <Button
                      variant="primary"
                      href={article.link}
                      target="_blank"
                      rel="noreferrer"
                      style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100%" }}
                    >
                      <ImNewTab style={{ marginRight: "5px" }} /> Read on LinkedIn
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Articles;