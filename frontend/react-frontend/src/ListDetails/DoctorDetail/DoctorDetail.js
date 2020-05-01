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

    return (
      <div className="NewDetail">
        <Container className="mt-4">
          <Row>
            <Col md={5}>
              <h3 className="caption-center">
                {doctor.user.last_name}
                &nbsp;
                {doctor.user.first_name}
                &nbsp;
                {doctor.user.middle_name}
              </h3>
              <Card>
                <Card.Img
                  variant="top"
                  src={doctor.image}
                  alt={doctor.user.username}
                  className="img-fluid"
                />
              </Card>
            </Col>
            <Col md={7}>
              {doctor.post}
            </Col>
          </Row>
        </Container>
      </div>
    )
  };
}

export default Content;
