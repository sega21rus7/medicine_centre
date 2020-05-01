import React from 'react';
import './DoctorShortList.css';
import {Container, Row} from "react-bootstrap";
import ViewAllLink from "../ViewAllLink/ViewAllLink";
import axios from 'axios';
import DoctorShortItem from "./DoctorShortItem/DoctorShortItem";
import ItemsShortList from "../ItemsShortList/ItemsShortList";

class DoctorShortList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      doctors: [],
    };
    this.button = {
      text: 'Показать всех врачей',
      to: '/doctors'
    }
  }

  componentDidMount() {
    axios.get('http://localhost:8000/staff/api/doctor_list/')
      .then(response => {
        this.setState({
          doctors: response.data.results
        });
        console.log(response.data);
      })
  }

  render() {
    const row = this.state.doctors.map((item, index) => (
        <DoctorShortItem key={index} item={item} index={index}/>
      )
    );
    return (
      <div className="DoctorShortList">
        <ItemsShortList button={this.button}
                        title={'Наши специалисты'}
                        row={row}/>
      </div>
    )
  };
}

export default DoctorShortList;
