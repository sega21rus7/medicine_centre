import React from 'react';
import {Container, Tab, Tabs} from "react-bootstrap";
import AddReviewForm from "../../components/Reviews/AddReviewForm";
import ReviewLongList from "./ReviewLongList";


class PatientReviews extends React.Component {
  render() {
    return (
      <Container className="PatientReview">
        <Tabs defaultActiveKey="view" id="tab-patient-reviews">
          <Tab eventKey="view" title="Просмотр">
            <ReviewLongList personalTitle={'Мои отзывы'}
                            personalUrl={'http://localhost:8000/marketing/api/patient_reviews/'}
                            isNotMt4={true}
                            isChangeable={true}/>
          </Tab>
          <Tab eventKey="add" title="Добавить">
            <AddReviewForm/>
          </Tab>
        </Tabs>
      </Container>
    )
  };
}

export default PatientReviews;
