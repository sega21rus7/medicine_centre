import React from 'react';
import {Container, Table} from "react-bootstrap";

class DoctorSchedule extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      schedule: {},
    };
  }

  // componentDidMount() {
  //   const token = localStorage.getItem('token');
  //   let schedule = {};
  //   if (token && this.props.user) {
  //     const pk = this.props.user.doctor;
  //     const url = `http://localhost:8000/staff/api/work_times_by_doctor/${pk}`;
  //     const options = {
  //       method: 'GET',
  //       url: url,
  //       headers: {'Authorization': `Token ${token}`},
  //     };
  //     axios(options)
  //       .then(res => {
  //         this.setState({schedule: res.data});
  //         console.log(res.data);
  //       })
  //       .catch(err => {
  //         console.log(err.response);
  //       });
  //   }
  // }

  render() {
    const {schedule} = this.state;

    return (
      <Container className="MakeAppointment">
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

          {/*{*/}
          {/*  schedule.map((item, index) => (*/}
          {/*    <tr>*/}
          {/*      <td>1</td>*/}
          {/*      <td>Mark</td>*/}
          {/*      <td>Otto</td>*/}
          {/*      <td>@mdo</td>*/}
          {/*    </tr>*/}
          {/*  ))*/}
          {/*}*/}

          </tbody>
        </Table>
      </Container>
    )
  }
}

export default DoctorSchedule;
