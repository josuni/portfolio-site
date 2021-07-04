import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Navbar, Card, Button} from 'react-bootstrap';

function App() {
  return (
    <div className="App">
    <Navbar className="justify-content-center">
      <h2>
        Jo's Temporary Site
      </h2>
    </Navbar>
      <div style={{display: 'flex', justifyContent: 'center'}}>
      <Card border="danger" style={{ width: '20rem'}}>
        <Card.Body>
          <Card.Title>Hi there!</Card.Title>
          <Card.Text>
            <p>
            This website is a work in progress. <br></br>
            I'm making a portfolio.
            </p>
          </Card.Text>
        </Card.Body>
      </Card>
      </div>
    </div>
  );
}

export default App;
