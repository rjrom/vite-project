// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import scrimba from "./images/dark-logo.svg"
// import pizza from "./images/png-clipart-pizza-pizza.png"
// import './App.css'
// import pizza2 from "./images/png-clipart-pizza-pizza-removebg-preview.png"
import Main from "./components/Main.jsx"
import Navbar from "./components/Navbar.jsx"
import './App.css'

function App() {
  return (
    <div className='container'>
      <Navbar />
      <Main />
    </div>
  )
}

export default App
