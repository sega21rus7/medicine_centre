import React from 'react';
import {Card, Col} from "react-bootstrap";
import {Link} from "react-router-dom";
import ArticleTagList from "../../containers/Tags/ArticleTagList";

class ArticleListItem extends React.Component {
  render() {
    const {item, index} = this.props;
    let tags = '-';
    if (item.tags) {
      tags = <ArticleTagList tags={item.tags}/>;
    }

    return (
      <Col md={4} sm={6} key={index} className="mb-2">
        <Card>
          <Link to={'article/' + item.slug} style={{color: 'inherit'}}>
            <Card.Img
              variant="top"
              src={item.image}
              alt={item.title}
              className="img-fluid"
            />
          </Link>
          <Card.Body>
            <Card.Text className="text-center">
              <Link to={'article/' + item.slug} style={{color: 'inherit'}}>
                {item.title}
              </Link>
              {tags}
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    )
  };
}

export default ArticleListItem;
