import React from "react";
import "./Forecast.css";

let iconLink = "http://openweathermap.org/img/wn/10d@2x.png";
export default function Forecast(props) {
  return (
    <div className="Forecast">
      <div className="row">
        <div class="col-2">
          <div className="forecastDate">{props.day}</div>
          <div className="weatherForecastIcon">
            <img src={iconLink} alt="" />
          </div>
          <span className="forecastTempMax"> {props.maxTemp}° </span>|
          <span class="forecastTempMin"> {props.minTemp}°</span>
        </div>

        <div class="col-2">
          <div className="forecastDate">{props.day}</div>
          <div className="weatherForecastIcon">
            <img src={iconLink} alt="" />
          </div>
          <span className="forecastTempMax">{props.maxTemp}°</span>|
          <span class="forecastTempMin">{props.minTemp}°</span>
        </div>

        <div class="col-2">
          <div className="forecastDate">{props.day}</div>
          <div className="weatherForecastIcon">
            <img src={iconLink} alt="" />{" "}
          </div>
          <span className="forecastTempMax">{props.maxTemp}° </span>|
          <span class="forecastTempMin"> {props.minTemp}°</span>
        </div>

        <div class="col-2">
          <div className="forecastDate">{props.day}</div>
          <div className="weatherForecastIcon">
            <img src={iconLink} alt="" />
          </div>
          <span className="forecastTempMax"> {props.maxTemp}° </span>|
          <span class="forecastTempMin"> {props.minTemp}°</span>
        </div>

        <div class="col-2">
          <div className="forecastDate">{props.day}</div>
          <div className="weatherForecastIcon">
            <img src={iconLink} alt="" />
          </div>
          <span className="forecastTempMax"> {props.maxTemp}° </span>|
          <span class="forecastTempMin"> {props.minTemp}°</span>
        </div>

        <div class="col-2">
          <div className="forecastDate">{props.day}</div>
          <div className="weatherForecastIcon">
            <img src={iconLink} alt="" />
          </div>
          <span className="forecastTempMax"> {props.maxTemp}° </span>|
          <span class="forecastTempMin"> {props.minTemp}°</span>
        </div>
      </div>
    </div>
  );
}
