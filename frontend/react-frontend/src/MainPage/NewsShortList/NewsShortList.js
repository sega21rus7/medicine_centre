import React from 'react';
import './NewsShortList.css';
import CommonShortList from "../CommonShortList/CommonShortList";

class NewsShortList extends React.Component {
  constructor(props) {
    super(props);
    this.button = {
      text: 'Показать все новости',
      to: '/news'
    }
  }

  render() {
    return (
      <div className="NewsShortList">
        <CommonShortList button={this.button}
                         title={'Новости'}
                         url='http://localhost:8000/news/news_list/'
                         kind={'news'}
        />
      </div>
    )
  };
}

export default NewsShortList;
