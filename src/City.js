import React, { useState } from "react";
import axios from "axios";
import "./City.css";

export default function City() {
  const [city, setCity] = useState("");
  function handleResponse(response) {
    setCity(city);
  }
  const apiKey = "cc0bd53dffe0f46c40ce2f0a1377a17e";
  let city = "New Orleans";
  let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
  axios.get(apiUrl).then(handleResponse);

  return <div className="cityName">{city}</div>;
}
