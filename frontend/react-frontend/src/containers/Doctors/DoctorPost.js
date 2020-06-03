import React from 'react';
import axios from "axios";
import {Col, Container, Image, Row} from "react-bootstrap";
import ReactHtmlParser from 'react-html-parser';
import DoctorLongList from "./DoctorLongList";

class DoctorPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      doctorPost: {},
    }
  }

  componentDidMount() {
    this.getDoctorPostData();
  }

  getDoctorPostData = () => {
    axios.get(`http://localhost:8000/staff/api/posts/${this.props.match.params.pk}`)
      .then(response => {
        this.setState({doctorPost: response.data});

      })
      .catch(err => {

      })
  };

  render() {
    const {doctorPost} = this.state;
    const doctorPk = this.props.match.params.pk;

    return (
      <div className="DoctorPost">
        <Container className="mt-4">
          <h1 className="orange-caption-left">{doctorPost.name}</h1>
          <Row>
            <Col lg={6}>
              {ReactHtmlParser(doctorPost.description)}
            </Col>
            <Col lg={6}>
              <Image
                src={doctorPost.image}
                alt=""
                className="img-fluid"
              >
              </Image>
            </Col>
          </Row>
          <h3 className="green-caption-left">Врачи, занимающие должность «{doctorPost.name}»</h3>
        </Container>
        <DoctorLongList isNotCaption={true}
                        specialUrl={`http://localhost:8000/staff/api/doctors_by_post/${doctorPk}/`}
                        isSearchable={true}
                        isFilterable={false}/>
      </div>
    )
  };
}

export default DoctorPost;
