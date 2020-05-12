import React from 'react';
import './Content.css';
import Carousel from "../../components/CarouselComponent/CarouselComponent";
import {Container} from "react-bootstrap";
import NewsShortList from "../News/NewsShortList";
import ArticleShortList from "../Articles/ArticleShortList";
import DoctorShortList from "../Doctors/DoctorShortList";
import Feedback from "../Feedback";
import ReviewShortList from "../Reviews/ReviewShortList";
import DepartmentNavbar from "../../components/DepartmentNavbar/DepartmentNavbar";


class Content extends React.Component {
  render() {
    return (
      <div className="MainPageContent">
        <Carousel/>
        <Container>
          <DepartmentNavbar/>
          <hr/>
          <DoctorShortList/>
          <hr/>
          <NewsShortList/>
          <hr/>
          <ReviewShortList/>
          <hr/>
          <ArticleShortList/>
          <hr/>
          <Feedback/>
        </Container>
      </div>
    )
  };
}

export default Content;
