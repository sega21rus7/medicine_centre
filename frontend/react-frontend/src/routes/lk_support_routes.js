import React from "react";
import {Route, Switch} from "react-router-dom";
import SupportQuestionList from "../containers/Support/SupportQuestionList";
import SupportQuestionForm from "../components/Support/SupportQuestionForm";

const LkSupportRouter = () => (
  <div>
    <Switch>
      <Route exact path="/lk/support/view" component={SupportQuestionList}/>
      <Route exact path="/lk/support/add" component={SupportQuestionForm}/>
    </Switch>
  </div>
);

export default LkSupportRouter;
