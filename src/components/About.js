import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Jumbotron, Button, Container } from 'react-bootstrap';

export default class About extends Component {
    render(){
      return (
        <div>
          <Jumbotron fluid>
            <Container>
              <h1>About me</h1>
              <p>
                Hi there! My name is Sara Jo Jeiter-Johnson.
              </p>
              <p>
              I’m a second-year Computer Science major at the University of Rochester.
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id volutpat justo. Aenean commodo consequat velit ornare tempus. Integer et nisl non elit varius commodo. Etiam sed consequat augue. Etiam pretium neque eu vehicula tempus. Suspendisse porta metus neque, sit amet tempor quam lacinia eu. Cras imperdiet velit ac nulla consectetur sagittis. Mauris elementum sapien id justo lobortis, nec ullamcorper leo pharetra. Sed venenatis at nisi sed viverra. Aliquam lacus orci, fringilla ut faucibus at, congue ac leo.

              Maecenas sodales tincidunt dui, ac vulputate risus condimentum at. In ut molestie mauris. Nam risus lorem, convallis quis orci eget, maximus scelerisque elit. Morbi lacinia malesuada lorem non consectetur. Cras elementum felis eget tortor euismod, in pellentesque nisl imperdiet. Quisque eu magna vestibulum, ornare libero vel, congue purus. Etiam et lectus gravida, tempus massa eu, venenatis quam. Sed ornare felis non euismod rhoncus. Aliquam sagittis bibendum tincidunt. Donec sit amet condimentum leo, dictum vehicula tortor. Maecenas in mi sed tellus tincidunt iaculis eget sed augue. Cras lacus turpis, rutrum eu auctor id, ultrices et nisl.

              Vestibulum luctus dignissim maximus. Morbi mollis non enim ac convallis. Phasellus facilisis, nibh in congue tincidunt, velit dui dictum augue, et rhoncus elit velit id quam. Etiam vehicula massa lorem, et lobortis eros suscipit id. Vestibulum at risus et orci bibendum sagittis et a felis. Donec feugiat tempus lacus, et consectetur erat ornare eu. Nunc a nunc arcu. Integer mollis porttitor vehicula. Duis vel urna odio. Nullam cursus porta purus at commodo. Nulla nibh augue, ornare sed tortor sit amet, tempus aliquet mi. Nunc venenatis justo eget risus tempor cursus.

              Nunc tincidunt in mauris in molestie. Cras hendrerit orci sed elit accumsan blandit. In vitae sollicitudin lorem. Praesent ante velit, tempor in est sed, dignissim mattis orci. Cras eleifend lorem sed elementum rutrum. Integer dignissim lacinia tortor nec varius. Nunc vel nisi id est venenatis aliquam a a quam. Fusce condimentum eros ut sapien rutrum pretium. Suspendisse congue felis vel euismod pellentesque. Nulla at eros vitae eros pulvinar vestibulum. Donec vel tortor in justo hendrerit tristique nec et urna.
              </p>
            </Container>
          </Jumbotron>
        </div>
      );
    }
}
