import React from 'react';
import './SignIn.css';
import {Button, Card, Col, Container, Dropdown, Form, Image, Row} from "react-bootstrap";
import image from './sign_in.jpg'
import {Link} from "react-router-dom";
import DropdownItem from "react-bootstrap/DropdownItem";
import axios from "axios";
import {Redirect} from "react-router";

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      login: null,
      email: null,
      password: null,
      isEmailInput: false,
      redirect: false,
    }
  }

  switchSignInMethod = (event) => {
    const byEmail = event.target.name === 'byEmail';
    this.setState({isEmailInput: byEmail});
  };

  handleInput = (event) => {
    this.setState({[event.target.name]: event.target.value});
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.isEmailInput) {
      var data = {
        email: this.state.email,
        password: this.state.password,
      }
    } else {
      data = {
        username: this.state.login,
        password: this.state.password,
      }
    }
    axios.post('http://localhost:8000/api/rest-auth/login/', data)
      .then(response => {
        this.setState({
          redirect: true,
        });
        localStorage.setItem('token', JSON.stringify(response.data.key));
        console.log(response.data);
      })
  };

  render() {
    const {redirect, isEmailInput} = this.state;
    if (redirect) {
      return <Redirect to='lk/'/>;
    }

    const passwordInput = <Form.Control className="form-control-user" type="password" name="password"
                                        placeholder="Пароль" onChange={this.handleInput}/>;
    const emailInput = <Form.Control className="form-control-user" type="email" name="email"
                                     placeholder="Email" onChange={this.handleInput}/>;
    const loginInput = <Form.Control className="form-control-user" type="text" name="login"
                                     placeholder="Логин" onChange={this.handleInput}/>;
    const emailOrLoginInput = isEmailInput ? emailInput : loginInput;

    return (
      <Container className="SignIn">
        <Card className="o-hidden border-0 shadow-lg mt-4">
          <Card.Body className="p-0">
            <Row>
              <Col lg={5} className="d-none d-lg-block bg-image img-fluid">
                <Image
                  src={image}
                  alt={'Авторизация'}
                  width="500"
                  height="500"
                >
                </Image>
              </Col>
              <Col lg={7}>
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
                    </Form.Group>
                    <Form.Group controlId="formGroupPassword">
                      {passwordInput}
                    </Form.Group>
                    <Button type="submit" variant="outline-primary" className="btn-user" block>
                      Войти
                    </Button>
                  </Form>

                  <hr/>
                  <div className="text-center">
                    <a className="text-small" href="#">
                      Забыли пароль?
                    </a>
                  </div>
                  <div className="text-center">
                    <Link className="text-small" to="sign_up/">
                      Еще не зарегистрированы? Вам сюда!
                    </Link>
                  </div>
                </div>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Container>
    )
  }
  ;
}

export default SignIn;
