import React from 'react';
import {Button, ButtonGroup, Col, Form, Row} from "react-bootstrap";
import axios from "axios";
import {getFullName, replaceLineBreaks} from "../../methods";
import {withRouter} from "react-router";

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      doctors: [],
      selectedValue: 'Выберите врача',
      selectedValuePk: null,
    }
  };

  componentDidMount() {
    this.getDoctors();
  }

  getDoctors = () => {
    axios.get('http://localhost:8000/staff/api/doctors_choice/')
      .then(response => {
        this.setState({doctors: response.data});
        console.log(response.data);
      })
      .catch(err => {
        console.log(err.response);
      })
  };

  handleDoctorChange = (event) => {
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
        })
    }
  };

  handleUpdate = (event) => {
    event.preventDefault();
    const token = localStorage.getItem('token');
    const pk = this.props.instancePk;
    if (token) {
      const url = `http://localhost:8000/marketing/api/patient_reviews/${pk}/`;
      const elements = event.target.elements;
      const options = {
        method: 'PUT',
        url: url,
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
          this.props.history.push('/lk/reviews');
          console.log(res.data);
        })
        .catch(err => {
          console.log(err.response);
        });
    }
  };

  handleDelete = () => {
    const token = localStorage.getItem('token');
    const pk = this.props.match.params.pk;
    if (token) {
      const url = `http://localhost:8000/marketing/api/patient_reviews/${pk}/`;
      const options = {
        method: 'DELETE',
        url: url,
        headers: {'Authorization': `Token ${token}`},
      };
      axios(options)
        .then(res => {
          console.log(res.data);
          this.props.history.push('/lk/reviews');
        })
        .catch(err => {
          console.log(err.response);
        });
    }
  };

  render() {
    const {doctors} = this.state;
    const {isEdit, instance} = this.props;
    const currentDoctor = 'Выберите врача';

    return (
      <div className="AddReviewForm">
        <Form onSubmit={isEdit ? this.handleUpdate : this.handleCreate}>
          <Row>
            <Col sm={12}>
              <Form.Group controlId="formGroupPositives">
              <textarea name="positives"
                        placeholder="Достоинства"
                        defaultValue={instance ? replaceLineBreaks(instance.positives) : null}/>
              </Form.Group>
              <Form.Group controlId="formGroupNegatives">
              <textarea name="negatives"
                        placeholder="Недостатки"
                        defaultValue={instance ? replaceLineBreaks(instance.negatives) : null}/>
              </Form.Group>
              <Form.Group controlId="formGroupContent">
              <textarea name="content"
                        placeholder="Комментарий"
                        defaultValue={instance ? replaceLineBreaks(instance.content) : null}
                        required/>
              </Form.Group>
              <Form.Group controlId="formGroupDoctor">
                <select value={this.state.selectedValue}
                        className="filter-select"
                        onChange={this.handleDoctorChange}>
                  <option hidden disabled value={currentDoctor}>{currentDoctor}</option>
                  {
                    doctors.map((doctor, index) => {
                      return <option value={getFullName(doctor.user)}
                                     key={index}
                                     pk={doctor.pk}>
                        {getFullName(doctor.user)}
                      </option>
                    })
                  }
                </select>
              </Form.Group>
            </Col>
          </Row>
          {
            isEdit ?
              <ButtonGroup>
                <Button type="submit" variant="outline-success">Обновить</Button>
                <Button variant="outline-danger" onClick={this.handleDelete}>Удалить</Button>
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

export default withRouter(ReviewForm);
