import React from 'react';
import {Button, Card, Image, Row} from "react-bootstrap";
import ArticleTagList from "../../containers/Tags/ArticleTagList";
import {Link} from "react-router-dom";

class ArticleListItem extends React.Component {
  render() {
    const {item, index} = this.props;

    if (item.tags) {
      var tags = <ArticleTagList tags={item.tags}/>;
    }

    return (
      <Row key={index} className="mb-2">
        <Card style={{width: "100%"}}>
          <Card.Body>
            <Image
              className="wrap-image"
              src={item.image}
              alt={item.title}
            />
            <div className="text-center">
              {item.title}
            </div>
            {tags}
            <div className="text-right">
              Опубликована: {item.pub_date}
            </div>
            <div className="text-right">
              <Button as={Link} to={'/article/' + item.slug} variant="outline-secondary">Читать</Button>
            </div>


          </Card.Body>
        </Card>
      </Row>
    )
  };
}

export default ArticleListItem;
