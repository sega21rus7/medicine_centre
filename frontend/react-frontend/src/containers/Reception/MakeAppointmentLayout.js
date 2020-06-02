import React from 'react';
import {Nav, Tab} from "react-bootstrap";
import {connect} from "react-redux";
import {Link} from "react-router-dom";


class MakeAppointmentLayout extends React.Component {
  render() {
    const {tabActiveValue} = this.props;

    return (
      <div className="MakeAppointmentLayout">
        <Tab.Container id="make-appointment-tabs" activeKey={tabActiveValue}>
          <Nav variant="tabs">
            <Nav.Item key="my">
              <Nav.Link eventKey="my" as={Link} to="/lk/make_appointment/my">
                Мои записи
              </Nav.Link>
            </Nav.Item>
            <Nav.Item key="free">
              <Nav.Link eventKey="free" as={Link} to="/lk/make_appointment/free">
                Свободные записи
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
    tabActiveValue: state.makeAppointment.tabActiveValue,
  }
};

export default connect(mapStateToProps, null)(MakeAppointmentLayout);
