import React from "react";
import {Route, Switch} from "react-router-dom";
import ChangePasswordForm from "../components/Lk/ChangePasswordForm";
import ReviewEdit from "../components/Reviews/ReviewEdit";
import Support from "../containers/Support/Support";
import LogoutForm from "../components/Lk/LogoutForm";
import ProfileForm from "../components/Lk/ProfileForm";
import LkReviews from "../containers/Reviews/LkReviews";
import SupportQuestionEdit from "../components/Support/SupportQuestionEdit";
import AboutCenter from "../components/MainPage/AboutCenter";
import MakeAppointment from "../containers/Reception/MakeAppointment";
import DoctorSchedule from "../containers/Reception/DoctorSchedule";

const LkRouter = () => (
  <div>
    <Switch>
      <Route exact path="/lk" component={AboutCenter}/>
      <Route exact path="/lk/reception" component={MakeAppointment}/>
      <Route exact path="/lk/schedule" component={DoctorSchedule}/>
      <Route exact path="/lk/profile" component={ProfileForm}/>
      <Route exact path="/lk/change_password" component={ChangePasswordForm}/>
      <Route exact path="/lk/reviews" component={LkReviews}/>
      <Route exact path="/lk/support" component={Support}/>
      <Route exact path="/lk/logout" component={LogoutForm}/>
      <Route exact path="/lk/review/:pk" component={ReviewEdit}/>
      <Route exact path="/lk/support_question/:pk" component={SupportQuestionEdit}/>
    </Switch>
  </div>
);

export default LkRouter;
