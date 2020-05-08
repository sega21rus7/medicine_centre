import React from 'react';
import axios from "axios";
import {Card, Col, Container, Row} from "react-bootstrap";
import ReactHtmlParser from "react-html-parser";
import CommentList from "../containers/Comments/CommentList";
import AddCommentForm from "./AddCommentForm";
import ArticleTagList from "../containers/Tags/ArticleTagList";

class ArticleDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      article: {},
    };
  }

  getData = () => {
    axios.get(`http://localhost:8000/marketing/api/articles/${this.props.match.params.slug}`)
      .then(response => {
        this.setState({
          article: response.data
        });
        console.log(response.data);
      })
  };

  componentDidMount() {
    this.getData();
  }

  render() {
    const {article} = this.state;
    if (article.tags) {
      var tags = <ArticleTagList tags={article.tags}/>;
    }
    const comments = article.comments ? <CommentList comments={article.comments}/> : null;

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
                    {tags}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={7}>
              <div>
                {ReactHtmlParser(article.content)}
              </div>
            </Col>
          </Row>
        </Container>
        {comments}
        <AddCommentForm articleID={article.pk} getArticle={this.getData}/>
      </div>
    )
  };
}

export default ArticleDetail;
