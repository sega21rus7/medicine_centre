import React from 'react';
import {connect} from "react-redux";
import {Button, Container, Table} from "react-bootstrap";
import axios from "axios";
import {Link} from "react-router-dom";

class MakeAppointment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      schedule: null,
    };
  }

  getSchedule = () => {
    const token = localStorage.getItem('token');
    if (token) {
      const url = `http://localhost:8000/staff/api/work_times/`;
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

  getFio(user) {
    return `${user.last_name} ${user.first_name} ${user.middle_name}`;
  }

  render() {
    const {schedule} = this.state;

    return (
      <Container>
        <Button type="submit" variant="outline-success" onClick={this.getSchedule}>Show</Button>
        <Table bordered>
          <thead>
          <tr>
            <th>Врач</th>
            <th>Дата</th>
            <th>Время</th>
          </tr>
          </thead>
          <tbody>
          {
            schedule ? schedule.map((item, index) => (
              <tr key={index}>
                <td>
                  <Link to={'/doctor/' + item.doctor.slug} style={{color: 'inherit'}}>
                    {this.getFio(item.doctor.user)}
                  </Link>
                </td>
                <td>{item.date}</td>
                <td>{item.from_time} - {item.to_time}</td>
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

export default connect(mapStateToProps, null)(MakeAppointment);
