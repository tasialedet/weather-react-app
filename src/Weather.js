import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";
import Forecast from "./Forecast";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  let [location, setLocation] = useState("");

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      date: new Date(response.data.dt * 1000),
      time: new Date().toLocaleString("en-US", {
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      }),
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      icon: response.data.weather[0].icon,
      city: response.data.name,
      coordinates: response.data.coord,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleChange(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "cc0bd53dffe0f46c40ce2f0a1377a17e";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);
  }

  function showPosition(position) {
    setLocation({
      lat: position.coords.latitude,
      lon: position.coords.longitude,
    });
    searchCurrentLocation();
  }
  function currentPosition(position) {
    showPosition(position);
  }
  function getPosition(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(currentPosition);
  }
  function searchCurrentLocation() {
    let apiKey = "cc0bd53dffe0f46c40ce2f0a1377a17e";
    let apiUrlLoc = `https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lon}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrlLoc).then(handleResponse);
    console.log(apiUrlLoc);
  }

  if (weatherData.ready) {
    return (
      <div className="weatherData">
        <div className="Search">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Search city name"
              className="cityInput"
              autoComplete="off"
              autoFocus="on"
              onChange={handleChange}
            />
            <button
              type="submit"
              className="btn btn-outline-primary"
              id="search"
            >
              Search 🔎
            </button>
            <button
              type="submit"
              className="locateButton"
              onClick={getPosition}
            >
              Current Location 📍
            </button>
          </form>
        </div>
        <WeatherInfo info={weatherData} />
        <Forecast coordinates={weatherData.coordinates} info={weatherData} />
      </div>
    );
  } else {
    search();
    return null;
  }
}
