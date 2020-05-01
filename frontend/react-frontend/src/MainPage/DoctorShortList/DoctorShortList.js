import React from 'react';
import './DoctorShortList.css';
import CommonShortList from "../CommonShortList/CommonShortList";

class DoctorShortList extends React.Component {
  constructor(props) {
    super(props);
    this.button = {
      text: 'Показать всех врачей',
      to: '/doctors'
    };
  }

  render() {
    return (
      <div className="DoctorShortList">
        <CommonShortList button={this.button}
                         title={'Наши специалисты'}
                         url='http://localhost:8000/staff/api/doctor_list/'
        />
      </div>
    )
  };
}

export default DoctorShortList;
