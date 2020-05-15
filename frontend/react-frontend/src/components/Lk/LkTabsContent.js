import React from 'react';
import {Tab} from "react-bootstrap";
import ProfileForm from "./ProfileForm";
import ChangePasswordForm from "./ChangePasswordForm";
import PatientReviews from "../../containers/Reviews/PatientReviews";
import DoctorReviews from "../../containers/Reviews/DoctorReviews";
import UserSupportQuestion from "../../containers/SupportQuestions/UserSupportQuestion";
import LogoutForm from "./LogoutForm";

class LkTabsContent extends React.Component {
  render() {
    const {user} = this.props;

    return (
      <Tab.Content>

        <Tab.Pane key="1" eventKey="1">
          <ProfileForm user={user}/>
        </Tab.Pane>

        <Tab.Pane key="2" eventKey="2">
          <ChangePasswordForm/>
        </Tab.Pane>

        <Tab.Pane key="3" eventKey="3">
          {
            user.patient ?
              <PatientReviews/>
              : <DoctorReviews/>
          }
        </Tab.Pane>

        <Tab.Pane key="4" eventKey="4">
          <UserSupportQuestion/>
        </Tab.Pane>

        <Tab.Pane key="5" eventKey="5">
          <LogoutForm/>
        </Tab.Pane>

      </Tab.Content>
    )
  }
}

export default LkTabsContent;
