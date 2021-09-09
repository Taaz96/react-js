
import './App.css';
import 'bootstrap';
import ReactBootstrap, {Container, Jumbotron, Button, Row, Col, Grid, Panel,Form, FormGroup, FormLabel, FormText,FormControl} from 'react-bootstrap'

function App() {
      const affiche =()=> {alert("hello")}
  return (
    <div className="App">
      <Form>
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" placeholder="name@example.com" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
      <Form.Label>Example textarea</Form.Label>
      <Form.Control as="textarea" rows={3} />
    </Form.Group>
  </Form>
    </div>
  );
}

export default App;
