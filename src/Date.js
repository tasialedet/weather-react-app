import React, { useState } from "react";
import axios from "axios";
import "./Date.css";

export default function Date() {
  const [date, setDate] = useState(null);
  const [ready, setReady]= useState(false);

  function handleResponse(response) {
    let date = new Date(response.data.dt * 1000);
    


  }

  const apiKey = "cc0bd53dffe0f46c40ce2f0a1377a17e";
  const city = "New Orleans";
  let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
  axios.get(apiUrl).then(handleResponse);
  let time = "2:00 pm";
  return <div className="date">Last checked: {time}</div>;
}
