import React from 'react';
import {Nav} from "react-bootstrap";
import {Link} from "react-router-dom";
import {connect} from "react-redux";

class LkTabs extends React.Component {
  render() {
    const {user} = this.props;
    const isPatient = user ? user.patient : false;

    return (
      <Nav variant="pills" className="flex-column">

        <Nav.Item key="0" className="nav-item-bg-info">
          <Nav.Link eventKey="0" as={Link}
                    to={isPatient ? '/lk/reception' : '/lk/schedule'}>
            {
              isPatient ?
                'Записаться на прием'
                : 'Мой график'
            }
          </Nav.Link>
        </Nav.Item>

        <Nav.Item key="1" className="nav-item-bg-info">
          <Nav.Link eventKey="1" as={Link} to="/lk/profile">
            Профиль
          </Nav.Link>
        </Nav.Item>

        <Nav.Item key="2" className="nav-item-bg-info">
          <Nav.Link eventKey="2" as={Link} to="/lk/change_password">
            Сменить пароль
          </Nav.Link>
        </Nav.Item>

        <Nav.Item key="3" className="nav-item-bg-info">
          <Nav.Link eventKey="3" as={Link} to="/lk/reviews">
            {
              isPatient ?
                'Мои отзывы'
                : 'Отзывы обо мне'
            }
          </Nav.Link>
        </Nav.Item>

        <Nav.Item key="4" className="nav-item-bg-info">
          <Nav.Link eventKey="4" as={Link} to="/lk/support">
            Техподдержка
          </Nav.Link>
        </Nav.Item>

        <Nav.Item key="5" className="nav-item-bg-info">
          <Nav.Link eventKey="5" as={Link} to="/lk/logout">
            Выйти
          </Nav.Link>
        </Nav.Item>

      </Nav>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  }
};

export default connect(mapStateToProps, null)(LkTabs);
