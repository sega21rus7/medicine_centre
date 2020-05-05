import React from 'react';
import './Content.css';
import Carousel from "../CarouselComponent/CarouselComponent";
import DoctorShortList from "../../Lists/DoctorShortList/DoctorShortList";
import {Container} from "react-bootstrap";
import NewsShortList from "../../Lists/News/NewsShortList";
import ArticleShortList from "../../Lists/ArticleShortList/ArticleShortList";


class Content extends React.Component {
  render() {
    return (
      <div className="Content">
        <Carousel/>
        <Container>
          {/*<hr/>*/}
          {/*<DoctorShortList/>*/}
          {/*<hr/>*/}
          <NewsShortList/>
          <hr/>
          {/*<ArticleShortList/>*/}
          {/*<hr/>*/}
        </Container>
      </div>
    )
  };
}

export default Content;
