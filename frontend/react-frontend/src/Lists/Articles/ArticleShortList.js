import React from 'react';
import ArticleList from "./ArticleList";

class ArticleShortList extends React.Component {
  constructor(props) {
    super(props);
    this.button = {
      text: 'Посмотреть все статьи',
      to: '/articles'
    }
  }

  render() {
    return (
      <div className="ArticleShortList">
        <ArticleList button={this.button}/>
      </div>
    )
  };
}

export default ArticleShortList;
