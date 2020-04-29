import React from 'react';
import './DoctorShortList.css';
import {Container, Row} from "react-bootstrap";
import ViewAllButton from "../ViewAllButton/ViewAllButton";
import {BrowserRouter as Router} from "react-router-dom";
import axios from 'axios';
import DoctorShortItem from "./DoctorShortItem/DoctorShortItem";

class DoctorShortList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      doctors: [],
    };
    this.button = {
      text: 'Показать всех',
      to: '/doctors'
    }
  }

  componentDidMount() {
    axios.get('http://localhost:8000/staff/api/doctor_list/')
      .then(response => {
        this.setState({
          doctors: response.data
        });
      })
  }

  render() {
    return (
      <div className="DoctorShortList">
        <Container>
          <Router>
            <h3 className="text-left text-main mt-4">Наши специалисты</h3>
            <Row>
              <Router>
                {this.state.doctors.map((item, index) => (
                    <DoctorShortItem key={index} item={item} index={index}/>
                  )
                )}
              </Router>
            </Row>
            <ViewAllButton button={this.button}/>
          </Router>
        </Container>
      </div>
    )
  };
}

export default DoctorShortList;
