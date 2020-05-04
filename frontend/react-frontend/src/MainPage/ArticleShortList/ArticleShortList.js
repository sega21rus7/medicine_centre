import React from 'react';
import './ArticleShortList.css';
import CommonShortList from "../CommonShortList/CommonShortList";

class ArticleShortList extends React.Component {
  constructor(props) {
    super(props);
    this.button = {
      text: 'Перейти ко всем статьям',
      to: '/articles'
    }
  }

  render() {
    return (
      <div className="ArticleShortList">
        <CommonShortList button={this.button}
                         title={'Статьи'}
                         url='http://localhost:8000/news/api/articles/'
                         kind={'articles'}
        />
      </div>
    )
  };
}

export default ArticleShortList;
