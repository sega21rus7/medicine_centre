import React from 'react';
import axios from 'axios';
import {Button, Container, Table} from "react-bootstrap";
import {connect} from "react-redux";

class DoctorSchedule extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      schedule: null,
    };
  }

  getSchedule = () => {
    const token = localStorage.getItem('token');
    let schedule = {};
    if (token && this.props.user) {
      const pk = this.props.user.doctor;
      const url = `http://localhost:8000/staff/api/work_times_by_doctor/${pk}`;
      const options = {
        method: 'GET',
        url: url,
        headers: {'Authorization': `Token ${token}`},
      };
      axios(options)
        .then(res => {
          this.setState({schedule: res.data});
          console.log(res.data);
        })
        .catch(err => {
          console.log(err.response);
        });
    }
  };

  render() {
    const {schedule} = this.state;

    return (
      <Container className="MakeAppointment">
        <Button type="submit" variant="outline-success" onClick={this.getSchedule}>Show</Button>
        <Table bordered>
          <thead>
          <tr>
            <th>Дата</th>
            <th>С</th>
            <th>По</th>
            <th>Занято</th>
          </tr>
          </thead>
          <tbody>

          {
            schedule ? schedule.map((item, index) => (
              <tr key={index}>
                <td>{item.date}</td>
                <td>{item.from_time}</td>
                <td>{item.to_time}</td>
                <td>{item.is_occupied ? 'Да' : 'Нет'}</td>
              </tr>
            )) : null
          }

          </tbody>
        </Table>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  }
};

export default connect(mapStateToProps, null)(DoctorSchedule);
