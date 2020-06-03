import React from 'react';
import {Nav, Tab} from "react-bootstrap";
import {Link} from "react-router-dom";


class DoctorScheduleLayout extends React.Component {
  render() {
    return (
      <div className="DoctorScheduleLayout">
        <Tab.Container id="doctor-schedule-tabs" defaultActiveKey="my">
          <Nav variant="tabs">
            <Nav.Item key="my">
              <Nav.Link eventKey="my" as={Link} to="/lk/doctor_schedule/my">
                Предстоящие записи
              </Nav.Link>
            </Nav.Item>
            <Nav.Item key="archive">
              <Nav.Link eventKey="archive" as={Link} to="/lk/doctor_schedule/archive">
                Архив записей
              </Nav.Link>
            </Nav.Item>
          </Nav>
          {this.props.children}
        </Tab.Container>
      </div>
    )
  };
}

export default DoctorScheduleLayout;
