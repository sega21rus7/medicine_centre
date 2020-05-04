import React from 'react';
import './ViewAllLink.css';
import {Link} from "react-router-dom";


class ViewAllLink extends React.Component {
  render() {
    return (
      <div className="ViewAllButton text-left">
        <Link to={this.props.button.to} className="view-all">
            {this.props.button.text}
        </Link>
      </div>
    )
  };
}

export default ViewAllLink;
