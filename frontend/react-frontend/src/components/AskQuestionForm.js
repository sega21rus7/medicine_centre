import React from 'react';
import {Button, Form, Row} from "react-bootstrap";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import CKEditor from "@ckeditor/ckeditor5-react";
import axios from "axios";
import ErrorBlock from "./ErrorBlock/ErrorBlock";

class AskQuestionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: null,
      content: null,
    }
  };

  handleChange = (event, editor) => {
    this.setState({content: editor.getData()});
  };

  handleSubmit = (event) => {
    event.preventDefault();
    let token = localStorage.getItem('token');
    if (token) {
      const options = {
        method: 'POST',
        url: 'http://localhost:8000/marketing/api/support_question/',
        data: {
          content: this.state.content,
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
      var error = <ErrorBlock text={errors.content || errors}/>;
    }

    return (
      <Form className="user" onSubmit={this.handleSubmit}>
        <Row>
          <Form.Group controlId="formGroupText">
            <CKEditor editor={ClassicEditor} onChange={this.handleChange}/>
          </Form.Group>
          {error}
        </Row>
        <Button type="submit" variant="outline-primary" className="btn-user">
          Отправить обращение
        </Button>
      </Form>
    )
  };
}

export default AskQuestionForm;
