import React from 'react';
import './NewsShortItem.css';
import {Card, Col} from "react-bootstrap";
import {Link} from "react-router-dom";

class NewsShortItem extends React.Component {
  render() {
    const {item, index} = this.props;

    return (
      <Col md={4} sm={6} key={index}>
        <Link to={'new/' + item.slug} style={{color: 'inherit'}}>
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

export default NewsShortItem;
