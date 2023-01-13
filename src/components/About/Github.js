import React from "react";
import GitHubCalendar from "react-github-calendar";
import Card from "react-bootstrap/Card";
import { Container, Row,Col } from "react-bootstrap";

function Github() {
  return (
    <Container style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">Code</strong>
      </h1>

        <Row style={{ justifyContent: "center", paddingBottom: "40px" }}>
        <GitHubCalendar
        username="utopian-akanksha"
        blockSize={15}
        blockMargin={5}
        color="#c084f5"
        fontSize={16}
        />
        </Row>
      
      

      <Row style={{ justifyContent: "center", paddingBottom: "40px" }}>
      <Col>
         <Card className="project-card-view" style={{ width: "40%", margin: "auto" }}>
            <Card.Title  style={{ fontSize:"1.7rem"}} ><strong className="purple">My</strong> Streak-Stats</Card.Title>
              <a href="https://github.com/utopian-akanksha">
              <Card.Img
               src="https://github-readme-streak-stats.herokuapp.com?user=utopian-akanksha&theme=buefy-dark"
               alt="streak"
               />
              </a>
           </Card>
      </Col>
      </Row>


      <Row style={{ justifyContent: "center", paddingBottom: "40px" }}>
        <Col md={4} >
           <Card className="project-card-view">
              <Card.Title style={{ fontSize:"1.7rem"}}>Languages</Card.Title>
              <a href="https://github.com/utopian-akanksha">  
              <Card.Img
                align="center"
                src="https://github-readme-stats.vercel.app/api/top-langs/?username=utopian-akanksha&theme=aura" 
                alt="stats" //launguages
               />
              </a>
           </Card>
        </Col>
        <Col md={4} >
           <Card className="project-card-view">
             <Card.Title style={{fontSize:"1.7rem"}}>Stats</Card.Title>
               <a href="https://github.com/utopian-akanksha">
               <Card.Img
                 align="left"
                 src="https://github-readme-stats.vercel.app/api?username=utopian-akanksha&count_private=true&show_icons=true&theme=aura"
                 alt="count" //stats
                />
                </a>
           </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Github;
