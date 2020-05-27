import React from 'react';
import {Button, Card, Col, Image, Row} from "react-bootstrap";
import {Link} from "react-router-dom";

class NewsListItem extends React.Component {
  render() {
    const {item, index} = this.props;

    return (
      <Row key={index} className="mb-2">
        <Card style={{width: "100%"}}>
          <Card.Body>
            <Col md={6}>
              <Image
                className="wrap-image img-fluid"
                src={item.image}
                alt={item.title}
              />
            </Col>
            <div className="text-center">
              {item.title}
            </div>
            <div className="text-right">
              Опубликована:<br/> {item.pub_date}
            </div>
            <div className="text-right">
              <Button as={Link} to={'/new/' + item.slug} variant="outline-secondary">Читать</Button>
            </div>
          </Card.Body>
        </Card>
      </Row>
    )
  };
}

export default NewsListItem;
