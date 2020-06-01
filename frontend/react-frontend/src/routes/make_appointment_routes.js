import React from "react";
import {Route, Switch} from "react-router-dom";
import ReceptionList from "../components/Reception/ReceptionList";
import FreeReceptionList from "../containers/Support/FreeReceptionList";

const MakeAppointmentRouter = () => (
  <div>
    <Switch>
      <Route exact path="/lk/make_appointment/my" component={ReceptionList}/>
      <Route exact path="/lk/make_appointment/free" component={FreeReceptionList}/>
    </Switch>
  </div>
);

export default MakeAppointmentRouter;
