import React from "react";
import "./Date.css";

export default function Date(props) {
  console.log(props.date);
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[props.date.getDay()];
  let hours = props.date.getHours();
  let minutes = props.date.getMinutes();
  return (
    <div>
      Last checked at: {day} {hours}:{minutes}
    </div>
  );
}
