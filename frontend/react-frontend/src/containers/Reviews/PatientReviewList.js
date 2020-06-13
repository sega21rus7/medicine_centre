import React from 'react';
import ReviewLongList from "./ReviewLongList";
import {connect} from "react-redux";
import * as actions from "../../store/actions/reviews/actionCreators";

class PatientReviewList extends React.Component {
  componentDidMount() {
    this.props.setTabActiveValue('view');
  }

  render() {
    return (
      <ReviewLongList personalTitle={'Мои отзывы'}
                      personalUrl={'http://localhost:8000/rest-api/marketing/patient_reviews/'}
                      isNotMt4={true}
                      isChangeable={true}/>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setTabActiveValue: (value) => dispatch(actions.setTabActiveValue(value))
  }
};

export default connect(null, mapDispatchToProps)(PatientReviewList);

