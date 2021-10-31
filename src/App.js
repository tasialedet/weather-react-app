import "./App.css";
import Weather from "./Weather";

import Forecast from "./Forecast";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="weatherApp">
      <Weather />
      <Forecast day="Sun" temp={82} maxTemp={86} minTemp={71} />
      <Footer />
    </div>
  );
}
