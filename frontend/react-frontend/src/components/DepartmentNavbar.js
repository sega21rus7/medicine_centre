import React from 'react';
import {Col, Nav, Navbar, NavDropdown} from "react-bootstrap";
import axios from "axios";
import {Link} from "react-router-dom";

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
                departments.map((department, departmentIndex) => (
                  <Col lg={4} key={departmentIndex}>
                    <NavDropdown title={department.name} id={departmentIndex}>
                      {department.posts.map((post, postIndex) => (
                        <NavDropdown.Item key={postIndex} as={Link} to={'doctor_post/' + post.pk}>
                          {post.name}
                        </NavDropdown.Item>
                      ))}
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
