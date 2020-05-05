import React from 'react';
import DoctorList from "./DoctorList";


class DoctorLongList extends React.Component {
  render() {
    return (
      <div className="DoctorLongList">
        <DoctorList isPaginated={true}/>
      </div>
    )
  };
}

export default DoctorLongList;
