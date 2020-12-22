import React, { useState } from "react";
import "./App.css";
import PlaceDetails from "./components/PlaceDetails";
import MapPage from "./components/MapPage";

function App() {
  const [locations, setLocations] = useState([]);

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(
      new window.google.maps.LatLng(37,-102.2842905972648),
       new window.google.maps.LatLng(5, -102.2842905972648)
    );
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  const handleResponseElastic = ({ results }) => {
    console.log(results);
    setLocations(results);
    map.setZoom(4);
    const center = {
      lat: 21.88242094891774,
      lng: -102.2842905972648,
    };
    map.setCenter(center);
  };

  const elasticSearch = (item) => {
    const myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer search-r1e486xkf1c6h81itsnerjb3");
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({ query: item, page: { size: 100 } });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(
      "https://bb3c0f4fe4574eb892a78872d95fb03a.ent-search.us-east-1.aws.cloud.es.io/api/as/v1/engines/v-search/search",
      requestOptions
    )
      .then((response) => response.json())
      .then((response) => handleResponseElastic(response))
      .catch((error) => console.log("error", error));
  };

  const handleSearch = (item) => {
    console.log(item);
    elasticSearch(item);
  };

  return (
    <div className="container-fluid">
      <div className="row full-height">
        <div className="order-1 order-sm-0 col-sm-6 col-md-5 col-lg-4 mx-0 px-0">
          <PlaceDetails handleSearch={handleSearch} />
        </div>
        <div className="order-0 order-sm-1 col-sm-6 col-md-7 col-lg-8 mx-0 px-0">
          <MapPage
            locations={locations}
            onLoad={onLoad}
            onUnmount={onUnmount}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
