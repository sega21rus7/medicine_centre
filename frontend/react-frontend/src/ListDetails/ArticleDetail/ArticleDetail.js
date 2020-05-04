import React from 'react';
import './ArticleDetail.css';
import axios from "axios";
import {Card, Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";


class ArticleDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      article: {},
    };
  }

  componentDidMount() {
    axios.get(`http://localhost:8000/news/api/articles/${this.props.match.params.slug}`)
      .then(response => {
        this.setState({
          article: response.data
        });
        console.log(response.data);
      })
  }

  render() {
    const {article} = this.state;
    let tags = '-';
    if(article.tags) {
      tags = article.tags.map((tag, index) => (
        <span key={index}>
        <Link to={'tag/' + tag.slug}>
          #{tag.title}
        </Link>
          &nbsp;
      </span>
      ));
    }

    return (
      <div className="ArticleDetail">
        <Container className="mt-4">
          <Row>
            <Col md={5}>
              <h3 className="caption-center">{article.title}</h3>
              <Card>
                <Card.Img
                  variant="top"
                  src={article.image}
                  alt={article.title}
                  className="img-fluid"
                />
                <Card.Body>
                  <Card.Text className="text-center">
                    Дата публикации: {article.pub_date}
                    <br/>
                    Теги:
                    &nbsp;
                    {tags}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={7}>
              <div dangerouslySetInnerHTML={{__html: article.content}}/>
            </Col>
          </Row>
        </Container>
      </div>
    )
  };
}

export default ArticleDetail;
