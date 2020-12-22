import React from "react";
import {
  GoogleMap,
  LoadScript,
  MarkerClusterer,
  Marker,
} from "@react-google-maps/api";
import "../App.css";

const containerStyle = {
  width: "100%",
  height: "100vh",
};

const center = {
  lat: 21.88242094891774,
  lng: -102.2842905972648,
};

const options = {
  imagePath:
    "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m", // so you must have m1.png, m2.png, m3.png, m4.png, m5.png and m6.png in that folder
};

const MapPage = ({ locations, onLoad, onUnmount }) => {
  return (
    <LoadScript googleMapsApiKey="AIzaSyAG5AlZFaqqNd0ao3n5zNCESsY-GKyiGpE">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={4}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        <MarkerClusterer options={options}>
          {(clusterer) =>
            locations.map((individualItem, index) => {
              const { location } = individualItem;
              const { raw } = location;
              const [lat, lng] = raw.split(",");
              const latlng = {
                lat: parseFloat(lat, 10),
                lng: parseFloat(lng, 10),
              };
              return (
                <Marker key={index} position={latlng} clusterer={clusterer} />
              );
            })
          }
        </MarkerClusterer>
      </GoogleMap>
    </LoadScript>
  );
};

export default MapPage;
