import React, {useState} from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";


function App() {
  
  const [isdarkMode, setDarkMode] = useState(false)
  console.log({isdarkMode, setDarkMode})
  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const appClass = isdarkMode ? "App dark" : "App light"
  function handlemode() {
    setDarkMode(!isdarkMode)
  }
  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handlemode}>{isdarkMode? "Dark Mode": "Light Mode"}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
