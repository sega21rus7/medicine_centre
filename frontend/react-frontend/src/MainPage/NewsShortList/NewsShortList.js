import React from 'react';
import './NewsShortList.css';
import axios from 'axios';
import NewsShortItem from './NewsShortItem/NewsShortItem'
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
                         url='http://localhost:8000/news/api/news_list/'
        />
      </div>
    )
  };
}

export default NewsShortList;
