import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Card } from 'react-bootstrap';
import Slideshow from "./Slideshow";

export default class Home extends Component {
    render(){
      return (
        <div>
          <Slideshow />
        </div>
      );
    }
}
