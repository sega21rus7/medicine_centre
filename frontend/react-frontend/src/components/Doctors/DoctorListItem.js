import React from 'react';
import {Col, Image} from "react-bootstrap";
import {Link} from "react-router-dom";
import avatar from '../../images/custom_avatar.png'

class DoctorListItem extends React.Component {
  render() {
    const {item, index} = this.props;

    return (
      <Col md={4} className="text-center" key={index}>
        <Link to={'doctor/' + item.slug} style={{color: 'inherit'}}>
          <Image
            src={item.user.avatar ? item.user.avatar : avatar}
            alt={item.user.username}
            className="img-fluid"
            roundedCircle
          >
          </Image>
          <h4>
            {item.user.last_name}
            &nbsp;
            {item.user.first_name}
            <br/>
            {item.user.middle_name}
          </h4>
        </Link>
      </Col>
    )
  };
}

export default DoctorListItem;
