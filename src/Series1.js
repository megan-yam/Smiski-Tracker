import "./Series1.css";
import { Collectibles } from "./Collectibles";

function Series1(props) {
  const {
    addFound,
    removeFound,
    found,
    favoriteItem,
    unfavoriteItem,
    favorite,
    addToList,
    removeFromList,
    list,
  } = props;

  const handleFound = (item) => {
    if (found.includes(item)) {
      removeFound(item);
    } else {
      addFound(item);
    }
  };

  const handleFavorite = (item) => {
    if (favorite.includes(item)) {
      unfavoriteItem(item);
    } else {
      favoriteItem(item);
    }
  };

  const handleList = (item) => {
    if (list.includes(item)) {
      removeFromList(item);
    } else {
      addToList(item);
    }
  };

  return (
    <>
      <div className="series1">
        <a href="https://smiski.com/e/products/series-1/">Series 1</a>
        <div className="smiski-container">
          {Collectibles.map((item) => (
            <div key={item.name} className={item.name}>
              <img
                src={item.imageSrc}
                alt={item.altText}
                className="series-img"
                style={{
                  filter: found.includes(item.name)
                    ? "brightness(100%)"
                    : "brightness(50%)",
                }}
                onClick={() => handleFound(item.name)}
              />
              <i
                className={`fa-regular fa-heart ${
                  favorite.includes(item.name) ? "favorited" : ""
                }`}
                onClick={() => handleFavorite(item.name)}
              />
              <i
                className={`fa-solid fa-list ${
                  list.includes(item.name) ? "added" : ""
                }`}
                onClick={() => handleList(item.name)}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Series1;
