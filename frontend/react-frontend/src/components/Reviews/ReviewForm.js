import React from 'react';
import {Button, ButtonGroup, Col, Form, Row} from "react-bootstrap";
import axios from "axios";
import {getFullName, replaceLineBreaks} from "../../methods";
import {withRouter} from "react-router";
import * as actions from "../../store/actions/reviews/actionCreators";
import {connect} from "react-redux";
import ErrorBlock from "../ErrorBlock/ErrorBlock";
import {BACKEND_URL} from "../../constants";

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      doctors: [],
      selectedValue: 'Выберите врача',
      selectedValuePk: null,
      errors: [],
    }
  };

  componentDidMount() {
    this.getDoctors();
  }

  getDoctors = () => {
    axios.get(`${BACKEND_URL}/rest-api/staff/doctors_choice/`)
      .then(response => {
        this.setState({doctors: response.data});
      })
      .catch(err => {

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
        url: `${BACKEND_URL}/rest-api/marketing/patient_reviews/`,
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
          this.props.history.push('/lk/patient_reviews/view');
        })
        .catch(err => {
          this.setState({errors: err.response.data.non_field_errors});

        })
    }
  };

  handleUpdate = (event) => {
    event.preventDefault();
    const token = localStorage.getItem('token');
    const pk = this.props.instancePk;
    if (token) {
      const url = `${BACKEND_URL}/rest-api/marketing/patient_reviews/${pk}/`;
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
          this.props.history.push('/lk/patient_reviews/view');
        })
        .catch(err => {

        });
    }
  };

  handleDelete = () => {
    const token = localStorage.getItem('token');
    const pk = this.props.match.params.pk;
    if (token) {
      const url = `${BACKEND_URL}/rest-api/marketing/patient_reviews/${pk}/`;
      const options = {
        method: 'DELETE',
        url: url,
        headers: {'Authorization': `Token ${token}`},
      };
      axios(options)
        .then(res => {
          this.props.history.push('/lk/patient_reviews/view');
        })
        .catch(err => {

        });
    }
  };

  render() {
    const {doctors, selectedValue, errors} = this.state;
    const {isEdit, instance} = this.props;

    return (
      <div className="AddReviewForm">
        <Form onSubmit={isEdit ? this.handleUpdate : this.handleCreate}>
          <Row>
            <Col sm={12}>
              <Form.Group controlId="formGroupPositives">
                <Form.Control as="textarea"
                              name="positives"
                              placeholder="Достоинства"
                              defaultValue={instance ? replaceLineBreaks(instance.positives) : null}/>
              </Form.Group>
              <Form.Group controlId="formGroupNegatives">
                <Form.Control as="textarea"
                              name="negatives"
                              placeholder="Недостатки"
                              defaultValue={instance ? replaceLineBreaks(instance.negatives) : null}/>
              </Form.Group>
              <Form.Group controlId="formGroupContent">
                <Form.Control as="textarea"
                              name="content"
                              placeholder="Комментарий"
                              defaultValue={instance ? replaceLineBreaks(instance.content) : null}
                              required/>
              </Form.Group>
              <Form.Group controlId="formGroupDoctor">
                <Form.Control as="select"
                              value={selectedValue}
                              className="filter-select"
                              onChange={this.handleDoctorChange}>
                  <option hidden disabled value={selectedValue}>{selectedValue}</option>
                  {
                    doctors.map((doctor, index) => {
                      return <option value={getFullName(doctor.user)}
                                     key={index}
                                     pk={doctor.pk}>
                        {getFullName(doctor.user)}
                      </option>
                    })
                  }
                </Form.Control>
              </Form.Group>
            </Col>
          </Row>
          <ErrorBlock text={errors}/>
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

const mapDispatchToProps = dispatch => {
  return {
    setTabActiveValue: (value) => dispatch(actions.setTabActiveValue(value))
  }
};

export default withRouter(connect(null, mapDispatchToProps)(ReviewForm));
