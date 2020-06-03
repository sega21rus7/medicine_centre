import React from 'react';
import axios from "axios";
import {Col, Container, Image} from "react-bootstrap";
import ReactHtmlParser from "react-html-parser";
import CommentList from "../../containers/Comments/CommentList";
import AddCommentForm from "./AddCommentForm";
import ArticleTagList from "../../containers/Tags/ArticleTagList";

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
          <h3 className="orange-caption-left">{article.title}</h3>
          <Col md={6}>
            <Image
              src={article.image}
              alt={article.title}
              className="img-fluid"
            />
          </Col>
          {ReactHtmlParser(article.content)}
          <hr/>
          Опубликована: {article.pub_date}
          {tags}
        </Container>
        {comments}
        <AddCommentForm articleID={article.pk} getArticle={this.getData}/>
      </div>
    )
  };
}

export default ArticleDetail;
