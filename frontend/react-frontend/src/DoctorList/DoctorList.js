import React from 'react';
import './DoctorList.css';
import axios from "axios";
import {Container, Row} from "react-bootstrap";
import DoctorShortItem from "../MainPage/DoctorShortList/DoctorShortItem/DoctorShortItem";
import PaginationComponent from "../Pagination/PaginationComponent";


class DoctorList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      next: null,
      previous: null,
      count: 0,
      doctors: [],
      paginateCount: 0,
    };
    this.paginate_by = 3;
  }

  componentDidMount() {
    this.getData(1);
  }

  getData = (page) => {
    const url = `http://localhost:8000/staff/api/doctor_list/?page=${page}`;
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
          paginateCount: Math.ceil(this.state.count / this.paginate_by)
        });
      })
  };

  render() {
    const {next, previous, doctors, paginateCount} = this.state;

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

          <PaginationComponent items={doctors}
                               getData={this.getData}
                               paginateCount={paginateCount}
                               next={next}
                               previous={previous}/>

        </Container>
      </div>
    )
  };
}

export default DoctorList;
