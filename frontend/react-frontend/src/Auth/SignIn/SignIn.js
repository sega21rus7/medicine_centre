import React from 'react';
import './SignIn.css';
import {Button, Card, Col, Container, Form, Image, Row} from "react-bootstrap";
import image from './sign_in.jpg'
import {Link} from "react-router-dom";

class SignIn extends React.Component {
  render() {
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
                  <div className="text-center">
                    <h1 className="h4 mb-4">Вход в систему!</h1>
                  </div>
                  <Form className="user">
                    <Form.Group controlId="formGroupLoginEmail">
                      <Form.Control className="form-control-user" type="email" placeholder="Логин/Email"/>
                    </Form.Group>
                    <Form.Group controlId="formGroupPassword">
                      <Form.Control className="form-control-user" type="email" placeholder="Пароль"/>
                    </Form.Group>
                    <Button variant="outline-primary" className="btn-user" block>
                      Войти
                    </Button>
                  </Form>
                  <hr/>
                  <div className="text-center">
                    <a className="small-text" href="#">
                      Забыли пароль?
                    </a>
                  </div>
                  <div className="text-center">
                    <Link className="small-text" to="sign_up/">
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
  };
}

export default SignIn;
