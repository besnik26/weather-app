import TopButtons from "./components/TopButtons"
import "./App.css"
import Input from "./components/Input"
import TimeAndLocation from "./components/TimeAndLocation"

function App() {

  return (
    <div className="main">
      <div className="container">
        <TopButtons/>
        <Input/>
        <TimeAndLocation/>
      </div>
    </div>
  )
}

export default App
