import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import './App.css'
import Base from "./components/Base"
import Gun from "./components/Gun"

function App() {
 

  return (
    <Router>
      <Routes>
        <Route path="/"  element={<Base/>} />
        <Route path="/gun"  element={<Gun/>} />
      </Routes>
    </Router>
  )
}

export default App
