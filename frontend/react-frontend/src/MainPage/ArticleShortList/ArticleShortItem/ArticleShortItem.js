import React from 'react';
import './ArticleShortItem.css';
import {Card, Col} from "react-bootstrap";
import {Link} from "react-router-dom";

class ArticleShortItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let item = this.props.item;
    let index = this.props.index;

    return (
      <Col md={4} sm={6} key={index}>
        <Link to="/" style={{color: 'inherit'}}>
          <Card>
            <Card.Img
              variant="top"
              src={item.image}
              alt={item.title}
              className="img-fluid"
            />
            <Card.Body>
              <Card.Text className="text-center">
                {item.title}
              </Card.Text>
            </Card.Body>
          </Card>
        </Link>
      </Col>
    )
  };
}

export default ArticleShortItem;
