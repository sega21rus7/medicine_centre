import React from 'react';
import {Button, Col, Form, Row} from "react-bootstrap";
import Image from "react-bootstrap/Image";
import ErrorBlock from "../ErrorBlock/ErrorBlock";
import axios from 'axios';
import avatar from '../../images/custom_avatar.png'
import SuccessBlock from "../SuccessBlock/SuccessBlock";
import {connect} from "react-redux";
import * as actions from "../../store/actions/auth/actionCreators";

class ProfileForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: null,
      success: false,
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    // не обновляется картинка
    let token = localStorage.getItem('token');
    if (token) {
      const elements = event.target.elements;
      const form_data = new FormData();
      form_data.append('username', elements.login.value);
      form_data.append('email', elements.email.value);
      form_data.append('phone_number', elements.phone.value);
      form_data.append('first_name', elements.firstName.value);
      form_data.append('last_name', elements.lastName.value);
      form_data.append('middle_name', elements.middleName.value);
      const avatar = elements.avatar.files[0];
      if (avatar) {
        form_data.append('avatar', avatar);
      }

      const options = {
        method: 'PUT',
        url: 'http://localhost:8000/rest-auth/user/',
        data: form_data,
        headers: {
          'Authorization': `Token ${token}`,
          'Content-Type': 'multipart/form-data'
        },
      };
      axios(options)
        .then(res => {
          console.log(res);
          this.setState({
            success: true,
            errors: null,
          });
          this.props.getUser();
        })
        .catch(err => {
          console.log(err.response);
          this.setState({
            success: false,
            errors: err.response.data,
          });
        })
    }
  };

  render() {
    const {user} = this.props;
    const {errors, success} = this.state;
    if (errors) {
      var loginError = <ErrorBlock text={errors.login}/>;
      var emailError = <ErrorBlock text={errors.email}/>;
      var phoneError = <ErrorBlock text={errors.phone_number}/>;
      var firstNameError = <ErrorBlock text={errors.first_name}/>;
      var lastNameError = <ErrorBlock text={errors.last_name}/>;
      var middleNameError = <ErrorBlock text={errors.middle_name}/>;
      var avatarError = <ErrorBlock text={errors.avatar}/>;
      var nonFieldErrors = <ErrorBlock text={errors.non_field_errors}/>;
    }
    if (success) {
      var successMes = <SuccessBlock text={'Изменения успешно внесены.'}/>
    }

    return (
      <Form onSubmit={this.handleSubmit}>
        <Row>
          <Col sm={4}>
            <Form.Group controlId="formGroupLogin">
              <Form.Label column="name">Логин</Form.Label>
              <Form.Control className="form-control-user"
                            type="text"
                            name="login"
                            defaultValue={user.username}
                            required/>
              {loginError}
            </Form.Group>
            <Form.Group controlId="formGroupEmail">
              <Form.Label column="name">Email</Form.Label>
              <Form.Control className="form-control-user"
                            type="email"
                            name="email"
                            defaultValue={user.email}
                            required/>
              {emailError}
            </Form.Group>
            <Form.Group controlId="formGroupPhone">
              <Form.Label column="name">Номер телефона</Form.Label>
              <Form.Control className="form-control-user" type="text" name="phone"
                            defaultValue={user.phone_number}
                            required/>
              {phoneError}
            </Form.Group>
          </Col>

          <Col sm={4}>
            <Form.Group controlId="formGroupFirstName">
              <Form.Label column="name">Имя</Form.Label>
              <Form.Control className="form-control-user" type="text" name="firstName"
                            defaultValue={user.first_name}
                            required/>
              {firstNameError}
            </Form.Group>
            <Form.Group controlId="formGroupLastName">
              <Form.Label column="name">Фамилия</Form.Label>
              <Form.Control className="form-control-user" type="text" name="lastName"
                            defaultValue={user.last_name}
                            required/>
              {lastNameError}
            </Form.Group>
            <Form.Group controlId="formGroupMiddleName">
              <Form.Label column="name">Отчество</Form.Label>
              <Form.Control className="form-control-user" type="text" name="middleName"
                            defaultValue={user.middle_name}
                            required/>
              {middleNameError}
            </Form.Group>
          </Col>

          <Col sm={4}>
            <Form.Group controlId="formGroupAvatar">
              <Form.Label column="name">Аватар</Form.Label>
              <Image
                src={user.avatar ? user.avatar : avatar}
                alt="Аватар"
                height="150px">
              </Image>
              <Form.File name="avatar" accept="image/png, image/jpeg, image/jpg"/>
              {avatarError}
            </Form.Group>
          </Col>
        </Row>
        {nonFieldErrors}
        {successMes}
        <div className="text-right">
          <Button type="submit" variant="outline-primary" className="btn-user">
            Внести изменения
          </Button>
        </div>
      </Form>
    )
  };
}

const mapStateToProps = (state) => {
  return {
    user: state.auth.user,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    getUser: (user) => dispatch(actions.getUser(user))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileForm);
