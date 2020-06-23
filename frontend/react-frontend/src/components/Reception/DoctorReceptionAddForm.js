import React from 'react';
import {Button, Form} from "react-bootstrap";
import {withRouter} from "react-router";
import {BACKEND_URL} from "../../constants";
import axios from "axios";
import {connect} from "react-redux";
import ErrorBlock from "../ErrorBlock/ErrorBlock";

class DoctorReceptionAddForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: null,
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const elements = event.target.elements;
    const token = localStorage.getItem('token');
    const options = {
      method: 'POST',
      url: `${BACKEND_URL}/rest-api/reception/receptions/`,
      data: {
        doctor: this.props.user.doctor,
        date: elements.date.value,
        from_time: elements.from_time.value,
        to_time: elements.to_time.value,
      },
      headers: {'Authorization': `Token ${token}`},
    };
    axios(options)
      .then(res => {
        this.props.history.push('/lk/doctor_schedule/my');
      })
      .catch(err => {
        this.setState({errors: err.response.data.non_field_errors});
      });
  };

  render() {
    const {errors} = this.state;

    return (
      <Form className="DoctorReceptionAddForm" onSubmit={this.handleSubmit}>
        <Form.Group className="mr-2">
          <Form.Label className="my-1 mr-2" htmlFor="date-control">Дата</Form.Label>
          <Form.Control id="date-control"
                        type="date"
                        name="date"
                        required/>
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
        <ErrorBlock text={errors}/>
        <Button type="submit" variant="outline-success">
          Добавить
        </Button>
      </Form>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.auth.user,
  }
};

export default withRouter(connect(mapStateToProps, null)(DoctorReceptionAddForm));