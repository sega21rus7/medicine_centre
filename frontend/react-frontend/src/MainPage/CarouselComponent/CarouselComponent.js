import React from 'react';
import './CarouselComponent.css';
import {Button, Carousel} from "react-bootstrap";
import image1 from './images/1.jpg'
import image2 from './images/2.jpg'
import {Link} from "react-router-dom";


class CarouselComponent extends React.Component {
  constructor(props) {
    super(props);
    this.items = [
      {
        title: 'У вас всё под рукой.',
        content: 'Запись на прием, быстрый доступ к лабораторным исследованиям и их результатам,' +
          ' медицинской карте, актуальным новостям.',
        image: image1,
        button: {
          text: 'Просмотреть галерею',
          to: '/doctors',
          variant: 'outline-success'
        },
        caption: 'text-left',
      },
      {
        title: 'Наши специалисты.',
        content: 'Информация о работниках центра, фото, подробная информация ' +
          'об образовании и пройденных курсах повышения квалификации.',
        image: image2,
        button: {
          text: 'Перейти в личный кабинет',
          to: '/lk',
          variant: 'primary'
        },
        caption: 'text-right',
      }
    ]
  }

  render() {
    return (
      <div className="Carousel">
        <Carousel>
          {this.items.map((item, index) => (
            <Carousel.Item key={index}>
              <img
                className="d-block w-100"
                src={item.image}
                alt={item.title}
              />
              <Carousel.Caption className={item.caption}>
                <h1>{item.title}</h1>
                <p>{item.content}</p>
                <Link to={item.button.to}>
                  <Button variant={item.button.variant} size="md">
                    {item.button.text}
                  </Button>
                </Link>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    )
  }
}

export default CarouselComponent;


