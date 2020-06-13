import React from 'react';
import {Button, Form, FormControl} from "react-bootstrap";
import {withRouter} from "react-router";

class NewsSearchForm extends React.Component {
  handleSearch = (event) => {
    event.preventDefault();
    const text = event.target.elements.text.value;
    this.props.getData(1, `http://localhost:8000/rest-api/marketing/search_news/${text}`);

    // нужен redux, при наличии > 3 новостей пагинация отрабатывает неправильно, исправить позже

  };

  handleReset = (event) => {
    event.preventDefault();
    this.props.getData(1);
  };

  render() {
    return (
      <div className="NewsSearchForm">
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

export default withRouter(NewsSearchForm);
