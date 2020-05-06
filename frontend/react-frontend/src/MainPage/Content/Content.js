import React from 'react';
import './Content.css';
import Carousel from "../CarouselComponent/CarouselComponent";
import {Container} from "react-bootstrap";
import NewsShortList from "../../Lists/News/NewsShortList";
import ArticleShortList from "../../Lists/Articles/ArticleShortList";
import DoctorShortList from "../../Lists/Doctors/DoctorShortList";


class Content extends React.Component {
  render() {
    return (
      <div className="MainPageContent">
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
