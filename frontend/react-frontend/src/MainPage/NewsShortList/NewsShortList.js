import React from 'react';
import './NewsShortList.css';
import axios from 'axios';
import NewsShortItem from './NewsShortItem/NewsShortItem'
import ItemsShortList from "../ItemsShortList/ItemsShortList";

class NewsShortList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      news: [],
    };
    this.button = {
      text: 'Показать все новости',
      to: '/news'
    }
  }

  componentDidMount() {
    axios.get('http://localhost:8000/news/api/news_list/')
      .then(response => {
        this.setState({
          news: response.data.results
        });
      })
  }

  render() {
    const row = this.state.news.map((item, index) => (
        <NewsShortItem key={index} item={item} index={index}/>
      )
    );

    return (
      <div className="NewsShortList">
        <ItemsShortList button={this.button}
                        title={'Новости'}
                        row={row}/>
      </div>
    )
  };
}

export default NewsShortList;
