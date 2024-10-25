import TopButtons from "./components/TopButtons"
import "./App.css"
import Input from "./components/Input"
import TimeAndLocation from "./components/TimeAndLocation"
import TempAndDetails from "./components/TempAndDetails"
import Forecast from "./components/Forecast"
import getFormattedWeatherData from "./services/weatherService"
import { useEffect, useState } from "react"
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

function capitalizeFirstLetter(string){
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function App() {
  const [query, setQuery] = useState({ q: "prishtina" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);


  const getWeather = async() => {
    const message = query.q ? query.q : "current location";
    toast.info(`Fetching weather data for ${capitalizeFirstLetter(message)}`)

    await getFormattedWeatherData({...query, units}).then((data)=>{
      toast.success(`Fetched weather data for ${data.name}, ${data.country}`)
      setWeather(data)
    })
  };

  useEffect(() => {
    getWeather()
  }, [query,units])

  const background = () => {
    if(!weather) return "main-cold"
    const threshold = units === "metric" ? 20 : 60;
    if (weather.temp <= threshold) return "main-cold";
    return "main-hot"

  }

  return (
    <div className={background()}>
      <div className="container">
        <TopButtons setQuery = {setQuery}/>
        <Input setQuery = {setQuery} setUnits = {setUnits}/>
        {weather && (
          <>
            <TimeAndLocation weather={weather} />
            <TempAndDetails weather={weather}  units = {units}/>
            <Forecast title="3 hour step forecast" data={weather.hourly}/>
            <Forecast title="Daily forecast" data={weather.daily} />
          </>
        )}
      </div>
      <ToastContainer autoClose={2500} hideProgressBar={true} theme="colored" />
    </div>
  )
}

export default App
