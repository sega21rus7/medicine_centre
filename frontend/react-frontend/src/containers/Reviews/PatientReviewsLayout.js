import React from 'react';
import {Nav, Tab} from "react-bootstrap";
import {connect} from "react-redux";
import {Link} from "react-router-dom";


class PatientReviewsLayout extends React.Component {
  render() {
    const {user, tabActiveValue} = this.props;

    if (!user.patient) {
      return null;
    }

    return (
      <div className="PatientReviewsLayout">
        <Tab.Container id="review-tabs" activeKey={tabActiveValue}>
          <Nav variant="tabs">
            <Nav.Item key="view">
              <Nav.Link eventKey="view" as={Link} to="/lk/patient_reviews/view">
                Просмотр
              </Nav.Link>
            </Nav.Item>
            <Nav.Item key="add">
              <Nav.Link eventKey="add" as={Link} to="/lk/patient_reviews/add">
                Добавить
              </Nav.Link>
            </Nav.Item>
          </Nav>
          {this.props.children}
        </Tab.Container>
      </div>
    )
  };
}

const mapStateToProps = (state) => {
  return {
    user: state.actionCreators.user,
    tabActiveValue: state.reviews.tabActiveValue,
  }
};

export default connect(mapStateToProps, null)(PatientReviewsLayout);
