import React from 'react';
import {Button, Form} from "react-bootstrap";

class DoctorResetForm extends React.Component {
  handleReset = (event) => {
    event.preventDefault();
    this.props.getData(1);
  };

  render() {
    return (
      <div className="DoctorResetForm">
        <Form className="mt-2 mb-2" onSubmit={this.handleReset}>
          <Button type="submit" variant="outline-danger" block>Сброс</Button>
        </Form>
      </div>
    )
  }
}

export default DoctorResetForm;
