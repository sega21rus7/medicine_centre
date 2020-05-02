import React from 'react';
import './Lk.css';
import axios from "axios";
import Error404 from "../Error404/Error404";


class Lk extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      token: null,
    }
  }

  componentDidMount() {
    let token = localStorage.getItem('token') || '';
    console.log(token);
    if (!token) return <Error404/>;
    else {
      token = JSON.parse(token);
      this.setState({token: token});
      console.log(token);
      axios.get('http://localhost:8000/api/rest-auth/user/',
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
    return (
      <div className="Lk">
        Lk
      </div>
    )
  };
}

export default Lk;
