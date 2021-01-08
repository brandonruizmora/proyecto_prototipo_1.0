import React from "react";
import img from "../nyc-streets.jpg";

let placeDireccion = "";

let establecimiento = "";
let googleMapsURL = "";
let direccion = "";
let paginaWeb = "";
let telefono = "";
let horarios = "";

const PlaceDetails = ({ elasticData, googleData }) => {
  console.log("elasticData", elasticData);

  //Cheacar que existan datos proveidos de api google
  if (Object.entries(googleData).length !== 0) {
    console.log("si hay datos");
    console.log("googleData", googleData);
    if (googleData.establecimiento.raw !== undefined) {
      establecimiento = googleData.establecimiento.raw;
    }
    if (googleData.telefono.raw !== undefined) {
      telefono = googleData.telefono.raw;
    }
    if (googleData.google_address.raw !== undefined) {
      direccion = googleData.google_address.raw;
    }
    if (googleData.website.raw !== undefined) {
      paginaWeb = googleData.website.raw;
    }
    if (googleData.url_google.raw !== undefined) {
      googleMapsURL = googleData.url_google.raw;
    }
  } else {
    console.log("no hay datos, usando los de elastic");
    establecimiento = "";
    if(elasticData.location !== undefined){
      googleMapsURL = `https://maps.google.com/?q=${elasticData.location.raw}`
    }else{
      googleMapsURL = "";
    }
    direccion = "";
    if(elasticData.www !== undefined){
      paginaWeb = elasticData.www.raw.toLowerCase();
      console.log('lower case', paginaWeb)
      if(paginaWeb.includes('http://')){
        console.log('incluye http', paginaWeb)
      }else{
        console.log('no incluye http', paginaWeb)
        paginaWeb = `http://${paginaWeb}`;
        console.log('incluyendo http', paginaWeb)
      }
    }else{
      paginaWeb = "";
    }
    telefono = "";
    horarios = "";
  }
  const tipo_de_vialidad =
    elasticData.tipo_de_vialidad?.raw === undefined
      ? ""
      : elasticData.tipo_de_vialidad?.raw;
  const vialidad =
    elasticData.vialidad?.raw === undefined ? "" : elasticData.vialidad?.raw;
  const numero_exterior =
    elasticData.numero_exterior?.raw === undefined
      ? ""
      : elasticData.numero_exterior?.raw;
  let asentamiento =
    elasticData.asentamiento?.raw === undefined
      ? ""
      : elasticData.asentamiento?.raw;
  asentamiento = asentamiento === "NINGUNO" ? "" : asentamiento;
  const codigo_postal =
    elasticData.codigo_postal?.raw === undefined
      ? ""
      : elasticData.codigo_postal?.raw;
  const municipio =
    elasticData.municipio?.raw === undefined ? "" : elasticData.municipio?.raw;
  const localidad =
    elasticData.localidad?.raw === undefined ? "" : elasticData.localidad?.raw;
  const dire =
    tipo_de_vialidad +
    " " +
    vialidad +
    " " +
    numero_exterior +
    ", " +
    asentamiento +
    ", " +
    codigo_postal +
    ", " +
    municipio +
    ", " +
    localidad +
    ". ";
  placeDireccion = dire;
  return (
    <div className="details-page">
      <img src={img} className="img-fluid" alt="streetview" />
      <div className="container">
        <div className="text-center">
          <h1 className="mt-2">
            {establecimiento
              ? establecimiento
              : elasticData.establecimiento?.raw || "nombre"}
          </h1>
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
            <a
              target="blank"
              href={googleMapsURL}
              className="btn btn-outline-primary rounded-circle circle text-decoration-none"
            >
              <div className="font-xs">
                <i className="fas fa-map-marked-alt"></i>
              </div>
            </a>
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
              <span>
                {direccion
                  ? direccion
                  : placeDireccion === "  , , , , . "
                  ? "Dirección"
                  : placeDireccion}
              </span>
            </div>
          </div>
        </li>

        <li className="list-group-item list-group-item-action border-0">
          <div className="row">
            <div className="col-1 text-primary">
              <i className="fas fa-globe"></i>
            </div>
            <div className="col-11">
              <a target="blank" href={paginaWeb}>
                {paginaWeb ? paginaWeb : elasticData.www?.raw || "Sin página"}
              </a>
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
              <span>
                {telefono
                  ? telefono
                  : elasticData.telefono?.raw || "Sin teléfono"}
              </span>
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
              <span>Sin horarios</span>
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
          {elasticData.actividad?.raw === undefined
            ? ""
            : elasticData.actividad?.raw}
        </p>
      </div>
    </div>
  );
};

export default PlaceDetails;
