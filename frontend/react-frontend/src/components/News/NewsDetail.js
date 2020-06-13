import React from 'react';
import axios from "axios";
import {Col, Container, Image} from "react-bootstrap";
import ReactHtmlParser from "react-html-parser";
import {BACKEND_URL} from "../../constants";

class NewsDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newItem: {},
    }
  }

  componentDidMount() {
    axios.get(`${BACKEND_URL}/rest-api/marketing/news/${this.props.match.params.slug}`)
      .then(response => {
        this.setState({newItem: response.data});
      })
  }

  render() {
    const {newItem} = this.state;

    return (
      <div className="NewDetail">
        <Container className="mt-4">
          <h3 className="orange-caption-left">{newItem.title}</h3>
          <Col md={6}>
            <Image
              src={newItem.image}
              alt={newItem.title}
              className="img-fluid"
            />
          </Col>
          {ReactHtmlParser(newItem.content)}
          <hr/>
          Опубликована: {newItem.pub_date}
        </Container>
      </div>
    )
  };
}

export default NewsDetail;
