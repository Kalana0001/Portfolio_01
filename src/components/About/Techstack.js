import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiJava,
} from "react-icons/di";
import {
  SiNextdotjs,
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";
import { SiCsharp } from "react-icons/si";
import { DiHtml5 } from "react-icons/di";
import { IoLogoCss3 } from "react-icons/io";
import { SiBootstrap } from "react-icons/si";
import { DiJqueryLogo } from "react-icons/di";
import { DiAngularSimple } from "react-icons/di";
import { SiSpringboot } from "react-icons/si";
import { SiFlutter } from "react-icons/si";


function Techstack() {
  return (
    <div >
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }} >
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus />
        <p className="skillsp">C++</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCsharp />
        <p className="skillsp">C#</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
        <p className="skillsp">JAVA</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiHtml5 />
        <p className="skillsp">HTML</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <IoLogoCss3 />
        <p className="skillsp">CSS</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiBootstrap />
        <p className="skillsp">BOOTSTRAP</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJqueryLogo />
        <p className="skillsp">JQUERY</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs />
        <p className="skillsp">NEXT.JS</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <p className="skillsp">REACT</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
        <p className="skillsp">NODE.JS</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiAngularSimple />
        <p className="skillsp">ANGULAR</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSpringboot />
        <p className="skillsp">SPRINGBOOT</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFlutter />
        <p className="skillsp">FLUTTER</p>
      </Col>
    </Row>
    </div>
  );
}

export default Techstack;
