import React, { useState, useEffect } from "react";
import { Collectibles } from "./Collectibles";
import "./Filter.css";

export default function Filter({ found, favorite, list, setFilteredItems }) {
  const [selectedFilters, setSelectedFilters] = useState([]);

  const filters = ["discovered", "favorited", "wishlist"];

  const handleFilterButtonClick = (selectedCategory) => {
    if (selectedFilters.includes(selectedCategory)) {
      const newFilters = selectedFilters.filter(
        (filter) => filter !== selectedCategory
      );
      setSelectedFilters(newFilters);
    } else {
      setSelectedFilters([...selectedFilters, selectedCategory]);
    }
  };

  useEffect(() => {
    filterItems();
  }, [selectedFilters, found, favorite, list]);

  const filterItems = () => {
    let tempItems = Collectibles;

    if (selectedFilters.length > 0) {
      tempItems = Collectibles.filter((item) =>
        selectedFilters.every((filter) => {
          if (filter === "discovered") return found.includes(item.name);
          if (filter === "favorited") return favorite.includes(item.name);
          if (filter === "wishlist") return list.includes(item.name);
          return true;
        })
      );
    }
    setFilteredItems(tempItems);
  };

  return (
    <div className="buttons-container">
      {filters.map((category, idx) => (
        <button
          onClick={() => handleFilterButtonClick(category)}
          className={`button ${
            selectedFilters.includes(category) ? "active" : ""
          }`}
          key={`filters-${idx}`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
