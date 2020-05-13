import React from 'react';
import DoctorList from "./DoctorList";


class DoctorLongList extends React.Component {
  render() {
    const {isNotCaption, specialUrl, isSearchable, isFilterable} = this.props;

    return (
      <div className="DoctorLongList">
        <DoctorList isPaginated={true}
                    isNotCaption={isNotCaption}
                    specialUrl={specialUrl}
                    isSearchable={isSearchable || true}
                    isFilterable={isFilterable || true}/>
      </div>
    )
  };
}

export default DoctorLongList;
