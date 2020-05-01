import React from 'react';
import './TagDetail.css';
import {Container} from "react-bootstrap";
import CommonList from "../../Lists/CommonList/CommonList";


class TagDetail extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      tag: props.location.state ? props.location.state.tag : null,
    };
    this.url = `http://localhost:8000/news/api/tag_detail/${this.props.match.params.slug}`;
  }

  render() {
    return (
      <Container className="TagDetail">
        <CommonList title={`Статьи с тегом #${this.props.match.params.slug}`}
                    url={this.url}
                    kind={'articles'}
        />
      </Container>
    )
  };
}

export default TagDetail;
