import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import FeedbackForm from "../../components/MainPage/FeedbackForm";


class Feedback extends React.Component {
  render() {
    return (
      <Container className="Feedback">
        <h3 className="orange-caption-left">Обратная связь</h3>
        <Row>
          <Col lg={12}>
            <FeedbackForm/>
          </Col>
        </Row>
      </Container>
    )
  };
}

export default Feedback;
