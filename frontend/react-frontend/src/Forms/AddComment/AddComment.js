import React from 'react';
import './AddComment.css';
import {Button, Container, Form} from "react-bootstrap";
import CKEditor from "@ckeditor/ckeditor5-react"
import ClassicEditor from "@ckeditor/ckeditor5-build-classic"
import axios from "axios";

class AddComment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: '',
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    let token = localStorage.getItem('token');
    if (token) {
      const options = {
        method: 'POST',
        url: 'http://localhost:8000/news/api/comments/',
        data: {
          article: this.props.articleID,
          content: this.state.comment,
        },
        headers: {'Authorization': `Token ${token}`},
      };
      axios(options)
        .then(response => {
          console.log(response.data);
          this.props.getArticle();
        })
        .catch(error => {
          console.log(error.response.data);
        });
    }
  };

  handleChange = (event, editor) => {
    this.setState({comment: editor.getData()});
  };

  render() {
    return (
      <Container className="AddComment">
        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="formGroupComment">
            <CKEditor editor={ClassicEditor} name="comment" onChange={this.handleChange}/>
          </Form.Group>
          <Button type="submit" variant="primary">
            Опубликовать комментарий
          </Button>
        </Form>
      </Container>
    )
  };
}

export default AddComment;
