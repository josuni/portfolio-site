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
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
      </div>
    </div>
  );
}

export default App;
