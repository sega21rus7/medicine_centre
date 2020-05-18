import React from "react";
import {Route, Switch} from "react-router-dom";
import ChangePasswordForm from "../components/Lk/ChangePasswordForm";
import ReviewEdit from "../components/Reviews/ReviewEdit";
import Support from "../containers/Support/Support";
import LogoutForm from "../components/Lk/LogoutForm";
import ProfileForm from "../components/Lk/ProfileForm";
import MakeAppointment from "../containers/MakeAppointment";
import LkReviews from "../containers/Reviews/LkReviews";

const LkRouter = () => (
  <div>
    <Switch>
      <Route exact path="/lk" component={MakeAppointment}/>
      <Route exact path="/lk/profile" component={ProfileForm}/>
      <Route exact path="/lk/change_password" component={ChangePasswordForm}/>
      <Route exact path="/lk/reviews" component={LkReviews}/>
      <Route exact path="/lk/support" component={Support}/>
      <Route exact path="/lk/logout" component={LogoutForm}/>
      <Route exact path="/lk/review/:pk" component={ReviewEdit}/>
      <Route exact path="/lk/support_question/:pk" component={ReviewEdit}/>
    </Switch>
  </div>
);

export default LkRouter;
