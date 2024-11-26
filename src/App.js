import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import GamePage from './pages/GamePage'
import LoginPage from './pages/LoginPage'

const App = () => {
  return (
    <div className="absolute w-screen h-screen bg-fixed bg-no-repeat bg-cover bg-center bg-image -z-10">
      <Router>
        <Routes>
          <Route path='/' element={<LoginPage />} />
          <Route path='/game' element={<GamePage />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App