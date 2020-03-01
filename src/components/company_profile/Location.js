import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import {Icon} from "antd";

const Mark = ({ text }) => (
        <Icon type="pushpin" theme="filled" style={{
            color: "#333",
            fontSize: 15,
            backgroundColor: "#fff",
            padding: 10,
            borderRadius: 100,
            opacity: 0.8}}/>
);

class SimpleMap extends Component {
    render() {
        return (
            // Important! Always set the container height explicitly
            <div className="google-map">
                <GoogleMapReact
                    bootstrapURLKeys={{ key: "AIzaSyBk3yi4GTC1qde_PFizCCj4b91BeMG0PNU" }}
                    defaultCenter={this.props.location}
                    defaultZoom={this.props.zoom}
                >
                    <Mark
                        lat={this.props.location.lat}
                        lng={this.props.location.lng}
                        text="My Marker"
                    />
                </GoogleMapReact>
            </div>
        );
    }
}

export default SimpleMap;
