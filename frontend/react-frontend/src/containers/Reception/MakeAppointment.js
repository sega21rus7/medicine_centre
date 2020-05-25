import React from 'react';
import {Container, Tab, Tabs} from "react-bootstrap";
import ReceptionList from "../../components/Reception/ReceptionList";

class MakeAppointment extends React.Component {
  render() {
    return (
      <Container className="MakeAppointment">
        <Tabs defaultActiveKey="my" id="tab-receptions">
          <Tab eventKey="my" title="Мои записи">
            <ReceptionList/>
          </Tab>
          <Tab eventKey="free" title="Свободные записи">
            <ReceptionList
              specialUrl={'http://localhost:8000/reception/api/free_receptions/'}/>
          </Tab>
        </Tabs>
      </Container>
    )
  }
}

export default MakeAppointment;
