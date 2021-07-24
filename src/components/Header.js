import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav} from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";

export default class Header extends Component {
    render(){
      return (
        <Router>
        <div>
          <Navbar>
            <Navbar.Text>
            </Navbar.Text>
            <Nav>
               <Nav.Link as={Link} to="/home">Home</Nav.Link>
               <Nav.Link as={Link} to="/about">About</Nav.Link>
               <Nav.Link href="https://github.com/josuni">Work</Nav.Link>
               <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
            </Nav>
          </Navbar>
        </div>
        <div>
          <Switch>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
        </Router>
      );
    }
}
