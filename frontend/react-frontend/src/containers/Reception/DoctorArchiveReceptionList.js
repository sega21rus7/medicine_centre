import React from 'react';
import DoctorReceptionList from "../../components/Reception/DoctorReceptionList";
import {BACKEND_URL} from "../../constants";

class DoctorArchiveReceptionList extends React.Component {
  render() {
    return (
      <DoctorReceptionList
        specialUrl={`${BACKEND_URL}/rest-api/reception/archive_receptions_by_doctor/`}/>
    )
  }
}

export default DoctorArchiveReceptionList;
