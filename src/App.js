import { useState, useEffect } from "react";
import "./App.css";
import Series1 from "./Series1";

function App() {
  const [found, setFound] = useState([]);
  const [wishlist, setWish] = useState([]);

  function addFound(discovered) {
    if (!found.includes(discovered)) {
      const newFound = [...found, discovered];
      setFound(newFound);
    }
  }

  function removeFound(item) {
    setFound(found.filter((i) => i !== item));
  }

  function addToList(wish) {
    const newList = [...wishlist, wish];
    setWish(newList);
  }

  function removeFromList(index) {
    const newList = wishlist.filter((wishlist, listIndex) => {
      return listIndex !== index;
    });
    setFound(newList);
  }

  return (
    <>
      <div className="landing">
        {/* <Navbar /> */}
        <Series1 found={found} addFound={addFound} removeFound={removeFound} />
      </div>
    </>
  );
}

export default App;
