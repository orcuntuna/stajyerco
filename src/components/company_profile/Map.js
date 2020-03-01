import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const Mark = ({ text }) => (
    <img src="/img/pin.svg" width={32} height={32} alt="pin" />
);

class SimpleMap extends Component {
    render() {
        return (
            <div className="google-map">
                <GoogleMapReact
                    bootstrapURLKeys={{ key: process.env.googleMapApiKey }}
                    defaultCenter={this.props.location}
                    defaultZoom={this.props.zoom}
                >
                    <Mark
                        lat={this.props.location.lat}
                        lng={this.props.location.lng}
                    />
                </GoogleMapReact>
            </div>
        );
    }
}

export default SimpleMap;
