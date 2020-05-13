import React from 'react';
import {Card, Col} from "react-bootstrap";
import {Link} from "react-router-dom";

class NewsListItem extends React.Component {
  render() {
    const {item, index, isSearchable} = this.props;

    return (
      <Col md={isSearchable ? 3 : 4} sm={6} key={index} className="mb-2">
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

export default NewsListItem;
