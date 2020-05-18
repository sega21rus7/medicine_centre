import React from "react";
import PatientReviews from "./PatientReviews";
import DoctorReviews from "./DoctorReviews";
import {connect} from "react-redux";

class LkReviews extends React.Component {
  render() {
    return (
      <div className="LkReviews">
        {
          this.props.isPatient ?
            <PatientReviews/>
            : <DoctorReviews/>
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isPatient: state.user.patient,
  }
};

export default connect(mapStateToProps, null)(LkReviews);
