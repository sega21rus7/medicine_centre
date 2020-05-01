import React from 'react';
import './CommonList.css';
import axios from "axios";
import {Container, Row} from "react-bootstrap";
import PaginationComponent from "../Pagination/PaginationComponent";
import DoctorShortItem from "../../MainPage/DoctorShortList/DoctorShortItem/DoctorShortItem";
import NewsShortItem from "../../MainPage/NewsShortList/NewsShortItem/NewsShortItem";
import ArticleShortItem from "../../MainPage/ArticleShortList/ArticleShortItem/ArticleShortItem";


class CommonList extends React.Component {
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
  }

  componentDidMount() {
    this.getData(1);
  }

  getData = (page) => {
    const url = `${this.props.url}?page=${page}`;
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
    const {title, kind} = this.props;
    const row = this.state.items.map((item, index) => {
        let res = '';
        if (kind === 'doctors')
          res = <DoctorShortItem key={index} item={item} index={index}/>;
        else if (kind === 'news')
          res = <NewsShortItem key={index} item={item} index={index}/>;
        else if (kind === 'articles')
          res = <ArticleShortItem key={index} item={item} index={index}/>;
        return res;
      }
    );

    const pagination = <PaginationComponent items={items}
                                            getData={this.getData}
                                            paginateCount={paginateCount}
                                            next={next}
                                            previous={previous}/>;

    return (
      <Container>
        <h3 className="caption mt-4">{title}</h3>
        <Row>
          {row}
        </Row>
        {this.state.paginateCount > 1 ? pagination : ''}

      </Container>
    )
  };
}

export default CommonList;
