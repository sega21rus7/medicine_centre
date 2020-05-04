import React from 'react';
import './VerifyEmail.css';
import axios from "axios";
import SignIn from "../SignIn/SignIn";


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
    return (
      <div className="ConfirmEmail">
        <SignIn message='Ваш email был успешно подтвержден!'/>;
      </div>
    )
  };
}

export default VerifyEmail;
