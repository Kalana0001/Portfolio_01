import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
} from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { BsFiletypeSql } from "react-icons/bs";
import { SiVisualstudio } from "react-icons/si";
import { SiSupabase } from "react-icons/si";
import { DiGit } from "react-icons/di";
import { SiFirebase } from "react-icons/si";
import { DiIntellij } from "react-icons/di";



function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <p className="skillsp">VISUAL STUDIO CODE</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudio />
        <p className="skillsp">VISUAL STUDIO</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql />
        <p className="skillsp">MYSQL</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <BsFiletypeSql />
        <p className="skillsp">SQL</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSupabase />
        <p className="skillsp">SUPABASE</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
        <p className="skillsp">GIT</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
        <p className="skillsp">FIREBASE</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiIntellij />
        <p className="skillsp">INTELLIJ</p>
      </Col>
    </Row>
  );
}

export default Toolstack;
