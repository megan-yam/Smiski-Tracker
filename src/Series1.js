import "./Series1.css";
import React, { useState } from "react";
import hugging from "./imgs/series1/hugging-knees.png";
import sitting from "./imgs/series1/sitting.png";
import lookingBack from "./imgs/series1/looking-back.png";
import lounging from "./imgs/series1/lounging.png";
import hiding from "./imgs/series1/hiding.png";
import peeking from "./imgs/series1/peeking.png";

function Series1() {
  const [clickedImageIds, setClickedImageIds] = useState([]);

  const handleClick = (id) => {
    if (clickedImageIds.includes(id)) {
      setClickedImageIds(
        clickedImageIds.filter((clickedId) => clickedId !== id)
      );
    } else {
      setClickedImageIds([...clickedImageIds, id]);
    }
  };

  return (
    <>
      <h1>Series 1</h1>
      <div className="hugging-knees">
        <img
          src={hugging}
          alt="Hugging Knees"
          style={{
            filter: clickedImageIds.includes("hugging")
              ? "brightness(100%)"
              : "brightness(50%)",
          }}
          onClick={() => handleClick("hugging")}
        />
      </div>
      <div className="sitting">
        <img
          src={sitting}
          alt="Sitting"
          style={{
            filter: clickedImageIds.includes("sitting")
              ? "brightness(100%)"
              : "brightness(50%)",
          }}
          onClick={() => handleClick("sitting")}
        />
      </div>
      <div className="looking-back">
        <img
          src={lookingBack}
          alt="Looking Back"
          style={{
            filter: clickedImageIds.includes("looking-back")
              ? "brightness(100%)"
              : "brightness(50%)",
          }}
          onClick={() => handleClick("looking-back")}
        />
      </div>
      <div className="lounging">
        <img
          src={lounging}
          alt="Lounging"
          style={{
            filter: clickedImageIds.includes("lounging")
              ? "brightness(100%)"
              : "brightness(50%)",
          }}
          onClick={() => handleClick("lounging")}
        />
      </div>
      <div className="hiding">
        <img
          src={hiding}
          alt="Hiding"
          style={{
            filter: clickedImageIds.includes("hiding")
              ? "brightness(100%)"
              : "brightness(50%)",
          }}
          onClick={() => handleClick("hiding")}
        />
      </div>
      <div className="peeking">
        <img
          src={peeking}
          alt="Peeking"
          style={{
            filter: clickedImageIds.includes("peeking")
              ? "brightness(100%)"
              : "brightness(50%)",
          }}
          onClick={() => handleClick("peeking")}
        />
      </div>
    </>
  );
}

export default Series1;
