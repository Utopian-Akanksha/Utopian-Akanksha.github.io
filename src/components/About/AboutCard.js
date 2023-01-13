import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Akanksha Malviya </span>
            from <span className="purple"> Tinsukia, Assam.</span>
            <br />An enthusiastic FULL STACK DEVELOPER with strong 
            analytical and technical skills.
            <br />
            <br />
            In a nutshell, I like to manifest my ideas through UI.
             <br/>A lifelong learner,eager to build academic and technical foundations.
            <br/>My leisure interests includes
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Reading
            </li>
            <li className="about-activity">
              <ImPointRight /> Photography
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Akanksha</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
