import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import UserSupportQuestionList from "./UserSupportQuestionList";
import AddSupportQuestionForm from "../../components/SupportQuestions/AddSupportQuestionForm";


class UserSupportQuestion extends React.Component {
  render() {
    return (
      <Container className="PatientReviewList">
        <Row>
          <Col lg={6}>
            <UserSupportQuestionList/>
          </Col>
          <Col lg={6}>
            <AddSupportQuestionForm/>
          </Col>
        </Row>
      </Container>
    )
  };
}

export default UserSupportQuestion;
