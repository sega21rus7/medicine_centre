import React from 'react';
import './ArticleShortItem.css';
import {Card, Col} from "react-bootstrap";
import {Link} from "react-router-dom";

class ArticleShortItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {item, index} = this.props;

    return (
      <Col md={4} sm={6} key={index}>

        <Card>
          <Link to="/fass" style={{color: 'inherit'}}>
            <Card.Img
              variant="top"
              src={item.image}
              alt={item.title}
              className="img-fluid"
            />
          </Link>
          <Card.Body>
            <Card.Text className="text-center">
              <Link to="/fas" style={{color: 'inherit'}}>
                {item.title}
              </Link>
              <br/>
              Теги:
              &nbsp;
              {item.tags.map((tag, tag_index) => (
                <span key={tag_index}>
                    <Link to="/tagdafnb">
                      #{tag.title}
                    </Link>
                  &nbsp;</span>
              ))}
            </Card.Text>
          </Card.Body>
        </Card>

      </Col>
    )
  };
}

export default ArticleShortItem;
