import React from 'react';
import {Image} from "react-bootstrap";
import image from "./left_image.jpg";


class LeftImage extends React.Component {
  render() {
    return (
      <Image
        src={image}
        alt=""
        className="img-fluid"
      >
      </Image>
    )
  }
}

export default LeftImage;
