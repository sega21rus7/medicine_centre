import React from 'react';
import Feedback from "./Feedback";
import {Container} from "react-bootstrap";
import ContactsMap from '../components/ContactsMap';
import * as constants from '../constants';

class Contacts extends React.Component {
  render() {
    return (
      <Container className="Contacts mt-4">
        <ContactsMap
          googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${constants.GOOGLE_API_KEY}`}
          loadingElement={<div style={{height: `100%`}}/>}
          containerElement={<div style={{height: `400px`}}/>}
          mapElement={<div style={{height: `100%`}}/>}/>
        <p>Адрес: <span className="contact-item">{constants.COMPANY_ADDRESS}</span></p>
        <p>Телефон: <span className="contact-item">{constants.COMPANY_PHONE}</span></p>
        <p>Email: <span className="contact-item">{constants.COMPANY_EMAIL}</span></p>
        <Feedback/>
      </Container>
    )
  };
}

export default Contacts;
