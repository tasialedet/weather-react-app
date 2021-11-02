import React from "react";
import "./Weather.css";
import Date from "./Date";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1 className="cityName"> {props.info.city}</h1>
      <Date currentDate={props.info.date} currentTime={props.info.time} />
      <div className="row">
        <div className="col-6">
          <div className="description">
            {props.info.description}
            <br />
            <div className="row mt-3">
              <div className="clearfix">
                <div className="float-left">
                  <WeatherIcon code={props.info.icon} size={64}/>{" "}
                  <WeatherTemperature temp={props.info.temperature} />
                </div>
              </div>
            </div>
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
