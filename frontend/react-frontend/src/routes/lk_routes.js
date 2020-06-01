import React from "react";
import {Route, Switch} from "react-router-dom";
import ChangePasswordForm from "../components/Lk/ChangePasswordForm";
import ReviewEdit from "../components/Reviews/ReviewEdit";
import LkSupport from "../containers/Support/LkSupport";
import LogoutForm from "../components/Lk/LogoutForm";
import ProfileForm from "../components/Lk/ProfileForm";
import SupportQuestionEdit from "../components/Support/SupportQuestionEdit";
import Welcome from "../components/Lk/Welcome";
import MakeAppointment from "../containers/Reception/MakeAppointment";
import DoctorSchedule from "../containers/Reception/DoctorSchedule";
import PatientReviews from "../containers/Reviews/PatientReviews";
import DoctorReviews from "../containers/Reviews/DoctorReviews";

const LkRouter = () => (
  <div>
    <Switch>
      <Route exact path="/lk" component={Welcome}/>
      <Route path="/lk/make_appointment" component={MakeAppointment}/>
      <Route exact path="/lk/schedule" component={DoctorSchedule}/>
      <Route exact path="/lk/profile" component={ProfileForm}/>
      <Route exact path="/lk/change_password" component={ChangePasswordForm}/>
      <Route exact path="/lk/doctor_reviews" component={DoctorReviews}/>
      <Route path="/lk/patient_reviews" component={PatientReviews}/>
      <Route path="/lk/support" component={LkSupport}/>
      <Route exact path="/lk/logout" component={LogoutForm}/>
      <Route exact path="/lk/review/:pk" component={ReviewEdit}/>
      <Route exact path="/lk/support_question/:pk" component={SupportQuestionEdit}/>
    </Switch>
  </div>
);

export default LkRouter;
