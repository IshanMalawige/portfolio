import React from "react";
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

function Projects() {
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
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={AMS}
              isBlog={false}
              title="Attendance Management System"
              description="The Attendance Management System developed for KDU utilizes PHP for the web interface and an Arduino ESP8266 with a fingerprint sensor for attendance tracking. The system enables student enrollment, attendance recording, and report generation. It also allows administrators to manage student details and track attendance through a user-friendly web dashboard, providing an efficient and automated solution for managing student attendance at KDU."
              ghLink="https://github.com/IshanMalawige/Attendance-Management-System.git"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={WSU}
              isBlog={false}
              title="Jungle Journey"
              description="The Safari Booking Web Application, built using the MERN stack (MongoDB, Express, React, and Node.js), allows users to browse and book safari tours. It features a dynamic user interface where customers can explore various safari packages, view details, and make secure bookings. The backend, powered by Node.js and Express, handles user authentication, booking management, and data storage with MongoDB, while React ensures a seamless, responsive experience for users. Admins can manage tours, view bookings, and track user activity through an intuitive dashboard."
              ghLink="https://github.com/IshanMalawige/Safari_Booking"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={BA}
              isBlog={false}
              title="Saloon Booking App"
              description="The Salon Booking App, developed using Dart and Flutter, allows users to easily browse and book salon services. It features a sleek and user-friendly interface where customers can view available services, choose their preferred stylist, and schedule appointments. The app includes secure payment integration and notifications to remind users of upcoming bookings. Salon owners can manage appointments, update service offerings, and track customer interactions through an admin panel, providing a seamless booking experience for both customers and salon staff."
              ghLink="https://github.com/IshanMalawige/Salon-Booking-App"
                          
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Guess}
              isBlog={false}
              title="Guess GAME"
              description="The Guess Game is a fun and interactive application built using Python. It challenges users to guess a randomly generated number within a specified range. The game provides feedback on each guess, indicating whether the guess is too high or too low, and keeps track of the number of attempts. With a simple and engaging interface, it offers an enjoyable experience for users of all ages."
              ghLink="https://github.com/IshanMalawige/Guess-game"
                          
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={babyGender}
              isBlog={false}
              title="Genderizer app"
              description="The Genderizor app, developed using Dart and Flutter, is designed to predict the gender of a person based on their name. Users input a name, and the app provides a gender prediction, displaying the result in a user-friendly interface. The app utilizes machine learning algorithms or predefined data to make predictions, offering an engaging and simple experience. It includes features like saving favorite predictions, sharing results, and an intuitive design, making it accessible and easy to use for anyone curious about name-based gender predictions.."
              ghLink="https://github.com/IshanMalawige/Genderizor"
        
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={PY}
              isBlog={false}
              title="GUI Calculator"
              description="The Python GUI Calculator is a simple, user-friendly application built using Python and Tkinter. It allows users to perform basic arithmetic operations like addition, subtraction, multiplication, and division. The calculator features a graphical interface with buttons for digits and operations, providing an intuitive and responsive experience for quick calculations."
              ghLink="https://github.com/IshanMalawige/Genderizor"
             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={CA}
              isBlog={false}
              title="Calculator Mobile app"
              description="The Calculator app, developed using Flutter and Dart, is a sleek and responsive mobile application that allows users to perform basic arithmetic operations such as addition, subtraction, multiplication, and division. The app features an intuitive interface with large, easy-to-tap buttons for digits and operations, offering a smooth user experience. It supports both portrait and landscape modes and is optimized for performance, making calculations quick and accurate."
              ghLink=""
        
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
