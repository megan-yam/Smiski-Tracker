import { useState, useEffect } from "react";
import "./App.css";
import Series1 from "./Series1";
import { Collectibles } from "./Collectibles";
import Filter from "./Filter";

function App() {
  const [found, setFound] = useState(
    Collectibles.filter((item) => item.discovered).map((item) => item.name)
  );
  const [list, setWish] = useState(
    Collectibles.filter((item) => item.wishlist).map((item) => item.name)
  );
  const [favorite, setFavorite] = useState(
    Collectibles.filter((item) => item.favorited).map((item) => item.name)
  );
  const [filteredItems, setFilteredItems] = useState(Collectibles);

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

  function favoriteItem(item) {
    if (!favorite.includes(item)) {
      const newFavorites = [...favorite, item];
      setFavorite(newFavorites);
      const collectible = Collectibles.find((item) => item.name === item);
      if (collectible) {
        collectible.favorited = true;
      }
    }
  }

  function unfavoriteItem(item) {
    setFavorite(favorite.filter((i) => i !== item));
    const collectible = Collectibles.find((item) => item.name === item);
    if (collectible) {
      collectible.favorited = false;
    }
  }

  // purely for debugging purposes
  useEffect(() => {
    console.log("Found:", found);
    console.log("List:", list);
    console.log("Favorite:", favorite);
  }, [found, list, favorite]);

  return (
    <div className="homepage">
      <Filter
        found={found}
        favorite={favorite}
        list={list}
        setFilteredItems={setFilteredItems}
      />
      <Series1
        found={found}
        addFound={addFound}
        removeFound={removeFound}
        favoriteItem={favoriteItem}
        unfavoriteItem={unfavoriteItem}
        favorite={favorite}
        list={list}
        addToList={addToList}
        removeFromList={removeFromList}
        filteredItems={filteredItems}
      />
    </div>
  );
}

export default App;
