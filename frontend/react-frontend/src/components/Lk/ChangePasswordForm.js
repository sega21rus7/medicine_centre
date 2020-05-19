import React from 'react';
import {Button, Col, Form, Row} from "react-bootstrap";
import ErrorBlock from "../ErrorBlock/ErrorBlock";
import axios from 'axios';
import SuccessBlock from "../SuccessBlock/SuccessBlock";

class ChangePasswordForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: null,
      success: null,
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    let token = localStorage.getItem('token');
    if (token) {
      const elements = event.target.elements;
      const options = {
        method: 'POST',
        url: 'http://localhost:8000/rest-auth/password/change/',
        data: {
          new_password1: elements.password.value,
          new_password2: elements.passwordConfirm.value,
        },
        headers: {'Authorization': `Token ${token}`},
      };
      axios(options)
        .then(res => {
          console.log(res);
          this.setState({success: res.data.detail});
        })
        .catch(err => {
          console.log(err.response);
          this.setState({errors: err.response});
        })
    }
  };

  render() {
    const {errors, success} = this.state;
    if (errors) {
      var passwordError = <ErrorBlock text={errors.new_password1}/>;
      var passwordConfirmError = <ErrorBlock text={errors.new_password2}/>;
      var nonFieldErrors = <ErrorBlock text={errors.non_field_errors}/>;
    }

    return (
      <Form onSubmit={this.handleSubmit}>
        <Row>
          <Col sm={6}>
            <Form.Group controlId="formGroupPassword">
              <Form.Label column="name">Пароль</Form.Label>
              <Form.Control className="form-control-user"
                            type="password"
                            name="password"
                            autoComplete="on"
                            required/>
              {passwordError}
            </Form.Group>
          </Col>

          <Col sm={6}>
            <Form.Group controlId="formGroupPasswordConfirm">
              <Form.Label column="name">Подтверждение пароля</Form.Label>
              <Form.Control className="form-control-user"
                            type="password"
                            name="passwordConfirm"
                            autoComplete="on"
                            required/>
              {passwordConfirmError}
            </Form.Group>
          </Col>
        </Row>
        {nonFieldErrors}
        <SuccessBlock text={success}/>
        <Button type="submit" variant="outline-primary" className="btn-user">
          Изменить пароль
        </Button>
      </Form>
    )
  };
}

export default ChangePasswordForm;
