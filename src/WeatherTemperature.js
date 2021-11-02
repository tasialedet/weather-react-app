import React from "react";
import "./WeatherTemperature.css";

export default function WeatherTemperature(props) {
  return (
    <strong className="temp">
      {Math.round(props.temp)}
      <span className="units">°F </span>
    </strong>
  );
}
