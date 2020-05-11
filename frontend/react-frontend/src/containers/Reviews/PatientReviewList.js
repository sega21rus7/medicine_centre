import React from 'react';
import {Container} from "react-bootstrap";
import AddReviewForm from "../../components/AddReviewForm";
import ReviewLongList from "./ReviewLongList";


class PatientReviewList extends React.Component {
  render() {
    return (
      <Container className="PatientReviewList">
        <AddReviewForm/>
        <ReviewLongList personalUrl={'http://localhost:8000/marketing/api/user_reviews/'}/>
      </Container>
    )
  };
}

export default PatientReviewList;
