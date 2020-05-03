import React from 'react';
import './SignUp.css';
import {Button, Card, Col, Container, Form, Image, Row} from "react-bootstrap";
import image from './sign_up.jpg'
import {Link, Redirect} from "react-router-dom";
import axios from "axios";
import BottomPanel from "../BottomPanel/BottomPanel";

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      login: null,
      email: null,
      password1: null,
      password2: null,
      redirect: false,
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      username: this.state.login,
      email: this.state.email,
      password1: this.state.password1,
      password2: this.state.password2,
    };
    axios.post('http://localhost:8000/rest-auth/registration/', data)
      .then(response => {
        this.setState({
          redirect: true,
        });
        console.log(response.data);
      })
  };

  handleInput = (event) => {
    this.setState({[event.target.name]: event.target.value});
  };

  render() {
    if (this.state.redirect) {
      return <Redirect to='/sign_in'/>;
    }

    return (
      <Container className="SignUp">
        <Card className="o-hidden border-0 shadow-lg mt-4">
          <Card.Body className="p-0">
            <Row>
              <Col lg={5} className="d-none d-lg-block bg-image">
                <Image
                  src={image}
                  alt={'Регистрация'}
                  height="500"
                >
                </Image>
              </Col>
              <Col lg={7}>
                <div className="p-lg-5 p-3">
                  <div className="text-center">
                    <h1 className="h4 mb-4">Создайте аккаунт!</h1>
                  </div>
                  <Form className="user" onSubmit={this.handleSubmit}>
                    <Form.Group controlId="formGroupLogin">
                      <Form.Control className="form-control-user" type="text" name="login"
                                    placeholder="Логин" onChange={this.handleInput}/>
                    </Form.Group>
                    <Form.Group controlId="formGroupEmail">
                      <Form.Control className="form-control-user" type="email" name="email"
                                    placeholder="Email" onChange={this.handleInput}/>
                    </Form.Group>
                    <Form.Group controlId="formGroupPassword">
                      <Row>
                        <Col sm={6}>
                          <Form.Control className="form-control-user mb-3 mb-sm-0" type="password"
                                        name="password1" placeholder="Пароль" onChange={this.handleInput}/>
                        </Col>
                        <Col sm={6}>
                          <Form.Control className="form-control-user" type="password"
                                        name="password2" placeholder="Подтвердите пароль"
                                        onChange={this.handleInput}/>
                        </Col>
                      </Row>
                    </Form.Group>
                    <Button type="submit" variant="outline-primary" className="btn-user" block>
                      Зарегистрироваться
                    </Button>
                  </Form>

                  <BottomPanel isSignUpLink={false}/>
                </div>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Container>
    )
  };
}

export default SignUp;
