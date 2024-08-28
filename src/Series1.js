import "./Series1.css";
import { Collectibles } from "./Collectibles";

function Series1(props) {
  const { addFound, removeFound, found } = props;

  const handleClick = (item) => {
    if (found.includes(item)) {
      removeFound(item);
    } else {
      addFound(item);
    }
  };
  return (
    <>
      <div className="series1">
        <a href="https://smiski.com/e/products/series-1/">Series 1</a>
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
              onClick={() => handleClick(item.name)}
            />
            <i className="fa-regular fa-heart"></i>
          </div>
        ))}
      </div>
    </>
  );
}

export default Series1;
