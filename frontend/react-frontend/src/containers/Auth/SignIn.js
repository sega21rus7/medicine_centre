import React from 'react';
import {Card, Col, Container, Dropdown, Row} from "react-bootstrap";
import DropdownItem from "react-bootstrap/DropdownItem";
import NotSignUpYetPanel from "../../components/Auth/NotSignUpYetPanel";
import * as actions from '../../store/actions/auth/auth';
import {connect} from 'react-redux';
import {Redirect} from "react-router";
import LeftImage from "../../components/Auth/LeftImage";
import SignInForm from "../../components/Auth/SignInForm";

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEmailInput: false,
    }
  }

  switchSignInMethod = (event) => {
    const byEmail = event.target.name === 'byEmail';
    this.setState({isEmailInput: byEmail});
  };

  render() {
    const {isAuthenticated} = this.props;
    const {isEmailInput} = this.state;

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

                  <SignInForm {...this.props} isEmailInput={isEmailInput}/>
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
