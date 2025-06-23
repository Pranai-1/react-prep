import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import './App.css'
import Base from "./components/Base"
import Gun from "./components/Gun"
import MemoryGame from "./components/MemoryGame"
import FileExplorer from "./components/FileExplorer"
import Pagination from "./components/Pagination"
import CountDown from "./components/CountdownTimer"
import Trafficlights from "./components/Trafficlights"
import Login from "./components/Login"
import Reducer from "./components/Reducer"


function App() {
 

  return (
     <Reducer>
    <Router>
      <Routes>
       
         <Route path="/login"  element={<Login/>} />
        <Route path="/"  element={<Base/>} />
        <Route path="/gun"  element={<Gun/>} />
        <Route path="/grid"  element={<MemoryGame/>} />
         <Route path="/file"  element={<FileExplorer/>} />
         <Route path="/page"  element={<Pagination/>} />
          <Route path="/timer"  element={<CountDown/>} />      
           <Route path="/lights"  element={<Trafficlights/>} />   
           
      </Routes>
    </Router>
     </Reducer>  
  )
}

export default App
