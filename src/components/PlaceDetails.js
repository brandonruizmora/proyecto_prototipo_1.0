import React from "react";
import img from "../nyc-streets.jpg";

const PlaceDetails = () => {
  return (
    <div>
      <img src={img} className="img-fluid" alt="streetview" />
      <h1> lugar nombre </h1>
      <hr />
      <button><i class="fas fa-directions"></i></button>
      <button><i class="far fa-bookmark"></i></button>
      <button><i class="fas fa-map-marked-alt"></i></button>
      <button><i class="fas fa-mobile-alt"></i></button>
      <button><i class="far fa-share-square"></i></button>
      <hr />
      <ul>
        <li><i class="fas fa-map-marker-alt"></i> Dirección</li>
        <li><i class="fas fa-globe"></i> Webpage</li>
        <li><i class="fas fa-phone-alt"></i> Phone</li>
        <li><i class="far fa-clock"></i> Horarios</li>
        <li><i class="far fa-save"></i> Guardar</li>
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
