import React from 'react';
import {Button, Container, Form} from "react-bootstrap";
import axios from "axios";
import ErrorBlock from "../ErrorBlock/ErrorBlock";
import {connect} from "react-redux";

class AddCommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: null,
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    let token = localStorage.getItem('token');
    if (token) {
      const options = {
        method: 'POST',
        url: 'http://localhost:8000/marketing/api/comments/',
        data: {
          article: this.props.articleID,
          content: event.target.elements.content.value,
        },
        headers: {'Authorization': `Token ${token}`},
      };
      axios(options)
        .then(response => {
          this.setState({errors: null});
          this.props.getArticle();
        })
        .catch(error => {
          this.setState({errors: error.response.data});
        });
    }
  };

  render() {
    if (!this.props.isAuthenticated) {
      return <ErrorBlock text="Войдите в систему, чтобы оставить комментарий!"/>
    }

    const {errors} = this.state;
    if (errors) {
      var contentError = <ErrorBlock text={errors.content}/>;
    }

    return (
      <Container className="AddComment">
        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="formGroupContent">
            <Form.Control as="textarea"
                          name="content"
                          placeholder="Сообщение"
                          required/>
            {contentError}
          </Form.Group>
          <Button type="submit" variant="primary">
            Опубликовать комментарий
          </Button>
        </Form>

      </Container>
    )
  };
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
  }
};

export default connect(mapStateToProps, null)(AddCommentForm);
