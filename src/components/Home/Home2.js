import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg1 from "../../Assets/github.png";
import Tilt from "react-parallax-tilt";
import { AiFillGithub,} from "react-icons/ai";
import { SiHackerrank } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";
import { FaBlogger } from "react-icons/fa";

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
              I fell in love with programming and I have at least learnt
              something, I think… 🤷‍♂️
              <br />
              <br />I have experience in working with languages like 
              <i>
                <b className="purple"> C++, HTML, CSS,React, Springboot and Java. </b>
              </i>
              <br />
              <br />
              My fields of interest include building new &nbsp;
              <i>
                <b className="purple">Web Technologies and products, as well as Mobile Application Development </b> and {" "}
                <b className="purple">
                Windows Application Development.
                </b>
              </i>
              <br />
              <br />
              I consistently leverage my passion for product development by utilizing
              <b className="purple"> Springboot, Node.js</b> along with 
              <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; such as
              <i>
                <b className="purple"> React.js and Next.js</b>
              </i>
              &nbsp;  whenever possible.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg1} id="myimg1"className="img-fluid" alt="avatar" />
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
                  href="https://github.com/Kalana0001"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.hackerrank.com/profile/kalanasilva0101"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <SiHackerrank />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/kalana-de-silva-088265277/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://code100journey.blogspot.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                > 
                  <FaBlogger />
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
