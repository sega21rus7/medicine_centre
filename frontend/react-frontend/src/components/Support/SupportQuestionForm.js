import React from 'react';
import {Button, ButtonGroup, Col, Form, Row} from "react-bootstrap";
import axios from "axios";
import {replaceLineBreaks} from "../../methods";
import {withRouter} from "react-router";

class SupportQuestionForm extends React.Component {
  handleUpdate = (event) => {
    event.preventDefault();
    const token = localStorage.getItem('token');
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
    const token = localStorage.getItem('token');
    const pk = this.props.instancePk;
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

  handleCreate = (event) => {
    event.preventDefault();
    const token = localStorage.getItem('token');
    if (token) {
      const options = {
        method: 'POST',
        url: 'http://localhost:8000/marketing/api/support/',
        data: {
          content: event.target.elements.content.value,
        },
        headers: {'Authorization': `Token ${token}`},
      };
      axios(options)
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err.response);
          this.setState({errors: err.response});
        })
    }
  };

  render() {
    const {isEdit, instance} = this.props;

    return (
      <Form className="AddSupportQuestionForm"
            onSubmit={isEdit ? this.handleUpdate : this.handleCreate}>
        <Row>
          <Col sm={12}>
            <Form.Group controlId="formGroupContent">
              <textarea name="content"
                        placeholder="Сообщение"
                        defaultValue={instance ? replaceLineBreaks(instance.content) : null}
                        required/>
            </Form.Group>
          </Col>
        </Row>
        {
          isEdit ?
            <ButtonGroup>
              <Button type="submit" variant="outline-success">Обновить</Button>
              <Button variant="outline-danger" onClick={this.handleDelete}>Удалить</Button>
            </ButtonGroup>
            :
            <Button type="submit" variant="outline-primary" className="btn-user">
              Отправить обращение
            </Button>
        }
      </Form>
    )
  };
}

export default withRouter(SupportQuestionForm);
