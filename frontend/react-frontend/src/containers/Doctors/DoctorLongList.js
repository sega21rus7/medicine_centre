import React from 'react';
import DoctorList from "./DoctorList";


class DoctorLongList extends React.Component {
  render() {
    const {isNotCaption, specialUrl} = this.props;

    return (
      <div className="DoctorLongList">
        <DoctorList isPaginated={true}
                    isNotCaption={isNotCaption}
                    specialUrl={specialUrl}
                    isSearchable={true}/>
      </div>
    )
  };
}

export default DoctorLongList;
