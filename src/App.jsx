import { useState } from 'react'
import './App.css'
import { Link } from 'react-router-dom'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
function App() {

  return (
    <Router basename={import.meta.env.BASE_URL}>
      <Navbar /> 
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </Router>
  )

}

export default App
