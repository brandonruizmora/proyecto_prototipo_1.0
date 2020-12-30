import React, { useState } from "react";
import "./App.css";
import SearchBox from "./components/SearchBox";
import PlaceDetails from "./components/PlaceDetails";
import MapPage from "./components/MapPage";

function App() {
  const [locations, setLocations] = useState([]);

  const [map, setMap] = React.useState(null);

  const [googleData, setGoogleData] = useState({});
  const [elasticData, setElasticData] = useState({});

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

  const handleSearchItem = (item) => {
    elasticSearch(item);
  };

  /*Start placedetails */

  const handlePlaceDetailsData = ({ status, result }) => {
    console.log('placedetails status',status);
    if (status === "OK") {
      const {
        name,
        url,
        formatted_address,
        website,
        formatted_phone_number,
      } = result;
      const data = {
        establecimiento: {
          raw: name,
        },
        telefono: {
          raw: formatted_phone_number,
        },
        website: {
          raw: website,
        },
        google_address: {
          raw: formatted_address,
        },
        url_google: {
          raw: url,
        },
      };
      setGoogleData(data);
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
      "&fields=name,url,formatted_address,website,formatted_phone_number,rating,international_phone_number,type&key=AIzaSyAG5AlZFaqqNd0ao3n5zNCESsY-GKyiGpE";
    fetch(proxyurl + url, requestOptions)
      .then((response) => response.json())
      .then((result) => handlePlaceDetailsData(result))
      .catch((error) => console.log("error", error));
  };

  /*END placedetails */

  /*START nearbysearch */

  const handleResults = ({ status, results }) => {
    console.log('nearbysearch status',status);
    if (status === "OK") {
      const [arreglo0] = results;
      const { place_id } = arreglo0;
      placedetails(place_id);
    }
  };

  const nearbysearch = (location, name) => {
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
    setElasticData(markerPlace);
    setGoogleData(markerPlace);
    const column_details = document.getElementById('details-column');
    const column_map = document.getElementById('map-column');
    column_details.className="order-1 order-sm-0 col-sm-6 col-md-5 col-lg-4 mx-0 px-0 detailsclass";
    column_map.className="order-0 order-sm-1 col-sm-6 col-md-7 col-lg-8 mx-0 px-0";
    nearbysearch(markerPlace.location.raw, markerPlace.establecimiento.raw);
  };

  return (
    <div className="container-fluid">
      <div className="border rounded-end position-absolute top-0 start-0 bg-white over col-10 col-sm-6 col-md-5 col-lg-4">
        <SearchBox 
          handleSearchItem={handleSearchItem} 
        />
      </div>
      <div className="row full-height">
        <div className="d-none" id="details-column">
          <PlaceDetails googleData={ googleData } elasticData={ elasticData } />
        </div>
        <div className="col-12 px-0" id="map-column">
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
