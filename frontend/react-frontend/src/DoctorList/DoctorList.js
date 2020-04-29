import React from 'react';
import './DoctorList.css';
import axios from "axios";
import {Container, Pagination, Row} from "react-bootstrap";
import DoctorShortItem from "../MainPage/DoctorShortList/DoctorShortItem/DoctorShortItem";


class DoctorList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      doctors: [],
    };
  }

  componentDidMount() {
    axios.get('http://localhost:8000/staff/api/doctor_list/')
      .then(response => {
        this.setState({
          data: response.data,
          doctors: response.data.results,
        });
        console.log(response.data);
      })
  }

  get_first_page = () =>{
    axios.get('http://localhost:8000/staff/api/doctor_list/?page=1/')
      .then(response => {
        this.setState({
          doctors: response.data.results,
        });
      })
  };

  get_prev_page = () => {
    axios.get(this.state.data.previous)
      .then(response => {
        this.setState({
          doctors: response.data.results,
        });
      })
  };

  render() {
    return (
      <div className="DoctorList">
        <Container>
          <h3 className="text-left">Наши специалисты</h3>
          <Row>
            {this.state.doctors.map((item, index) => (
                <DoctorShortItem key={index} item={item} index={index}/>
              )
            )}
          </Row>
          <Pagination>
            <Pagination.First onClick={this.get_first_page}/>
            <Pagination.Prev/>
            <Pagination.Item>{1}</Pagination.Item>
            <Pagination.Ellipsis/>

            <Pagination.Item>{10}</Pagination.Item>
            <Pagination.Item>{11}</Pagination.Item>
            <Pagination.Item active>{12}</Pagination.Item>
            <Pagination.Item>{13}</Pagination.Item>
            <Pagination.Item disabled>{14}</Pagination.Item>

            <Pagination.Ellipsis/>
            <Pagination.Item>{20}</Pagination.Item>
            <Pagination.Next/>
            <Pagination.Last/>
          </Pagination>
        </Container>
      </div>
    )
  };
}

export default DoctorList;
