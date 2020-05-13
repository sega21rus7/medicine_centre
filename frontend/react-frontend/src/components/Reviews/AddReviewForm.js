import React from 'react';
import {Button, Col, Form, Row} from "react-bootstrap";
import axios from "axios";
import ErrorBlock from "../ErrorBlock/ErrorBlock";

class AddReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: null,
      doctors: [],
      selectedValue: 'Выберите врача',
      selectedValuePk: null,
    }
  };

  componentDidMount() {
    this.getDoctors();
  }

  getDoctors = () => {
    axios.get('http://localhost:8000/staff/api/doctors/')
      .then(response => {
        this.setState({doctors: response.data.results});
        console.log(response.data.results);
      })
      .catch(err => {
        console.log(err.response);
      })
  };

  handleChange = (event) => {
    event.preventDefault();
    const selectedIndex = event.target.options.selectedIndex;
    const pk = event.target.options[selectedIndex].getAttribute('pk');
    this.setState({
      selectedValue: event.target.value,
      selectedValuePk: pk,
    });
  };

  handleSubmit = (event) => {
    // event.preventDefault();
    let token = localStorage.getItem('token');
    if (token) {
      const options = {
        method: 'POST',
        url: 'http://localhost:8000/marketing/api/user_reviews/',
        data: {
          positives: event.target.elements.positives.value,
          negatives: event.target.elements.negatives.value,
          content: event.target.elements.content.value,
          doctor: this.state.selectedValuePk,
        },
        headers: {'Authorization': `Token ${token}`},
      };
      axios(options)
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err.response);
          this.setState({errors: err.response});
        })
    }
  };

  render() {
    const {errors, doctors} = this.state;
    if (errors) {
      var contentError = <ErrorBlock text={errors.content || errors}/>;
    }

    return (
      <div className="AddReviewForm">
        <Form className="user" onSubmit={this.handleSubmit}>
          <Row>
            <Col sm={12}>
              <Form.Group controlId="formGroupPositives">
              <textarea name="positives"
                        placeholder="Достоинства"/>
              </Form.Group>
              <Form.Group controlId="formGroupNegatives">
              <textarea name="negatives"
                        placeholder="Недостатки"/>
              </Form.Group>
              <Form.Group controlId="formGroupContent">
              <textarea name="content"
                        placeholder="Комментарий"
                        required/>
                {contentError}
              </Form.Group>
              <Form.Group controlId="formGroupDoctor">
                <select value={this.state.selectedValue}
                        className="filter-select"
                        onChange={this.handleChange}
                        required>
                  <option disabled hidden value="Выберите врача">Выберите врача</option>
                  {
                    doctors.map((item, index) => {
                      const user = item.user;
                      const name = `${user.last_name} ${user.first_name} ${user.middle_name}`;
                      return <option value={name} key={index} pk={item.pk}>{name}</option>
                    })
                  }
                </select>
              </Form.Group>
            </Col>
          </Row>
          <Button type="submit" variant="outline-primary" className="btn-user">
            Оставить отзыв
          </Button>
        </Form>
      </div>
    )
  };
}

export default AddReviewForm;
