import React from 'react';
import {Col, Container, Row, Tab} from "react-bootstrap";
import {connect} from "react-redux";
import axios from "axios";
import LkTabs from "../components/Lk/LkTabs";
import LkTabsContent from "../components/Lk/LkTabsContent";

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

    return (
      <Container fluid className="Lk mt-4">
        <Tab.Container id="left-tabs" defaultActiveKey="0">
          <Row>
            <Col sm={3}>
              <LkTabs user={user}/>
            </Col>
            <Col sm={9}>
              <LkTabsContent user={user}/>
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
