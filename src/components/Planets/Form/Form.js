import React, { useState } from "react";

const Form = (props) => {
  const [name, setName] = useState("");

  const handleChange = (event) => {
    setName(event.target.value);
    console.log(name);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.addPlanet({ name: name });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">
            Name:
            <input type="text" id="name" value={name} onChange={handleChange} />
          </label>
        </div>
        <br />
        <input type="submit" />
      </form>
    </>
  );
};

export default Form;
