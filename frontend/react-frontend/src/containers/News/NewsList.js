import React from "react";
import NewsListItem from "../../components/News/NewsListItem";
import PaginationComponent from "../../components/PaginationComponent";
import {Col, Container, Row} from "react-bootstrap";
import axios from "axios";
import ViewAllList from "../../components/ViewAllList/ViewAllList";
import NewsSearchForm from "../../components/News/NewsSearchForm";
import {BACKEND_URL} from "../../constants";
import SpinnerComponent from "../../components/SpinnerComponent";

class NewsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      next: null,
      previous: null,
      count: 0,
      items: null,
      paginateCount: 0,
    };
    this.paginate_by = 3;
    this.button = {
      text: 'Показать все новости',
      to: '/news'
    }
  }

  componentDidMount() {
    this.getData(1);
  }

  getData = (page, initialUrl = `${BACKEND_URL}/rest-api/marketing/news/`) => {
    const url = `${initialUrl}?page=${page}`;
    axios.get(url)
      .then(response => {
        this.setState({
          items: response.data.results,
          next: response.data.next,
          previous: response.data.previous,
          count: response.data.count,
        });
      })
      .then(() => {
        this.setState({
          paginateCount: Math.ceil(this.state.count / this.paginate_by)
        });
      })
  };

  render() {
    const {next, previous, items, paginateCount} = this.state;
    const {isPaginated, isSearchable} = this.props;

    if (isPaginated) {
      if (paginateCount > 1) {
        var pagination = <PaginationComponent items={items}
                                              getData={this.getData}
                                              paginateCount={paginateCount}
                                              next={next}
                                              previous={previous}/>;
      }
    } else {
      var button = <ViewAllList button={this.button}/>;
    }

    return (
      <Container className="mt-4">
        <h3 className="orange-caption-left">Новости</h3>
        {
          items ?
            <>
              <Row>
                {
                  isSearchable ?
                    <Col md={3}>
                      <NewsSearchForm getData={this.getData}/>
                    </Col>
                    : null
                }
                <Col md={isSearchable ? 9 : 12}>
                  {
                    items.map((item, index) => (
                      <NewsListItem key={index}
                                    item={item}
                                    index={index}/>
                    ))
                  }
                </Col>
              </Row>
              {button}
              {pagination}
            </>
            : <SpinnerComponent/>
        }
      </Container>
    )
  };
}

export default NewsList;
