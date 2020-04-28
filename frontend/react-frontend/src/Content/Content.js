import React from 'react';
import './Content.css';
import Carousel from "../Carousel/Carousel";


class Content extends React.Component {
  render() {
    return (
      <div className="Content">
        <Carousel/>
      </div>
    )
  };
}

export default Content;
