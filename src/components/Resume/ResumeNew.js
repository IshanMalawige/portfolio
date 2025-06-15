import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  const pdf = "/Ishan_Malawige-CV.pdf"; // Accessing from public folder (make sure file is in /public)

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />

        {/* Heading */}
        <h1 className="resume-heading">My Resume</h1>
        <h2 className="resume-subheading">Downloadable PDF</h2>

        {/* PDF Preview */}
        <Row className="resume" style={{ justifyContent: "center", marginTop: "20px" }}>
          <Document file={pdf} className="d-flex justify-content-center">
            <Page pageNumber={1} />
          </Document>
        </Row>

        {/* Download button under the PDF */}
        <Row style={{ justifyContent: "center", marginTop: "20px" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            download
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

      </Container>
    </div>
  );
}

export default ResumeNew;
