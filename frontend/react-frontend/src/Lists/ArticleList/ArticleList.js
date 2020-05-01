import React from 'react';
import './ArticleList.css';
import CommonList from "../CommonList/CommonList";
import TagList from "../TagList/TagList";
import {Container} from "react-bootstrap";


class ArticleList extends React.Component {
  render() {
    return (
      <Container className="ArticleList">
        <CommonList title={'Статьи'}
                    url='http://localhost:8000/news/api/article_list/'
                    kind={'articles'}
        />
        <TagList/>
      </Container>
    )
  };
}

export default ArticleList;
