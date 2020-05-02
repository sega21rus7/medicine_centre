import React from 'react';
import './Header.css';
import {Nav, Navbar} from "react-bootstrap";
import {Link, Switch} from "react-router-dom";


class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      changable_nav: {
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
    this.phone = {
      text: '8 800 111-22-33',
      to: 'tel:88001112233',
    }
  }

  componentDidMount() {
    let token = localStorage.getItem('token');
    if (token) {
      console.log(token);
      this.setState({changable_nav: {'Кабинет': '/lk'}});
    }
  }

  render() {
    const nav =
      Object.keys(this.nav).map(item => {
        return <Nav.Link
          key={item} as={Link} to={this.nav[item]}>{item}
        </Nav.Link>
      });
    const changable_nav =
      Object.keys(this.state.changable_nav).map(item => {
        return <Nav.Link
          key={item} as={Link} to={this.state.changable_nav[item]}>{item}
        </Nav.Link>
      });

    return (
      <div className="Header">
        <Navbar collapseOnSelect bg="dark" variant="dark" expand="lg" fixed="top" className="bg-gradient-secondary">
          <Navbar.Brand as={Link} to="/">{this.site_name}</Navbar.Brand>
          <Navbar.Toggle/>
          <Navbar.Collapse className="justify-content-end">
            <Switch>
              <Nav className="mr-auto">
                {changable_nav}
                {nav}
              </Nav>
            </Switch>
            <Nav pullright="true">
              <Nav.Link key={this.phone.text} href={this.phone.to}>
                {this.phone.text}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    )
  };
}

export default Header;
