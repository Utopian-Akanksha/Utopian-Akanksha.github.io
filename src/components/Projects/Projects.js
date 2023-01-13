import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import kimaye from "../../Assets/Projects/kimaye.png";
import himalya from "../../Assets/Projects/himalya.png";
import zara from "../../Assets/Projects/zara.png";
import justShop from "../../Assets/Projects/justShop.gif";


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
              imgPath={justShop}
              isBlog={false}
              title="JustShop"
              description="A collaborative responsive commercial website made from scratch with frontend and backend integration. Also has a Admin dashboard with crud operatiins"
              ghLink="https://github.com/suFi7867/JustShop.com"
              demoLink="https://justshop-unit5-project.netlify.app/"
              stacks= {["HTML", 'CSS', 'JavaScript', 'React', 'Redux', 'NodeJs','ExpressJs', 'MongoDb']}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={himalya}
              isBlog={false}
              title="Himalaya"
              description="Himalaya is an Indian Multinational Company formed with a clear vision to bring Ayurveda to society.It offers a wide range of clinically-studied herbal supplements ."
              ghLink="https://github.com/Utopian-Akanksha/bizarre-cracker-4775"
              demoLink="https://marvelous-biscochitos-e3029c.netlify.app/"
              stacks= {["HTML", 'CSS', 'JavaScript', 'React']}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kimaye}
              isBlog={false}
              title="Kimaye"
              description="Grower's of India's finest fruits. India's first brand to retail fresh fruits in USA. Kimaye aims to empower its farmers by delivering their produce to 35 countries around the globe"
              ghLink="https://github.com/Utopian-Akanksha/spacial-magic-4027/tree/main/kimaye_app"
              demoLink="https://my-kimaye-app.netlify.app/"      
              stacks= {["HTML", 'CSS', 'JavaScript', 'React'] }       
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={zara}
              isBlog={false}
              title="ZARA"
              description="ZARA is a Spanish multi-national retail clothing chain. It specialises in fast fashion, and sells clothing, accessories, shoes, beauty products and perfumes ."
              ghLink="https://github.com/Utopian-Akanksha/ZaraWeb-Clone"
              demoLink="https://symphonious-daifuku-4488c6.netlify.app/"
              stacks= {["HTML", 'CSS', 'JavaScript']}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
