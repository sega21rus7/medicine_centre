import React from 'react';
import {Button, Container, Jumbotron} from "react-bootstrap";
import axios from "axios";
import ReactHtmlParser from "react-html-parser";
import AddReviewForm from "./AddReviewForm";

class SupportQuestionEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      review: {},
      token: null,
    }
  }

  componentDidMount() {
    const token = localStorage.getItem('token');
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
          this.setState({review: res.data});
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
    const token = localStorage.getItem('token');
    const review = this.state.review;
    const pk = this.props.match.params.pk;
    if (token) {
      const url = `http://localhost:8000/marketing/api/patient_reviews/${pk}/`;
      const elements = event.target.elements;
      const options = {
        method: 'PUT',
        url: url,
        data: {
          positives: elements.positives.value || review.positives,
          negatives: elements.negatives.value || review.negatives,
          content: elements.content.value || review.content,
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
    if (review.doctor) {
      const doctorName =
        `${review.doctor.user.last_name} ${review.doctor.user.first_name} ${review.doctor.user.middle_name}`;
      var doctor = <p>Врач: {ReactHtmlParser(doctorName)}</p>
    }

    return (
      <Container className="ReviewEdit">
        <Button variant="outline-secondary" onClick={this.handleBack}>Назад</Button>
        <Jumbotron className="mt-4">
          {doctor}
          <div>Достоинства:</div>
          {
            review.positives ?
              <div>{ReactHtmlParser(review.positives)}</div>
              : null
          }
          <div>Недостатки:</div>
          {
            review.negatives ?
              <div>{ReactHtmlParser(review.negatives)}</div>
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
          <div className="mt-4">
            <AddReviewForm handleUpdate={this.handleUpdate}
                           handleDelete={this.handleDelete}
                           isContentNotRequired={true}/>
          </div>
        </Jumbotron>
      </Container>
    )
  }
}

export default SupportQuestionEdit;
