import React from 'react';
import {Button, Container} from "react-bootstrap";
import axios from "axios";
import AddReviewForm from "./AddReviewForm";
import ReviewListItem from "./ReviewListItem";

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
    console.log(review);

    return (
      <Container className="ReviewEdit">
        <Button variant="outline-secondary" onClick={this.handleBack}>Назад</Button>
        <div className="mt-4">
          <ReviewListItem item={review}/>
          <div className="mt-4">
            <AddReviewForm handleUpdate={this.handleUpdate}
                           handleDelete={this.handleDelete}
                           isContentNotRequired={true}/>
          </div>
        </div>
      </Container>
    )
  }
}

export default SupportQuestionEdit;
