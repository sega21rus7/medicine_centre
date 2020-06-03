import React from "react";
import {Route, Switch} from "react-router-dom";
import DoctorReceptionList from "../components/Reception/DoctorReceptionList";
import DoctorArchiveReceptionList from "../containers/Reception/DoctorArchiveReceptionList";

const DoctorScheduleRouter = () => (
  <div>
    <Switch>
      <Route exact path="/lk/doctor_schedule/my" component={DoctorReceptionList}/>
      <Route exact path="/lk/doctor_schedule/archive" component={DoctorArchiveReceptionList}/>
    </Switch>
  </div>
);

export default DoctorScheduleRouter;
