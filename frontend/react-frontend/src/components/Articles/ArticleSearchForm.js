import React from 'react';
import {Button, Form, FormControl} from "react-bootstrap";
import {BACKEND_URL} from "../../constants";
import * as actions from "../../store/actions/filters/actionCreators";
import {withRouter} from "react-router";
import {connect} from "react-redux";

class ArticleSearchForm extends React.Component {
  handleSearch = (event) => {
    event.preventDefault();
    const text = event.target.elements.text.value;
    const searchUrl = `${BACKEND_URL}/rest-api/marketing/search_articles/${text}`;
    this.props.getData(1, searchUrl);
    this.props.setArticleSearchUrl(searchUrl);
  };

  handleReset = (event) => {
    event.preventDefault();
    this.props.getData(1);
    this.props.setArticleSearchUrl(null);
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

const mapDispatchToProps = dispatch => {
  return {
    setArticleSearchUrl: (value) => dispatch(actions.setArticleSearchUrl(value))
  }
};

export default withRouter(connect(null, mapDispatchToProps)(ArticleSearchForm));
