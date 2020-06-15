import React from 'react';
import {Spinner} from "react-bootstrap";

class SpinnerComponent extends React.Component {
  render() {
    return (
      <div className="mt-2">
        <Spinner animation="border" variant="primary"/>
      </div>
    )
  }
}

export default SpinnerComponent;