import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import SupportQuestionList from "./SupportQuestionList";
import AddSupportQuestionForm from "../../components/Support/AddSupportQuestionForm";


class Support extends React.Component {
  render() {
    return (
      <Container className="UserSupportQuestion">
        <Row>
          <Col lg={6}>
            <SupportQuestionList/>
          </Col>
          <Col lg={6}>
            <AddSupportQuestionForm/>
          </Col>
        </Row>
      </Container>
    )
  };
}

export default Support;
