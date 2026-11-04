import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Particle from "../Particle";
import { ImNewTab } from "react-icons/im";

// Article cover image eka import karaganna
import flaskCoverImg from "../../Assets/article1.jpg"; 

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
      imgPath: flaskCoverImg,
      link: "https://www.linkedin.com/in/ishan-malawige",
      date: "October 2026",
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
                
                {/* Image size එක card එකට හරියටම fit වෙන විදිහට සකස් කර ඇත */}
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
                  
                  {/* LinkedIn button එක card එක මදට (center) align කර ඇත */}
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