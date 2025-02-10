import React from "react";
import { Col, Row } from "react-bootstrap";
import "./Certificate.css"; // Import the CSS file
import imgg1 from "../../Assets/Certificates/Capture1.jpg";
import imgg2 from "../../Assets/Certificates/Capture2.jpg";
import imgg3 from "../../Assets/Certificates/Capture3.jpg";
import imgg4 from "../../Assets/Certificates/Capture4.jpg";
import imgg5 from "../../Assets/Certificates/Capture5.jpg";
import imgg6 from "../../Assets/Certificates/CSS.jpg";
import imgg7 from "../../Assets/Certificates/JavaOOP.jpg";
import imgg8 from "../../Assets/Certificates/javascript.jpg";
import imgg9 from "../../Assets/Certificates/PythonPractice.jpg";
import imgg10 from "../../Assets/Certificates/SQL LAnguage.jpg";
import imgg11 from "../../Assets/Certificates/diploma.jpg";

function Certificate() {
  const certificates = [
    { id: 1, img: imgg1, text: "Angular Basics" },
    { id: 2, img: imgg2, text: "CSS Basics" },
    { id: 3, img: imgg3, text: "Java Basics" },
    { id: 4, img: imgg4, text: "React Basics" },
    { id: 5, img: imgg5, text: "SQL Basics" },
  ];
  const certificates1 = [
    { id: 1, img: imgg6, text: "CSS" },
    { id: 2, img: imgg7, text: "Java OOP" },
    { id: 3, img: imgg8, text: "Javascript" },
    { id: 4, img: imgg9, text: "Python Practice" },
    { id: 5,img: imgg10, text: "SQL language" },
  ];
  const certificates2 = [
    { id: 1, img: imgg11, text: "Diploma In SE" },
  ];


  return (
    <Row className="CertiContainer">
      
        <header className="section-head">
          <h1><b><span className="white">Certifications </span><span className="purple">And Achievements</span></b></h1>
        </header>

      {certificates.map((cert) => (
        <Col key={cert.id} xs={4} md={2} className="CertiItem">
          <p className="CertiText">HackerRank</p>
          <img className="CertiImg" src={cert.img} alt="" draggable="false" />
          <p className="CertiText">{cert.text}</p>
          <button className="CertiButton">View</button>
        </Col>
      ))}

      {certificates1.map((cert) => (
        <Col key={cert.id} xs={4} md={2} className="CertiItem">
          <p className="CertiText">LinkedIn</p>
          <img className="CertiImg" src={cert.img} alt="" draggable="false" />
          <p className="CertiText">{cert.text}</p>
          <button className="CertiButton">View</button>
        </Col>
      ))}
      
      {certificates2.map((cert) => (
        <Col key={cert.id} xs={4} md={2} className="CertiItem">
          <p className="CertiText">NIBM</p>
          <img className="CertiImg" src={cert.img} alt="" draggable="false" />
          <p className="CertiText">{cert.text}</p>
          <button className="CertiButton">View</button>
        </Col>
      ))}
    </Row>
  );
}

export default Certificate;
