import React from 'react';
import DoctorList from "./DoctorList";

class DoctorShortList extends React.Component {
  render() {
    return (
      <div className="DoctorShortList">
        <DoctorList isPaginated={false}
                    isSearchable={false}/>
      </div>
    )
  };
}

export default DoctorShortList;
