import React from 'react';
import './Content.css';
import Carousel from "../CarouselComponent/CarouselComponent";
import DoctorShortList from "../DoctorShortList/DoctorShortList";
import {Container} from "react-bootstrap";
import NewsShortList from "../NewsShortList/NewsShortList";
import ArticleShortList from "../ArticleShortList/ArticleShortList";


class Content extends React.Component {
  render() {
    return (
      <div className="Content">
        <Carousel/>
        <Container>
          <hr/>
          <DoctorShortList/>
          <hr/>
          <NewsShortList/>
          <hr/>
          <ArticleShortList/>
          <hr/>
        </Container>
      </div>
    )
  };
}

export default Content;
