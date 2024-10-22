import TopButtons from "./components/TopButtons"
import "./App.css"
import Input from "./components/Input"
import TimeAndLocation from "./components/TimeAndLocation"
import TempAndDetails from "./components/TempAndDetails"
import Forecast from "./components/Forecast"
import getFormattedWeatherData from "./services/weatherService"
import { useEffect, useState } from "react"

function App() {
  const [query, setQuery] = useState({ q: "london" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);


  const getWeather = async() => {
    await getFormattedWeatherData({q: "ahmedabad"}).then((data)=>{
      setWeather(data)
    })
    // console.log(data);
  };

  useEffect(() => {
    getWeather()
  }, [query,units])

  getWeather();

  return (
    <div className="main">
      <div className="container">
        <TopButtons/>
        <Input/>
        {weather && (
          <>
            <TimeAndLocation weather={weather} />
            <TempAndDetails weather={weather} />
            <Forecast/>
            <Forecast/>
          </>
        )}
      </div>
    </div>
  )
}

export default App
