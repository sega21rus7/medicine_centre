import React from 'react';
import {Button, Col, Form, Row} from "react-bootstrap";
import axios from "axios";
import ErrorBlock from "./ErrorBlock/ErrorBlock";

class AddSupportQuestionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: null,
    }
  };

  handleSubmit = (event) => {
    // event.preventDefault();
    let token = localStorage.getItem('token');
    if (token) {
      const options = {
        method: 'POST',
        url: 'http://localhost:8000/marketing/api/user_support_questions/',
        data: {
          content: event.target.elements.content.value,
        },
        headers: {'Authorization': `Token ${token}`},
      };
      axios(options)
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err.response);
          this.setState({errors: err.response});
        })
    }
  };

  render() {
    const {errors} = this.state;
    if (errors) {
      var contentError = <ErrorBlock text={errors.content || errors}/>;
    }

    return (
      <Form className="user" onSubmit={this.handleSubmit}>
        <Row>
          <Col sm={12}>
            <Form.Group controlId="formGroupContent">
              <textarea name="content"
                        placeholder="Сообщение"
                        required/>
              {contentError}
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

export default AddSupportQuestionForm;
