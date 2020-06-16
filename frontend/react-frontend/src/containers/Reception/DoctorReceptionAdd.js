import React from 'react';
import DoctorReceptionAddForm from "../../components/Reception/DoctorReceptionAddForm";
import {Container} from "react-bootstrap";

class DoctorReceptionAdd extends React.Component {
  render() {
    return (
      <Container className="DoctorReceptionAdd mt-2">
        <DoctorReceptionAddForm/>
      </Container>
    )
  }
}

export default DoctorReceptionAdd;