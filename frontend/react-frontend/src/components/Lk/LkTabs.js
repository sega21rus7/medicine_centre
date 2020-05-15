import React from 'react';
import {Nav} from "react-bootstrap";

class LkTabs extends React.Component {
  render() {
    const {user} = this.props;

    return (
      <Nav variant="pills" className="flex-column">

        <Nav.Item key="0" className="nav-item-bg-info">
          <Nav.Link eventKey="0">
            {
              user.patient ?
                'Записаться на прием'
                : 'Мои пациенты'
            }
          </Nav.Link>
        </Nav.Item>

        <Nav.Item key="1" className="nav-item-bg-info">
          <Nav.Link eventKey="1">
            Профиль
          </Nav.Link>
        </Nav.Item>

        <Nav.Item key="2" className="nav-item-bg-info">
          <Nav.Link eventKey="2">
            Сменить пароль
          </Nav.Link>
        </Nav.Item>

        <Nav.Item key="3" className="nav-item-bg-info">
          <Nav.Link eventKey="3">
            {
              user.patient ?
                'Мои отзывы'
                : 'Отзывы обо мне'
            }
          </Nav.Link>
        </Nav.Item>

        <Nav.Item key="4" className="nav-item-bg-info">
          <Nav.Link eventKey="4">
            Техподдержка
          </Nav.Link>
        </Nav.Item>

        <Nav.Item key="5" className="nav-item-bg-info">
          <Nav.Link eventKey="5">
            Выйти
          </Nav.Link>
        </Nav.Item>

      </Nav>
    )
  }
}

export default LkTabs;
