import React from 'react';
import './ViewAllList.css';
import {Link} from "react-router-dom";


class ViewAllList extends React.Component {
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

export default ViewAllList;
