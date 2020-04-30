import React from 'react';
import './DoctorList.css';
import axios from "axios";
import {Container, Pagination, Row} from "react-bootstrap";
import DoctorShortItem from "../MainPage/DoctorShortList/DoctorShortItem/DoctorShortItem";


class DoctorList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      next: null,
      previous: null,
      count: 0,
      doctors: [],
      activePage: 1,
      paginateCount: 0,
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    const url = `http://localhost:8000/staff/api/doctor_list/?page=${this.state.activePage}`;
    axios.get(url)
      .then(response => {
        this.setState({
          doctors: response.data.results,
          next: response.data.next,
          previous: response.data.previous,
          count: response.data.count,
        });
        console.log(response.data);
      })
      .then(() => {
        this.setState({
          paginateCount: Math.ceil(this.state.count / 3)
        });
      })
  };

  getPagination = () => {
    let pagination = [];
    for (let i = 0; i < this.state.paginateCount; i++) {
      pagination[i] = i + 1;
    }
    return pagination;
  };

  clickPagination = event => {
    // console.log(event.target.getAttribute('value'));
    const page = event.target.getAttribute('value') ||
      event.target.parentElement.getAttribute('value');
    this.setState({activePage: page}, () => {
      this.getData();
    });
  };

  render() {
    const {doctors, next, previous, count} = this.state;
    const pagination = this.getPagination();

    return (
      <div className="DoctorList">
        <Container>
          <h3 className="text-left">Наши специалисты</h3>
          <Row>
            {doctors.map((item, index) => (
                <DoctorShortItem key={index} item={item} index={index}/>
              )
            )}
          </Row>

          <Pagination>
            <Pagination.First
              onClick={this.clickPagination}
              value={1}
            />
            {pagination.map((item, index) => (
                <Pagination.Item onClick={this.clickPagination}
                                 key={index} value={item}
                                 active={item === this.state.activePage}>
                  {item}
                </Pagination.Item>
              )
            )}
            <Pagination.Last onClick={this.clickPagination}
                             value={pagination.length}
            />
          </Pagination>

        </Container>
      </div>
    )
  };
}

export default DoctorList;
