import React, { useContext } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
// https://apidocs.geoapify.com/playground/icon

// import "./Map.scss";

const GOOGLE_MAPS_API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

function Map() {
    // console.log("distance: ", distance);

    const mapStyles = {
        height: "500px",
        maxWidth: "900px",
    };

    const options = {
        draggable: true,
        zoomControl: true,
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: false,
        rotateControl: false,
        fullscreenControl: false,
    };
    const location = { lat: 53.81311967017267, lng: -1.6061135921878982 };

    return (
        <LoadScript googleMapsApiKey={GOOGLE_MAPS_API_KEY}>
            <GoogleMap center={location} mapContainerStyle={mapStyles} options={options} zoom={15}>
                <Marker position={location} />,
            </GoogleMap>
        </LoadScript>
    );
}

export default Map;
