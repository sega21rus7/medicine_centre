import React from 'react';
import {Col, Nav, Navbar, NavDropdown} from "react-bootstrap";
import axios from "axios";

class DepartmentNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      departments: null,
    }
  }

  componentDidMount() {
    axios.get('http://localhost:8000/staff/api/departments/')
      .then(response => {
        this.setState({
          departments: response.data
        });
        console.log(response.data);
      })
  }

  render() {
    const {departments} = this.state;

    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Toggle/>
        <Navbar.Collapse className="justify-content-center">
          <Nav>
            {
              departments ?
                departments.map((item, index) => (
                  <Col lg={4} key={index}>
                    <NavDropdown title={item.name} id={index}>
                      <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    </NavDropdown>
                  </Col>
                ))
                : null
            }
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default DepartmentNavbar;
