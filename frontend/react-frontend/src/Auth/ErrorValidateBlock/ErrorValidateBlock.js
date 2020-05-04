import React from 'react';
import './ErrorValidateBlock.css';


class Content extends React.Component {
  render() {
    return (
      <div className="error-block">
        {this.props.text}
      </div>
    )
  };
}

export default Content;
