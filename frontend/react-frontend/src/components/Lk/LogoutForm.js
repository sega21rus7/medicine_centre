import React from 'react';
import {Button, Col, Form, Row} from "react-bootstrap";
import * as actions from "../../store/actions/auth";
import {connect} from "react-redux";
import {Redirect} from "react-router";

class LogoutForm extends React.Component {
  handleSubmit = (event) => {
    // event.preventDefault(); с перехватом почему-то не работает
    this.props.logout();
  };

  render() {
    if(!this.props.isAuthenticated) {
      return <Redirect to='/'/>;
    }

    return (
      <Form className="user" onSubmit={this.handleSubmit}>
        <Row>
          <Col sm={6}>
            <p>Вы уверены что хотите выйти?</p>
          </Col>
        </Row>
        <Button type="submit" variant="outline-primary" className="btn-user">
          Выйти
        </Button>
      </Form>
    )
  };
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.isAuthenticated,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(actions.logout)
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(LogoutForm);
