import React from 'react';
import {Button, Card, Col, Container, Dropdown, Form, Row} from "react-bootstrap";
import DropdownItem from "react-bootstrap/DropdownItem";
import NotSignUpYetPanel from "../../components/Auth/NotSignUpYetPanel";
import ErrorBlock from "../../components/ErrorBlock/ErrorBlock";
import * as actions from '../../store/actions/auth';
import {connect} from 'react-redux';
import {Redirect} from "react-router";
import LeftImage from "../../components/Auth/LeftImage";

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEmailInput: false,
      errors: null,
    }
  }

  switchSignInMethod = (event) => {
    const byEmail = event.target.name === 'byEmail';
    this.setState({isEmailInput: byEmail});
  };

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
    const {isAuthenticated, error} = this.props;
    const {isEmailInput} = this.state;

    if (isAuthenticated) {
      return <Redirect to='/lk'/>;
    }
    if (error) {
      var errors = error.data;
    }

    const passwordInput = <Form.Control className="form-control-user" type="password" name="password"
                                        placeholder="Пароль" autoComplete="on"/>;
    const emailInput = <Form.Control className="form-control-user" type="email" name="email"
                                     placeholder="Email"/>;
    const loginInput = <Form.Control className="form-control-user" type="text" name="username"
                                     placeholder="Логин"/>;
    const emailOrLoginInput = isEmailInput ? emailInput : loginInput;
    if (errors) {
      var emailOrLoginError = isEmailInput ? errors.email : errors.username;
      emailOrLoginError = <ErrorBlock text={emailOrLoginError}/>;
      var passwordError = <ErrorBlock text={errors.password}/>;
      var nonFieldErrors = <ErrorBlock text={errors.non_field_errors}/>;
    }


    return (
      <Container className="SignIn">
        <Card className="o-hidden border-0 shadow-lg mt-4">
          <Card.Body className="p-0">
            <Row>
              <Col lg={6} className="d-none d-lg-block bg-image">
                <LeftImage/>
              </Col>
              <Col lg={6}>
                <div className="p-lg-5 p-3">
                  <div className="text-center mb-4">
                    <Dropdown>
                      <span className="text-middle">Вход в систему</span>
                      <Dropdown.Toggle split variant="outline-primary" id="enter-dropdown"/>
                      <Dropdown.Menu>
                        <DropdownItem name="byLogin" onClick={this.switchSignInMethod}
                                      disabled={!isEmailInput}>По логину</DropdownItem>
                        <DropdownItem name="byEmail" onClick={this.switchSignInMethod}
                                      disabled={isEmailInput}>По email</DropdownItem>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>

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
                  <NotSignUpYetPanel/>
                </div>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Container>
    )
  };
}

const mapStateToProps = (state) => {
  return {
    error: state.error,
    isAuthenticated: state.isAuthenticated,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onAuth: (username, email, password) => dispatch(actions.authSignIn(username, email, password))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
