import React from "react";
import {Route, Switch} from "react-router-dom";
import PatientReviewListItem from "../components/Reviews/PatientReviewListItem";

const LkRouter = () => (
  <div>
    <Switch>
      <Route exact path="/lk/user_review/:pk" component={PatientReviewListItem}/>
    </Switch>
  </div>
);

export default LkRouter;
