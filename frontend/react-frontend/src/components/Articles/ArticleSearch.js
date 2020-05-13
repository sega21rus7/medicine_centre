import React from 'react';
import {Button, Form, FormControl} from "react-bootstrap";

class ArticleSearch extends React.Component {
  render() {
    return (
      <Form inline>
        <FormControl type="text" placeholder="Поиск" className=" mr-sm-2"/>
        <Button type="submit">Найти</Button>
      </Form>
    )
  }
}

export default ArticleSearch;
