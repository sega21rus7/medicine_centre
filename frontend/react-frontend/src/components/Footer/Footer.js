import React from 'react';
import './Footer.css';
import {Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import * as constants from '../../constants';

class Footer extends React.Component {
  render() {
    return (
      <div className="footer bg-gradient-secondary">
        <Container>
          <Row className="footer-widgets">
            <Col lg={4}>
              <div className="foot-about">
                <p>График работы центра:
                  <br/>
                  Пн-Вс с 8.00 до 20.00
                </p>
                <p className="copyright">
                  ООО «Медцентр»
                  <br/>
                  &copy;2020 Все права защищены
                </p>
              </div>
            </Col>

            <Col lg={4} className="d-none d-lg-block">
              <div className="foot-contact">
                <h2>Связаться с нами</h2>

                <ul className="p-0 m-0">
                  <li><span>Адрес:</span>{constants.COMPANY_ADDRESS}</li>
                  <li><span>Телефон:</span>{constants.COMPANY_PHONE}</li>
                  <li><span>Email:</span>{constants.COMPANY_EMAIL}</li>
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
                  <li><Link to="/news">Новости</Link></li>
                  <li><Link to="/articles">Статьи</Link></li>
                  <li><Link to="/doctors">Врачи</Link></li>
                  <li><Link to="/reviews">Отзывы</Link></li>
                  <li><Link to="/contacts">Контакты</Link></li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    )
  };
}

export default Footer;
