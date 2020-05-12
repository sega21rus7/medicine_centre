import React from 'react';
import {Card, Col, Container, Row} from "react-bootstrap";
import AlreadySignUpPanel from "../../components/Auth/AlreadySignUpPanel";
import {connect} from 'react-redux';
import * as actions from '../../store/actions/auth';
import {Redirect} from "react-router";
import LeftImage from "../../components/Auth/LeftImage";
import SignUpForm from "../../components/Auth/SignUpForm";

class SignUp extends React.Component {
  render() {
    const {isAuthenticated} = this.props;
    if (isAuthenticated) {
      return <Redirect to='/lk'/>;
    }

    return (
      <Container className="SignUp">
        <Card className="o-hidden border-0 shadow-lg mt-4">
          <Card.Body className="p-0">
            <Row>
              <Col lg={6} className="d-none d-lg-block bg-image">
                <LeftImage/>
              </Col>
              <Col lg={6}>
                <div className="p-lg-5 p-3">
                  <div className="text-center">
                    <h1 className="h4 mb-4 text-middle">Создание аккаунта пациента</h1>
                  </div>
                  <SignUpForm {...this.props}/>
                  <AlreadySignUpPanel/>
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
    onAuth: (username, email, password1, password2) => dispatch(actions.authSignUp(username, email, password1, password2))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);

