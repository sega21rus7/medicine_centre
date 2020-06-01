import React from 'react';
import {Container, Tab, Tabs} from "react-bootstrap";
import ReviewForm from "../../components/Reviews/ReviewForm";
import ReviewLongList from "./ReviewLongList";
import {connect} from "react-redux";


class PatientReviews extends React.Component {
  render() {
    if (!this.props.user) {
      return null;
    }

    return (
      <Container className="PatientReview">
        <Tabs defaultActiveKey="view" id="tab-patient-reviews">
          <Tab eventKey="view" title="Просмотр">
            <ReviewLongList personalTitle={'Мои отзывы'}
                            personalUrl={'http://localhost:8000/marketing/api/patient_reviews/'}
                            isNotMt4={true}
                            isChangeable={true}/>
          </Tab>
          <Tab eventKey="add" title="Добавить">
            <div className="mt-4">
              <ReviewForm/>
            </div>
          </Tab>
        </Tabs>
      </Container>
    )
  };
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  }
};

export default connect(mapStateToProps, null)(PatientReviews);
