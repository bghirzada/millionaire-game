import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import GamePage from './pages/GamePage'
import LoginPage from './pages/LoginPage'
import GameProvider from './context/GameProvider'

const App = () => {
  useEffect(() => {
    console.log('app');

  }, [])
  return (
    <div className="absolute w-screen h-screen bg-fixed bg-no-repeat bg-cover bg-center bg-image -z-10">
      <GameProvider >
        <Router>
          <Routes>
            <Route path='/' element={<LoginPage />} />
            <Route path='/game' element={<GamePage />} />
          </Routes>
        </Router>
      </GameProvider>
    </div>
  )
}

export default App