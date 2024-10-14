import TopButtons from "./components/TopButtons"
import "./App.css"
import Input from "./components/Input"
import TimeAndLocation from "./components/TimeAndLocation"
import TempAndDetails from "./components/TempAndDetails"

function App() {

  return (
    <div className="main">
      <div className="container">
        <TopButtons/>
        <Input/>
        <TimeAndLocation/>
        <TempAndDetails/>
      </div>
    </div>
  )
}

export default App
