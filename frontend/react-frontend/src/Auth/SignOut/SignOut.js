import React from 'react';
import './SignOut.css';
import axios from "axios";
import {Redirect} from "react-router-dom";


class SignOut extends React.Component {
  componentDidMount() {
    const key = this.props.match.params.key;
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
