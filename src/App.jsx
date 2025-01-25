import EOnChange from "./components/EOnChange"
import ColorPicker from "./ColorPicker"
import CounterUpdaterFunction from "./components/CounterUpdaterFunction"
function App() {


  return (
    <>
      <div>
<CounterUpdaterFunction/>
        <ColorPicker/>

        <hr /><hr /><hr />
    <EOnChange></EOnChange>
        
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
