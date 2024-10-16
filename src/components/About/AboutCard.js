import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple"> Kalana De Silva </span>
            from <span className="purple"> Galle, Sri Lanka.</span>
            <br />
            I am currently pursuing my Bachelor's degree in Software Engineering.
            <br />
            I have completed a Diploma in Software Engineering at NIBM Galle.
            <br />
            Looking forward to connecting with you all!
            <br />
            <br/>
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Cricket
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Drawing Arts
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Aim to design and create solutions that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Kalana</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
