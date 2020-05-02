import React from 'react';
import './Lk.css';
import axios from "axios";


class Lk extends React.Component {
  componentDidMount() {
    let token = localStorage.getItem('token') || '';
    console.log(token);
    if (token) {
      token = JSON.parse(token);
      console.log(token);
      axios.get('http://localhost:8000/api/rest-auth/user/',
        {headers: {'Authorization': `Token ${token}`}})
        .then(response => {
          // localStorage.setItem('user', response.data);
          console.log(response.data);
          localStorage.setItem('avatar', JSON.stringify(response.data.avatar));
          localStorage.setItem('last_name', JSON.stringify(response.data.last_name));
          localStorage.setItem('fist_name', JSON.stringify(response.data.first_name));
          localStorage.setItem('middle_name', JSON.stringify(response.data.middle_name));
        })
    }
  }

  render() {
    return (
      <div className="Lk">
        Lk
      </div>
    )
  };
}

export default Lk;
