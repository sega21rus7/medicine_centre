import React from 'react';
import {Button, ButtonGroup, Container, Form, Jumbotron} from "react-bootstrap";
import axios from "axios";
import ReactHtmlParser from "react-html-parser";

class SupportQuestionEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      review: {},
      token: null,
    }
  }

  componentDidMount() {
    let token = localStorage.getItem('token');
    if (token) {
      const pk = this.props.match.params.pk;
      const url = `http://localhost:8000/marketing/api/patient_reviews/${pk}`;
      const options = {
        method: 'GET',
        url: url,
        headers: {'Authorization': `Token ${token}`},
      };
      axios(options)
        .then(res => {
          this.setState({
            review: res.data,
            token: token,
          });
          console.log(res.data);
        })
        .catch(err => {
          console.log(err.response);
        });
    }
  };

  handleBack = () => {
    this.props.history.push('/lk/reviews');
  };

  handleUpdate = (event) => {
    event.preventDefault();
    const token = this.state.token;
    const pk = this.props.match.params.pk;
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
        },
        headers: {'Authorization': `Token ${token}`},
      };
      axios(options)
        .then(res => {
          this.setState({
            review: res.data,
          });
          console.log(res.data);
        })
        .catch(err => {
          console.log(err.response);
        });
    }
  };

  handleDelete = () => {
    const token = this.state.token;
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
    const {review} = this.state;

    return (
      <Container className="ReviewEdit">
        <Button variant="outline-secondary" onClick={this.handleBack}>Назад</Button>
        <Jumbotron className="mt-4">
          <div>Достоинства:</div>
          {
            review.negatives ?
              <div>{ReactHtmlParser(review.negatives)}</div>
              : null
          }
          <div>Недостатки:</div>
          {
            review.positives ?
              <div>{ReactHtmlParser(review.positives)}</div>
              : null
          }
          <div>Комментарий:</div>
          {ReactHtmlParser(review.content)}
          <div className="text-right">Опубликован: {review.pub_date}</div>
          {
            review.last_change_date ?
              <div className="text-right">Изменен: {review.last_change_date}</div>
              : null
          }
          <Form className="mt-4" onSubmit={this.handleUpdate}>
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
            </Form.Group>
            <ButtonGroup>
              <Button type="submit" variant="outline-success">Обновить</Button>
              <Button variant="outline-danger" onClick={this.handleDelete}>Удалить</Button>
            </ButtonGroup>
          </Form>
        </Jumbotron>
      </Container>
    )
  }
}

export default SupportQuestionEdit;
