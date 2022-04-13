import React, { useState } from "react";
import dateFormat from "dateformat";

export default function Order(props) {
  function getDate() {
    let now = new Date();
    const orderDate = dateFormat(now.setDate(now.getDate() + 3), "fullDate");
    return orderDate;
  }

  return (
    <div className="out-container">
      <h1> Order confirmation </h1>
      <br />
      <h5>
        {" "}
        Your order has been placed for <b>{getDate()}</b>,
      </h5>
      <h5> it will be delivered between 7am and 1pm.  See below for order details</h5>
      <br />
      <h5> Beef 400g </h5>
      <h5> Goose Fat 1 tin </h5>
      <h5> Tomatoes 200g </h5>
      <h5> Kale 250g </h5>
      <h5> French Stick </h5>
      <br />
      <h5> Thank you for shopping with Eat the Week!</h5>
      <h5> Your week, well fed</h5>
    </div>
  );
}
