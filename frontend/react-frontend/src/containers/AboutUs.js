import React from 'react';
import {Col, Container, Nav, Row, Tab} from "react-bootstrap";
import Feedback from "./Feedback";


class AboutUs extends React.Component {
  constructor(props) {
    super(props);
    this.nav = [
      'О клинике',
      'Вакансии',
      'Для организаций',
      'Отзывы',
      'Обратная связь'
    ];
  }

  render() {
    return (
      <Container fluid className="AboutUs mt-4">
        <Tab.Container id="left-tabs" defaultActiveKey="0">
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column">
                {
                  this.nav.map((item, index) => (
                      <Nav.Item key={index} className="nav-item-bg-info">
                        <Nav.Link eventKey={index}>{item}</Nav.Link>
                      </Nav.Item>
                    )
                  )
                }
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content>
                {
                  <Tab.Pane eventKey="4">
                    <Feedback/>
                  </Tab.Pane>
                }
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    )
  };
}

export default AboutUs;
