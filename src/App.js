import { useState } from "react";
import "./App.css";
import Series1 from "./Series1";
import { Collectibles } from "./Collectibles";

function App() {
  const [found, setFound] = useState(
    Collectibles.filter((item) => item.discovered).map((item) => item.name)
  );
  const [list, setWish] = useState(
    Collectibles.filter((item) => item.wishlist).map((item) => item.name)
  );

  function addFound(discovered) {
    if (!found.includes(discovered)) {
      const newFound = [...found, discovered];
      setFound(newFound);
      const collectible = Collectibles.find((item) => item.name === discovered);
      if (collectible) {
        collectible.discovered = true;
      }
    }
  }

  function removeFound(item) {
    setFound(found.filter((i) => i !== item));
    const collectible = Collectibles.find((item) => item.name === item);
    if (collectible) {
      collectible.discovered = false;
    }
  }

  function addToList(wish) {
    if (!list.includes(wish)) {
      const newList = [...list, wish];
      setWish(newList);
      const collectible = Collectibles.find((item) => item.name === wish);
      if (collectible) {
        collectible.wishlist = true;
      }
    }
  }

  function removeFromList(item) {
    setWish(list.filter((i) => i !== item));
    const collectible = Collectibles.find((item) => item.name === item);
    if (collectible) {
      collectible.wishlist = false;
    }
  }

  return (
    <>
      <div className="landing">
        <Series1 found={found} addFound={addFound} removeFound={removeFound} />
      </div>
    </>
  );
}

export default App;
