import React from 'react';
import DoctorList from "./DoctorList";

class DoctorShortList extends React.Component {
  constructor(props) {
    super(props);
    this.button = {
      text: 'Показать всех врачей',
      to: '/doctors'
    }
  }

  render() {
    return (
      <div className="DoctorShortList">
        <DoctorList button={this.button}/>
      </div>
    )
  };
}

export default DoctorShortList;
