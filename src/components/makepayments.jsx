import axios from "axios";
import React from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";

const Makepayments = () => {

  const {product} = useLocation().state || {};

  const [phone, setPhone] = useState(""); 
  const [message, setMessage] = useState("");

  const submit = async (e) => {
    e.preventDefault()
    setMessage("please wait as we process your payment ")
    
    const data = new FormData();
    data.append("phone", phone);
    data.append("amount", product.product_cost);

    const response = await axios.post(
      "https://calebnjogu.pythonanywhere.com/api/mpesa_payment",
      data
    )
    setMessage("Please complete the payment on your phone.");
  }
  return (
    <div>
     <h1>Lipa Na Mpesa</h1>
     <p>{product.product_name} </p>
     <p>{product.product_cost}</p>

     <form onSubmit={submit}>
      {message}
      <input
      type="text" 
      placeholder="Enter your Mpesa Phone Number" 
      className="form-control"
      value={phone}
      onChange={(e) => setPhone(e.target.value)}
      required
      />
      <br />
      <button className="btn btn-dark">Make Payment</button>
     </form>
    </div>
  );
};

export default Makepayments;
