import React from 'react';
import ReceptionList from "../../components/Reception/ReceptionList";
import * as actions from "../../store/actions/reviews/reviews";
import {connect} from "react-redux";

class FreeReceptionList extends React.Component {
  componentDidMount() {
    this.props.setTabActiveValue('free');
  }

  render() {
    return (
      <ReceptionList specialUrl={'http://localhost:8000/reception/api/free_receptions/'}/>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setTabActiveValue: (value) => dispatch(actions.setTabActiveValue(value))
  }
};

export default connect(null, mapDispatchToProps)(FreeReceptionList);
