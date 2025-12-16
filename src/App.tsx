import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import SnowfallAnimation from './components/SnowfallAnimation'
import Home from './pages/Home'
import VacationPage from './pages/VacationPage'

function App() {
  return (
    <Router>
      <SnowfallAnimation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vacaciones" element={<VacationPage />} />
      </Routes>
    </Router>
  )
}

export default App
