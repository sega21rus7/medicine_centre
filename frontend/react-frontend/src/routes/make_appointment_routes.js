import React from "react";
import {Route, Switch} from "react-router-dom";
import ReceptionList from "../components/Reception/PatientReceptionList";
import FreeReceptionList from "../containers/Reception/PatientFreeReceptionList";
import ArchiveReceptionList from "../containers/Reception/PatientArchiveReceptionList";

const MakeAppointmentRouter = () => (
  <div>
    <Switch>
      <Route exact path="/lk/make_appointment/my" component={ReceptionList}/>
      <Route exact path="/lk/make_appointment/free" component={FreeReceptionList}/>
      <Route exact path="/lk/make_appointment/archive" component={ArchiveReceptionList}/>
    </Switch>
  </div>
);

export default MakeAppointmentRouter;
