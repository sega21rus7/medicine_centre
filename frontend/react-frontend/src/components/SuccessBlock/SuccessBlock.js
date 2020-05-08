import React from 'react';
import './SuccessBlock.css';


class SuccessBlock extends React.Component {
  render() {
    return (
      <div className="success-block">
        {this.props.text}
      </div>
    )
  };
}

export default SuccessBlock;
