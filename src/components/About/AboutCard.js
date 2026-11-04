import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Ishan Malawige </span>
            from <span className="purple">Embilipitiya, Sri Lanka</span>.
            <br />
            <br />
            I am an undergraduate student in Faculty Of Technology at <span className="purple">General Sir John Kotelawala Defence University (KDU)</span>, specializing in the Network Engineering (FOT Intake 40).
            <br />
            <br />
            My core expertise lies in designing enterprise network infrastructures, managing virtualized environments, and implementing robust security configurations.
            <br />
            <br />
            Apart from engineering infrastructure and systems, some other activities that I enjoy include:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Exploring Virtualization Labs (EVE-NG / PNETLab)
            </li>
            <li className="about-activity">
              <ImPointRight /> Strategic Gaming & Tactical Simulations
            </li>
            <li className="about-activity">
              <ImPointRight /> Technology & Cybersecurity Research
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Building secure, scalable, and resilient enterprise networks that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Ishan Malawige</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;