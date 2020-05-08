import React from 'react';
import {Button, Col, Form, Row} from "react-bootstrap";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import axios from "axios";
import ErrorBlock from "./ErrorBlock/ErrorBlock";
import SuccessBlock from "./SuccessBlock/SuccessBlock";


class FeedbackForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editorContent: null,
      errors: null,
      success: false,
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const elements = event.target.elements;
    axios.post('http://localhost:8000/marketing/api/feedback/', {
      email: elements.email.value,
      name: elements.name.value,
      content: this.state.editorContent
    })
      .then(res => {
        console.log(res);
        this.setState({success: true});
      })
      .catch(err => {
        console.log(err.response);
        this.setState({errors: err.response.data});
      })
  };

  handleChange = (event, editor) => {
    this.setState({editorContent: editor.getData()});
  };

  render() {
    const {errors, success} = this.state;
    if (success) {
      var successMessage =
        <SuccessBlock text={'Ваше обращение будет рассмотрено и мы свяжемся с вами по Email.'}/>;
    }

    if (errors) {
      var nameError = <ErrorBlock text={errors.name}/>;
      var emailError = <ErrorBlock text={errors.email}/>;
      var contentError = <ErrorBlock text={errors.content}/>;
      var nonFieldErrors = <ErrorBlock text={errors.non_field_errors}/>;
    }

    return (
      <Form className="user" onSubmit={this.handleSubmit}>
        <Row>
          <Col sm={6}>
            <Form.Group controlId="formGroupName">
              <Form.Control className="form-control-user" type="text" name="name"
                            placeholder="Имя"/>
              {nameError}
            </Form.Group>

          </Col>
          <Col sm={6}>
            <Form.Group controlId="formGroupEmail">
              <Form.Control className="form-control-user" type="email" name="email"
                            placeholder="Email"/>
              {emailError}
            </Form.Group>

          </Col>
        </Row>
        <Form.Group controlId="formGroupComment">
          <CKEditor editor={ClassicEditor} name="comment" onChange={this.handleChange}/>
          {contentError}
        </Form.Group>
        {nonFieldErrors}
        {successMessage}
        <Button type="submit" variant="outline-primary" className="btn-user">
          Отправить сообщение на рассмотрение
        </Button>
      </Form>
    )
  };
}

export default FeedbackForm;
