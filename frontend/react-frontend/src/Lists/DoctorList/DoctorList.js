import React from 'react';
import './DoctorList.css';
import CommonList from "../CommonList/CommonList";


class DoctorList extends React.Component {
  render() {
    return (
      <div className="DoctorList">
        <CommonList title={'Наши специалисты'}
                    url='http://localhost:8000/staff/api/doctor_list/'
                    kind={'doctors'}
        />
      </div>
    )
  };
}

export default DoctorList;
