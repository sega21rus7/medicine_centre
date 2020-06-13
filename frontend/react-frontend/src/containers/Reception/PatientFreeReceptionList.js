import React from 'react';
import ReceptionList from "../../components/Reception/PatientReceptionList";
import * as actions from "../../store/actions/make_appoinment/actionCreators";
import {connect} from "react-redux";

class PatientFreeReceptionList extends React.Component {
  componentDidMount() {
    this.props.setTabActiveValue('free');
  }

  render() {
    return (
      <ReceptionList history={this.props.history}
                     specialUrl={'http://localhost:8000/rest-api/reception/free_receptions/'}
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
