import React from 'react';
import {Container} from "react-bootstrap";
import ArticleLongList from "../../containers/Articles/ArticleLongList";
import {BACKEND_URL} from "../../constants";


class TagDetail extends React.Component {
  render() {
    const url = `${BACKEND_URL}/rest-api/marketing/articles_with_tag/${this.props.match.params.slug}/`;

    return (
      <Container className="TagDetail">
        <ArticleLongList isPaginated={true}
                         articlesWithTagUrl={url}
                         isSearchable={true}/>
      </Container>
    )
  };
}

export default TagDetail;
