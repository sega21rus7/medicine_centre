import React from 'react';
import {Col, Container, Nav, Row, Tab} from "react-bootstrap";
import Feedback from "./Feedback";
import ReviewLongList from "../Reviews/ReviewLongList";
import Vacancy from "../../components/MainPage/Vacancy";
import AboutCenter from "../../components/MainPage/AboutCenter";
import ForCompanies from "../../components/MainPage/ForCompanies";


class AboutUs extends React.Component {
  constructor(props) {
    super(props);
    this.nav = [
      'О центре',
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
                <Tab.Pane eventKey="0">
                  <AboutCenter/>
                </Tab.Pane>
                <Tab.Pane eventKey="1">
                  <Vacancy/>
                </Tab.Pane>
                <Tab.Pane eventKey="2">
                  <ForCompanies/>
                </Tab.Pane>
                <Tab.Pane eventKey="3">
                  <ReviewLongList isNotMt4={true}/>
                </Tab.Pane>
                <Tab.Pane eventKey="4">
                  <Feedback/>
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
