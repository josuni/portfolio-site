import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel, Card } from 'react-bootstrap';
import meImg from "./meicon.jpg";
import compImg from "./computericon.jpg";
import emailImg from "./emailicon.jpg";

export default class Slideshow extends Component {
    render(){
      return (
        <div>
          <Carousel>
            <Carousel.Item>
              <img width="700" height="500" src={meImg} alt="About-img" />
              <Carousel.Caption>
                <h3>About me</h3>
                <p>Sara Jo Jeiter-Johnson</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img width="700" height="500" src={compImg} alt="Work-img" />
              <Carousel.Caption>
                <h3>Work</h3>
                <p>See my code</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img width="700" height="500" src={emailImg} alt="Contact-img" />
              <Carousel.Caption>
                <h3>Contact</h3>
                <p>How to reach me</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      );
    }
}
