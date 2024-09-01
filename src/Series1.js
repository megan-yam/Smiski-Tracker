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
    filteredItems,
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
        <a
          href="https://smiski.com/e/products/series-1/"
          className="series-link"
        >
          Series 1
        </a>
        <div className="smiski-container">
          {filteredItems.map((item) => (
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
              <div className="icon-container">
                <i
                  className={` fa-heart ${
                    favorite.includes(item.name) ? "fa-solid" : "fa-regular"
                  }`}
                  onClick={() => handleFavorite(item.name)}
                />
                <i
                  className={`fa-star ${
                    list.includes(item.name) ? "fa-solid" : "fa-regular"
                  }`}
                  onClick={() => handleList(item.name)}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Series1;
