import React from 'react';
import {Button, Container} from "react-bootstrap";
import axios from "axios";
import SupportQuestionForm from "./SupportQuestionForm";

class SupportQuestionEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      question: {},
    }
  }

  componentDidMount() {
    let token = localStorage.getItem('token');
    if (token) {
      const pk = this.props.match.params.pk;
      const url = `http://localhost:8000/marketing/api/support/${pk}`;
      const options = {
        method: 'GET',
        url: url,
        headers: {'Authorization': `Token ${token}`},
      };
      axios(options)
        .then(res => {
          this.setState({
            question: res.data,
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
    this.props.history.push('/lk/support');
  };

  render() {
    const {question} = this.state;

    return (
      <Container className="SupportQuestionEdit">
        <Button variant="outline-secondary" onClick={this.handleBack}>Назад</Button>
        <div className="mt-4">
          <div className="mt-4">
            <SupportQuestionForm instance={question}
                                 instancePk={this.props.match.params.pk}
                                 isEdit={true}/>
          </div>
        </div>
      </Container>
    )
  }
}

export default SupportQuestionEdit;
