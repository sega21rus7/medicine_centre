import React from 'react';
import PatientReviewsLayout from "./PatientReviewsLayout";
import PatientReviewsRouter from "../../routes/patient_reviews_routes";

class PatientReviews extends React.Component {
  render() {
    return (
      <div className="PatientReviews">
        <PatientReviewsLayout>
          <PatientReviewsRouter/>
        </PatientReviewsLayout>
      </div>
    )
  };
}

export default PatientReviews;

