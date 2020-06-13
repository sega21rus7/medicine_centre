import React from 'react';
import {Col, Container, Image, Row} from "react-bootstrap";
import {getFullName} from "../../methods";
import axios from "axios";
import LineProperty from "../Doctors/LineProperty";
import {BACKEND_URL} from "../../constants";

class ProfileView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: [],
    }
  }

  componentDidMount() {
    axios.get(`${BACKEND_URL}/rest-api/lk/users/${this.props.match.params.pk}`)
      .then(response => {
        this.setState({
          user: response.data
        });
      })
  }

  render() {
    const {user} = this.state;

    return (
      <Container className="ProfileView">
        <Row>
          <Col md={6}>
            <Image
              className="img-fluid"
              src={user.avatar}
              alt={user.username}
            />
          </Col>
          <Col md={6}>
            <h3 className="orange-caption-center">
              {getFullName(user)}
            </h3>
            <LineProperty name="Номер телефона" content={user.phone_number || 'не указан'}/>
            <LineProperty name="Email" content={user.email}/>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default ProfileView;
