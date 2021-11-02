import React from "react";
import "./Weather.css";
import Date from "./Date";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1 className="cityName"> {props.info.city}</h1>
      <Date currentDate={props.info.date} currentTime={props.info.time} />
      <div className="row">
        <div className="col-6">
          <div className="Description">
            {props.info.description}
            <br />
            <WeatherIcon code={props.info.icon} />

            <strong className="temp">
              {Math.round(props.info.temperature)}
              <span className="units">°F | °C </span>
            </strong>
          </div>
        </div>

        <div className="col-6">
          <div className="Conditions">
            <ul>
              <li className="Wind">
                {" "}
                Wind{" "}
                <span className="windSpeed">
                  {Math.round(props.info.wind)} mph
                </span>
              </li>
              <li className="Humidity">
                Humidity{" "}
                <span className="humid">
                  {Math.round(props.info.humidity)}%
                </span>
              </li>{" "}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
