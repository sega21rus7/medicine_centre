import React from 'react';
import './TagDetail.css';
import {Container} from "react-bootstrap";
import ArticleLongList from "../../Lists/Articles/ArticleLongList";


class TagDetail extends React.Component {
  render() {
    const url = `http://localhost:8000/news/api/articles_with_tag/${this.props.match.params.slug}/`;

    return (
      <Container className="TagDetail">
        <ArticleLongList isPaginated={true} special_url={url}/>
      </Container>
    )
  };
}

export default TagDetail;
