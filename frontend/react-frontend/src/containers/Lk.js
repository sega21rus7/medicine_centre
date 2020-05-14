import React from 'react';
import {Col, Container, Nav, Row, Tab} from "react-bootstrap";
import {connect} from "react-redux";
import axios from "axios";
import ProfileForm from '../components/Lk/ProfileForm'
import ChangePasswordForm from "../components/Lk/ChangePasswordForm";
import LogoutForm from "../components/Lk/LogoutForm";
import PatientReview from "./Reviews/PatientReview";
import UserSupportQuestion from "./SupportQuestions/UserSupportQuestion";
import DoctorReview from "./Reviews/DoctorReview";

class Lk extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
    };
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

                <Nav.Item key="0" className="nav-item-bg-info">
                  <Nav.Link eventKey="0">
                    {
                      userData.patient ?
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
                      userData.patient ?
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

            </Col>
            <Col sm={9}>
              <Tab.Content>

                <Tab.Pane key="1" eventKey="1">
                  <ProfileForm user={userData}/>
                </Tab.Pane>

                <Tab.Pane key="2" eventKey="2">
                  <ChangePasswordForm/>
                </Tab.Pane>

                <Tab.Pane key="3" eventKey="3">
                  {
                    userData.patient ?
                      <PatientReview/>
                      : <DoctorReview/>
                  }
                </Tab.Pane>

                <Tab.Pane key="4" eventKey="4">
                  <UserSupportQuestion/>
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
