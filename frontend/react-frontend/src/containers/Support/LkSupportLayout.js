import React from 'react';
import {Container, Nav, Tab} from "react-bootstrap";
import {connect} from "react-redux";
import {Link} from "react-router-dom";


class LkSupportLayout extends React.Component {
  render() {
    return (
      <Container className="LkSupportLayout">
        <Tab.Container id="support-tabs" defaultActiveKey="view">
          <Nav variant="tabs">
            <Nav.Item key="view">
              <Nav.Link eventKey="view" as={Link} to="/lk/support/view">
                Просмотр
              </Nav.Link>
            </Nav.Item>
            <Nav.Item key="view">
              <Nav.Link eventKey="add" as={Link} to="/lk/support/add">
                Добавить
              </Nav.Link>
            </Nav.Item>
          </Nav>
          {this.props.children}
        </Tab.Container>
      </Container>
    )
  };
}

export default LkSupportLayout;
