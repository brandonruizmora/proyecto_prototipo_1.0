import React from "react";
import img from "../nyc-streets.jpg";

const PlaceDetails = () => {
  return (
    <div>
      <img src={img} className="img-fluid" alt="streetview" />
      <h1> lugar nombre </h1>
      <hr />
      <div className="container">
        <div className="row bg-success justify-content-center">
          <div className="col-2 bg-white text-center">
            <button className="btn btn-outline-primary rounded-circle circle">
              <div className="font-xs">
                <i className="fas fa-directions"></i>
              </div>
            </button>
          </div>

          <div className="col-2 bg-danger text-center">
            <button className="btn btn-outline-primary rounded-circle circle">
              <div className="font-xs">
                <i className="far fa-bookmark"></i>
              </div>
            </button>
          </div>

          <div className="col-2 bg-warning text-center">
            <button className="btn btn-outline-primary rounded-circle circle">
              <div className="font-xs">
                <i className="fas fa-map-marked-alt"></i>
              </div>
            </button>
          </div>

          <div className="col-2 bg-danger text-center">
            <button className="btn btn-outline-primary rounded-circle circle">
              <div className="font-xs">
                <i className="fas fa-mobile-alt"></i>
              </div>
            </button>
          </div>

          <div className="col-2 bg-white text-center">
            <button className="btn btn-outline-primary rounded-circle circle">
              <div className="font-xs">
                <i className="fas fa-share-square"></i>
              </div>
            </button>
          </div>
        </div>

        <div className="row bg-secondary justify-content-center">
          <div className="col-2 bg-white">
            <p className="text-center">Cómo llegar</p>
          </div>

          <div className="col-2 bg-danger">
            <p className="text-center">Marcar</p>
          </div>

          <div className="col-2 bg-warning">
            <p className="text-center">Abrir en maps</p>
          </div>

          <div className="col-2 bg-danger">
            <p className="text-center">Enviar a tu teléfono</p>
          </div>

          <div className="col-2 bg-white">
            <p className="text-center">Compartir</p>
          </div>
        </div>
      </div>

      <hr />
      <ul className="list-group rounded-0">
        <li className="list-group-item">
          <div className="d-flex">
            <div className="me-3">
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <div>
              <span>Dirección</span>
            </div>
          </div>
        </li>

        <li className="list-group-item">
          <div className="d-flex">
            <div className="me-3">
              <i className="fas fa-globe"></i>
            </div>
            <div>
              <span>Webpage</span>
            </div>
          </div>
        </li>

        <li className="list-group-item">
          <div className="d-flex justify-content-between">
            <div className="d-flex">
              <div className="me-3">
                <i className="fas fa-phone-alt"></i>
              </div>
              <div>
                <span>Teléfono</span>
              </div>
            </div>
            <div>
              <span className="badge bg-primary rounded-pill">14</span>
            </div>
          </div>
        </li>

        <li className="list-group-item">
          <div className="d-flex">
            <div className="me-3">
              <i className="fas fa-clock"></i>
            </div>
            <div>
              <span>Horarios</span>
            </div>
          </div>
        </li>

        <li className="list-group-item">
          <div className="d-flex">
            <div className="me-3">
              <i className="far fa-save"></i>
            </div>
            <div>
              <span>Guardar</span>
            </div>
          </div>
        </li>
      </ul>
      <hr />
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia
        obcaecati eos temporibus neque aliquid recusandae voluptatibus eius
        quaerat et consectetur, dolorum autem qui earum voluptates voluptate
        expedita a officiis illo hic quos. Odio nostrum deserunt assumenda
        fugiat officiis autem maxime nesciunt molestiae, nisi cumque, dolore
        voluptates dolorum modi consectetur. Perspiciatis quaerat vitae sequi
        porro assumenda labore necessitatibus obcaecati nisi quam consectetur
        fugiat veniam similique atque odit sint, id hic accusantium repellat
        laudantium ut! Voluptatibus corrupti, beatae, iure nam recusandae
        minima, fugit magnam ducimus autem itaque repellat vitae? Ea deleniti
        molestiae totam iusto optio, odit quis alias, repellendus perferendis,
        ex similique?
      </p>
    </div>
  );
};

export default PlaceDetails;
