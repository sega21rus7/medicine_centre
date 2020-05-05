import React from 'react';
import ArticleList from "./ArticleList";

class ArticleLongList extends React.Component {
  render() {
    return (
      <div className="ArticleLongList">
        <ArticleList isPaginated={true} special_url={this.props.special_url}/>
      </div>
    )
  };
}

export default ArticleLongList;
