import React from 'react';
import './Header.css';
import {Nav, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";


class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      login_nav: {
        'Войти': '/sign_in',
      }
    };
    this.nav = {
      'Новости': '/news',
      'Статьи': '/articles',
      'Контакты': '/contacts',
      'О нас': '/about_us',
    };
    this.site_name = 'Медцентр';
    this.phone_nav = {
      text: '8 800 111-22-33',
      to: 'tel:88001112233',
    };
    this.logout_nav = {
      text: 'Выйти',
      to: '/sign_out',
    };
  }

  componentDidMount() {
    let token = localStorage.getItem('token');
    if (token) {
      console.log(token);
      this.setState({login_nav: {'Кабинет': '/lk'}});
    }
  }

  render() {
    const nav =
      Object.keys(this.nav).map(item => {
        return <Nav.Link
          key={item} as={Link} to={this.nav[item]}>{item}
        </Nav.Link>
      });
    const login_nav =
      Object.keys(this.state.login_nav).map(item => {
        return <Nav.Link
          key={item} as={Link} to={this.state.login_nav[item]}>{item}
        </Nav.Link>
      });

    const phone_nav =
      <Nav.Link key={this.phone_nav.text} href={this.phone_nav.to}>
        {this.phone_nav.text}
      </Nav.Link>;

    const logout_nav =
      <Nav.Link key={this.logout_nav.text} as={Link} to={this.logout_nav.to}>
        {this.logout_nav.text}
      </Nav.Link>;

    return (
      <div className="Header">
        <Navbar collapseOnSelect bg="dark" variant="dark" expand="lg" fixed="top" className="bg-gradient-secondary">
          <Navbar.Brand as={Link} to="/">{this.site_name}</Navbar.Brand>
          <Navbar.Toggle/>
          <Navbar.Collapse className="justify-content-end">
            <Nav className="mr-auto">
              {login_nav}
              {nav}
            </Nav>
            <Nav pullright="true">
              {logout_nav}
              {phone_nav}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    )
  };
}

export default Header;
