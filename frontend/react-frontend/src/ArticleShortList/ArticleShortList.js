import React from 'react';
import './ArticleShortList.css';
import {Container, Row} from "react-bootstrap";
import ViewAllLink from "../ViewAllLink/ViewAllLink";
import {BrowserRouter as Router} from "react-router-dom";
import axios from 'axios';
import ArticleShortItem from "./ArticleShortItem/ArticleShortItem";

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
          articles: response.data
        });
      })
  }

  render() {
    return (
      <div className="DoctorShortList">
        <Container>
          <Router>
            <h3 className="text-left">Статьи</h3>
            <Row>
              {this.state.articles.map((item, index) => (
                  <ArticleShortItem key={index} item={item} index={index}/>
                )
              )}
            </Row>
            <ViewAllLink button={this.button}/>
          </Router>
        </Container>
      </div>
    )
  };
}

export default ArticleShortList;
