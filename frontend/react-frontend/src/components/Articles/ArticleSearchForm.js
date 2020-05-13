import React from 'react';
import {Button, Form, FormControl} from "react-bootstrap";

class ArticleSearchForm extends React.Component {
  render() {
    return (
      <div className="ArticleSearch">
        <Form>
          <Form.Group controlId="formGroupSearch">
            <FormControl type="text" placeholder="Введите ключевую фразу"/>
          </Form.Group>
          <Button type="submit" variant="outline-success" block>Поиск</Button>
        </Form>

        <Form>
          <Button type="submit" variant="outline-danger" block>Сброс</Button>
        </Form>
      </div>
    )
  }
}

export default ArticleSearchForm;
