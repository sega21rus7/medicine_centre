import React from 'react';
import './ViewAllButton.css';
import {Button} from "react-bootstrap";
import {Link} from "react-router-dom";


class ViewAllButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="ViewAllButton text-right">
        <Link to={this.props.button.to}>
          <Button variant="outline-secondary">
            {this.props.button.text}
          </Button>
        </Link>
      </div>
    )
  };
}

export default ViewAllButton;
