import React from "react";
import img from "../nyc-streets.jpg";

const PlaceDetails = () => {
  return (
    <div>
      <img src={img} className="img-fluid" alt="streetview" />
      <h1> lugar nombre </h1>
      <hr />
      <button>boton 1</button>
      <button>boton 2</button>
      <button>boton 3</button>
      <button>boton 4</button>
      <button>boton 5</button>
      <hr />
      <ul>
        <li>icono - texto</li>
        <li>icono - texto</li>
        <li>icono - texto</li>
        <li>icono - texto</li>
        <li>icono - texto</li>
        <li>icono - texto</li>
        <li>icono - texto</li>
        <li>icono - texto</li>
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
