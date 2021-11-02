import React from "react";
import "./Weather.css";
import Date from "./Date";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1 className="cityName"> {props.info.city}</h1>
      <Date currentDate={props.info.date} currentTime={props.info.time}/>
      <div className="row">
        <div className="col-6">
          <div className="Description">
            {props.info.description}
            <br />
            <img
              className="weatherIcon"
              src={props.info.iconUrl}
              alt={props.info.description}
            />
            <strong className="temp">
              {Math.round(props.info.temperature)}
              <span className="units">°F</span>
            </strong>
          </div>
        </div>

        <div className="col-6">
          <div className="Conditions">
            <ul>
              <li className="Wind">
                {" "}
                Wind <span className="windSpeed">{Math.round(props.info.wind)} mph</span>
              </li>
              <li className="Humidity">
                Humidity <span className="humid">{Math.round(props.info.humidity)}%</span>
              </li>{" "}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
