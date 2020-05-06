import React from 'react';
import axios from "axios";
import {Redirect} from "react-router-dom";


class SignOut extends React.Component {
  componentDidMount() {
    axios.get('http://localhost:8000/rest-auth/logout')
      .then(response => {
        localStorage.removeItem('token');
        console.log(response.data)
      })
  }

  render() {
    return <Redirect to="/"/>;
  }
}

export default SignOut;
