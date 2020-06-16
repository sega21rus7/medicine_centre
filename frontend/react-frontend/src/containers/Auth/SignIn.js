import React from 'react';
import {Card, Col, Container, Row} from "react-bootstrap";
import NotSignUpYetPanel from "../../components/Auth/NotSignUpYetPanel";
import * as actions from '../../store/actions/auth/actionCreators';
import {connect} from 'react-redux';
import {Redirect} from "react-router";
import LeftImage from "../../components/Auth/LeftImage";
import SignInForm from "../../components/Auth/SignInForm";

class SignIn extends React.Component {
  render() {
    const {isAuthenticated} = this.props;

    if (isAuthenticated) {
      return <Redirect to='/lk'/>;
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
                    <h1 className="h4 mb-4 text-middle">Вход в систему</h1>
                  </div>

                  <SignInForm {...this.props}/>
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
    error: state.auth.error,
    isAuthenticated: state.auth.isAuthenticated,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onAuth: (username, password) => dispatch(actions.authSignIn(username, password))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
