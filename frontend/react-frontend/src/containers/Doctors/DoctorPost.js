import React from 'react';
import axios from "axios";
import {Col, Container, Image, Row} from "react-bootstrap";
import ReactHtmlParser from 'react-html-parser';
import DoctorLongList from "./DoctorLongList";
import {BACKEND_URL} from "../../constants";

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
    axios.get(`${BACKEND_URL}/rest-api/staff/posts/${this.props.match.params.pk}`)
      .then(response => {
        this.setState({doctorPost: response.data});

      })
      .catch(err => {

      })
  };

  render() {
    const {doctorPost} = this.state;
    const postPk = this.props.match.params.pk;

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
                        specialUrl={`${BACKEND_URL}/rest-api/staff/doctors_by_post/${postPk}/`}
                        postPk={postPk}
                        isSearchable={true}
                        isFilterable={false}/>
      </div>
    )
  };
}

export default DoctorPost;
