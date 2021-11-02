import React from "react";
import "./App.css";
import Weather from "./Weather";

import Forecast from "./Forecast";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="weatherApp">
      <Weather defaultCity="Houston" />
      <Forecast
        day="Sun"
        temp={82}
        maxTemp={86}
        minTemp={71}
        defaultCity="Houston"
      />
      <Footer />
    </div>
  );
}
