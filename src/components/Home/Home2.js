import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import YY from "../../Assets/YY.jpg";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I am passionate about building and securing robust enterprise architectures, 
              network infrastructures, and virtualized environments. 🚀
              <br />
              <br />I am well-versed in core domains like
              <i>
                <b className="purple"> Cisco Routing & Switching, FortiGate Firewalls, and Windows Server Administration </b>
              </i>
              <br />
              <br />
              My field of interest includes designing multi-site &nbsp;
              <i>
                <b className="purple">Enterprise Networks and Security Systems </b> and
                also exploring areas related to{" "}
                <b className="purple">
                  {" "}
                  Cloud Infrastructure & Virtualization (VMware & Azure)
                </b>
              </i>
              <br />
              <br />
              Whenever possible, I apply my technical expertise using automation scripts in
              <b className="purple"> Python</b> and deploying scalable infrastructure labs with
              <i>
                <b className="purple">
                  {" "}
                  EVE-NG, PNETLab, and Hyper-V
                </b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <Tilt>
              <div 
                style={{
                  width: "280px",
                  height: "280px",
                  borderRadius: "50%",
                  overflow: "hidden",
                  border: "4px solid rgba(199, 112, 240, 0.6)",
                  boxShadow: "0px 0px 20px rgba(199, 112, 240, 0.4)",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <img 
                  src={YY} 
                  className="img-fluid" 
                  alt="avatar" 
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center 20%",
                    borderRadius: "50%"
                  }}
                />
              </div>
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/IshanMalawige"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://x.com/IshanMalawige_"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/ishan-malawige-a71275265/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/mr._i_s_h_a_n_/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;