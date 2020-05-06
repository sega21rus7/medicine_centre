import React from 'react';
import {Button, Card, Col, Container, Form, Image, Row} from "react-bootstrap";
import image from './sign_image.jpg'
import AuthBottomPanel from "../../components/AuthBottomPanel";
import ErrorValidateBlock from "../../components/ErrorValidateBlock/ErrorValidateBlock";
import {connect} from 'react-redux';
import * as actions from '../../store/actions/auth';

class SignUp extends React.Component {
  handleSubmit = (event) => {
    event.preventDefault();
    const elements = event.target.elements;
    this.props.onAuth(
      elements.username.value,
      elements.email.value,
      elements.password1.value,
      elements.password2.value
    );
    this.props.history.push('/sign_in');
  };

  render() {
    if (this.props.error) {
      var errors = this.props.error;
    }

    if (errors) {
      var loginError = <ErrorValidateBlock text={errors.username}/>;
      var emailError = <ErrorValidateBlock text={errors.email}/>;
      var password1Error = <ErrorValidateBlock text={errors.password1}/>;
      var password2Error = <ErrorValidateBlock text={errors.password2}/>;
      var nonFieldErrors = <ErrorValidateBlock text={errors.non_field_errors}/>;
    }

    return (
      <Container className="SignUp">
        <Card className="o-hidden border-0 shadow-lg mt-4">
          <Card.Body className="p-0">
            <Row>
              <Col lg={6} className="d-none d-lg-block bg-image">
                <Image
                  src={image}
                  alt={'Регистрация'}
                  className="img-fluid"
                >
                </Image>
              </Col>
              <Col lg={6}>
                <div className="p-lg-5 p-3">
                  <div className="text-center">
                    <h1 className="h4 mb-4">Создайте аккаунт!</h1>
                  </div>
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
                    <Form.Group controlId="formGroupPassword">
                      <Row>
                        <Col sm={6}>
                          <Form.Control className="form-control-user mb-3 mb-sm-0" type="password"
                                        name="password1" placeholder="Пароль"/>
                          {password1Error}
                        </Col>
                        <Col sm={6}>
                          <Form.Control className="form-control-user" type="password"
                                        name="password2" placeholder="Подтвердите пароль"/>
                          {password2Error}
                        </Col>
                      </Row>
                    </Form.Group>
                    {nonFieldErrors}
                    <Button type="submit" variant="outline-primary" className="btn-user" block>
                      Зарегистрироваться
                    </Button>
                  </Form>
                  <AuthBottomPanel isSignUpLink={false}/>
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
    error: state.error
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onAuth: (username, email, password1, password2) => dispatch(actions.authSignUp(username, email, password1, password2))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);

