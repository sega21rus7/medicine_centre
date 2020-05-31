import React from 'react';
import {Button, Container} from "react-bootstrap";
import axios from "axios";
import AddSupportQuestionForm from "./AddSupportQuestionForm";

class SupportQuestionEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      question: {},
      token: null,
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

  handleUpdate = (event) => {
    event.preventDefault();
    const token = this.state.token;
    const pk = this.props.match.params.pk;
    if (token) {
      const url = `http://localhost:8000/marketing/api/support/${pk}/`;
      const content = event.target.elements.content.value;
      const options = {
        method: 'PUT',
        url: url,
        data: {
          content: content,
        },
        headers: {'Authorization': `Token ${token}`},
      };
      axios(options)
        .then(res => {
          this.props.history.push('/lk/support');
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
      const url = `http://localhost:8000/marketing/api/support/${pk}/`;
      const options = {
        method: 'DELETE',
        url: url,
        headers: {'Authorization': `Token ${token}`},
      };
      axios(options)
        .then(res => {
          console.log(res.data);
          this.props.history.push('/lk/support');
        })
        .catch(err => {
          console.log(err.response);
        });
    }
  };

  render() {
    const {question} = this.state;

    return (
      <Container className="SupportQuestionEdit">
        <Button variant="outline-secondary" onClick={this.handleBack}>Назад</Button>
        <div className="mt-4">
          <div className="mt-4">
            <AddSupportQuestionForm item={question}
                                    handleUpdate={this.handleUpdate}
                                    handleDelete={this.handleDelete}/>
          </div>
        </div>
      </Container>
    )
  }
}

export default SupportQuestionEdit;
