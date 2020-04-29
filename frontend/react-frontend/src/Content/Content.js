import React from 'react';
import './Content.css';
import Carousel from "../CarouselComponent/CarouselComponent";
import DoctorShortList from "../DoctorShortList/DoctorShortList";
import {Container} from "react-bootstrap";


class Content extends React.Component {
  render() {
    return (
      <div className="Content">
        <Carousel/>
        <Container>
          <hr/>
          <DoctorShortList/>
        </Container>
      </div>
    )
  };
}

export default Content;
