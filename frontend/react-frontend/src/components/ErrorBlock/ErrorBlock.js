import React from 'react';
import './ErrorBlock.css';


class ErrorBlock extends React.Component {
  render() {
    return (
      <div className="error-block">
        {this.props.text}
      </div>
    )
  };
}

export default ErrorBlock;
