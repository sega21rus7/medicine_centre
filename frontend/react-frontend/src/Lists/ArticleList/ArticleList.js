import React from 'react';
import './ArticleList.css';
import CommonList from "../CommonList/CommonList";
import AllTagList from "../AllTagList/AllTagList";
import {Container} from "react-bootstrap";


class ArticleList extends React.Component {
  render() {
    return (
      <Container className="ArticleList">
        <CommonList title={'Статьи'}
                    url='http://localhost:8000/news/api/articles/'
                    kind={'articles'}
        />
        <AllTagList/>
      </Container>
    )
  };
}

export default ArticleList;
