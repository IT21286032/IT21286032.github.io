import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import golden from "../../Assets/Projects/GOLDEN_LANDS.jpg"
import credisy from "../../Assets/Projects/CREDISY.jpg"
import trendy from "../../Assets/Projects/TSMS.png"
import nexus from "../../Assets/Projects/nexus.jpg"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={trendy}
              isBlog={false}
              title="TRENDY TSMS "
              description="TRENDY TSMS (Trendy Textile Shop Management System) is a web application developed as an ecommerce site for managing a trendy textile shop. It provides a seamless online shopping experience for customers while allowing stakeholders to efficiently manage the shop's operations. Developed as part of the ITP Module(Second Year Second Semester) at SLIIT , TSMS utilizes the MERN stack for robust and scalable development. It integrates with various APIs including Mailgun for email management, Cloudinary for image hosting, Google Maps for location services, and Stripe for secure payment processing."
              ghLink="https://github.com/IT21286032/TRENDY-TSMS/tree/main/TRENDY"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={nexus}
              isBlog={false}
              title="NexusCarePath"
              description="Nexus Care Path is an advanced healthcare mobile application developed using Kotlin in Android Studio. It serves as a comprehensive platform where pharmacists can effortlessly add and sell medicines, while customers can conveniently browse and purchase medications. The app also offers a convenient appointment reservation system for surgeries, enabling users to schedule their medical procedures with ease. Hospitals can showcase the range of surgeries they offer, providing a valuable resource for patients. The app utilizes Firebase Realtime Database for efficient data management and seamless real-time updates. Nexus Care Path was developed as part of the Mobile Application Development module during the 2nd year at SLIIT."
              ghLink="https://github.com/IT21334542/NexusHealthCareMobile"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={credisy}
              isBlog={false}
              title="CREDISY"
              description="CREDISY is a web application designed to provide an online banking experience. The goal of this project is to showcase and demonstrate object-oriented programming (OOP) concepts. Developed as part of the Object-Oriented Programming module at SLIIT, CREDISY offers a secure and user-friendly platform for banking transactions. With features like account management, fund transfers, and transaction history, CREDISY highlights the principles of encapsulation, inheritance, and polymorphism in OOP. "
              ghLink="https://github.com/IT21286032/CREDISY-Online-Banking"
              demoLink=""              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={golden}
              isBlog={false}
              title="Golden Lands"
              description="‘Golden Lands’ is a web application specifically designed for land sales. With a goal to provide a seamless and efficient platform for buying and selling land, Golden Lands serves as a comprehensive solution for real estate transactions. Developed as part of the Internet and Web Technology Module at SLIIT , this application leverages cutting-edge web technologies to deliver a user-friendly experience."
              ghLink="https://github.com/IT21286032/Golden-Lands"
              demoLink=""
            />
          </Col>

          {/*<Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col> 
  */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
