import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecastDay.css";

export default function WeatherForecastDay(props) {
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }
  function minTemperature() {
    let minTemp = Math.round(props.data.temp.min);
    return minTemp;
  }
  function maxTemperature() {
    let maxTemp = Math.round(props.data.temp.max);
    return maxTemp;
  }
  return (
    <div className="forecastDay">
      <div className="forecastDate">{day()}</div>
      <span className="forecastIcon">
        {" "}
        <WeatherIcon code={props.data.weather[0].icon} size={37} />
      </span>
      <br></br>
      <span className="forecastTempMax"> {maxTemperature()}° </span>|
      <span className="forecastTempMin"> {minTemperature()}°</span>
    </div>
  );
}
