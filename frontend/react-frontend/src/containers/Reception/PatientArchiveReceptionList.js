import React from 'react';
import ReceptionList from "../../components/Reception/PatientReceptionList";
import * as actions from "../../store/actions/make_appoinment/actionCreators";
import {connect} from "react-redux";

class PatientArchiveReceptionList extends React.Component {
  componentDidMount() {
    this.props.setTabActiveValue('archive');
  }

  render() {
    return (
      <ReceptionList specialUrl={'http://localhost:8000/rest-api/reception/archive_receptions_by_patient/'}
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
