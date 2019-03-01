import React, { Component } from 'react';
import './App.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Container';




class App extends Component {
  render() {
    return (

      <Form>
        <Form.Row>
          <Form.Group as={Col} controlId="SellerName">
            <Form.Label>Seller Name</Form.Label>
            <Form.Control type="Name" placeholder="Enter Seller Name" />
          </Form.Group>

          <Form.Group as={Col} controlId="BookName">
            <Form.Label>Textbook Name</Form.Label>
            <Form.Control type="Textbook" placeholder="Textbook Name" />
          </Form.Group>
        </Form.Row>

        <Form.Group as={Col} controlId="textbookQuality">
          <Form.Label>Textbook Quality</Form.Label>
          <Form.Control as="select">
            <option>1 (Poor)</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5 (Great)</option>
          </Form.Control>
        </Form.Group>

        <Form.Group as={Col} controlId="bookPrice">
          <Form.Label>Textbook Price ($)</Form.Label>
          <Form.Control placeholder="00.00" />
        </Form.Group>


        <Form.Group as={Col} controlId="formGridAddress1">
          <Form.Label>Seller Location</Form.Label>
          <Form.Control placeholder="University Village" />
        </Form.Group>

        <Col>
          <Button variant="primary" type="submit">
           Submit
         </Button>
        </Col>
      </Form>
    );
  }
}

export default App;
