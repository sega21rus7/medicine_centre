import React from 'react';
import {Button, Col, Form, Row} from "react-bootstrap";
import ErrorBlock from "../../components/ErrorBlock/ErrorBlock";

class SignUpForm extends React.Component {
  handleSubmit = (event) => {
    event.preventDefault();
    const elements = event.target.elements;
    this.props.onAuth(
      elements.username.value,
      elements.email.value,
      elements.password1.value,
      elements.password2.value
    );
  };

  render() {
    const {error} = this.props;

    if (error) {
      var errors = this.props.error.data;
    }

    if (errors) {
      var loginError = <ErrorBlock text={errors.username}/>;
      var emailError = <ErrorBlock text={errors.email}/>;
      var password1Error = <ErrorBlock text={errors.password1}/>;
      var password2Error = <ErrorBlock text={errors.password2}/>;
      var nonFieldErrors = <ErrorBlock text={errors.non_field_errors}/>;
    }

    return (
      <Form className="user" onSubmit={this.handleSubmit}>
        <Form.Group controlId="formGroupLogin">
          <Form.Control className="form-control-user" type="text" name="username"
                        placeholder="Логин"/>
          {loginError}
        </Form.Group>
        <Form.Group controlId="formGroupEmail">
          <Form.Control className="form-control-user" type="email" name="email"
                        placeholder="Email"/>
          {emailError}
        </Form.Group>
        <Row>
          <Col sm={6}>
            <Form.Group controlId="formGroupPassword1">
              <Form.Control className="form-control-user mb-3 mb-sm-0" type="password"
                            name="password1" placeholder="Пароль" autoComplete="on"/>
              {password1Error}
            </Form.Group>
          </Col>
          <Col sm={6}>
            <Form.Group controlId="formGroupPassword2">
              <Form.Control className="form-control-user" type="password"
                            name="password2" placeholder="Подтвердите пароль"
                            autoComplete="on"/>
              {password2Error}
            </Form.Group>
          </Col>
        </Row>
        {nonFieldErrors}
        <Button type="submit" variant="outline-primary" className="btn-user" block>
          Зарегистрироваться
        </Button>
      </Form>
    )
  };
}

export default SignUpForm;

