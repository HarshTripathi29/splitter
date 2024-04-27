import './App.css'
import Navbar from './Components/Navbar'
import Groups from './Pages/Groups'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Register from './Pages/Register'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  
  return (
    <>
    <Router>
    <Navbar/>
      <Routes>
        <Route path="/" element=<Home/>/>
        <Route path="/Register" element=<Register/>/>
        <Route path="/Login" element=<Login/>/>
        <Route path="/groups" element=<Groups/>/>
      </Routes>
    </Router>
    </>
  )
}

export default App
