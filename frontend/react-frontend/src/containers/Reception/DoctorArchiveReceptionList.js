import React from 'react';
import DoctorReceptionList from "../../components/Reception/DoctorReceptionList";
import {BACKEND_URL} from "../../constants";
import * as actions from "../../store/actions/doctor_schedule/actionCreators";
import {connect} from "react-redux";

class DoctorArchiveReceptionList extends React.Component {
  componentDidMount() {
    this.props.setTabActiveValue('archive');
  }

  render() {
    return (
      <DoctorReceptionList specialUrl={`${BACKEND_URL}/rest-api/reception/archive_receptions_by_doctor/`}
                           isConfirmable={true}/>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setTabActiveValue: (value) => dispatch(actions.setTabActiveValue(value))
  }
};

export default connect(null, mapDispatchToProps)(DoctorArchiveReceptionList);

