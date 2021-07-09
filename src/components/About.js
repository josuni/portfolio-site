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
                Hi there! This is my about page.
              </p>
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque cursus, dolor eget accumsan feugiat, mauris nisl consequat tellus, id finibus nisl leo sit amet lectus. Morbi et ante vitae orci iaculis interdum eu vitae quam. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras velit odio, molestie at metus ac, blandit maximus mauris. Vestibulum tempor euismod commodo. Suspendisse neque nisl, sollicitudin nec faucibus sit amet, porttitor vitae nisi. Morbi iaculis euismod tellus et dapibus. Phasellus magna lectus, varius a sagittis quis, laoreet ut mi. Morbi a neque eu erat malesuada mattis at quis diam. Curabitur suscipit pulvinar velit, sed laoreet purus fermentum quis. Nullam vitae nisl massa. Vestibulum rutrum tempor augue, non egestas diam. Ut cursus, ligula vitae volutpat placerat, augue lectus lobortis sapien, quis blandit augue lorem a nibh. Suspendisse in ipsum tempus, venenatis ante eu, interdum urna. Sed ultrices orci vitae lacinia congue. Vestibulum sit amet facilisis ligula.

              Duis facilisis ex at gravida fermentum. Nunc mi nisl, fringilla et magna ac, ornare rhoncus lacus. Nulla blandit pretium sem, eget sollicitudin risus maximus eget. Vestibulum lobortis scelerisque libero, ac consectetur quam vulputate ut. Nulla at turpis mattis, sagittis tellus ut, fringilla tellus. Proin augue ex, varius ut quam sit amet, lacinia faucibus mi. Suspendisse urna dui, venenatis sed luctus vitae, fringilla ut purus. Donec quis lacus fringilla, lobortis enim iaculis, sollicitudin turpis. Ut mattis, urna vel porta sodales, purus quam auctor orci, eu commodo nibh diam nec ex. Etiam tristique diam sed dolor faucibus maximus. Nunc ac justo enim.

              Proin a interdum massa. Sed tempor nunc et augue aliquet condimentum. Morbi a felis eu elit congue ullamcorper eu vel nulla. Suspendisse eget metus id turpis dignissim placerat. Nullam massa diam, tristique ut vulputate a, ultrices vitae leo. Maecenas id sem tortor. Fusce quis vulputate velit. Sed dictum congue scelerisque. Integer pulvinar accumsan mi id posuere. Sed ex felis, facilisis in consequat sit amet, tempor nec risus. Curabitur vel nibh ac augue varius ultricies at in nunc.

              Fusce lobortis porttitor eros, ac elementum sem fermentum a. Maecenas accumsan lacus a viverra varius. Pellentesque scelerisque vel tellus at semper. Sed iaculis felis at sapien tristique, sit amet euismod eros semper. Sed eget neque fringilla, tincidunt eros quis, mollis nibh. Maecenas viverra pellentesque purus a fringilla. Donec tempus semper ex nec posuere. Donec ultrices enim sit amet lectus pharetra, ut euismod tortor facilisis. Vestibulum volutpat imperdiet dui, tempus sodales arcu tincidunt vitae. Integer sit amet tincidunt mauris.

              Sed porttitor tincidunt augue eget scelerisque. Vestibulum in sapien vel tortor rhoncus venenatis sit amet sit amet nunc. Pellentesque et nunc sit amet tellus fringilla mollis. Vivamus enim magna, auctor id tincidunt ac, sodales vitae massa. Nam commodo enim ac sollicitudin rutrum. In hendrerit ornare risus, nec molestie leo posuere non. In facilisis congue erat vitae molestie. Nullam rutrum lectus ut tristique condimentum. Donec pharetra at orci id semper. Pellentesque tempus auctor augue eu tempor. Nulla condimentum sed nisi eget congue.
              </p>
            </Container>
          </Jumbotron>
        </div>
      );
    }
}
