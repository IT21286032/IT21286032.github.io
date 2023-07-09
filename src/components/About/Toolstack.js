import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiRstudio,
  SiSlack,
  SiVercel,
  SiWindows,
  SiAzuredataexplorer,
  SiGithub,
  
} from "react-icons/si";

import {
  
  
} from "react-icons/di";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiWindows />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRstudio />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAzuredataexplorer />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub
         />
      </Col>
    </Row>
  );
}

export default Toolstack;
