import React from "react";
import img from "../nyc-streets.jpg";

let searchItem = '';

const handleChange = ( event ) => {
  console.log(event.target.value)
  searchItem = event.target.value;
};

const PlaceDetails = ({ handleSearch }) => {
  return (
    <div className="details-page">
      <div className="container-fluid ps-3 pe-1">
          <div className="my-2 d-flex">
            <input
              type="text"
              className="form-control border-0"
              id="inputSearch"
              aria-describedby="inputSearch"
              onChange={ handleChange }
            />
            <button className="btn btn-outline-primary border-0"
            onClick={ () => handleSearch(searchItem) }
            >
            <i className="fas fa-search-location"></i>
            </button>
          </div>
      </div>

      <hr className="mt-2" />

      <img src={img} className="img-fluid" alt="streetview" />
      <div className="container">
        <div className="text-center">
          <h1 className="mt-2"> nombre </h1>
        </div>
      </div>
      <hr />

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-2 p-1 text-center">
            <button className="btn btn-outline-primary rounded-circle circle">
              <div className="font-xs">
                <i className="fas fa-directions"></i>
              </div>
            </button>
          </div>

          <div className="col-2 p-1 text-center">
            <button className="btn btn-outline-primary rounded-circle circle">
              <div className="font-xs">
                <i className="far fa-bookmark"></i>
              </div>
            </button>
          </div>

          <div className="col-2 p-1 text-center">
            <button className="btn btn-outline-primary rounded-circle circle">
              <div className="font-xs">
                <i className="fas fa-map-marked-alt"></i>
              </div>
            </button>
          </div>

          <div className="col-2 p-1 text-center">
            <button className="btn btn-outline-primary rounded-circle circle">
              <div className="font-xs">
                <i className="fas fa-mobile-alt"></i>
              </div>
            </button>
          </div>

          <div className="col-2 p-1 text-center">
            <button className="btn btn-outline-primary rounded-circle circle">
              <div className="font-xs">
                <i className="fas fa-share-square"></i>
              </div>
            </button>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-2 p-1">
            <p className="text-center m-0">Cómo llegar</p>
          </div>

          <div className="col-2 p-1">
            <p className="text-center m-0">Marcar</p>
          </div>

          <div className="col-2 p-1">
            <p className="text-center m-0">Abrir en maps</p>
          </div>

          <div className="col-2 p-1">
            <p className="text-center m-0">Enviar a tu teléfono</p>
          </div>

          <div className="col-2 p-1">
            <p className="text-center m-0">Compartir</p>
          </div>
        </div>
      </div>

      <hr />
      <ul className="list-group rounded-0">
        <li className="list-group-item list-group-item-action border-0">
          <div className="row">
            <div className="col-1 text-primary">
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <div className="col-11">
              <span>Dirección</span>
            </div>
          </div>
        </li>

        <li className="list-group-item list-group-item-action border-0">
          <div className="row">
            <div className="col-1 text-primary">
              <i className="fas fa-globe"></i>
            </div>
            <div className="col-11">
              <span>Página</span>
            </div>
          </div>
        </li>

        <li
          className="list-group-item list-group-item-action border-0"
          data-bs-toggle="collapse"
          href="#collapseExample"
          role="button"
          aria-expanded="false"
          aria-controls="collapseExample"
        >
          <div className="row">
            <div className="col-1 text-primary">
              <i className="fas fa-phone-alt"></i>
            </div>
            <div className="col-9">
              <span>Teléfono</span>
            </div>
            <div className="col-1">
              <span className="badge bg-primary rounded-pill">6</span>
            </div>
            <div className="col-12"></div>
          </div>
        </li>

        <div className="collapse" id="collapseExample">
          <ul className="list-group">
            <li className="list-group-item border-start-0 border-end-0 rounded-0">
              +449 444 4444 Zets, Ekrusel.
            </li>
            <li className="list-group-item border-start-0 border-end-0">
              +555 555 5555 Anter, Gil.
            </li>
            <li className="list-group-item border-start-0 border-end-0">
              +555 555 5555 Aboel, Vala.
            </li>
            <li className="list-group-item border-start-0 border-end-0">
              +555 555 5555 Mond, Ren.
            </li>
            <li className="list-group-item border-start-0 border-end-0">
              +555 555 5555 Tonts, Esten.
            </li>
            <li className="list-group-item border-start-0 border-end-0 rounded-0">
              +555 555 5555 Ousem, Ract.
            </li>
          </ul>
        </div>

        <li className="list-group-item list-group-item-action border-0">
          <div className="row">
            <div className="col-1 text-primary">
              <i className="fas fa-clock"></i>
            </div>
            <div className="col-11">
              <span>Horarios</span>
            </div>
          </div>
        </li>

        <li className="list-group-item list-group-item-action border-0">
          <div className="row">
            <div className="col-1 text-primary">
              <i className="far fa-save"></i>
            </div>
            <div className="col-11">
              <span>Guardar</span>
            </div>
          </div>
        </li>
      </ul>
      <hr />

      <div className="container">
        <p className="fs-6">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure quos
          unde ratione voluptatum odit quo quaerat, porro cumque ut nihil error,
          laborum eum itaque, eos quis numquam architecto tempora. Odit!
        </p>
        <p className="fs-6">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure quos
          unde ratione voluptatum odit quo quaerat, porro cumque ut nihil error,
          laborum eum itaque, eos quis numquam architecto tempora. Odit!
        </p>
      </div>
    </div>
  );
};

export default PlaceDetails;
