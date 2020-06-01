import React from 'react';
import ReviewLongList from "./ReviewLongList";

class PatientReviewList extends React.Component {
  render() {
    return (
      <ReviewLongList personalTitle={'Мои отзывы'}
                      personalUrl={'http://localhost:8000/marketing/api/patient_reviews/'}
                      isNotMt4={true}
                      isChangeable={true}/>
    )
  }
}

export default PatientReviewList;
