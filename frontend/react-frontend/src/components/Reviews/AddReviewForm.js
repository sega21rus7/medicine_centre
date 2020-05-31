import React from 'react';
import {Button, ButtonGroup, Col, Form, Row} from "react-bootstrap";
import axios from "axios";
import ErrorBlock from "../ErrorBlock/ErrorBlock";
import {getFullName, replaceLineBreaks} from "../../methods";

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
          this.setState({errors: err.response});
        })
    }
  };

  render() {
    const {errors, doctors} = this.state;
    const {handleUpdate, handleDelete, item} = this.props;
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
                        placeholder="Достоинства"
                        defaultValue={item ? replaceLineBreaks(item.positives) : null}/>
              </Form.Group>
              <Form.Group controlId="formGroupNegatives">
              <textarea name="negatives"
                        placeholder="Недостатки"
                        defaultValue={item ? replaceLineBreaks(item.negatives) : null}/>
              </Form.Group>
              <Form.Group controlId="formGroupContent">
              <textarea name="content"
                        placeholder="Комментарий"
                        defaultValue={item ? replaceLineBreaks(item.content) : null}
                        required/>
                {contentError}
              </Form.Group>
              <Form.Group controlId="formGroupDoctor">
                <select value={this.state.selectedValue}
                        className="filter-select"
                        onChange={this.handleDoctorChange}>
                  <option disabled
                          hidden
                          value={item && item.doctor ? item.doctor.pk : 'Выберите врача'}>
                    {item && item.doctor ? item.doctor.pk : 'Выберите врача'}
                  </option>
                  {
                    doctors.map((item, index) => {
                      return <option value={getFullName(item.user)}
                                     key={index}
                                     pk={item.pk}>
                        {getFullName(item.user)}
                      </option>
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
