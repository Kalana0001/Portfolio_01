import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/profile1.jpg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import "./Home.css";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import ResumeNew from "../Resume/ResumeNew";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
            <span className="tagline">Welcome To My Portfolio</span>
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> Kalana De Silva</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
                <button href="" className="home_btn1"><span className="home_btm2">Let's Connect</span><span className="home_arrow"><FaRegArrowAltCircleRight /></span></button>
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }} className="xxxx">
            <div  class="top-container">
              <div class="nft-box" >
                  <img src={homeLogo} class="nft-pic"/>
                  <div class="nft-content">
                    <div class="likes">
                    </div>
                  </div>
              </div>
            </div>
            </Col>
          </Row>
        </Container>
      </Container>
      <ResumeNew/>
      <Home2 />
    </section>
  );
}

export default Home;
