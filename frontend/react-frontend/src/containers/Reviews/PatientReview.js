import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import AddReviewForm from "../../components/Reviews/AddReviewForm";
import ReviewLongList from "./ReviewLongList";


class PatientReview extends React.Component {
  render() {
    return (
      <Container className="PatientReviewList">
        <Row>
          <Col lg={6}>
            <ReviewLongList personalTitle={'Мои отзывы'}
                            personalUrl={'http://localhost:8000/marketing/api/patient_reviews/'}
                            isNotMt4={true}/>
          </Col>
          <Col lg={6}>
            <AddReviewForm/>
          </Col>
        </Row>
      </Container>
    )
  };
}

export default PatientReview;
