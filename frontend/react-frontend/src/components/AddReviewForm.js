import React from 'react';
import {Button, Col, Form, Row} from "react-bootstrap";
import axios from "axios";
import ErrorBlock from "./ErrorBlock/ErrorBlock";

class AddReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: null,
      // doctors: null,
    }
  };

  // getDoctors = () => {
  //
  // };

  // handleChange = (e) => {
  //   let value = Array.from(e.target.selectedOptions, option => option.value);
  //   this.setState({doctors: value});
  // };

  handleSubmit = (event) => {
    // event.preventDefault();
    let token = localStorage.getItem('token');
    if (token) {
      const options = {
        method: 'POST',
        url: 'http://localhost:8000/marketing/api/user_reviews/',
        data: {
          positives: event.target.elements.positives.value,
          negatives: event.target.elements.negatives.value,
          content: event.target.elements.content.value,
          // doctors: this.state.doctors,
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
            <Form.Group controlId="formGroupPositives">
              <textarea name="positives"
                        placeholder="Достоинства"/>
            </Form.Group>
            <Form.Group controlId="formGroupNegatives">
              <textarea name="negatives"
                        placeholder="Недостатки"/>
            </Form.Group>
            <Form.Group controlId="formGroupContent">
              <textarea name="content"
                        placeholder="Комментарий"
                        required/>
              {contentError}
            </Form.Group>
            {/*<Form.Group controlId="formGroupDoctors">*/}
            {/*  <select multiple={true} value={this.props.arrayOfOptionValues} onChange={this.handleChange}>*/}
            {/*    <option value={1}>First option</option>*/}
            {/*    <option value={2}>Second option</option>*/}
            {/*    <option value={3}>Third option</option>*/}
            {/*  </select>*/}
            {/*</Form.Group>*/}
          </Col>
        </Row>
        <Button type="submit" variant="outline-primary" className="btn-user">
          Оставить отзыв
        </Button>
      </Form>
    )
  };
}

export default AddReviewForm;
