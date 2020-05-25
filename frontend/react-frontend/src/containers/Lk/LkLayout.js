import React from 'react';
import {Col, Container, Row, Tab} from "react-bootstrap";
import LkTabs from "../../components/Lk/LkTabs";

class LkLayout extends React.Component {
  render() {
    return (
      <Container fluid className="mt-4">
        <Tab.Container id="left-tabs">
          <Row>
            <Col sm={3}>
              <LkTabs/>
            </Col>
            <Col sm={9}>
              {this.props.children}
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    )
  };
}

export default LkLayout;

