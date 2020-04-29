import React from 'react';
import './DoctorShortList.css';
import {Col, Container, Image, Row} from "react-bootstrap";
import ViewAllButton from "../ViewAllButton/ViewAllButton";
import {BrowserRouter as Router, Link} from "react-router-dom";
import axios from 'axios';

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
        console.log(response.data)
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
                    <Col md="auto" key={index}>
                      <Link to="/" style={{ color: 'inherit' }}>
                        <Image
                          src={item.user.avatar}
                          alt={item.user.username}
                          width="300px"
                          height="300px"
                          roundedCircle
                        >
                        </Image>
                        <h4 className="text-md-center">
                          {item.user.last_name}
                          &nbsp;
                          {item.user.first_name}
                          &nbsp;
                          {item.user.middle_name}
                        </h4>
                      </Link>
                    </Col>
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
