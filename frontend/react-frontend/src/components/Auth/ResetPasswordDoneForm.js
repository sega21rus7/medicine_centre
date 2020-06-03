import React from 'react';
import {Button, Form} from "react-bootstrap";
import ErrorBlock from "../../components/ErrorBlock/ErrorBlock";
import axios from "axios";
import SuccessBlock from "../SuccessBlock/SuccessBlock";

class ResetPasswordDoneForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: null,
      success: null,
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const {uid, token} = this.props;
    const url = `http://localhost:8000/rest-auth/password/reset/confirm/${uid}/${token}/`;
    axios.post(url, {
      new_password1: event.target.elements.password.value,
      new_password2: event.target.elements.passwordConfirm.value,
      uid: uid,
      token: token,
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
      var passwordError = <ErrorBlock text={errors.new_password1}/>;
      var passwordConfirmError = <ErrorBlock text={errors.new_password2}/>;
      var nonFieldErrors = <ErrorBlock text={errors.non_field_errors}/>;
      var tokenError = errors.token ? <ErrorBlock text="Пароль уже был изменен"/> : null;
    }

    return (
      <Form className="user" onSubmit={this.handleSubmit}>
        <Form.Group controlId="formGroupPassword">
          <Form.Control className="form-control-user"
                        type="password"
                        name="password"
                        placeholder="Новый пароль"
                        autoComplete="on"
                        required/>
          {passwordError}
        </Form.Group>
        <Form.Group controlId="formGroupPasswordConfirm">
          <Form.Control className="form-control-user"
                        type="password"
                        name="passwordConfirm"
                        placeholder="Подтвердите новый пароль"
                        autoComplete="on"
                        required/>
          {passwordConfirmError}
        </Form.Group>
        {nonFieldErrors}
        <SuccessBlock text={tokenError || success}/>
        <Button type="submit" variant="outline-primary" className="btn-user" block>
          Установить пароль
        </Button>
      </Form>
    )
  };
}

export default ResetPasswordDoneForm;

