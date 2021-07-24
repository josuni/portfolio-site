import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Card } from 'react-bootstrap';

export default class Contact extends Component {
    render(){
      return (
        <div>
          <div style={{display: 'flex', justifyContent: 'center'}}>
          <Card style={{ width: '30rem'}}>
            <Card.Body>
              <Card.Title>Contact</Card.Title>
              <Card.Text>
                <p>
                Email: <a href="mailto: sjeiterj@u.rochester.edu">sjeiterj@u.rochester.edu</a><br></br>
                Github: <a href="https://github.com/josuni">github.com/josuni</a><br></br>
                LinkedIn: <a href="https://www.linkedin.com/in/sjjj/">https://www.linkedin.com/in/sjjj/</a><br></br>
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
          </div>
        </div>
      );
    }
}
