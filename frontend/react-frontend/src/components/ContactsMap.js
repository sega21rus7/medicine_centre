import React from 'react';
import {GoogleMap, Marker, withGoogleMap, withScriptjs} from "react-google-maps";

class ContactsMap extends React.Component {
  render() {
    return (
      <GoogleMap
        defaultZoom={16}
        defaultCenter={{lat: 56.140775, lng: 47.249378}}
      >
        {<Marker position={{lat: 56.140775, lng: 47.249378}}/>}
      </GoogleMap>
    )
  };
}

const WrappedMap = withScriptjs(withGoogleMap(ContactsMap));

export default WrappedMap;
