import React from 'react';
import {Button, Form} from "react-bootstrap";
import ErrorBlock from "../../components/ErrorBlock/ErrorBlock";
import axios from "axios";
import SuccessBlock from "../SuccessBlock/SuccessBlock";
import {BACKEND_URL} from "../../constants";

class ResetPasswordForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: null,
      success: null,
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    axios.post(`${BACKEND_URL}/rest-auth/password/reset/`, {
      email: event.target.elements.email.value,
    })
      .then(res => {
        this.setState({success: res.data.detail});
      })
      .catch(err => {
        this.setState({errors: err.response.data});
      })
  };

  render() {
    const {errors, success} = this.state;
    if (errors) {
      var emailError = <ErrorBlock text={errors.email}/>;
      var nonFieldErrors = <ErrorBlock text={errors.non_field_errors}/>;
    }

    return (
      <Form className="user" onSubmit={this.handleSubmit}>
        <Form.Group controlId="formGroupEmail">
          <Form.Control className="form-control-user"
                        type="email"
                        name="email"
                        placeholder="Email"
                        required/>
          {emailError}
        </Form.Group>
        {nonFieldErrors}
        <SuccessBlock text={success}/>
        <Button type="submit" variant="outline-primary" className="btn-user" block>
          Восстановить пароль
        </Button>
      </Form>
    )
  };
}

export default ResetPasswordForm;

