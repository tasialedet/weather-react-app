import React from "react";
import "./Weather.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row">
        <div className="col-6">
          <div className="Description">
            {props.description}
            <br />
            <img
              className="weatherIcon"
              src={props.iconUrl}
              alt={props.description}
            />
            <strong className="temp">
              {Math.round(props.temperature)}
              <span className="units">°F</span>
            </strong>
          </div>
        </div>

        <div className="col-6">
          <div className="Conditions">
            <ul>
              <li className="Precipitation">
                {" "}
                Precipitation{" "}
                <span className="precip">{props.precipitation}%</span>
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
    </div>
  );
}
