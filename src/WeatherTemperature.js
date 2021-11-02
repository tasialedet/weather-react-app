import React, { useState } from "react";
import "./WeatherTemperature.css";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("imperial");
  function showCelsius(event) {
    event.preventDefault();
    setUnit("metric");
  }
  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("imperial");
  }
  if (unit === "imperial") {
    return (
      <strong className="temp">
        {Math.round(props.temp)}
        <span className="units">
          <a href="/" onClick={showFahrenheit} className="fahrenheit">
            °F{" "}
          </a>
          |{" "}
          <a href="/" onClick={showCelsius} className="celsius">
            {" "}
            °C{" "}
          </a>{" "}
        </span>
      </strong>
    );
  } else {
    let celsius = props.temp - (32 * 5) / 9;
    return (
      <strong className="temp">
        {Math.round(celsius)}
        <span className="units">
          <a href="/" onClick={showFahrenheit} className="fahrenheit">
            °F{" "}
          </a>
          |{" "}
          <a href="/" onClick={showCelsius} className="celsius">
            {" "}
            °C{" "}
          </a>{" "}
        </span>
      </strong>
    );
  }
}
