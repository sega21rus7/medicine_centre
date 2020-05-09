import React from 'react';
import {Button, Col, Form, Row} from "react-bootstrap";
import Image from "react-bootstrap/Image";
import ErrorBlock from "../ErrorBlock/ErrorBlock";
import axios from 'axios';
import avatar from '../../images/custom_avatar.png'
import SuccessBlock from "../SuccessBlock/SuccessBlock";

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
    let token = localStorage.getItem('token');
    if (token) {
      const elements = event.target.elements;
      const options = {
        method: 'PUT',
        url: 'http://localhost:8000/rest-auth/user/',
        data: {
          username: elements.login.value,
          email: elements.email.value,
          phone_number: elements.phone.value,
          first_name: elements.firstName.value,
          last_name: elements.lastName.value,
          middle_name: elements.middleName.value,
          // avatar будет загружать в базу по новой, потом исправлю
          avatar: elements.avatar.value || this.props.user.avatar,
        },
        headers: {'Authorization': `Token ${token}`},
      };
      axios(options)
        .then(res => {
          console.log(res);
          this.setState({success: true});
        })
        .catch(err => {
          console.log(err.response);
          this.setState({errors: err.response.data});
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
      <Form className="user" onSubmit={this.handleSubmit}>
        <Row>
          <Col sm={4}>
            <Form.Group controlId="formGroupLogin">
              <Form.Label column="name">Логин</Form.Label>
              <Form.Control className="form-control-user" type="text" name="login"
                            defaultValue={user.username}/>
              {loginError}
            </Form.Group>
            <Form.Group controlId="formGroupEmail">
              <Form.Label column="name">Email</Form.Label>
              <Form.Control className="form-control-user" type="email" name="email"
                            defaultValue={user.email}/>
              {emailError}
            </Form.Group>
            <Form.Group controlId="formGroupPhone">
              <Form.Label column="name">Номер телефона</Form.Label>
              <Form.Control className="form-control-user" type="text" name="phone"
                            defaultValue={user.phone_number}/>
              {phoneError}
            </Form.Group>
          </Col>

          <Col sm={4}>
            <Form.Group controlId="formGroupFirstName">
              <Form.Label column="name">Имя</Form.Label>
              <Form.Control className="form-control-user" type="text" name="firstName"
                            defaultValue={user.first_name}/>
              {firstNameError}
            </Form.Group>
            <Form.Group controlId="formGroupLastName">
              <Form.Label column="name">Фамилия</Form.Label>
              <Form.Control className="form-control-user" type="text" name="lastName"
                            defaultValue={user.last_name}/>
              {lastNameError}
            </Form.Group>
            <Form.Group controlId="formGroupMiddleName">
              <Form.Label column="name">Отчество</Form.Label>
              <Form.Control className="form-control-user" type="text" name="middleName"
                            defaultValue={user.middle_name}/>
              {middleNameError}
            </Form.Group>
          </Col>

          <Col sm={4}>
            <Form.Group controlId="formGroupAvatar">
              <Form.Label column="name">Аватар</Form.Label>
              <Image
                src={user.avatar ? user.avatar : avatar}
                alt="Аватар"
                className="img-fluid">
              </Image>
              <Form.Control className="form-control-user" type="file" name="avatar"/>
              {avatarError}
            </Form.Group>
          </Col>
        </Row>
        {nonFieldErrors || successMes}
        <div className="text-right">
          <Button type="submit" variant="outline-primary" className="btn-user">
            Внести изменения
          </Button>
        </div>
      </Form>
    )
  }
  ;
}

export default ProfileForm;
