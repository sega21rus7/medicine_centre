import React from 'react';
import './Header.css';
import {Nav, Navbar} from "react-bootstrap";
import {BrowserRouter as Router, Link} from "react-router-dom";


class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nav: [],
    }
  }

  // static getDerivedStateFromProps(props, state) {
  //   return {nav: props.nav};
  // }

  render() {
    let nav = this.props.nav;
    let site_name = this.props.site_name;

    return (
      <div className="Header">
        <Router>
          <Navbar collapseOnSelect bg="dark" variant="dark" expand="lg" fixed="top">
            <Navbar.Brand as={Link} to="/">{site_name}</Navbar.Brand>
            <Navbar.Toggle/>
            <Navbar.Collapse className="justify-content-end">
              <Nav className="mr-auto">
                {Object.keys(nav).map(item => {
                  return <Nav.Link key={item} as={Link} to={nav[item]}>{item}
                  </Nav.Link>
                })}
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Router>
      </div>
    )
  };
}

export default Header;
