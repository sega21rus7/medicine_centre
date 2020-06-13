import React from 'react';
import {Button, Form, FormControl} from "react-bootstrap";
import {BACKEND_URL} from "../../constants";

class ArticleSearchForm extends React.Component {
  handleSearch = (event) => {
    event.preventDefault();
    const text = event.target.elements.text.value;
    this.props.getData(1, `${BACKEND_URL}/rest-api/marketing/search_articles/${text}`);

    // при наличии > 3 статей пагинация отрабатывает неправильно

  };

  handleReset = (event) => {
    event.preventDefault();
    this.props.getData(1);
  };

  render() {
    return (
      <div className="ArticleSearchForm">
        <Form onSubmit={this.handleSearch}>
          <Form.Group controlId="formGroupSearch">
            <FormControl name="text" type="text" placeholder="Поиск" required/>
          </Form.Group>
          <Button type="submit" variant="outline-success" block>Найти</Button>
        </Form>

        <Form className="mt-2 mb-2" onSubmit={this.handleReset}>
          <Button type="submit" variant="outline-danger" block>Сброс</Button>
        </Form>
      </div>
    )
  }
}

export default ArticleSearchForm;
