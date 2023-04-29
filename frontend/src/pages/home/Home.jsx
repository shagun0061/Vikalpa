import React, { useState } from "react";
import "./style.scss";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const Home = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState({
    name: "",
    phone: 0,
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
    try {
      axios.post("http://localhost:5000/", { ...value }).then((res) => {
        if (res.data.status) {
          toast.success("user Admitcard data Add Sucessfully", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
          setTimeout(() => {
            navigate("/admitcard");
          }, 3000);

          useNavi;
        } else {

          console.log(res);
          if (res.data.reason) {
            toast.error(res.data.reason, {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
            });
          } else {
            toast.error("Please fill all details", {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
            });
          }
        }
      });
    } catch (error) {
      console.log(error);
    }
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
            type="phone"
            id="phone"
            name="phone"
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
      <ToastContainer />
    </div>
  );
};

export default Home;
