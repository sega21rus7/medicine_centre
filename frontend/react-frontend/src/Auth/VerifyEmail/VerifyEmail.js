import React from 'react';
import './VerifyEmail.css';
import axios from "axios";
import {Redirect} from "react-router";


class VerifyEmail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      success: false,
    }
  }

  componentDidMount() {
    const key = this.props.match.params.key;
    axios.get(`http://localhost:8000/rest-auth/registration/account-confirm-email/${key}`)
      .then(response => {
        this.setState({
          success: true,
        });
      })
  }

  render() {
    const {success} = this.state;
    let message = 'Ваш email был успешно подтвержден!';
    if (!success) {
      message = 'При подтверждении email произошла ошибка!';
    }
    return (
      <Redirect to={{
        pathname: '/sign_in',
        state: {message: message}
      }}/>
    )
  };
}

export default VerifyEmail;
