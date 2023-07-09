import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/profile.png";
import schoolLogo from "../../Assets/hartley.png";
import primaryLogo from "../../Assets/kasinathar.png";


import universityLogo from "../../Assets/sliit.png";

import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiOutlineWhatsApp,
  AiOutlineEnvironment,
  AiOutlineFlag,
  AiOutlineMail
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

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

            <b className="purple"><h2>My Education</h2></b>
            <br/>
              <ul className="custom-bullet">

              <li>
                  <img src={primaryLogo} className="bullet-logo" alt="Primary Logo" />
                  <span>J/Thunnalai Kasinathar Vidyalayam</span>
                    <span style={{ color: "rgb(155 126 172)" }}>(2007-2011)</span>
                  
                </li>

                <li>
                  <img src={schoolLogo} className="bullet-logo" alt="School Logo" />
                  <span>J/Hartley College</span>
                    <span style={{ color: "rgb(155 126 172)" }}>(2011-2020)</span>

                  
                </li>
                <li>
                  <img src={universityLogo} className="bullet-logo" alt="University Logo" />
                  <span>Srilanka Institute Of Information Technology-SLIIT</span>
                  <span style={{ color: "rgb(155 126 172)" }}>(2021-Present)</span>
                </li>
                
              </ul>
              <br/>

              <span className="location">
                <AiOutlineEnvironment />
                Lives in {'\u00A0'} <strong>Colombo,{'\u00A0'}Sri Lanka</strong>
              </span>
              <br />


              <span className="from-place">
                <AiOutlineFlag />
                From {'\u00A0'} <strong>Jaffna</strong>
              </span>



              {/*I fell in love with programming and I have at least learnt
              something, I think… 🤷‍♂️
              <br />
              <br />I am fluent in classics like
              <i>
                <b className="purple"> C++, Javascript and Go. </b>
              </i>
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="purple">Web Technologies and Products </b> and
                also in areas related to{" "}
                <b className="purple">
                  Blockchain.
                </b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with <b className="purple">Node.js</b> and
              <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js and Next.js</b>
              </i>*/}
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
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
                  href="https://github.com/IT21286032"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/KajeevanJ"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/kajeevanjeyachandran/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/kajee__1"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://wa.me/94763319623?text=Hello%20Kajeevan,%20I%20just%20checked%20your%20portfolio.%20Can%20I%20discuss%20with%20you%3F"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineWhatsApp />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="mailto:kajeevanjeyachandran@gmail.com?subject=Portfolio Inquiry&body=Hello Kajeevan,%0D%0A%0D%0AI just checked your portfolio and would like to discuss further with you.%0D%0A%0D%0AThank you!"
                  className="icon-colour home-social-icons"
                >
                  <AiOutlineMail />
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
