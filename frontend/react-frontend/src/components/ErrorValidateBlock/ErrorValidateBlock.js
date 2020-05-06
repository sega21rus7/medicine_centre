import React from 'react';
import './ErrorValidateBlock.css';


class ErrorValidateBlock extends React.Component {
  render() {
    return (
      <div className="error-block">
        {this.props.text}
      </div>
    )
  };
}

export default ErrorValidateBlock;
