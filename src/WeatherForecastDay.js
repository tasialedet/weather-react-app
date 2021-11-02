import React from "react";

export default function WeatherForecastDay(props) {
  console.log(props.data);
  return (
    <div className="forecastDay">
      <div className="forecastDate"></div>
      <div className="weatherForecastIcon">
        <img src={iconLink} alt="" />
      </div>
      <span className="forecastTempMax">
        {" "}
        {Math.round(forecast[0].temp.max)}°{" "}
      </span>
      |<span class="forecastTempMin"> {Math.round(forecast[0].temp.min)}°</span>
    </div>
  );
}
