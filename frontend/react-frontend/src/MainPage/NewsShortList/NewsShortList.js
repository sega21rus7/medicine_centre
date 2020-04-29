import React from 'react';
import './NewsShortList.css';
import {Container, Row} from "react-bootstrap";
import ViewAllLink from "../ViewAllLink/ViewAllLink";
import axios from 'axios';
import NewsShortItem from './NewsShortItem/NewsShortItem'

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
    return (
      <div className="NewsShortList">
        <Container>
          <h3 className="text-left">Новости</h3>
          <Row>
            {this.state.news.map((item, index) => (
                <NewsShortItem key={index} item={item} index={index}/>
              )
            )}
          </Row>
          <ViewAllLink button={this.button}/>
        </Container>
      </div>
    )
  };
}

export default NewsShortList;
