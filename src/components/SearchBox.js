import React from "react";

let searchItem = "";

const handleChangeInput = (event) => {
  searchItem = event.target.value;
};

const SearchBox = ({ handleSearchItem }) => {
  return (
    <div className="container-fluid ps-3 pe-1">
      <div className="my-2 d-flex">
        <input
          type="text"
          className="form-control border-0"
          id="inputSearch"
          aria-describedby="inputSearch"
          onChange={ handleChangeInput }
        />
        <button
          className="btn btn-outline-primary border-0"
          onClick={ () => handleSearchItem( searchItem ) }
        >
          <i className="fas fa-search-location"></i>
        </button>
      </div>
    </div>
  );
};

export default SearchBox;
