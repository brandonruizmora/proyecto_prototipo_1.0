import React, {useState} from "react";

const AppwsTest = () => {

  const [apiResponse, setApiResponse] = useState('');

  const callApi = () => {
    fetch('http://localhost:9000/testAPI')
      .then(res => res.text())
      .then(res => setApiResponse(res));
  }

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
          onClick={callApi}
        />
        <p>{apiResponse}</p>
    </div>
  );
};

export default AppwsTest;
