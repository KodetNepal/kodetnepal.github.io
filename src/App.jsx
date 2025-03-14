import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Services from './pages/Services'
import FeedBack from './pages/FeedBack'
function App() {

  return (
    <Router basename={import.meta.env.BASE_URL}>
      <Navbar /> 
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/services' element={<Services/>}></Route>
        <Route path='/feedback' element={<FeedBack/>}></Route>
      </Routes>
    </Router>
  )

}

export default App
