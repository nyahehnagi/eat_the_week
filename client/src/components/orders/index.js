import React, { useState } from "react";
import dateFormat from "dateformat";

export default function Order(props) {
  function getDate() {
    let now = new Date();
    const orderDate = dateFormat(now.setDate(now.getDate() + 3), "fullDate");
    return orderDate;
  }

  return (
    <div className="out-container" style={{color:"hsl(0, 0%, 11%"}}>
      <h1> Order confirmation </h1>
      <br />
      <p>
        {" "}
        <h2>Your order has been placed for <b>{getDate()}</b>,</h2>
      </p>
      <h2> it will be delivered between 7am and 1pm.  See below for order details</h2>
      <br />
      <p> 600g Pasta </p>
      <p> 365g Butter </p>
      <p> 60g Plain Flour </p>
      <p> 900ml Milk </p>
      <p> 250g Cheddar </p>
      <p> 320g Tuna </p>
      <p> 1 can Sweetcorn </p>
      <p> Parsley </p>
      <p> 260g Caster Sugar </p>
      <p> 120g Brown Sugar </p>
      <p> Eggs </p>
      <p> Vanilla Extract </p>
      <p> 390g Self Raising Flour </p>
      <p> Salt </p>
      <p> 100g Chocolate Chips </p>
      <p> Baking Powder</p>
      <p> 2 Bananas </p>
      <p> 50g Icing Sugar </p>
      <p> Celery </p>
      <p> 5 Onions </p>
      <p> Carrots </p>
      <p> Bay Leaves </p>
      <p> Thyme </p>
      <p> Vegetable Oil </p>
      <p> Tomato Puree </p>
      <p> Worcestershire Sauce </p>
      <p> Beef Stock Cubes </p>
      <p> 1.85kg Beef Mince </p>
      <p> White Bread Loaf </p>
      <p> Garlic Bulb </p>
      <p> Madras Curry Paste </p>
      <p> Dried Mixed Herbs </p>
      <p> Cloves </p>
      <p> Allspice Berries </p>
      <p> Mango Chutney </p>
      <p> Sultanas </p>
      <p> Olive Oil </p>
      <p> Root Ginger </p>
      <p> 1 Green Chilli </p>
      <p> Ground Cumin </p>
      <p> Ground Coriander </p>
      <p> Ground Turmeric </p>
      <p> Coriander </p>
      <p> 1 Cauliflower </p>
      <p> 400g Chickpeas </p>
      <p> 400g Coconut Milk </p>
      <p> 1 Lemon </p>
      <p> 4 Rashers Bacon </p>
      <p> Brussel Sprouts </p>
      <p> Potatoes </p>
      <p> Steak </p>
      <p> Frozen Chips</p>
      <br />
      <h2> Thank you for shopping with Eat the Week!</h2>
      <h2> Your week, well fed</h2>
    </div>
  );
}
