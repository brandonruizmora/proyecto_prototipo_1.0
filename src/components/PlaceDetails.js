import React from "react";
import img from "../nyc-streets.jpg";

const PlaceDetails = () => {
  return (
    <div>
      <img src={img} className="img-fluid" alt="streetview" />
      <div className="container">
      <div className="text-center">
      <h1 className="mt-2"> nombre </h1>
      </div>
      </div>
      <hr />
      <div className="container-fluid p-0">
        <div className="row justify-content-center">
          <div className="col-2 text-center">
            <button className="btn btn-outline-primary rounded-circle circle">
              <div className="font-xs">
                <i className="fas fa-directions"></i>
              </div>
            </button>
          </div>

          <div className="col-2 text-center">
            <button className="btn btn-outline-primary rounded-circle circle">
              <div className="font-xs">
                <i className="far fa-bookmark"></i>
              </div>
            </button>
          </div>

          <div className="col-2 text-center">
            <button className="btn btn-outline-primary rounded-circle circle">
              <div className="font-xs">
                <i className="fas fa-map-marked-alt"></i>
              </div>
            </button>
          </div>

          <div className="col-2 text-center">
            <button className="btn btn-outline-primary rounded-circle circle">
              <div className="font-xs">
                <i className="fas fa-mobile-alt"></i>
              </div>
            </button>
          </div>

          <div className="col-2 text-center">
            <button className="btn btn-outline-primary rounded-circle circle">
              <div className="font-xs">
                <i className="fas fa-share-square"></i>
              </div>
            </button>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-2">
            <p className="text-center">Cómo llegar</p>
          </div>

          <div className="col-2">
            <p className="text-center">Marcar</p>
          </div>

          <div className="col-2">
            <p className="text-center">Abrir en maps</p>
          </div>

          <div className="col-2">
            <p className="text-center">Enviar a tu teléfono</p>
          </div>

          <div className="col-2">
            <p className="text-center">Compartir</p>
          </div>
        </div>
      </div>

      <hr />
      <ul className="list-group rounded-0">

        <li className="list-group-item border-0">
          <div className="row">
            <div className="col-1 text-primary">
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <div className="col-11">
              <span>Dirección</span>
            </div>
          </div>
        </li>

        <li className="list-group-item border-0">
          <div className="row">
            <div className="col-1 text-primary">
              <i className="fas fa-globe"></i>
            </div>
            <div className="col-11">
              <span>Página</span>
            </div>
          </div>
        </li>

        <li className="list-group-item border-0">
          <div className="row">
            <div className="col-1 text-primary">
              <i className="far fa-save"></i>
            </div>
            <div className="col-9">
              <span>Teléfono</span>
            </div>
            <div className="col-1">
              <span className="badge bg-primary rounded-pill">14</span>
            </div>
          </div>
        </li>

        <li className="list-group-item border-0">
          <div className="row">
            <div className="col-1 text-primary">
              <i className="fas fa-clock"></i>
            </div>
            <div className="col-11">
              <span>Horarios</span>
            </div>
          </div>
        </li>

        <li className="list-group-item border-0">
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
      <p className="fs-6">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure quos unde ratione voluptatum odit quo quaerat, porro cumque ut nihil error, laborum eum itaque, eos quis numquam architecto tempora. Odit!</p>
      <p className="fs-6">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure quos unde ratione voluptatum odit quo quaerat, porro cumque ut nihil error, laborum eum itaque, eos quis numquam architecto tempora. Odit!</p>
      </div>

    </div>
  );
};

export default PlaceDetails;
