import React, { useState } from "react";
import axios from "axios";
import "./Forecast.css";

let iconLink = "https://openweathermap.org/img/wn/10d@2x.png";
export default function Forecast(props) {
  const [ready, setReady] = useState(false);
  const [forecast, setForecast] = useState(null);
  function handleResponse(response) {
    console.log(response.data);
    setForecast(response.data.daily);
    setReady(true);
  }
  if (ready) {
    return (
      <div className="Forecast">
        <div className="row">
          <div class="col-2">
            <div className="forecastDate">Thurs</div>
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
    let latitude = props.coordinates.lat;
    let longitude = props.coordinates.lon;
    const apiKey = "cc0bd53dffe0f46c40ce2f0a1377a17e";
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);
    return null;
  }
}
