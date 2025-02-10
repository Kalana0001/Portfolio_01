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
    { id: 1, img: imgg1, text: "Angular Basics", link: "https://drive.google.com/file/d/1AC9JSSs9KZ-ldZh6PxsRSxntPgpknvsj/view?usp=sharing" },
    { id: 2, img: imgg2, text: "CSS Basics", link: "https://drive.google.com/file/d/1UayMV0XZsiuvkHoZZjNkrQ1Kw79mUtxM/view?usp=sharing" },
    { id: 3, img: imgg3, text: "Java Basics", link: "https://drive.google.com/file/d/1vdsThQ3Hw2PIpf4Lp24ZxczBnQ5PR55l/view?usp=sharing" },
    { id: 4, img: imgg4, text: "React Basics", link: "https://drive.google.com/file/d/15Ye2en1US6bCQ3RtQjJNgHtWEmq99z24/view?usp=sharing" },
    { id: 5, img: imgg5, text: "SQL Basics", link: "https://drive.google.com/file/d/12e7ISdauCEyBc5k5Woib1Mzl3XMw59Io/view?usp=sharing" },
  ];
  const certificates1 = [
    { id: 1, img: imgg6, text: "CSS", link: "https://drive.google.com/file/d/1r1oy-oducvFnpor3A-kyTdH40uNjmusj/view?usp=sharing" },
    { id: 2, img: imgg7, text: "Java OOP", link: "https://drive.google.com/file/d/1cmG0u4-odDOxcJWovfu99-fpYFnE8o0p/view?usp=sharing" },
    { id: 3, img: imgg8, text: "Javascript", link: "https://drive.google.com/file/d/1ziD-EjSHl_thbI3HNjgV2a23Tytn3bKu/view?usp=sharing" },
    { id: 4, img: imgg9, text: "Python Practice", link: "https://drive.google.com/file/d/19MWCSLhsjqnSY4u2TsIyxQGnCspILAv8/view?usp=sharing" },
    { id: 5, img: imgg10, text: "SQL language", link: "https://drive.google.com/file/d/1tGrY2GFSI6AIwSfe4WAvycLsFMn1ih1M/view?usp=sharing" },
  ];
  const certificates2 = [
    { id: 1, img: imgg11, text: "Diploma In SE", link: "https://drive.google.com/file/d/1RZVQEz8mYx_BdFGRU1DjOtXnx_1G_JRH/view?usp=sharing" },
  ];

  return (
    <div id="certificates">
      <Row className="CertiContainer">
        <header className="section-head">
          <h1>
            <b>
              <span className="white">Certifications </span>
              <span className="purple">And Achievements</span>
            </b>
          </h1>
        </header>

        {certificates.map((cert) => (
          <Col key={cert.id} xs={4} md={2} className="CertiItem">
            <p className="CertiText">HackerRank</p>
            <img className="CertiImg" src={cert.img} alt="" draggable="false" />
            <p className="CertiText">{cert.text}</p>
            <a href={cert.link} target="_blank" rel="noopener noreferrer">
              <button className="CertiButton">View</button>
            </a>
          </Col>
        ))}

        {certificates1.map((cert) => (
          <Col key={cert.id} xs={4} md={2} className="CertiItem">
            <p className="CertiText">LinkedIn</p>
            <img className="CertiImg" src={cert.img} alt="" draggable="false" />
            <p className="CertiText">{cert.text}</p>
            <a href={cert.link} target="_blank" rel="noopener noreferrer">
              <button className="CertiButton">View</button>
            </a>
          </Col>
        ))}

        {certificates2.map((cert) => (
          <Col key={cert.id} xs={4} md={2} className="CertiItem">
            <p className="CertiText">NIBM</p>
            <img className="CertiImg" src={cert.img} alt="" draggable="false" />
            <p className="CertiText">{cert.text}</p>
            <a href={cert.link} target="_blank" rel="noopener noreferrer">
              <button className="CertiButton">View</button>
            </a>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Certificate;
