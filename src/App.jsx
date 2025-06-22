import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import './App.css'
import Base from "./components/Base"
import Gun from "./components/Gun"
import MemoryGame from "./components/MemoryGame"
import FileExplorer from "./components/FileExplorer"
import Pagination from "./components/Pagination"
import CountDown from "./components/CountdownTimer"


function App() {
 

  return (
    <Router>
      <Routes>
        <Route path="/"  element={<Base/>} />
        <Route path="/gun"  element={<Gun/>} />
        <Route path="/grid"  element={<MemoryGame/>} />
         <Route path="/file"  element={<FileExplorer/>} />
         <Route path="/page"  element={<Pagination/>} />
          <Route path="/timer"  element={<CountDown/>} />      
      </Routes>
    </Router>
  )
}

export default App
