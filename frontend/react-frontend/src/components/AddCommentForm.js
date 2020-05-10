import React from 'react';
import {Button, Container, Form} from "react-bootstrap";
import CKEditor from "@ckeditor/ckeditor5-react"
import ClassicEditor from "@ckeditor/ckeditor5-build-classic"
import axios from "axios";
import ErrorBlock from "./ErrorBlock/ErrorBlock";

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
          console.log(response.data);
          this.setState({errors: null});
          this.props.getArticle();
        })
        .catch(error => {
          console.log(error.response.data);
          this.setState({errors: error.response.data});
        });
    } else {
      this.setState({errors: 'Войдите в систему, чтобы оставить комментарий!'});
    }
  };

  render() {
    const {errors} = this.state;
    if(errors){
      var contentError = <ErrorBlock text={errors.content || errors}/>;
    }

    return (
      <Container className="AddComment">
        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="formGroupContent">
            <textarea name="content" placeholder="Сообщение"/>
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

export default AddCommentForm;
