import React from 'react';
import axios from 'axios';
import {Button, Container, Table} from "react-bootstrap";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

class DoctorSchedule extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      schedule: null,
    };
  }

  componentDidMount() {
    this.getSchedule();
  }

  getSchedule = () => {
    const token = localStorage.getItem('token');
    if (token && this.props.user) {
      const pk = this.props.user.doctor;
      const url = `http://localhost:8000/reception/api/receptions_by_doctor/${pk}`;
      const options = {
        method: 'GET',
        url: url,
        headers: {'Authorization': `Token ${token}`},
      };
      axios(options)
        .then(res => {
          this.setState({schedule: res.data.results});
          console.log(res.data.results);
        })
        .catch(err => {
          console.log(err.response);
        });
    }
  };

  getFullName(user) {
    const lastName = user.last_name;
    const firstName = user.first_name;
    const middleName = user.middle_name;

    if (lastName && firstName && middleName)
      return `${lastName} ${firstName} ${middleName}`;
    return user.username;
  }

  render() {
    const {schedule} = this.state;

    return (
      <Container className="MakeAppointment">
        <Table bordered>
          <thead>
          <tr>
            <th>Дата</th>
            <th>Время</th>
            <th>Пациент</th>
          </tr>
          </thead>
          <tbody>
          {
            schedule ? schedule.map((item, index) => (
              <tr key={index}>
                <td>{item.work_time.date}</td>
                <td>{item.work_time.from_time} - {item.work_time.to_time}</td>
                <td>
                  <Link to="/">
                    {item.patient ? this.getFullName(item.patient.user) : '-'}
                  </Link>
                </td>
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
