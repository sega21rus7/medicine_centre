import React from 'react';
import './AllTagList.css';
import axios from "axios";
import {Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import ArticleTagList from "../ArticleTagList/ArticleTagList";


class AllTagList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tags: [],
    }
  }

  componentDidMount() {
    axios.get('http://localhost:8000/news/api/tags/')
      .then(response => {
        this.setState({
          tags: response.data
        });
        console.log(response.data);
      })
  }

  render() {
    const tags = <ArticleTagList tags={this.state.tags}/>;

    return (
      <div className="TagList">
        <Container className="ml-3 mt-3">
          <Row>
            Список всех тегов:&nbsp;{tags}
          </Row>
        </Container>
      </div>
    )
  };
}

export default AllTagList;
