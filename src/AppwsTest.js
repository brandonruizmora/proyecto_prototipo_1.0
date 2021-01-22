import React from "react";
import ws from './ws-test';

const AppwsTest = () => {

    const handleChangeInput = (event) => {
        console.log(event.target.value)
    };

  return (
    <div>
        <label htmlFor="formGroupExampleInput" className="form-label">
          Example label
        </label>
        <input
          type="text"
          className="form-control"
          id="formGroupExampleInput"
          placeholder="Example input placeholder"
          onChange={handleChangeInput}
          onClick={ws}
        />
    </div>
  );
};

export default AppwsTest;
