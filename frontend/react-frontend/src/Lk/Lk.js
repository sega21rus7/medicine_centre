import React from 'react';
import './Lk.css';
import axios from "axios";
import SignIn from "../Auth/SignIn/SignIn";
import {Redirect} from "react-router";


class Lk extends React.Component {
  componentDidMount() {
    let token = localStorage.getItem('token') || '';
    if (token) {
      token = JSON.parse(token);
      console.log(token);
      axios.get('http://localhost:8000/rest-auth/user/',
        {headers: {'Authorization': `Token ${token}`}})
        .then(response => {
          console.log(response.data);
          localStorage.setItem('avatar', JSON.stringify(response.data.avatar));
          localStorage.setItem('last_name', JSON.stringify(response.data.last_name));
          localStorage.setItem('fist_name', JSON.stringify(response.data.first_name));
          localStorage.setItem('middle_name', JSON.stringify(response.data.middle_name));
        })
    }
  }

  render() {
    if (!localStorage.getItem('token')) {
      return <Redirect to='/sign_in'/>
    }

    return (
      <div className="Lk">
        Lk
      </div>
    )
  };
}

export default Lk;
