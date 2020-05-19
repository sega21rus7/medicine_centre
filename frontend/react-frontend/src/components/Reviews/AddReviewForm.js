import React from 'react';
import {Button, ButtonGroup, Col, Form, Row} from "react-bootstrap";
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

  handleCreate = (event) => {
    event.preventDefault();
    let token = localStorage.getItem('token');
    if (token) {
      const elements = event.target.elements;
      const options = {
        method: 'POST',
        url: 'http://localhost:8000/marketing/api/patient_reviews/',
        data: {
          positives: elements.positives.value,
          negatives: elements.negatives.value,
          content: elements.content.value,
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
    const {selectedValuePk, errors, doctors} = this.state;
    const {handleUpdate, handleDelete, isContentNotRequired} = this.props;
    if (errors) {
      var contentError = <ErrorBlock text={errors.content || errors}/>;
    }

    return (
      <div className="AddReviewForm">
        <Form onSubmit={handleUpdate ? handleUpdate : this.handleCreate}>
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
                        required={!isContentNotRequired}/>
                {contentError}
              </Form.Group>
              <Form.Group controlId="formGroupDoctor">
                <select value={this.state.selectedValue}
                        className="filter-select"
                        onChange={this.handleChange}>
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
          {
            handleUpdate && handleDelete ?
              <ButtonGroup>
                <Button type="submit" variant="outline-success">Обновить</Button>
                <Button variant="outline-danger" onClick={handleDelete}>Удалить</Button>
              </ButtonGroup>
              :
              <Button type="submit" variant="outline-primary" className="btn-user">
                Оставить отзыв
              </Button>
          }
        </Form>
      </div>
    )
  };
}

export default AddReviewForm;
