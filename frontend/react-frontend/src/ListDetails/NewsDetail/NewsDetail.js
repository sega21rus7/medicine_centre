import React from 'react';
import './NewsDetail.css';
import axios from "axios";
import {Card, Col, Container, Row} from "react-bootstrap";


class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newItem: {},
    }
  }

  componentDidMount() {
    axios.get(`http://localhost:8000/news/api/news_detail/${this.props.match.params.slug}`)
      .then(response => {
        this.setState({
          newItem: response.data
        });
        console.log(response.data);
      })
  }

  render() {
    const {newItem} = this.state;

    return (
      <div className="NewDetail">
        <Container className="mt-4">
          <Row>
            <Col md={5}>
              <h3 className="caption-center">{newItem.title}</h3>
              <Card>
                <Card.Img
                  variant="top"
                  src={newItem.image}
                  alt={newItem.title}
                  className="img-fluid"
                />
                <Card.Body>
                  <Card.Text className="text-center">
                    Дата публикации: {newItem.pub_date}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={7}>
              <div dangerouslySetInnerHTML={{__html: newItem.content}}/>
            </Col>
          </Row>
        </Container>
      </div>
    )
  };
}

export default Content;