import React from "react";
import "./style.scss";
const Home = () => {
  return (
    <div id="formMain">
      <form>
        <fieldset>
          <legend>User Information:</legend>
          <label for="name">Enter name</label>
          <br></br>
          <input type="text" id="name" name="name" />
          <br></br>
          <label for="number">Enter phone </label>
          <br></br>
          <input type="number" id="number" name="number" />

          <label for="school">Enter school </label>
          <br></br>
          <input type="text" id="school" name="school" />

          <label for="class">Enter class </label>
          <br></br>
          <input type="text" id="class" name="class" />

          <label for="roll_no">Enter roll no </label>
          <br></br>
          <input type="number" id="roll_no" name="roll_no" />

          <label for="address">Enter address </label>
          <br></br>
          <input type="text" id="address" name="address" />

          <br></br>
          <input type="submit" value="submit" />
        </fieldset>
      </form>
    </div>
  );
};

export default Home;
