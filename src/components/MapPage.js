import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import "../App.css";

const containerStyle = {
  width: "100%",
  height: "100vh",
};

const center = {
  lat: 21.88242094891774,
  lng: -102.2842905972648,
};

const MapPage = () => {
  return (
    <div>
      <LoadScript googleMapsApiKey="AIzaSyAG5AlZFaqqNd0ao3n5zNCESsY-GKyiGpE">
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={4}
        ></GoogleMap>
      </LoadScript>
    </div>
  );
};

export default MapPage;
