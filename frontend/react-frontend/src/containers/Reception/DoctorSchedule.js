import React from 'react';
import axios from 'axios';
import {Container, Table} from "react-bootstrap";
import {connect} from "react-redux";
import {getFullName} from "../../methods";
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

  render() {
    const {schedule} = this.state;

    return (
      <Container className="MakeAppointment">
        <Table bordered>
          <thead>
          <tr>
            <th>Врач</th>
            <th>Кабинет</th>
            <th>Этаж</th>
            <th>Дата</th>
            <th>Время</th>
            <th>Пациент</th>
          </tr>
          </thead>
          <tbody>
          {
            schedule ? schedule.map((item, index) => (
              <tr key={index}>
                <td>
                  <Link to={'/doctor/' + item.doctor.slug}>
                    {getFullName(item.doctor.user)}
                  </Link>
                </td>
                <td>{item.doctor.office.number}</td>
                <td>{item.doctor.office.floor}</td>
                <td>{item.date}</td>
                <td>{item.from_time} - {item.to_time}</td>
                <td>{item.patient ? getFullName(item.patient.user) : '-'}</td>
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
    user: state.auth.user,
  }
};

export default connect(mapStateToProps, null)(DoctorSchedule);
