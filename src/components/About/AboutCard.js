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
            from <span className="purple"> Embilipitiya, Srilanka</span>
            <br />
            I am graduate Student Of Sir John Kotelawala Defence University in Srilanka.
            <br />
            I have completed BT(Hons) Information And Communication Technology (BICT) from Faculty of Technology KDU
           
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Movies
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Ishan Malawige</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
