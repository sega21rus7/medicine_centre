import React from 'react';
import './Carousel.css';
import {Button, Carousel} from "react-bootstrap";
import image1 from './images/1.jpg'
import image2 from './images/2.jpg'
import {BrowserRouter as Router, Link} from "react-router-dom";


class CarouselComponent extends React.Component {
  constructor(props) {
    super(props);
    this.doctors = {
      text: 'Просмотреть галерею',
      to: '/doctors'
    };
    this.lk = {
      text: 'Перейти в личный кабинет',
      to: '/lk'
    }
  }

  render() {
    return (
      <div className="Carousel">
        <Router>
          <Carousel>

            <Carousel.Item>
              <img
                className="d-block w-100"
                src={image1}
                alt=""
              />
              <Carousel.Caption className="text-left">
                <h1>У вас всё под рукой.</h1>
                <p>Запись на прием, быстрый доступ к лабораторным исследованиям и их результатам, медицинской карте,
                  актуальным новостям.</p>
                <Link to={this.lk.to}>
                  <Button variant="outline-success" size="lg">
                    {this.lk.text}
                  </Button>
                </Link>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block w-100"
                src={image2}
                alt=""
              />
              <Carousel.Caption className="text-right">
                <h1>Наши специалисты.</h1>
                <p>Информация о работниках центра, фото, подробная информация об образовании и пройденных
                  курсах повышения квалификации.</p>
                <Link to={this.doctors.to}>
                  <Button variant="primary" size="lg">
                    {this.doctors.text}
                  </Button>
                </Link>
              </Carousel.Caption>
            </Carousel.Item>

          </Carousel>
        </Router>
      </div>
    )
  };
}

export default CarouselComponent;
