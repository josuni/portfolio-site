import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel, Card } from 'react-bootstrap';
import image from "./stockcode.jpg";

export default class Slideshow extends Component {
    render(){
      return (
        <div>
          <Carousel>
            <Carousel.Item>
              <img width="700" height="500" src={image} alt="About-img" />
              <Carousel.Caption>
                <h3>About</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img width="700" height="500" src={image} alt="Work-img" />
              <Carousel.Caption>
                <h3>Work</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img width="700" height="500" src={image} alt="Contact-img" />
              <Carousel.Caption>
                <h3>Contact</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      );
    }
}
