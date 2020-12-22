import React, { useState } from "react";
import "./App.css";
import PlaceDetails from "./components/PlaceDetails";
import MapPage from "./components/MapPage";

function App() {
  const [locations, setLocations] = useState([]);

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(
      new window.google.maps.LatLng(37, -102.2842905972648),
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

  /*Start placedetails */

  const handlePlaceDetailsData = ({ status, result }) => {
    console.log(status)
    console.log(result)
    if (status === "OK") {
      const {
        address_components,
        international_phone_number,
        name,
        website,
        url,
      } = result;
      const [...pos] = address_components;
      const data = {
        establecimiento: {
          raw: name,
        },
        telefono: {
          raw: international_phone_number,
        },
        website: {
          raw: website,
        },
        google_address: {
          raw: pos,
        },
        url_google: {
          raw: url,
        },
      };
      // setPlaceData(data);
      console.log(data);
    }
  };

  const placedetails = (placeID) => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url =
      "https://maps.googleapis.com/maps/api/place/details/json?place_id=" +
      placeID +
      "&fields=name,rating,international_phone_number,website,address_component,type,url&key=AIzaSyAG5AlZFaqqNd0ao3n5zNCESsY-GKyiGpE";
    fetch(proxyurl + url, requestOptions)
      .then((response) => response.json())
      .then((result) => handlePlaceDetailsData(result))
      .catch((error) => console.log("error", error));
  };

  /*END placedetails */

  /*START nearbysearch */

  const handleResults = ({ status, results }) => {
    console.log(status)
    console.log(results)
    if (status === "OK") {
      const [arreglo0] = results;
      const { place_id } = arreglo0;
      placedetails(place_id);
    }
  };

  const nearbysearch = (location, name) => {
    console.log(location)
    console.log(name)
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url =
      "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=" +
      location +
      "&radius=250&keyword=" +
      name +
      "&key=AIzaSyAG5AlZFaqqNd0ao3n5zNCESsY-GKyiGpE";

    fetch(proxyurl + url, requestOptions)
      .then((response) => response.json())
      .then((result) => handleResults(result))
      .catch((error) => console.log("error", error));
  };

  /*END nearbysearch */

  const handleMarkerClic = (markerPlace) => {
    console.log(markerPlace)
    // markerPlace.location.raw
    // markerPlace.establecimiento.raw
    nearbysearch(markerPlace.location.raw, markerPlace.establecimiento.raw);
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
            handleMarkerClic={handleMarkerClic}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
