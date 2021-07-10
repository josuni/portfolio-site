import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel, Card } from 'react-bootstrap';
import meImg from "./meicon.jpg";
import compImg from "./computericon.jpg";
import emailImg from "./emailicon.jpg";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Work from "./Work";
import Contact from "./Contact";

export default class Slideshow extends Component {
    render(){
      return (
        <Router>
        <div>
          <Carousel>
            <Carousel.Item>
              <Link to="/about">
              <img width="700" height="500" src={meImg} alt="About-img" />
              </Link>
              <Carousel.Caption>
                <h3>About me</h3>
                <p>Sara Jo Jeiter-Johnson</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <a href="https://github.com/josuni">
              <img width="700" height="500" src={compImg} alt="Work-img" />
              </a>
              <Carousel.Caption>
                <h3>Work</h3>
                <p>See my code</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <a href="mailto: sjeiterj@u.rochester.edu">
              <img width="700" height="500" src={emailImg} alt="Contact-img" />
              </a>
              <Carousel.Caption>
                <h3>Contact</h3>
                <p>How to reach me</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
        <div>
          <Switch>
            <Route path="/about">
              <About />
            </Route>
          </Switch>
        </div>
        </Router>
      );
    }
}
