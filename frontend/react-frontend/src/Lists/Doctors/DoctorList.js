import React from "react";
import PaginationComponent from "../Pagination/PaginationComponent";
import {Container, Row} from "react-bootstrap";
import axios from "axios";
import ViewAllLink from "../../MainPage/ViewAllLink/ViewAllLink";
import DoctorItem from "./DoctorItem";

class DoctorList extends React.Component {
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
      text: 'Показать всех врачей',
      to: '/doctors'
    }
  }

  componentDidMount() {
    this.getData(1);
  }

  getData = (page) => {
    const url = `http://localhost:8000/staff/api/doctors/?page=${page}`;
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
    const {isPaginated} = this.props;

    const row = this.state.items.map((item, index) => {
        return <DoctorItem key={index} item={item} index={index}/>;
      }
    );

    if (isPaginated) {
      if (paginateCount > 1) {
        var pagination = <PaginationComponent items={items}
                                              getData={this.getData}
                                              paginateCount={paginateCount}
                                              next={next}
                                              previous={previous}/>;
      }
    } else {
      var button = <ViewAllLink button={this.button}/>;
    }

    return (
      <Container className="mt-4">
        <h3 className="caption-left">Наши специалисты</h3>
        <Row>
          {row}
        </Row>
        {button}
        {pagination}
      </Container>
    )
  };
}

export default DoctorList;