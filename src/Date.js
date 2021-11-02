import React from "react";
import "./Date.css";

export default function Date(props) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let day = days[props.currentDate.getDay()];
  let hours = props.currentDate.getHours() % 12 || 12;
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = props.currentDate.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return (
    <div className="date">
      Last checked: {day} at {props.currentTime}
    </div>
  );
}
