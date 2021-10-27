import React, { useState } from "react";
import axios from "axios";
import "./Forecast.css";

let iconLink = "http://openweathermap.org/img/wn/10d@2x.png";
export default function Forecast(props) {
  const [ready, setReady] = useState(false);
  function handleResponse(response) {
    console.log(response.data);
    setReady(true);
  }

  if (ready) {
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
  } else {
    const apiKey = "cc0bd53dffe0f46c40ce2f0a1377a17e";
    let city = "New Orleans";
    let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
