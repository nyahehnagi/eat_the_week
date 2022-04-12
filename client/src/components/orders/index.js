import React, { useState } from "react";
import dateFormat from "dateformat";

export default function Order(props) {

  function getDate() {
    let now = new Date()
    const orderDate = dateFormat(
      now.setDate(now.getDate() + 3),
      "fullDate"
      )
    return orderDate
  }

  return(
    <div className="container-sm">
      <h1> Order confirmation </h1>
      <br/>
      <h5> Your order has been placed for <b>{getDate()}</b></h5>
      <h5> It will be delivered between 7am and 1pm</h5>
      <br/><br/><br/>
      <h5> Thank you for shopping with Eat the Week!</h5>
      <h5> Your week, well fed</h5>
    </div>
  );
}