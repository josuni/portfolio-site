import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Card } from 'react-bootstrap';

export default class About extends Component {
    render(){
      return (
        <div>
          <div style={{display: 'flex', justifyContent: 'center'}}>
          <Card border="danger" style={{ width: '20rem'}}>
            <Card.Body>
              <Card.Title>Hi there!</Card.Title>
              <Card.Text>
                <p>
                This is about. <br></br>
                I'm making a portfolio.
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
          </div>
        </div>
      );
    }
}
