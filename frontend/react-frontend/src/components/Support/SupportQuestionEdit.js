import React from 'react';
import {Button, Container} from "react-bootstrap";
import axios from "axios";
import SupportQuestionForm from "./SupportQuestionForm";
import {BACKEND_URL} from "../../constants";

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
      const url = `${BACKEND_URL}/rest-api/marketing/support/${pk}`;
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
        })
        .catch(err => {

        });
    }
  };

  handleBack = () => {
    this.props.history.push('/lk/support/view');
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
