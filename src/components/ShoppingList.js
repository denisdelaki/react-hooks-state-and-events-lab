import React, {useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedcategory, setSelectedCategory] = useState("All")
  function handleSelect(event) {
    setSelectedCategory(event.target.value)
  }
  const toDisplay = items.filter(item => {
   
    if (selectedcategory==="All") {
      return true
    } else {
      return selectedcategory===item.category
    }
   
  })
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleSelect}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {toDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
