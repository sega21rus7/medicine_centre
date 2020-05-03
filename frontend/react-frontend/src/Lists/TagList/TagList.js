import React from 'react';
import './TagList.css';
import axios from "axios";
import {Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";


class TagList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tags: [],
    }
  }

  componentDidMount() {
    axios.get('http://localhost:8000/news/tag_list/')
      .then(response => {
        this.setState({
          tags: response.data
        });
        console.log(response.data);
      })
  }

  render() {
    const tags = this.state.tags.map((tag, tag_index) => (
      <span key={tag_index}>
        <Link to={'tag/' + tag.slug}>
          #{tag.title}
        </Link>
        &nbsp;</span>
    ));

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

export default TagList;
