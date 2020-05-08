import React from 'react';
import {Col, Container, Nav, Row, Tab} from "react-bootstrap";


class Lk extends React.Component {
  constructor(props) {
    super(props);
    this.patient_nav = [
      'Настройки профиля',
      'Сменить пароль',
      'Мои отзывы',
      'Записаться на прием',
      'История записей',
      'Задать вопрос',
    ];
    this.doctor_nav = [
      'Настройки профиля',
      'Сменить пароль',
      'Мои пациенты',
      'История записей',
      'Мои отзывы',
      'Задать вопрос',
    ];
    this.admin_nav = [
      'Настройки профиля',
      'Сменить пароль',
      'Пациенты',
      'Врачи',
      'История записей',
      'Статьи',
      'Новости',
      'Обращения в ТП',
      'Отзывы',
    ];
  }

  render() {
    return (
      <Container fluid className="Lk mt-4">
        <Tab.Container id="left-tabs" defaultActiveKey="0">
          <Row>
            <Col sm={3}>

              <Nav variant="pills" className="flex-column">
                {
                  this.patient_nav.map((item, index) => (
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
                  this.patient_nav.map((item, index) => (
                      <Tab.Pane eventKey={index}>
                        <p>{item}</p>
                      </Tab.Pane>
                    )
                  )
                }
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    )
  };
}

export default Lk;
