import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LandignPage from './pages/landingPage/LandignPage'
import Header from './components/header/Header'

function App() {

  return (
    <body className='darkomode'>
      <Header />
      <LandignPage />
      
    </body>
  )
}

export default App
