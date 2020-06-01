import React from 'react';
import {Button, Container} from "react-bootstrap";
import axios from "axios";
import ReviewForm from "./ReviewForm";

class ReviewEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      review: {},
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
    this.props.history.push('/lk/patient_reviews/view');
  };

  render() {
    const {review} = this.state;

    return (
      <Container className="ReviewEdit">
        <Button variant="outline-secondary" onClick={this.handleBack}>Назад</Button>
        <div className="mt-4">
          <div className="mt-4">
            <ReviewForm instance={review}
                        isEdit={true}
                        instancePk={this.props.match.params.pk}/>
          </div>
        </div>
      </Container>
    )
  }
}

export default ReviewEdit;
