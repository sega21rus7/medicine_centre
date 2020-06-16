import React from 'react';
import {Button, Form} from "react-bootstrap";

class DoctorReceptionAddForm extends React.Component {
  handleSubmit = (event) => {
    event.preventDefault();

  };

  render() {
    return (
      <Form inline className="DoctorReceptionAddForm" onSubmit={this.handleSubmit}>
        <Form.Group className="mr-2">
          <Form.Label className="my-1 mr-2" htmlFor="date-control">Дата</Form.Label>
          <Form.Control id="date-control"
                        type="date"
                        name="date"
                        required
                        defaultValue={new Date().getDate()}/>
        </Form.Group>
        <Form.Group className="mr-2">
          <Form.Label className="my-1 mr-2" htmlFor="from_time-control">Время с</Form.Label>
          <Form.Control id="from_time-control"
                        type="time"
                        name="from_time"
                        required/>
        </Form.Group>
        <Form.Group className="mr-2">
          <Form.Label className="my-1 mr-2" htmlFor="to_time-control">Время по</Form.Label>
          <Form.Control id="to_time-control"
                        type="time"
                        name="to_time"
                        required/>
        </Form.Group>
        <Button type="submit" variant="outline-success">
          Добавить
        </Button>
      </Form>
    )
  }
}

export default DoctorReceptionAddForm;