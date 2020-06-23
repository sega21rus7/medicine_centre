import React from 'react';
import {Nav, Tab} from "react-bootstrap";
import {Link} from "react-router-dom";
import {connect} from "react-redux";


class DoctorScheduleLayout extends React.Component {
  render() {
    const {tabActiveValue} = this.props;

    return (
      <div className="DoctorScheduleLayout">
        <Tab.Container id="doctor-schedule-tabs" activeKey={tabActiveValue}>
          <Nav variant="tabs">
            <Nav.Item key="my">
              <Nav.Link eventKey="my" as={Link} to="/lk/doctor_schedule/my">
                Предстоящие приемы
              </Nav.Link>
            </Nav.Item>
            <Nav.Item key="add">
              <Nav.Link eventKey="add" as={Link} to="/lk/doctor_schedule/add">
                Составить расписание
              </Nav.Link>
            </Nav.Item>
            <Nav.Item key="archive">
              <Nav.Link eventKey="archive" as={Link} to="/lk/doctor_schedule/archive">
                Архив приемов
              </Nav.Link>
            </Nav.Item>
          </Nav>
          {this.props.children}
        </Tab.Container>
      </div>
    )
  };
}

const mapStateToProps = (state) => {
  return {
    tabActiveValue: state.doctorSchedule.tabActiveValue,
  }
};

export default connect(mapStateToProps, null)(DoctorScheduleLayout);
