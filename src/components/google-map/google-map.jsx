import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
  width: '75%',
  height: '70%',
  margin: 'auto',
  marginTop: '25px',
  border: '50px solid #EDFDEE'
};

export class MapContainer extends Component {
    render() {
        return (
            <Map
            google={this.props.google}
            zoom={10}
            style={mapStyles}
            initialCenter={{
                lat: 37.2440,
                lng: -121.8008
                }}
            />
        );
    }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyArTODySRJGFyUy2uAF27d6rHNrFp_Wmrk'
})(MapContainer);