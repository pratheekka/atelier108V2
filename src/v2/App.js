import React from 'react'

import HomePage from './container/HomePage'
import About from './container/About'
import WoW from './container/WoW'
import Team from './container/Team'
import Gallery from './container/Gallery'
import Contact from './container/Contact'

import './App.css'
import './font-awesome/css/font-awesome.min.css'

function App () {
  return <div className="App">
    <HomePage />
    <About />
    <WoW />
    <Gallery />
    <Team />
    <Contact />
  </div>
}

export default App
