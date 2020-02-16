import React from "react";
import styled from "styled-components";
import { Map, GoogleApiWrapper, Marker, InfoWindow } from "google-maps-react";

const mapStyles = {
  width: "100%",
  height: "100%"
};
const MapContainer = styled.div`
  width: 300px;
  height: 300px;
  position: relative;
  @media screen and (min-width: 768px) {
    width: 600px;
    margin: 0 auto;
  }
`;

export class GoogleMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {}
    };
  }
  onMarkerClick = (props, marker, e) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  };

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  render() {
    return (
      <MapContainer>
        <Map
          google={this.props.google}
          zoom={14}
          style={mapStyles}
          initialCenter={{
            lat: 59.22337,
            lng: 18.138455
          }}
        >
          <Marker
            position={{ lat: 59.22337, lng: 18.138455 }}
            onClick={this.onMarkerClick}
            name={"Stockholms Metallsliperi AB"}
          />
          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
            onClose={this.onClose}
          >
            <div>
              <h4>{this.state.selectedPlace.name}</h4>
            </div>
          </InfoWindow>
        </Map>
      </MapContainer>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyCq-kZbqG2Ie-3uJIyYByeVJ5gYKcfpm-o"
})(GoogleMap);
