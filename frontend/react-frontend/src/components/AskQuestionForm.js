import React from 'react';
import {Button, Col, Form, Row} from "react-bootstrap";

class AskQuestionForm extends React.Component {
  render() {
    return (
      <Form className="user" onSubmit={this.handleSubmit}>
        <Row>
          <Col sm={6}>
            <Form.Group controlId="formGroupText">
              <textarea placeholder="Текст"/>
            </Form.Group>
          </Col>


        </Row>
        <Button type="submit" variant="outline-primary" className="btn-user">
          Отправить обращение
        </Button>
      </Form>
    )
  };
}

export default AskQuestionForm;
