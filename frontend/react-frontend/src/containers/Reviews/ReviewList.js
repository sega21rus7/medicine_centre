import React from "react";
import {Container, Row} from "react-bootstrap";
import axios from "axios";
import PaginationComponent from "../../components/PaginationComponent";
import ViewAllList from "../../components/ViewAllList/ViewAllList";
import ReviewListItem from "../../components/Reviews/ReviewListItem";
import {BACKEND_URL} from "../../constants";
import SpinnerComponent from "../../components/SpinnerComponent";

class ReviewList extends React.Component {
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
      text: 'Показать все отзывы',
      to: '/reviews'
    }
  }

  componentDidMount() {
    this.getData(1, this.props.personalUrl);
  }

  getData = (page, initialUrl = `${BACKEND_URL}/rest-api/marketing/reviews/`) => {
    const url = `${initialUrl}?page=${page}`;
    let token = localStorage.getItem('token');
    if (token) {
      axios.defaults.headers = {'Authorization': `Token ${token}`};
    }
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
    const {isPaginated, personalTitle, personalUrl, isNotMt4, isChangeable} = this.props;

    if (isPaginated) {
      if (paginateCount > 1) {
        var pagination = <PaginationComponent items={items}
                                              getData={this.getData}
                                              paginateCount={paginateCount}
                                              next={next}
                                              previous={previous}
                                              specialUrl={personalUrl}/>;
      }
    } else {
      var button = <ViewAllList button={this.button}/>;
    }

    return (
      <Container className={isNotMt4 ? '' : 'mt-4'}>
        <h3 className="orange-caption-left">{personalTitle || 'Отзывы'}</h3>
        {
          items ?
            <>
              <Row>
                {
                  items.map((item, index) => (
                    <ReviewListItem key={index}
                                    item={item}
                                    index={index}
                                    isChangeable={isChangeable}/>
                  ))
                }
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

export default ReviewList;
