import React from 'react';
import './ArticleShortList.css';
import axios from 'axios';
import ArticleShortItem from "./ArticleShortItem/ArticleShortItem";
import CommonShortList from "../CommonShortList/CommonShortList";

class ArticleShortList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
    };
    this.button = {
      text: 'Перейти ко всем статьям',
      to: '/articles'
    }
  }

  componentDidMount() {
    axios.get('http://localhost:8000/news/api/article_list/')
      .then(response => {
        this.setState({
          articles: response.data.results
        });
      })
  }

  render() {
    const row = this.state.articles.map((item, index) => (
        <ArticleShortItem key={index} item={item} index={index}/>
      )
    );

    return (
      <div className="ArticleShortList">
        <CommonShortList button={this.button}
                         title={'Статьи'}
                         row={row}/>
      </div>
    )
  };
}

export default ArticleShortList;
