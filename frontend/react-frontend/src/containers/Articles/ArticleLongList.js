import React from 'react';
import ArticleList from "./ArticleList";

class ArticleLongList extends React.Component {
  render() {
    return (
      <div className="ArticleLongList">
        <ArticleList isPaginated={true}
                     articlesWithTagUrl={this.props.articlesWithTagUrl}
                     isSearchable={true}/>
      </div>
    )
  };
}

export default ArticleLongList;
