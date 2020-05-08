import React from 'react';
import Feedback from "./Feedback";
import {Container} from "react-bootstrap";


class Contacts extends React.Component {
  render() {
    return (
      <Container className="Contacts mt-4">
        <Feedback/>
      </Container>
    )
  };
}

export default Contacts;
