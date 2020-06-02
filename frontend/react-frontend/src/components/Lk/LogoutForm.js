import React from 'react';
import {Button, Col, Form, Row} from "react-bootstrap";
import * as actions from "../../store/actions/auth/actionCreators";
import {connect} from "react-redux";

class LogoutForm extends React.Component {
  handleSubmit = (event) => {
    // event.preventDefault(); с перехватом почему-то не работает
    this.props.logout();
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
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

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(actions.logout)
  }
};

export default connect(null, mapDispatchToProps)(LogoutForm);
