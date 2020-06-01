import React from 'react';
import MakeAppointmentRouter from "../../routes/make_appointment_routes";
import MakeAppointmentLayout from "./MakeAppointmentLayout";

class MakeAppointment extends React.Component {
  render() {
    return (
      <div className="MakeAppointment">
        <MakeAppointmentLayout>
          <MakeAppointmentRouter/>
        </MakeAppointmentLayout>
      </div>
    )
  }
}

export default MakeAppointment;
