import React from 'react';
import './DoctorShortItem.css';
import {Col, Image} from "react-bootstrap";
import {Link} from "react-router-dom";

class DoctorShortItem extends React.Component {
  render() {
    const {item, index} = this.props;

    return (
      <Col md={4} className="text-md-center" key={index}>
        <Link to={'doctor/' + item.slug} style={{color: 'inherit'}}>
          <Image
            src={item.user.avatar}
            alt={item.user.username}
            className="img-fluid"
            roundedCircle
          >
          </Image>
          <h4>
            {item.user.last_name}
            &nbsp;
            {item.user.first_name}
            &nbsp;
            {item.user.middle_name}
          </h4>
        </Link>
      </Col>
    )
  };
}

export default DoctorShortItem;
