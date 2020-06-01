import React from 'react';
import {Container, Nav, Tab} from "react-bootstrap";
import {connect} from "react-redux";
import {Link} from "react-router-dom";


class PatientReviewsLayout extends React.Component {
  render() {
    if (!this.props.user) {
      return null;
    }

    return (
      <Container className="PatientReview">
        <Tab.Container id="review-tabs" defaultActiveKey="view">
          <Nav variant="tabs">
            <Nav.Item key="view">
              <Nav.Link eventKey="view" as={Link} to="/lk/patient_reviews/view">
                Просмотр
              </Nav.Link>
            </Nav.Item>
            <Nav.Item key="view">
              <Nav.Link eventKey="add" as={Link} to="/lk/patient_reviews/add">
                Добавить
              </Nav.Link>
            </Nav.Item>
          </Nav>
          {this.props.children}
        </Tab.Container>
      </Container>
    )
  };
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  }
};

export default connect(mapStateToProps, null)(PatientReviewsLayout);
