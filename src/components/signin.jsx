import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Signin = () => {
  //define state variables using usestate hook that will be used to maage the inputs
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState("");

  //Function to submit data to API
  const submit = async (e) => {
    e.preventDefault();//Prevent default actions
    setLoading("Please wait as we log you in");//set progress message
  
    //Add data to form data object
    try {
      const data = new FormData();
      data.append("email", email);
      data.append("password", password);

      //Post above data to Backend API
      const response = await axios.post(
        "https://calebnjogu.pythonanywhere.com/api/signin",
        data);

      setLoading(""); //After successful posting, Clear the loading message

      // Check if the response has user item,
    
      if (response.data.user) {
        // If user is Found, Store user details in localStorage
        localStorage.setItem("user", JSON.stringify(response.data.user));
        // Redirect to /getproducts Component
        navigate("/");
      } 
      else {
        //User Not Found, Show Error message
        setError(response.data.message);
      }
      //If there was an Error, Clear Loading
    } catch (error) {
      setLoading("");
      setError(error.response.data.message);
    }
  };
  return (
    <div className="row justify-content-center mt-4">
      <div className="col-md-6 card shadow p-4">
        <h2>Signin</h2>
        <form onSubmit={submit}>
          {loading}
          {success}
          {error}
          <input
            type="email"
            className="form-control"
            placeholder="Enter Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />{" "}
          <br />
          <input
            type="password"
            className="form-control"
            placeholder="Enter Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
          />{" "}
          <br />
          <button className="btn btn-primary" type="submit">
            Log In
          </button>
        </form>
        <p>
          Don't have anaccount? <Link to="/signup">Signup</Link>
        </p>
      </div>
    </div>
  );
};

export default Signin;
