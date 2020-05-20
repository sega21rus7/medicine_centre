import React from 'react';
import {connect} from "react-redux";
import axios from "axios";

class MakeAppointment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      schedule: {},
    };
  }

  static getDerivedStateFromProps(props, state) {
    const token = localStorage.getItem('token');
    let schedule = {};
    if (token && props.user) {
      const pk = props.user.doctor;
      const url = `http://localhost:8000/staff/api/work_times_by_doctor/${pk}`;
      const options = {
        method: 'GET',
        url: url,
        headers: {'Authorization': `Token ${token}`},
      };
      axios(options)
        .then(res => {
          schedule = res.data;
          console.log(res.data);
        })
        .catch(err => {
          console.log(err.response);
        });
    }
    return {schedule: schedule};
  }

  render() {
    const {schedule} = this.state;

    return (
      <div className="MakeAppointment">

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  }
};

export default connect(mapStateToProps, null)(MakeAppointment);
