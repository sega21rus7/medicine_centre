import React from 'react';
import './DoctorDetail.css';
import axios from "axios";
import {Card, Col, Container, Row} from "react-bootstrap";


class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      doctor: {},
    }
  }

  componentDidMount() {
    axios.get(`http://localhost:8000/staff/api/doctor_detail/${this.props.match.params.slug}`)
      .then(response => {
        this.setState({
          doctor: response.data
        });
        console.log(response.data);
      })
  }

  render() {
    const {doctor} = this.state;
    if (doctor.post) {
      var post = doctor.post.name
    }
    if (doctor.user) {
      var {avatar, last_name, first_name, middle_name, phone_number} = doctor.user;
    }
    const caption =
      <h3 className="caption-center">
        {last_name}&nbsp;{first_name}&nbsp;{middle_name}
      </h3>;


    return (
      <div className="DoctorDetail">
        <Container className="mt-4">
          <Row>
            <Col md={5}>
              {caption}
              <Card>
                <Card.Img
                  variant="top"
                  src={avatar}
                  className="img-fluid"
                />
              </Card>
            </Col>
            <Col md={7}>
              {post}
              <br/>
              {phone_number}
            </Col>
          </Row>
        </Container>
      </div>
    )
  };
}

export default Content;
