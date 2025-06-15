import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import "./Contact.css";
import Swal from 'sweetalert2';
import { FiMail, FiPhone, FiMapPin, FiSend } from "react-icons/fi";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          access_key: "7ce642c3-4c8b-484e-9574-3c82c867a512"
        })
      });

      const data = await response.json();

      if (data.success) {
        Swal.fire({
          title: "Success!",
          text: "Message sent successfully!",
          icon: "success"
        });
        setFormData({
          name: "",
          email: "",
          message: ""
        });
      }
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: "Failed to send message",
        icon: "error"
      });
    }
  };

  return (
    <Container fluid className="contact-section">
      <Particle />
      <Container>
        <Row className="contact-container">
          {/* Left Side - Contact Info */}
          <Col md={5} className="contact-info">
            <div className="info-card">
              <h1 className="heading">Let's Connect</h1>
              <p className="subtitle">Get in touch for collaborations or just to say hello!</p>
              
              <div className="contact-method">
                <div className="icon-circle">
                  <FiMail className="contact-icon" />
                </div>
                <div>
                  <h3>Email</h3>
                  <p>ishansthsr@gmail.com</p>
                </div>
              </div>
              
              <div className="contact-method">
                <div className="icon-circle">
                  <FiPhone className="contact-icon" />
                </div>
                <div>
                  <h3>Phone</h3>
                  <p>+94 789163460</p>
                </div>
              </div>
              
              <div className="contact-method">
                <div className="icon-circle">
                  <FiMapPin className="contact-icon" />
                </div>
                <div>
                  <h3>Location</h3>
                  <p>Rathmalana, Sri Lanka</p>
                </div>
              </div>
            </div>
          </Col>

          {/* Right Side - Contact Form */}
          <Col md={7} className="contact-form-container">
            <form onSubmit={onSubmit} className="form-glass">
              <h2 className="form-heading">Send Me a Message</h2>
              
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your name"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter your email"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder="Type your message here..."
                ></textarea>
              </div>
              
              <button type="submit" className="submit-button">
                <FiSend className="button-icon" />
                Send Message
              </button>
            </form>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Contact;
