import TopButtons from "./components/TopButtons"
import "./App.css"
import Input from "./components/Input"
import TimeAndLocation from "./components/TimeAndLocation"
import TempAndDetails from "./components/TempAndDetails"
import Forecast from "./components/Forecast"
import getFormattedWeatherData from "./services/weatherService"

function App() {

  const getWeather = async() => {
    const data = await getFormattedWeatherData({q: 'berlin'})
    console.log(data);
  }

  getWeather();

  return (
    <div className="main">
      <div className="container">
        <TopButtons/>
        <Input/>
        <TimeAndLocation/>
        <TempAndDetails/>
        <Forecast/>
        <Forecast/>
      </div>
    </div>
  )
}

export default App
