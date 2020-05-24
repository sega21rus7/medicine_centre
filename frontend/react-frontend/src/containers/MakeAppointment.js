import React from 'react';
import {connect} from "react-redux";
import {Container} from "react-bootstrap";

class MakeAppointment extends React.Component {
  render() {
    return (
      <Container>
        MakeAnAppointment
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  }
};

export default connect(mapStateToProps, null)(MakeAppointment);
