import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
} from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { BsFiletypeSql } from "react-icons/bs";
import { SiVisualstudio } from "react-icons/si";
import { SiSupabase } from "react-icons/si";


function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudio />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <BsFiletypeSql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSupabase />
      </Col>
    </Row>
  );
}

export default Toolstack;
