import "./App.css";
import Search from "./Search";
import Date from "./Date";
import Weather from "./Weather";
import City from "./City";
import Forecast from "./Forecast";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="weatherApp">
      <Search />
      <City name="Houston" />
      <Date />
      <Weather
        description="clear sky"
        precip={2}
        wind={1}
        humidity={18}
      />
      <Forecast day="Sun" temp={82} maxTemp={86} minTemp={71} />
      <Footer />
    </div>
  );
}
