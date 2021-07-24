import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Jumbotron, Button, Container } from 'react-bootstrap';

export default class About extends Component {
    render(){
      return (
        <div>
          <Jumbotron fluid>
            <Container>
              <h1>About</h1>
              <p>
                Sara Jo Jeiter-Johnson is a second-year Computer Science major at the University of Rochester entering the software engineering industry,
                with particular interests in back-end and full-stack web development. She is most experienced in Java and C programming with some experience in Python,
                HTML/CSS, and JS. While attending the U of R, she works as a residential-life staff member, CS tutor, and CS teacher’s assistant, and is active in several student organizations
                such as Women & Minorities in Computing. In her spare time, she enjoys drawing, painting, and playing Dungeons & Dragons with friends.
              </p>
            </Container>
          </Jumbotron>
        </div>
      );
    }
}
