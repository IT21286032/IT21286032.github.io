import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Kajeevan Jeyachandran </span>
            from <span className="purple"> Jaffna, Sri Lanka.</span>
            <br /> I am a third year student pursuing a BSc (Hons) in Information Technology
            Specialising in Data Science .
            <br />
            <span className="purple">I am interested in pursuing a data science internship.</span> As a passionate and motivated individual with a strong foundation in data analysis, statistics and programming, I am excited about the prospect of applying my skills and gaining practical experience in the field of data science.
            <br />
            <br />
            {/*Apart from coding, some other activities that I love to do! */}
          </p>
          {/*
          <ul style={{ color: "rgb(51 119 255)" }}>
            <li className="about-activity">
              <ImPointRight /> Photography
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>
        */}

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer"></footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
