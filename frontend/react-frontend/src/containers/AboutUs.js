import React from 'react';
import {Col, Container, Nav, Tab, Row} from "react-bootstrap";


class AboutUs extends React.Component {
  render() {
    return (
      <Container fluid className="AboutUs mt-4">
        <Tab.Container id="left-tabs" defaultActiveKey="first">
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column">
                <Nav.Item>
                  <Nav.Link eventKey="first">Tab 1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Tab 2</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <p>test 1</p>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <p>test 2</p>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    )
  };
}

export default AboutUs;
