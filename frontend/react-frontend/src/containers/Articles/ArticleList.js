import React from "react";
import PaginationComponent from "../../components/PaginationComponent";
import {Col, Container, Row} from "react-bootstrap";
import axios from "axios";
import ViewAllList from "../../components/ViewAllList/ViewAllList";
import ArticleListItem from "../../components/Articles/ArticleListItem";
import ArticleSearch from "../../components/Articles/ArticleSearch";

class ArticleList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      next: null,
      previous: null,
      count: 0,
      items: [],
      paginateCount: 0,
    };
    this.paginate_by = 3;
    this.button = {
      text: 'Посмотреть все статьи',
      to: '/articles'
    }
  }

  componentDidMount() {
    this.getData(1, this.props.specialUrl);
  }

  getData = (page, initialUrl = 'http://localhost:8000/marketing/api/articles/') => {
    const url = `${initialUrl}?page=${page}`;
    axios.get(url)
      .then(response => {
        this.setState({
          items: response.data.results,
          next: response.data.next,
          previous: response.data.previous,
          count: response.data.count,
        });
        console.log(response.data);
      })
      .then(() => {
        this.setState({
          paginateCount: Math.ceil(this.state.count / this.paginate_by)
        });
      })
  };

  render() {
    const {next, previous, items, paginateCount} = this.state;
    const {isPaginated, specialUrl} = this.props;

    const row = this.state.items.map((item, index) => {
        return <ArticleListItem key={index} item={item} index={index}/>;
      }
    );

    if (isPaginated) {
      if (paginateCount > 1) {
        var pagination = <PaginationComponent items={items}
                                              getData={this.getData}
                                              paginateCount={paginateCount}
                                              next={next}
                                              previous={previous}
                                              specialUrl={specialUrl}/>;
      }
    } else {
      var button = <ViewAllList button={this.button}/>;
    }

    return (
      <Container className="mt-4">
        <Row>
          <Col>
            <h3 className="orange-caption-left">Статьи</h3>
          </Col>
          <Col>
            <ArticleSearch/>
          </Col>
        </Row>
        <Row>
          {row}
        </Row>
        {button}
        {pagination}
      </Container>
    )
  };
}

export default ArticleList;
