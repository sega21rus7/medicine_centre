import React from 'react';
import PatientReceptionList from "../../components/Reception/PatientReceptionList";
import * as actions from "../../store/actions/make_appoinment/actionCreators";
import {connect} from "react-redux";
import {BACKEND_URL} from "../../constants";

class PatientArchiveReceptionList extends React.Component {
  componentDidMount() {
    this.props.setTabActiveValue('archive');
  }

  render() {
    return (
      <PatientReceptionList specialUrl={`${BACKEND_URL}/rest-api/reception/archive_receptions_by_patient/`}
                            specialUrlUsesPk={true}
                            isNotAppointable={true}/>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setTabActiveValue: (value) => dispatch(actions.setTabActiveValue(value))
  }
};

export default connect(null, mapDispatchToProps)(PatientArchiveReceptionList);
