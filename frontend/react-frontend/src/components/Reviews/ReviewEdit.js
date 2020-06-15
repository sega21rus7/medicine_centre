import React from 'react';
import {Button, Container} from "react-bootstrap";
import axios from "axios";
import ReviewForm from "./ReviewForm";
import {BACKEND_URL} from "../../constants";
import SpinnerComponent from "../SpinnerComponent";

class ReviewEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      review: null,
    }
  }

  componentDidMount() {
    const token = localStorage.getItem('token');
    if (token) {
      const pk = this.props.match.params.pk;
      const url = `${BACKEND_URL}/rest-api/marketing/patient_reviews/${pk}`;
      const options = {
        method: 'GET',
        url: url,
        headers: {'Authorization': `Token ${token}`},
      };
      axios(options)
        .then(res => {
          this.setState({review: res.data});
        })
        .catch(err => {

        });
    }
  };

  handleBack = () => {
    this.props.history.push('/lk/patient_reviews/view');
  };

  render() {
    const {review} = this.state;

    return (
      <div className="ReviewEdit">
        {
          review ?
            <>
              <Container>
                <Button variant="outline-secondary" onClick={this.handleBack}>Назад</Button>
                <div className="mt-4">
                  <ReviewForm instance={review}
                              isEdit={true}
                              instancePk={this.props.match.params.pk}/>
                </div>
              </Container>
            </>
            : <SpinnerComponent/>
        }
      </div>
    )
  }
}

export default ReviewEdit;
