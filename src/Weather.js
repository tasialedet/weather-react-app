import React, { useState } from "react";
import axios from "axios";
import "./Description.css";
import Date from "./Date";

let iconLink = "http://openweathermap.org/img/wn/10d@2x.png";
export default function Description(props) {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    setWeatherData({
      date: new Date(response.data.dt * 1000)
      temperature: response.data.main.temp);
    })
    setReady(true);
  }

  if (ready) {
    return (
      <div className="row">
        <div className="col-6">
          <div className="Description">
            {props.description}
            <br />
            <img className="weatherIcon" src={iconLink} alt="" />
            <strong className="temp">
              {Math.round(temperature)}
              <span className="units">°F</span>
            </strong>
          </div>
        </div>

        <div className="col-6">
          <div className="Conditions">
            <ul>
              <li className="Precipitation">
                {" "}
                Precipitation <span className="precip">{props.precip}%</span>
              </li>
              <li className="Wind">
                {" "}
                Wind <span className="windSpeed">{props.wind} mph</span>
              </li>
              <li className="Humidity">
                Humidity <span className="humid">{props.humidity}%</span>
              </li>{" "}
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "cc0bd53dffe0f46c40ce2f0a1377a17e";
    const city = "New Orleans";
    let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading...";
  }
}
