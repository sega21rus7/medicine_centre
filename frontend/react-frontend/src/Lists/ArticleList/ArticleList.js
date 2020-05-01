import React from 'react';
import './ArticleList.css';
import CommonList from "../CommonList/CommonList";
import TagList from "../TagList/TagList";


class ArticleList extends React.Component {
  render() {
    return (
      <div className="ArticleList">
        <CommonList title={'Статьи'}
                    url='http://localhost:8000/news/api/article_list/'
                    kind={'articles'}
        />
        <TagList/>
      </div>
    )
  };
}

export default ArticleList;
