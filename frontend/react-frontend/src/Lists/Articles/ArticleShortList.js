import React from 'react';
import ArticleList from "./ArticleList";

class ArticleShortList extends React.Component {
  render() {
    return (
      <div className="ArticleShortList">
        <ArticleList isPaginated={false}/>
      </div>
    )
  };
}

export default ArticleShortList;
