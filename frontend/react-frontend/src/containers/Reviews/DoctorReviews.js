import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import ReviewLongList from "./ReviewLongList";
import {connect} from "react-redux";
import {BACKEND_URL} from "../../constants";


class DoctorReviews extends React.Component {
  render() {
    if(!this.props.user){
      return null;
    }

    return (
      <Container className="DoctorReviews">
        <Row>
          <Col lg={12}>
            <ReviewLongList personalTitle={'Отзывы обо мне'}
                            personalUrl={`${BACKEND_URL}/rest-api/marketing/doctor_reviews/`}
                            isNotMt4={true}/>
          </Col>
        </Row>
      </Container>
    )
  };
}

const mapStateToProps = (state) => {
  return {
    user: state.auth.user,
  }
};

export default connect(mapStateToProps, null)(DoctorReviews);
