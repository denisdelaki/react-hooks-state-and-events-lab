import React, {useState} from "react";

function Item({ name, category }) {
  const [isAdded, setCart]=useState("")
  function handlecart(event) {
    setCart("in-cart");
    console.log(isAdded);
  }
  let theclass = isAdded === "in-cart" ? "in-cart" : "";
  return (
    <li className={theclass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handlecart}>Add to Cart</button>
    </li>
  );
}

export default Item;
