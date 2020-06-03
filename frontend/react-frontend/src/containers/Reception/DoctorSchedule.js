import React from 'react';
import DoctorScheduleLayout from "./DoctorScheduleLayout";
import DoctorScheduleRouter from "../../routes/doctor_schedule_routes";

class DoctorSchedule extends React.Component {
  render() {
    return (
      <div className="DoctorSchedule">
        <DoctorScheduleLayout>
          <DoctorScheduleRouter/>
        </DoctorScheduleLayout>
      </div>
    )
  }
}

export default DoctorSchedule;
