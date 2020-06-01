import React from 'react';
import {Card, Col, Container, Row} from "react-bootstrap";
import {connect} from 'react-redux';
import {Redirect} from "react-router";
import LeftImage from "../../components/Auth/LeftImage";
import ForgotPasswordForm from "../../components/Auth/ResetPasswordForm";

class ResetPassword extends React.Component {
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
                    <h1 className="h4 mb-4 text-middle">Восстановление пароля</h1>
                  </div>
                  <ForgotPasswordForm/>
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
    isAuthenticated: state.auth.isAuthenticated,
  }
};

export default connect(mapStateToProps, null)(ResetPassword);

