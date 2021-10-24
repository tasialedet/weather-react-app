import React from "react";
import "./Search.css";

export default function Search() {
  return (
    <div className="Search">
      <form>
        <input
          type="text"
          placeholder="Search city name"
          className="cityInput"
          autoComplete="off"
        />
        <button type="submit" className="btn btn-outline-primary" id="search">
          Search 🔎
        </button>
        <button type="submit" className="locateButton">
          Current Location 📍
        </button>
      </form>
    </div>
  );
}
