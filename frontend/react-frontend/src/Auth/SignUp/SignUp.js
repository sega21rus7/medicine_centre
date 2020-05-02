import React from 'react';
import './SignUp.css';
import {Button, Card, Col, Container, Form, Image, Row} from "react-bootstrap";
import image from './sign_up.jpg'
import {Link} from "react-router-dom";

class SignUp extends React.Component {
  render() {
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
                  <Form className="user">
                    <Form.Group controlId="formGroupLogin">
                      <Form.Control className="form-control-user" type="email" placeholder="Логин"/>
                    </Form.Group>
                    <Form.Group controlId="formGroupEmail">
                      <Form.Control className="form-control-user" type="email" placeholder="Email"/>
                    </Form.Group>
                    <Form.Group controlId="formGroupPassword">
                      <Row>
                        <Col sm={6}>
                          <Form.Control className="form-control-user mb-3 mb-sm-0" type="password"
                                        placeholder="Пароль"/>
                        </Col>
                        <Col sm={6}>
                          <Form.Control className="form-control-user" type="password" placeholder="Подтвердите пароль"/>
                        </Col>
                      </Row>
                    </Form.Group>
                    <Button variant="outline-primary" className="btn-user" block>
                      Зарегистрироваться
                    </Button>
                  </Form>
                  <hr/>
                  <div className="text-center">
                    <a className="text-small" href="#">
                      Забыли пароль?
                    </a>
                  </div>
                  <div className="text-center">
                    <Link className="text-small" to="sign_in/">
                      Уже есть аккаунт? Войдите!
                    </Link>
                  </div>
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
