import React from 'react';
import './Footer.css';
import {Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";


class Footer extends React.Component {
  render() {
    return (
      <Container fluid className="footer bg-gradient-secondary">
        <Row className="footer-widgets">
          <Container>
            <Row>
              <Col lg={4}>
                <div className="foot-about">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris
                    scelerisque, at rutrum nulla dictum. Ut ac ligula sapien.</p>
                  <p className="copyright">
                    БУ «Медцентр» Минздрава Чувашии
                    <br/>
                    &copy;2020 Все права защищены
                  </p>
                </div>
              </Col>

              <Col lg={4} className="d-none d-lg-block">
                <div className="foot-contact">
                  <h2>Связаться с нами</h2>

                  <ul className="p-0 m-0">
                    <li><span>Адрес:</span>г. Чебоксары, ул. Пока не придумал, 3</li>
                    <li><span>Телефон:</span>8 800 111-22-33</li>
                    <li><span>Email:</span>chuvash_med_centre@gmail.com</li>
                  </ul>
                </div>
              </Col>

              <Col lg={4} className="d-none d-lg-block">
                <div className="foot-links">
                  <h2>Полезные ссылки</h2>
                  <ul className="p-0 m-0">
                    <li><Link to="/">Главная</Link></li>
                    <li><Link to="/lk">Кабинет</Link></li>
                    <li><Link to="/about_us">О нас</Link></li>
                    <li><Link to="/departments">Отделения</Link></li>
                    <li><Link to="/contacts">Контакты</Link></li>
                    <li><Link to="/faq">FAQ</Link></li>
                  </ul>
                </div>
              </Col>
            </Row>
          </Container>
        </Row>
      </Container>
    )
  };
}

export default Footer;
