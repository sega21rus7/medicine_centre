import React from "react";
import {Route, Switch} from "react-router-dom";
import ReviewEdit from "../components/Reviews/ReviewEdit";

const LkRouter = () => (
  <div>
    <Switch>
      <Route exact path="/lk/patient_review/:pk" component={ReviewEdit}/>
      <Route exact path="/lk/patient_support_question/:pk" component={ReviewEdit}/>
    </Switch>
  </div>
);

export default LkRouter;
