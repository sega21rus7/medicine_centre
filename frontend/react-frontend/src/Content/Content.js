import React from 'react';
import './Content.css';
import Carousel from "../CarouselComponent/CarouselComponent";
import DoctorShortList from "../DoctorShortList/DoctorShortList";


class Content extends React.Component {
  render() {
    return (
      <div className="Content">
        <Carousel/>
        <hr/>
        <DoctorShortList/>
      </div>
    )
  };
}

export default Content;
