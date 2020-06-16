import React from 'react';
import PatientReceptionList from "../../components/Reception/PatientReceptionList";
import * as actions from "../../store/actions/make_appoinment/actionCreators";
import {connect} from "react-redux";
import {BACKEND_URL} from "../../constants";

class PatientFreeReceptionList extends React.Component {
  componentDidMount() {
    this.props.setTabActiveValue('free');
  }

  render() {
    return (
      <PatientReceptionList history={this.props.history}
                            specialUrl={`${BACKEND_URL}/rest-api/reception/free_receptions/`}
                            isFilterable={true}/>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setTabActiveValue: (value) => dispatch(actions.setTabActiveValue(value))
  }
};

export default connect(null, mapDispatchToProps)(PatientFreeReceptionList);
