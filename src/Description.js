import React from "react";
import "./Description.css";
let iconLink = "http://openweathermap.org/img/wn/10d@2x.png";
export default function Description(props) {
  return (
    <div className="row">
      <div className="col-6">
        <div className="Description">
          {props.description}
          <br />
          <img className="weatherIcon" src={iconLink} alt="" />
          <strong className="temp">
            {props.temp}
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
}
