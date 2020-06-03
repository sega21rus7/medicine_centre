import React from 'react';

class LineProperty extends React.Component {
  render() {
    const {name, content} = this.props;

    return (
      <div className="LineProperty">
        <span className="font-italic font-weight-bold">{name}</span>:&nbsp;{content}
        <br/>
      </div>
    )
  }
}

export default LineProperty;
