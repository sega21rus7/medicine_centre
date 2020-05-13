import React from 'react';
import Feedback from "./Feedback";
import {Container} from "react-bootstrap";
import ContactsMap from '../components/ContactsMap';

class Contacts extends React.Component {
  render() {
    return (
      <Container className="Contacts mt-4">
        <ContactsMap
          googleMapURL=
            "https://maps.googleapis.com/maps/api/js?key=AIzaSyBRrUrAMvwhI_oyn3tGfgQjcCATSzXHIaY"
          loadingElement={<div style={{height: `100%`}}/>}
          containerElement={<div style={{height: `400px`}}/>}
          mapElement={<div style={{height: `100%`}}/>}/>
        <p>Адрес: <span className="contact-item">г. Чебоксары, ул. Карла Маркса, 36</span></p>
        <p>Телефон: <span className="contact-item">8 800 111-22-33</span></p>
        <p>Email: <span className="contact-item">chuvash_med_centre@gmail.com</span></p>
        <Feedback/>
      </Container>
    )
  };
}

export default Contacts;
