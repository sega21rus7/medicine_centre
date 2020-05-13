import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import ReviewLongList from "./ReviewLongList";


class DoctorReview extends React.Component {
  render() {
    return (
      <Container className="DoctorReview">
        <Row>
          <Col lg={12}>
            <ReviewLongList personalTitle={'Отзывы обо мне'}
                            personalUrl={'http://localhost:8000/marketing/api/doctor_reviews/'}
                            isNotMt4={true}/>
          </Col>
        </Row>
      </Container>
    )
  };
}

export default DoctorReview;
