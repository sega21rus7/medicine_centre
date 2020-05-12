import React from 'react';

class DoctorProperty extends React.Component {
  render() {
    const {name, content} = this.props;

    return (
      <div className="DoctorProperty">
        <span className="font-italic font-weight-bold">{name}</span>:&nbsp;{content}
        <br/>
      </div>
    )
  }
}

export default DoctorProperty;
