import React from 'react';
import {Col, Container, Image, Row} from "react-bootstrap";

class DoctorPrizeImages extends React.Component {
  render() {
    const {doctor} = this.props;

    return (
      <Container className="DoctorPrizeImages">
        <Row>
          {
            doctor.prize_images ?
              doctor.prize_images.map((item, index) => (
                <Col lg="auto" key={index} className="mt-4">
                  <Image
                    src={item.image}
                    alt=""
                    height="400px"
                  />
                </Col>
              ))
              : null
          }
        </Row>
      </Container>
    )
  };
}

export default DoctorPrizeImages;
