import React from 'react';
import DoctorReceptionList from "../../components/Reception/DoctorReceptionList";

class DoctorArchiveReceptionList extends React.Component {
  render() {
    return (
      <DoctorReceptionList
        specialUrl={'http://localhost:8000/reception/api/archive_receptions_by_doctor/'}/>
    )
  }
}

export default DoctorArchiveReceptionList;
