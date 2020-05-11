import React from 'react';
import {Button, Form} from "react-bootstrap";
import ErrorBlock from "../../components/ErrorBlock/ErrorBlock";

class SignInForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: null,
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const isEmailInput = this.state.isEmailInput;
    const elements = event.target.elements;
    const username = isEmailInput ? '' : elements.username.value;
    const email = isEmailInput ? elements.email.value : '';
    const password = elements.password.value;
    this.props.onAuth(username, email, password);
  };

  render() {
    const {error, isEmailInput} = this.props;
    if (error) {
      var errors = error.data;
    }

    const passwordInput = <Form.Control className="form-control-user"
                                        type="password"
                                        name="password"
                                        placeholder="Пароль"
                                        autoComplete="on"
                                        required/>;
    const emailInput = <Form.Control className="form-control-user"
                                     type="email"
                                     name="email"
                                     placeholder="Email"
                                     required/>;
    const loginInput = <Form.Control className="form-control-user"
                                     type="text"
                                     name="username"
                                     placeholder="Логин"
                                     required/>;
    const emailOrLoginInput = isEmailInput ? emailInput : loginInput;
    if (errors) {
      var emailOrLoginError = isEmailInput ? errors.email : errors.username;
      emailOrLoginError = <ErrorBlock text={emailOrLoginError}/>;
      var passwordError = <ErrorBlock text={errors.password}/>;
      var nonFieldErrors = <ErrorBlock text={errors.non_field_errors}/>;
    }


    return (
      <Form className="user" onSubmit={this.handleSubmit}>
        <Form.Group controlId="formGroupLoginOrEmail">
          {emailOrLoginInput}
          {emailOrLoginError}
        </Form.Group>
        <Form.Group controlId="formGroupPassword">
          {passwordInput}
          {passwordError}
        </Form.Group>
        {nonFieldErrors}
        <Button type="submit" variant="outline-primary" className="btn-user" block>
          Войти
        </Button>
      </Form>
    )
  };
}

export default SignInForm;
