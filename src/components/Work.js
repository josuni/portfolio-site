import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Card, Container, Col, Row, Overlay, OverlayTrigger, Tooltip} from 'react-bootstrap';
import compImg from "./computericon.jpg";

export default class Work extends Component {
    render(){
      return (
        <div>
        <Container>
          <Row fluid>
            <Col>
              <a href="https://github.com/josuni/portfolio-site/tree/master">
              <Card className="bg-white text-dark">
                <Card.Body>
                  <Card.Title>This Website</Card.Title>
                  <Card.Text>
                    See this project on Github
                  </Card.Text>
                </Card.Body>
                <Card.Img variant="bottom" src={compImg} alt="Card image" />
              </Card>
              </a>
            </Col>
            <Col>
              <a href="https://github.com/josuni/Street-Mapping">
              <Card className="bg-white text-dark">
                  <Card.Body>
                    <Card.Title>Street Mapping</Card.Title>
                    <Card.Text>
                      <p>
                      A path-finding application coded in Java.
                      </p>
                    </Card.Text>
                </Card.Body>
                <Card.Img variant="bottom" src={compImg} alt="Card image" />
              </Card>
              </a>
            </Col>
          </Row>
        </Container>
        </div>
      );
    }
}
