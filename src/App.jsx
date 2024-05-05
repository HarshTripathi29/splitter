import './App.css'
import Navbar from './Components/Navbar'
import Activity from './Pages/Activity'
import Friends from './Pages/Friends'
import Groups from './Pages/Groups'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Profile from './Pages/Profile'
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
        <Route path="/friends" element=<Friends/>/>
        <Route path="/activity" element=<Activity/>/>
        <Route path="/profile" element=<Profile/>/>
      </Routes>
    </Router>
    </>
  )
}

export default App
