import React from "react";
import {Route, Switch} from "react-router-dom";
import PatientReviewList from "../containers/Reviews/PatientReviewList";
import ReviewForm from "../components/Reviews/ReviewForm";

const PatientReviewsRouter = () => (
  <div>
    <Switch>
      <Route exact path="/lk/patient_reviews/view" component={PatientReviewList}/>
      <Route exact path="/lk/patient_reviews/add" component={ReviewForm}/>
    </Switch>
  </div>
);

export default PatientReviewsRouter;
