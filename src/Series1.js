import "./Series1.css";
import React, { useState } from "react";
import hugging from "./imgs/series1/hugging-knees.png";
import sitting from "./imgs/series1/sitting.png";
import lookingBack from "./imgs/series1/looking-back.png";
import lounging from "./imgs/series1/lounging.png";
import hiding from "./imgs/series1/hiding.png";
import peeking from "./imgs/series1/peeking.png";

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
        <div className="hugging-knees">
          <img
            src={hugging}
            alt="Hugging Knees"
            className="series-img"
            style={{
              filter: found.includes("hugging")
                ? "brightness(100%)"
                : "brightness(50%)",
            }}
            onClick={() => handleClick("hugging")}
          />
          <i class="fa-regular fa-heart"></i>
        </div>
        <div className="sitting">
          <img
            src={sitting}
            alt="Sitting"
            style={{
              filter: found.includes("sitting")
                ? "brightness(100%)"
                : "brightness(50%)",
            }}
            addFound
            onClick={() => handleClick("sitting")}
          />
          <i class="fa-regular fa-heart"></i>
        </div>
        <div className="looking-back">
          <img
            src={lookingBack}
            alt="Looking Back"
            style={{
              filter: found.includes("looking-back")
                ? "brightness(100%)"
                : "brightness(50%)",
            }}
            onClick={() => handleClick("looking-back")}
          />
          <i class="fa-regular fa-heart"></i>
        </div>
        <div className="lounging">
          <img
            src={lounging}
            alt="Lounging"
            style={{
              filter: found.includes("lounging")
                ? "brightness(100%)"
                : "brightness(50%)",
            }}
            onClick={() => handleClick("lounging")}
          />
          <i class="fa-regular fa-heart"></i>
        </div>
        <div className="hiding">
          <img
            src={hiding}
            alt="Hiding"
            style={{
              filter: found.includes("hiding")
                ? "brightness(100%)"
                : "brightness(50%)",
            }}
            onClick={() => handleClick("hiding")}
          />
          <i class="fa-regular fa-heart"></i>
        </div>
        <div className="peeking">
          <img
            src={peeking}
            alt="Peeking"
            style={{
              filter: found.includes("peeking")
                ? "brightness(100%)"
                : "brightness(50%)",
            }}
            onClick={() => handleClick("peeking")}
          />
          <i class="fa-regular fa-heart"></i>
        </div>
      </div>
    </>
  );
}

export default Series1;
