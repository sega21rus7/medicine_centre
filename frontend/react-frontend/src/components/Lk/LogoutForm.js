import React from 'react';
import {Button, Col, Row} from "react-bootstrap";
import * as actions from "../../store/actions/auth/actionCreators";
import {connect} from "react-redux";

class LogoutForm extends React.Component {
  handleClick = () => {
    this.props.logout();
  };

  render() {
    return (
      <div className="LogoutForm">
        <Row>
          <Col sm={6}>
            <p>Вы уверены, что хотите выйти?</p>
          </Col>
        </Row>
        <Button variant="outline-primary" className="btn-user" onClick={this.handleClick}>
          Выйти
        </Button>
      </div>
    )
  };
}

export default connect(null, {logout: actions.logout})(LogoutForm);
