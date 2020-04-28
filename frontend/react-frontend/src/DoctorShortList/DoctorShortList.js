import React from 'react';
import './DoctorShortList.css';
import {Container} from "react-bootstrap";
import ViewAllButton from "../ViewAllButton/ViewAllButton";
import {BrowserRouter as Router} from "react-router-dom";


class DoctorShortList extends React.Component {
  constructor(props) {
    super(props);
    this.button = {
      text: 'Показать всех',
      to: '/doctors'
    }
  }

  render() {
    return (
      <div className="DoctorShortList">
        <Container>
          <Router>
            <h3 className="text-left text-main mt-4">Наши специалисты</h3>
            <ViewAllButton button={this.button}/>
          </Router>
        </Container>
      </div>
    )
  };
}

export default DoctorShortList;
