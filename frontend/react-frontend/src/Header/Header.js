import React from 'react';
import './Header.css';

import {Button} from "react-bootstrap";

class Header extends React.Component {
  render() {
    return (
      <div className="Header">
        <Button variant="primary">Primary</Button>
      </div>
    )
  };
}

export default Header;
