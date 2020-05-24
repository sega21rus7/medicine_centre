import React from "react";
import {connect} from "react-redux";
import MakeAppointment from "./MakeAppointment";
import DoctorSchedule from "./DoctorSchedule";

class LkReception extends React.Component {
  render() {
    const {user} = this.props;

    return (
      <div className="LkReception">
        {
          user && user.patient ?
            <MakeAppointment/>
            : <DoctorSchedule/>
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  }
};

export default connect(mapStateToProps, null)(LkReception);
