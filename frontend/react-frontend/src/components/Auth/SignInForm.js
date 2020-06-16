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
    const elements = event.target.elements;
    const username = elements.username.value;
    const password = elements.password.value;
    this.props.onAuth(username, password);
  };

  render() {
    const {error} = this.props;
    if (error) {
      var errors = error.data;
    }

    const passwordInput = <Form.Control className="form-control-user"
                                        type="password"
                                        name="password"
                                        placeholder="Пароль"
                                        autoComplete="on"
                                        required/>;
    const loginInput = <Form.Control className="form-control-user"
                                     type="text"
                                     name="username"
                                     placeholder="Логин/Email"
                                     required/>;
    if (errors) {
      var loginError = <ErrorBlock text={errors.username}/>;
      var passwordError = <ErrorBlock text={errors.password}/>;
      var nonFieldErrors = <ErrorBlock text={errors.non_field_errors}/>;
    }


    return (
      <Form className="user" onSubmit={this.handleSubmit}>
        <Form.Group controlId="formGroupLoginOrEmail">
          {loginInput}
          {loginError}
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
