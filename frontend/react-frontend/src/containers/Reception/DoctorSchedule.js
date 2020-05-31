import React from 'react';
import axios from 'axios';
import {Container, Table} from "react-bootstrap";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {getFullName} from "../../methods";

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
            <th>Дата</th>
            <th>Время</th>
            <th>Пациент</th>
          </tr>
          </thead>
          <tbody>
          {
            schedule ? schedule.map((item, index) => (
              <tr key={index}>
                <td>{item.date}</td>
                <td>{item.from_time} - {item.to_time}</td>
                <td>
                  <Link to="/">
                    {item.patient ? getFullName(item.patient.user) : '-'}
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
