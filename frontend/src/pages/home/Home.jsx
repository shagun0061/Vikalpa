import React, { useState } from "react";
import "./style.scss";
const Home = () => {
  const [value, setValue] = useState({
    name: "",
    number: 0,
    school: "",
    class: "",
    roll_no: 0,
    address: "",
  });

  const handelChange = (event) => {
    event.preventDefault();
    console.log(event.target.value);
    setValue({ ...value, [event.target.name]: event.target.value });
  };

  const handelSubmit = (event) => {
    event.preventDefault();
    console.log(value);
  };
  return (
    <div
      id="formMain"
      onSubmit={(event) => {
        handelSubmit(event);
      }}
    >
      <form>
        <fieldset>
          <legend>User Information:</legend>
          <label>Enter name</label>
          <br></br>
          <input
            type="text"
            id="name"
            name="name"
            onChange={(event) => handelChange(event)}
          />
          <br></br>
          <label>Enter phone </label>
          <br></br>
          <input
            type="number"
            id="number"
            name="number"
            onChange={(event) => handelChange(event)}
          />

          <label>Enter school </label>
          <br></br>
          <input
            type="text"
            id="school"
            name="school"
            onChange={(event) => handelChange(event)}
          />

          <label>Enter class </label>
          <br></br>
          <input
            type="text"
            id="class"
            name="class"
            onChange={(event) => handelChange(event)}
          />

          <label>Enter roll no </label>
          <br></br>
          <input
            type="number"
            id="roll_no"
            name="roll_no"
            onChange={(event) => handelChange(event)}
          />

          <label>Enter address </label>
          <br></br>
          <input
            type="text"
            id="address"
            name="address"
            onChange={(event) => handelChange(event)}
          />

          <br></br>
          <input type="submit" value="submit" />
        </fieldset>
      </form>
    </div>
  );
};

export default Home;
