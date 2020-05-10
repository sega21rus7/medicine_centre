import React from 'react';
import {Col, Container, Nav, Row, Tab} from "react-bootstrap";
import {connect} from "react-redux";
import axios from "axios";
import ProfileForm from '../components/Lk/ProfileForm'
import ChangePasswordForm from "../components/Lk/ChangePasswordForm";
import LogoutForm from "../components/Lk/LogoutForm";
import SupportQuestionForm from "../components/SupportQuestionForm";

class Lk extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
    };
    this.nav = [
      'Профиль',
      'Сменить пароль',
      'Мои отзывы',
      'Записаться на прием',
      'Задать вопрос',
      'Выйти',
    ];
    // 'Записаться на прием',
    //   'Мои пациенты',
    // this.admin_nav = [
    //   'Профиль',
    //   'Сменить пароль',
    //   'Пациенты',
    //   'Врачи',
    //   'История записей',
    //   'Статьи',
    //   'Новости',
    //   'Обращения в ТП',
    //   'Отзывы',
    // ];
  }

  componentDidMount() {
    let token = localStorage.getItem('token');
    if (token) {
      const options = {
        method: 'GET',
        url: 'http://localhost:8000/rest-auth/user/',
        headers: {'Authorization': `Token ${token}`},
      };
      axios(options)
        .then(response => {
          this.setState({user: response.data});
          console.log(response.data);
        })
        .catch(error => {
          console.log(error.response);
        });
    } else {
      this.props.history.push('/sign_in');
    }
  };

  render() {
    const {user} = this.state;
    let userData = user ? user : null;

    return (
      <Container fluid className="Lk mt-4">
        <Tab.Container id="left-tabs" defaultActiveKey="0">
          <Row>
            <Col sm={3}>

              <Nav variant="pills" className="flex-column">
                {this.nav.map((item, index) => (
                    <Nav.Item key={index} className="nav-item-bg-info">
                      <Nav.Link eventKey={index}>{item}</Nav.Link>
                    </Nav.Item>
                  )
                )}
              </Nav>

            </Col>
            <Col sm={9}>
              <Tab.Content>
                <Tab.Pane key="0" eventKey="0">
                  <ProfileForm user={userData}/>
                </Tab.Pane>
                <Tab.Pane key="1" eventKey="1">
                  <ChangePasswordForm/>
                </Tab.Pane>
                <Tab.Pane key="4" eventKey="4">
                  <SupportQuestionForm/>
                </Tab.Pane>
                <Tab.Pane key="5" eventKey="5">
                  <LogoutForm/>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    )
  };
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.isAuthenticated,
  }
};

export default connect(mapStateToProps, null)(Lk);
