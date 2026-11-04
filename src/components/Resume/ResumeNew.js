import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [numPages, setNumPages] = useState(null);
  const pdfUrl = process.env.PUBLIC_URL + "/Ishan_Malawige-CV.pdf";

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  // IDM සහ බ්‍රව්සර් ඩවුන්ලෝඩ් ගැටළු මඟහරවා බ්ලොබ් ඩවුන්ලෝඩ් කිරීම
  const handleDownload = (e) => {
    e.preventDefault();
    fetch(pdfUrl)
      .then((response) => response.blob())
      .then((blob) => {
        const blobURL = window.URL.createObjectURL(blob);
        const fileName = "Ishan_Malawige-CV.pdf";
        const alink = document.createElement("a");
        alink.href = blobURL;
        alink.download = fileName;
        document.body.appendChild(alink);
        alink.click();
        document.body.removeChild(alink);
      })
      .catch((err) => {
        console.error("Download failed:", err);
        window.open(pdfUrl, "_blank");
      });
  };

  return (
    <div>
      <Container fluid className="resume-section" style={{ paddingBottom: "50px" }}>
        <Particle />

        <h1 className="resume-heading" style={{ textAlign: "center", color: "white", marginBottom: "30px" }}>My Resume</h1>

        {/* PDF Preview container rendering all pages from public url */}
        <Row className="resume" style={{ justifyContent: "center", marginTop: "10px" }}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%", overflowX: "auto" }}>
            <Document file={pdfUrl} onLoadSuccess={onDocumentLoadSuccess} className="d-flex justify-content-center flex-column align-items-center">
              {numPages &&
                Array.from(new Array(numPages), (el, index) => (
                  <div key={`page_${index + 1}`} style={{ marginBottom: "20px", boxShadow: "0 0 10px rgba(0,0,0,0.5)" }}>
                    <Page 
                      pageNumber={index + 1} 
                      renderTextLayer={false} 
                      renderAnnotationLayer={false} 
                      scale={window.innerWidth > 768 ? 1.2 : 0.6} 
                    />
                  </div>
                ))}
            </Document>
          </div>
        </Row>

        {/* Working Download button under the PDF preview */}
        <Row style={{ justifyContent: "center", marginTop: "30px" }}>
          <Button
            variant="primary"
            onClick={handleDownload}
            style={{ maxWidth: "250px", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}
          >
            <AiOutlineDownload style={{ fontSize: "1.2em", marginRight: "5px" }} />
            &nbsp;Download CV
          </Button>
        </Row>

      </Container>
    </div>
  );
}

export default ResumeNew;