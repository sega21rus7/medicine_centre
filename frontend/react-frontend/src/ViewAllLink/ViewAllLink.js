import React from 'react';
import './ViewAllLink.css';
import {Button} from "react-bootstrap";
import {Link} from "react-router-dom";


class ViewAllLink extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="ViewAllButton text-left">
        <Link to={this.props.button.to} style={{color: 'inherit'}}>
            {this.props.button.text}
        </Link>
      </div>
    )
  };
}

export default ViewAllLink;
