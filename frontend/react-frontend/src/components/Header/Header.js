import React from 'react';
import './Header.css';
import {Nav, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";
import {withRouter} from "react-router";
import {connect} from "react-redux";
import * as actions from '../../store/actions/auth';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.custom_nav = {
      'Новости': '/news',
      'Статьи': '/articles',
      'Контакты': '/contacts',
      'О нас': '/about_us',
    };
  }

  handleLogout = () => {
    this.props.logout();
    this.props.history.push('/');
  };

  render() {
    const {isAuthenticated} = this.props;
    const custom_nav =
      Object.keys(this.custom_nav).map(item => {
        return <Nav.Link
          key={item} as={Link} to={this.custom_nav[item]}>{item}
        </Nav.Link>
      });

    return (
      <div className="Header">
        <Navbar collapseOnSelect bg="dark" variant="dark" expand="lg" fixed="top" className="bg-gradient-secondary">
          <Navbar.Brand as={Link} to="/">Медцентр</Navbar.Brand>
          <Navbar.Toggle/>
          <Navbar.Collapse className="justify-content-end">
            <Nav className="mr-auto">
              {
                isAuthenticated
                  ?
                  <Nav.Link as={Link} to="/lk">
                    Кабинет
                  </Nav.Link>
                  :
                  <Nav.Link as={Link} to="/sign_in">
                    Войти
                  </Nav.Link>
              }
              {custom_nav}
            </Nav>
            <Nav pullright="true">
              {
                isAuthenticated
                  ?
                  <Nav.Link onClick={this.handleLogout}>
                    Выйти
                  </Nav.Link>
                  :
                  ''
              }
              <Nav.Link href="tel:88001112233">
                8 800 111-22-33
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    )
  };
}

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(actions.logout)
  }
};

export default withRouter(connect(null, mapDispatchToProps)(Header));
