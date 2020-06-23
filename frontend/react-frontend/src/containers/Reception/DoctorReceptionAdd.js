import React from 'react';
import DoctorReceptionAddForm from "../../components/Reception/DoctorReceptionAddForm";
import {Col, Container, Row} from "react-bootstrap";
import * as actions from "../../store/actions/doctor_schedule/actionCreators";
import {connect} from "react-redux";

class DoctorReceptionAdd extends React.Component {
  componentDidMount() {
    this.props.setTabActiveValue('add');
  }

  render() {
    return (
      <Container className="DoctorReceptionAdd mt-2">
        <Row>
          <Col lg={6}>
            <DoctorReceptionAddForm/>
          </Col>
        </Row>
      </Container>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setTabActiveValue: (value) => dispatch(actions.setTabActiveValue(value))
  }
};

export default connect(null, mapDispatchToProps)(DoctorReceptionAdd);