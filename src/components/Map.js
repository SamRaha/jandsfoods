import React, { useState, useEffect, useContext } from "react";
import { GoogleMap, LoadScript, Marker, Label, MarkerWithLabel } from "@react-google-maps/api";
import { useMediaQuery } from "react-responsive";

const GOOGLE_MAPS_API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

function Map() {
    const [mapWidth, setMapWidth] = useState(undefined);
    // console.log("distance: ", distance);
    const isMobile = useMediaQuery({ query: "(max-width: 1076px)" });

    const mapStyles = {
        height: "500px",
        width: mapWidth,
        maxWidth: "900px",
    };

    function useWindowSize() {
        // Initialize state with undefined width/height so server and client renders match
        useEffect(() => {
            // Handler to call on window resize
            function handleResize() {
                setMapWidth(window.innerWidth - 70);
            }
            // Add event listener
            window.addEventListener("resize", handleResize);
            // Call handler right away so state gets updated with initial window size
            handleResize();
            // Remove event listener on cleanup
            return () => window.removeEventListener("resize", handleResize);
        }, []); // Empty array ensures that effect is only run on mount
    }
    useWindowSize();

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
                <Marker position={location} label="J&S FOODS" />
            </GoogleMap>
        </LoadScript>
    );
}

export default Map;
