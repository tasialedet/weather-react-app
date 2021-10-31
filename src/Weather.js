import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import Date from "./Date";
import WeatherInfo from "./WeatherInfo";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      iconUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      precipitation: response.data.precipitation.value,
      city: response.data.name,
    });
  }
  function search() {
    const apiKey = "cc0bd53dffe0f46c40ce2f0a1377a17e";
    let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function handleChange(event) {
    setCity(event.target.value);
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
            <button type="submit" className="locateButton">
              Current Location 📍
            </button>
          </form>
        </div>
        <h1 className="cityName"> {city}</h1>
        <Date date={weatherData.date} />
        <WeatherInfo info={weatherData} />
      </div>
    );
  } else {
    search();
    return "Loading";
  }
}
