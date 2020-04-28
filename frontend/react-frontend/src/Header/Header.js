import React from 'react';
import './Header.css';
import {Nav, Navbar} from "react-bootstrap";
import {BrowserRouter as Router, Link} from "react-router-dom";


class Header extends React.Component {
  constructor(props) {
    super(props);
    this.nav = {
      'Кабинет': '/lk',
      'Новости': '/news',
      'Статьи': '/articles',
      'Контакты': '/contacts',
      'О нас': '/about_us',
    };
    this.site_name = 'Медцентр';
    this.phone = {
      text: '8 800 111-22-33',
      to: 'tel:88001112233',
    }
  }

  // static getDerivedStateFromProps(props, state) {
  //   return {nav: props.nav};
  // }

  render() {
    return (
      <div className="Header">
        <Router>
          <Navbar collapseOnSelect bg="dark" variant="dark" expand="lg" fixed="top">
            <Navbar.Brand as={Link} to="/">{this.site_name}</Navbar.Brand>
            <Navbar.Toggle/>
            <Navbar.Collapse className="justify-content-end">
              <Nav className="mr-auto">
                {Object.keys(this.nav).map(item => {
                  return <Nav.Link
                    key={item} as={Link} to={this.nav[item]}>{item}
                  </Nav.Link>
                })}
              </Nav>
              <Nav pullright="true">
                <Nav.Link key={this.phone.text} href={this.phone.to}>
                  {this.phone.text}
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Router>
      </div>
    )
  };
}

export default Header;
