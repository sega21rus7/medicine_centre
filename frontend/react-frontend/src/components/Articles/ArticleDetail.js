import React from 'react';
import axios from "axios";
import {Col, Container, Image} from "react-bootstrap";
import ReactHtmlParser from "react-html-parser";
import CommentList from "../../containers/Comments/CommentList";
import AddCommentForm from "./AddCommentForm";
import ArticleTagList from "../../containers/Tags/ArticleTagList";
import {BACKEND_URL} from "../../constants";
import SpinnerComponent from "../SpinnerComponent";

class ArticleDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      article: null,
    };
  }

  getData = () => {
    axios.get(`${BACKEND_URL}/rest-api/marketing/articles/${this.props.match.params.slug}`)
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

    return (
      <Container className="ArticleDetail mt-4">
        {
          article ?
            <>
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
              {article.tags ? <ArticleTagList tags={article.tags}/> : null}
              {article.comments ? <CommentList comments={article.comments}/> : null}
              <AddCommentForm articleID={article.pk} getArticle={this.getData}/>
            </>
            : <SpinnerComponent/>
        }
      </Container>
    )
  };
}

export default ArticleDetail;
