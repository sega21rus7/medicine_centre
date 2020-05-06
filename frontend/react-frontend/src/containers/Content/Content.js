import React from 'react';
import './Content.css';
import Carousel from "../../components/CarouselComponent/CarouselComponent";
import {Container} from "react-bootstrap";
import NewsShortList from "../News/NewsShortList";
import ArticleShortList from "../Articles/ArticleShortList";
import DoctorShortList from "../Doctors/DoctorShortList";


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