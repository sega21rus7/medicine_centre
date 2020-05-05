import React from 'react';
import './SignIn.css';
import {Button, Card, Col, Container, Dropdown, Form, Image, Row} from "react-bootstrap";
import image from '../sign_image.jpg'
import DropdownItem from "react-bootstrap/DropdownItem";
import axios from "axios";
import BottomPanel from "../BottomPanel/BottomPanel";
import ErrorValidateBlock from "../ErrorValidateBlock/ErrorValidateBlock";
import {Redirect} from "react-router";

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
    const email = event.target.elements.email;
    const username = event.target.elements.username;
    const password = event.target.elements.password;
    const isEmailInput = this.state.isEmailInput;

    axios.post('http://localhost:8000/rest-auth/login/', {
      email: isEmailInput ? email.value : '',
      username: !isEmailInput ? username.value : '',
      password: password.value,
    })
      .then(response => {
        localStorage.setItem('token', response.data.key);
        console.log(response.data);
        return <Redirect to={'/lk'}/>
      })
      .catch(error => {
        console.log(error.response.data);
        this.setState({errors: error.response.data});
      });
  };

  render() {
    const {isEmailInput, errors} = this.state;
    const {message} = this.props;

    const passwordInput = <Form.Control className="form-control-user" type="password" name="password"
                                        placeholder="Пароль"/>;
    const emailInput = <Form.Control className="form-control-user" type="email" name="email"
                                     placeholder="Email"/>;
    const loginInput = <Form.Control className="form-control-user" type="text" name="username"
                                     placeholder="Логин"/>;
    const emailOrLoginInput = isEmailInput ? emailInput : loginInput;
    if (errors) {
      var emailOrLoginError = isEmailInput ? errors.email : errors.username;
      emailOrLoginError = <ErrorValidateBlock text={emailOrLoginError}/>;
      var passwordError = <ErrorValidateBlock text={errors.password}/>;
      var nonFieldErrors = <ErrorValidateBlock text={errors.non_field_errors}/>;
    }


    return (
      <Container className="SignIn">
        <Card className="o-hidden border-0 shadow-lg mt-4">
          <Card.Body className="p-0">
            <Row>
              <Col lg={6} className="d-none d-lg-block bg-image">
                <Image
                  src={image}
                  alt={'Авторизация'}
                  className="img-fluid"
                >
                </Image>
              </Col>
              <Col lg={6}>
                <div className="p-lg-5 p-3">
                  <div className="text-center mb-4">
                    {message}
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

                  <BottomPanel isSignUpLink={true}/>
                </div>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Container>
    )
  };
}

export default SignIn;
